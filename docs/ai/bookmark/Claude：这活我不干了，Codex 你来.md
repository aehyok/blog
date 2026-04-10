---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/xiangxiang103/status/2038869749036392824"
created: 2026-03-31
---
> 本文记录了在 Claude Code 中安装 OpenAI Codex 插件、完成配置并实测编程任务委托的完整过程。**测试环境：** Windows 10，Mac/Linux 用户路径格式会有所不同（如 ~/.claude/ 而非 C:/Users/你的用户名/.claude/），其余步骤一致。

## 背景

**OpenAI Codex CLI** 是 OpenAI 官方发布的命令行编程工具，底层使用 GPT系列模型，专为代码任务优化，支持读写本地文件、执行命令、调试代码等。

OpenAI 为 Claude Code 发布了 codex-plugin-cc 插件，允许你在 Claude Code 会话中直接将编程任务委托给本地运行的 Codex CLI，实现 **Claude + Codex 双模型协同工作**。

什么时候用 Codex，什么时候直接用 Claude？

![图像](https://pbs.twimg.com/media/HEuEyAvaoAAt6wO?format=png&name=large)

费用说明

使用 codex:rescue 会调用 **OpenAI API**，按实际 token 消耗计费，费率取决于所用模型。与 Claude Code 的 Anthropic 额度**相互独立**，需要单独的 OpenAI API Key 或账号余额。

## 前置条件

- 已安装 Claude Code CLI
- 已安装 Node.js（v18+）和 npm
- 已有 OpenAI 账号（需要 API 额度）

## 第一步：添加插件市场源

在 Claude Code 中运行：

```text
/plugin marketplace add openai/codex-plugin-cc
```

**预期输出：**

```text
Successfully added marketplace: openai-codex
```

这一步将 OpenAI 官方的插件市场源添加到 Claude Code 中。

## 第二步：安装 Codex 插件

```text
/plugin install codex@openai-codex
```

**预期输出：**

```text
✓ Installed codex. Run /reload-plugins to apply.
```

## 第三步：重载插件

```text
/reload-plugins
```

**预期输出：**

```text
Reloaded: 5 plugins · 7 skills · 6 agents · 3 hooks · 1 plugin MCP server · 0 plugin LSP servers
```

重载后，Codex 相关技能（codex:setup、codex:rescue 等）才会生效。

## 第四步：检查 Codex 环境

```text
/codex:setup
```

![图像](https://pbs.twimg.com/media/HEt4_-ebMAAU_0T?format=jpg&name=large)

这个命令会自动检测本地环境，输出类似：

```text
{
  "ready": true,
  "node": { "available": true, "detail": "v24.12.0" },
  "npm":  { "available": true, "detail": "11.6.2" },
  "codex": { "available": true, "detail": "codex-cli 0.117.0; advanced runtime available" },
  "auth": { "available": true, "loggedIn": true, "detail": "authenticated" }
}
```

**各字段含义：**

![图像](https://pbs.twimg.com/media/HEt5MRjbMAAquyf?format=png&name=large)

**如果 Codex CLI 未安装**

/codex:setup 会提示你安装，选择 **Install Codex (Recommended)**，它会自动运行：

```text
npm install -g @openai/codex
```

**如果未登录**

安装完成后在终端运行：

```text
codex login
```

完成 OpenAI 授权后重新运行 /codex:setup 验证。

**可选：开启 Review Gate**

/codex:setup 输出里有一条可选建议：

```text
/codex:setup --enable-review-gate
```

开启后，每次 Codex 执行任务前会**强制要求人工审核**，确认无误再继续。适合对代码修改比较谨慎、或在重要项目中使用的场景。不开启则默认自动执行。

## 第五步：实测——委托 Codex 编写代码

使用方式

安装完成后，**直接用自然语言描述任务**即可，不需要手动输入 /codex:rescue。Claude 会自动判断任务复杂度并决定是否调用 Codex。

你也可以在描述任务时明确说"交给 Codex 处理"，Claude 会立即委托。

**示例任务：**

```text
帮我写一个 Python 脚本，读取 CSV 文件并统计每列的均值，交给 Codex 处理
```

**Codex 输出结果：**

Codex 生成了一个完整的 Python 脚本 csv\_stats.py，包含命令行参数解析、数值列自动识别、UTF-8/GBK 编码兼容、以及多种异常处理。

![图像](https://pbs.twimg.com/media/HEt6OilboAAqkqL?format=jpg&name=large)

**运行效果：**

```text
文件：data.csv
共找到 3 列数值列

列名            均值
---------------------------
age            34.2500
salary      75000.0000
score           88.5000
```

## 最佳实践：让 Claude Review Codex 的输出

Codex 是独立模型，Claude 不参与代码生成过程。建议每次委托完成后，追加一句：

```text
帮我 review 一下刚才 Codex 生成的代码
```

Claude 会从逻辑正确性、异常处理、安全性等角度把关，再由你决定是否使用。

**以本次示例为例，review 结论：**

- 逻辑正确，均值计算和数值列识别无误
- 异常处理完整，覆盖文件不存在、无权限、编码错误、空文件等场景
- 编码兼容性好，UTF-8 + GBK 自动回退，适合 Windows 环境
- 无安全问题，只读文件操作，无命令注入风险
- 可直接使用

这一步不是必须的，但养成习惯后能有效避免 Codex 输出质量不稳定带来的问题。

## 工作流程解析

```text
你的自然语言需求
       ↓
   Claude 分析（自动判断是否委托）
       ↓
  调用 codex:rescue 技能
       ↓
  codex-companion.mjs（本地脚本）
       ↓
  OpenAI Codex CLI（本地运行）
       ↓
  GPT系列模型处理（消耗 OpenAI 额度）
       ↓
  生成代码文件 + 返回结果
```

关键点：Codex CLI **在本地运行**，通过你的 OpenAI API Key 调用云端模型，结果文件直接写入当前工作目录。

## 可用技能一览

安装插件后，Claude Code 新增以下技能：

![图像](https://pbs.twimg.com/media/HEt7v63aAAAwdwz?format=png&name=large)

**codex:rescue 支持的参数**

![图像](https://pbs.twimg.com/media/HEt75QEasAAkPnn?format=png&name=large)

## 常见问题

**Q：/codex:setup 运行后提示 Codex 未安装怎么办？**

选择 Install Codex (Recommended)，插件会自动运行 npm install -g [@openai/codex](https://x.com/@openai/codex)。

**Q：安装后提示未认证怎么办？**

在系统终端运行 codex login，完成 OpenAI 账号授权。

**Q：任务结束后想继续追问 Codex 怎么办？**

再次描述需求，如果检测到可恢复的会话，Claude 会询问是否继续当前线程还是开启新线程。

**Q：用了 Codex 会产生 OpenAI 费用吗？**

是的。每次调用 codex:rescue 都会消耗 OpenAI API 额度，与 Claude Code 的 Anthropic 账单独立计算。建议在 OpenAI 控制台设置用量限额。

**Q：Mac/Linux 上路径不一样怎么办？**

本文路径示例基于 Windows。Mac/Linux 上插件缓存路径为 ~/.claude/plugins/cache/，其余命令完全一致。

## 💡 下一步行动

看完教程后，建议你现在就在终端运行 /codex:setup 检查一下环境。

配好后找个小任务试试手，感受下 Claude + Codex 双模型协同的效率。

遇到问题欢迎在评论区交流，我会持续更新踩坑记录。