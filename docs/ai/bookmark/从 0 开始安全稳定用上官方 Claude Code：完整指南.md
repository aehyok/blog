---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/LawrenceW_Zen/status/2039194696740937974"
created: 2026-04-10
---
![图像](https://pbs.twimg.com/media/HEyhZyXakAA_Ac1?format=jpg&name=large)

**本文目标：一篇文章，带你从零开始，安全、稳定、完整地用上官方 Claude Code。**

**本教程适用系统：Mac、Linux、Windows。**

之前我分三篇写了这个系列，很多朋友反馈说希望有一个完整版，从头到尾一次看完。这篇就是整合版，把完整路径串成一条线。

整条链路分四步：

1. **先跑起来** — 用最低成本把 Claude Code 装好、跑通
2. **搭纯净网络** — VPS + 住宅 IP，解决网络环境问题
3. **穿上防弹衣** — 用 AdsPower 指纹浏览器管理 Claude 账号
4. **正式订阅** — Apple 礼品卡完成官方订阅

废话不多说，直接开始。

## 第一部分：先跑起来 — 用最低成本把 Claude Code 装好、跑通

**敲重点：前排提醒！**

如果你已经有 Codex 正在使用，可以忽略下面的安装过程，直接让 Codex 协助你安装好 Claude Code，然后直接进入第二部分。

安装开始部分没有改动请看原来的文章

> 3月2日

## 第二部分：搭建纯净网络环境 — VPS + 住宅 IP

> 继续前排提醒！如果你已经有 Codex，可以直接将下面的提示词给 Codex，帮你完成 VPS + 住宅 IP 的配置。

上一部分我们先把 Claude Code 跑通了，为什么没直接写官方订阅？

因为 Claude 官方订阅对网络环境要求更高：固定、稳定、可控，缺一条都容易翻车，被官方封号。

这一部分我们要用 AI 时代的办法：一句提示词，让 Claude Code 完成你的 VPS + 住宅 IP 配置。

> 说到底出海最好的方案还是自己搭 VPS，但 99% 的人都被搭建难度劝退。现在有了 AI，自己搭 VPS 已经是不二之选。搞起来吧！

**你买到VPS 跟 IP 资源后，通常会有这些信息：**

- VPS：IP、root 初始密码（或初始登录方式）
- 住宅出口：IP、用户名、密码

## 开始配置

> 之前文章的提示词我又优化了一版，会更好用，更安全。

**直接复制评论区的提示词内容给 Claude Code，把里面的占位信息替换成你自己的，然后一直确认即可。**

搭建过程中，有一个关键节点需要暂停：必须手动测试无密码密钥登录是否成功。命令会由 Claude Code 输出到终端，你直接复制粘贴即可。

Claude Code 搭建完 VPS 的所有服务后，会直接调用本地代理软件。

执行结束之后，会打印一个汇总信息，大家根据需要复制保存一下，或者让 Claude Code 给你存好档。

![图像](https://pbs.twimg.com/media/HEycb41awAAqLWm?format=jpg&name=large)

## 测试搭建结果

根据最终 Claude Code 输出的验证方法，复制命令到终端测试

> curl -x http://127.0.0.1:7897 [https://ipinfo.io](https://ipinfo.io/)

![图像](https://pbs.twimg.com/media/HEyciDUbsAAIU2r?format=jpg&name=large)

## 第三部分：给你的账号穿上马甲 — 指纹浏览器

网络环境搞定了，但还差一层保护：你的浏览器环境。

光有干净的 IP 还不够。Claude 不只看你的 IP，还会看你的浏览器环境。

很多人被封号、被跳验证，不是因为 IP 有问题，而是因为浏览器指纹暴露了你的真实环境——Canvas、WebGL、时区、语言这些特征，每次登录都不一样，反而更容易触发风控。

为了更安全，我用了指纹浏览器 AdsPower，给 Claude 账号创建一个固定的、干净的浏览器环境。

## 什么是指纹浏览器

一句话：让你拥有一个**固定的、干净的、独立的浏览器环境**。

你可以把它理解成：在你的电脑上开了个虚拟电脑，有自己的浏览器指纹、Cookie、代理配置，跟你的真实机器完全隔离。

它的信息**固定不变**。对网站来说，你就是一个每天都从同一台电脑、同一个地方登录的真实用户。这比每次指纹都变的情况更安全。

## 实操：用 AdsPower 为 Claude 账号创建专属环境

AdsPower 是老牌的指纹浏览器软件，稳定好用，我最近开通了 Max Plan 就开始用这个登录了。另外，免费版个人使用完全够，一个人，同时拥有，也就一两个号。

后面如果你有多个账号需要管理，按同样的方式加就行。

**1\. 下载安装 AdsPower**

前往 [下载安装 AdsPower](https://www.adspower.net/share/z03P9q) ：支持 Mac、Windows、Linux。

注册账号后，进入设置，找到 API Key 并复制保存。后面如果你想用 Claude Code 自动化配置（高级玩法），会用到这个 Key。

![图像](https://pbs.twimg.com/media/HEyc_H4a8AAUuSQ?format=jpg&name=large)

**2\. 创建 Profile**

选择左边的「分组管理」，右上角的创建分组，然后输入分组名称，新建分组

![图像](https://pbs.twimg.com/media/HEydDTBakAAKewe?format=jpg&name=large)

左上角新建浏览器 Profile，输入名称，选择分组「Claude 账号」

![图像](https://pbs.twimg.com/media/HEydGbObUAA0rPZ?format=jpg&name=large)

代理信息选择直连。因为本地已经搭建好代理了，流量会通过本地代理客户端统一走代理（如果你开了 TUN 模式，选直连即可；如果没开 TUN，后面第 4 步会教你手动填代理端口）。

![图像](https://pbs.twimg.com/media/HEydWdVakAAkXcl?format=jpg&name=large)

**3\. 配置浏览器指纹**

创建新建时，重点配置这几项：

- **UA 系统**：选 Mac OS X（跟你的实际系统保持一致更自然）
- **Canvas 指纹**：开启噪声
- **WebGL 指纹**：开启噪声
- **Audio 指纹**：开启噪声
- **WebRTC**：禁用（防止泄露真实 IP）
- **端口扫描保护**：开启

这些配置的目的是：Profile 有独立的、固定的指纹，但指纹本身看起来像一个真实用户。 如图，确保都是打开的。

![图像](https://pbs.twimg.com/media/HEydQ-UaIAEQTvv?format=jpg&name=large)

**4\. 配置代理 — 这里有个建议**

如果你就一个住宅 IP 跟 VPS：统一走本地代理客户端（比如 Clash Verge Rev），在代理客户端的规则里做分流。我们都是个人用户，号也不多，这样最方便了

Profile 的代理填 127.0.0.1:7897（Clash 的本地端口），然后在 Clash 的规则里配好哪些域名走住宅、哪些走普通代理。前面第二部分的提示词已经帮你配好了这些分流规则。

这样做的好处：

1. **集中管理**：改代理规则只需要动 Clash，不用改 Profile
2. **敏感信息不散落**：住宅 IP 的账号密码只存在代理客户端里，不用填到 AdsPower
3. **灵活切换**：想换节点直接在 Clash 里切，Profile 自动生效

> AdsPower 打开后的**启动页会显示一个 IP 检测结果，这个结果可能不准**（显示你的真实 IP）。不用慌，在浏览器里访问 [httpbin.org/ip](https://httpbin.org/ip) 验证，实际流量是走代理的。

配置完，之后点击确定。

![图像](https://pbs.twimg.com/media/HEydvGbaoAEMdrw?format=jpg&name=large)

**5\. 打开浏览器，测试效果**

新建浏览器之后，左边点击「环境管理」，右边就能看到刚才新建的浏览器 —— 「Claude AI 账号」

![图像](https://pbs.twimg.com/media/HEydz5WbQAA4H3X?format=jpg&name=large)

点击"打开"，启动这个 Profile 的浏览器。会打开两个页面，第一个页面如果显示的是国内 IP 不要慌没关系。

![图像](https://pbs.twimg.com/media/HEyd3IOacAAQJqP?format=jpg&name=large)

我们直接在浏览器里面访问 IP 检测网站即可，访问 [httpbin.org/ip](https://httpbin.org/ip)，确认出口 IP 是你的代理 IP，不是真实 IP。

![图像](https://pbs.twimg.com/media/HEyd6kOasAEOWM-?format=jpg&name=large)

然后访问 Claude 官网，一般主要住宅 IP 干净，你如果新注册的时候，应该会发现不再跳验证了。

这次登录成功之后，下次再打开这个 Profile，之前的登录态还在，不用重新登录。

这就是指纹浏览器的核心价值：**给你的账号一个稳定、一致、干净的家。**

**Claude Code 登录**

> 如果没有账号第一次使用，注册账号也是要自己在指纹浏览器注册。

> 如果真的跳了手机验证，我建议用接码平台，这里不详细说了，如果大家有兴趣就单独写一个简单的注册教程。

现在你需要在 AdsPower 的浏览器里完成 Claude 的首次登录。

这里有个重要的细节：

当你在终端执行 claude login 的时候，Claude Code 会自动跳转到你的**系统默认浏览器**。但你不能让它跳到日常浏览器——那样就白配了。

正确做法：

1. 在终端执行 claude login
2. **不要点自动打开的浏览器页面**
3. 复制终端里打印出来的登录 URL
4. 打开 AdsPower，启动你的"Claude 主号"Profile
5. 把 URL 粘贴到 AdsPower 的浏览器地址栏里
6. 在这个指纹浏览器里完成登录

看下面的图片步骤

![图像](https://pbs.twimg.com/media/HEyeZMFbcAAH5R_?format=jpg&name=large)

弹出来浏览器，直接关闭，回到终端复制链接

![图像](https://pbs.twimg.com/media/HEyecJHbIAAx_h4?format=jpg&name=large)

粘贴到指纹浏览器

![图像](https://pbs.twimg.com/media/HEyef8DbQAAt9Ep?format=jpg&name=large)

登录你的账号，我是 Google 账号注册的，直接登录了。

![图像](https://pbs.twimg.com/media/HEyejUmboAAH2JN?format=jpg&name=large)

登录成功，你的 Claude 账号**从现在开始**就在指纹浏览器的保护下了

![图像](https://pbs.twimg.com/media/HEyellDbsAAcdiq?format=jpg&name=large)

以后日常使用 Claude 网页端、登录、改设置，**都走 AdsPower 的 Profile，不要用裸浏览器**。**不管多少个账号都这样操作**。

## 第四部分：正式订阅官方 Claude

网络环境搞定了，现在可以订阅了。

前面最麻烦的部分其实已经搞完了：

- 第一部分，先把 Claude Code 跑起来，低成本先入门。
- 第二部分，再把 VPS + 住宅 IP 这条链路搭好，把环境稳定性补上。

走到这里，整个闭环只差订阅了。

**用一种尽量简单、尽量稳妥的方式，完成官方订阅。**

这段时间 Claude 封号越来越多。有好的环境条件，再走正规订阅，整体会稳不少。

本部分主要就做四件事：

1. 准备一个美区 Apple ID
2. 用 支付宝 购买官方 Apple 礼品卡
3. 把礼品卡兑换到账号里
4. 下载并登录 Claude AI 应用，完成套餐订阅

整个流程不复杂，真正麻烦的通常只有第一次。

## 第一步：准备一个美区 Apple ID

这个步骤我就不展开细写了，因为外面已经有很多成熟教程。

你可以直接参考这篇帖子，作者是 [@lonely](https://x.com/@lonely)：

[https://x.com/Lonely\_\_MH/status/2031540200082649090?s=20](https://x.com/Lonely__MH/status/2031540200082649090?s=20)

## 第二步：用支付宝购买官方 Apple 礼品卡

我的流程很简单：

- 打开 支付宝
- 左上角切换地区
- 选择 国际/港澳台，搜索 旧金山
- 回到首页之后，选择 礼品卡
- 在礼品卡页面直接找 Apple 礼品卡
- 输入你需要的金额

这里有个细节一定要注意：

**你 Apple ID 的账单地区，最好提前选成免税地区。**

因为你最终支付的是税后金额。如果账单地区本身带税，实际扣款会比你想的多一点。

如果你是第一次购买，通常还会遇到几步额外认证：

- 上传身份证正反面
- 人脸识别
- 可能会弹出一个会员开通页面

> 我自己当时也碰到了那个弹窗，不点基本过不去，所以顺手点了。至少我当时没有被额外收费，但这一步你自己看清页面信息再操作。

下面是对应界面的操作步骤：

![图像](https://pbs.twimg.com/media/HEyewgWbQAAwMUS?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HEye90Wb0AA0wIe?format=jpg&name=large)

## 第三步：兑换礼品卡

- 复制购买成功后的礼品卡兑换码
- 打开 App Store
- 点击右上角头像
- 进入 兑换礼品卡
- 选择 手动输入礼品卡代码
- 把刚才复制的代码粘贴进去

有时候系统还会附送一些额外权益。像我当时就弹了一个免费的 Apple TV 试用，但我没要。这个不是重点，看到也不用惊讶。

对应界面如下：

![图像](https://pbs.twimg.com/media/HEyfBsmbQAAz8wA?format=jpg&name=large)

## 第四步：下载并登录 Claude AI，完成套餐订阅

- 在 App Store 搜索 Claude AI
- 下载应用
- 打开应用并登录你的账号
- 登录成功后，点击左上角
- 打开左侧边栏
- 点击左下角你的账户名
- 进入套餐订阅页面

按照你自己的需求选套餐即可。

我当时看到的大概套餐信息是：

> Pro Plan：20 美元 Max Plan 5x：125 美元 Max Plan 20x：245 美元

以上价格以 App 内实际显示为准，可能会有调整。

我这里因为已经订阅过了，所以没办法完整重演支付过程，但路径就是这条，不会太复杂。

相关界面如下：

![图像](https://pbs.twimg.com/media/HEyfEG2a4AAskAA?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HEyfGPvacAAnoLf?format=jpg&name=large)

## 最后

恭喜你。

你现在拥有的是：

- 可用的 Claude Code
- 稳定的网络环境
- 安全的浏览器环境
- 相对安全、方便的订阅路径
- 官方原生模型的直接体验

往期 Agent Team 实战教程系列

> 3月23日

> 3月26日