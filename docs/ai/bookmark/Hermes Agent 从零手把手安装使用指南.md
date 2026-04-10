---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/aehyok/status/2041677992586571985"
created: 2026-04-08
---
Hermes Agent 是 Nous Research 开源的自改进 AI Agent 框架，目前已经拥有31.3K star。而且目前可以通过 OAuth 直连 Claude，不像OpenClaw还需要中间一层联入Claude Code，体验略差。至于Claude 后面会不会也封禁，目前尚不得知了。

如果你想了解一下它是什么可以看看下面这个链接

> 9小时

项目开源地址：

[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

## 1、安装

[https://hermes-agent.nousresearch.com/docs/getting-started/quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)

官网上有安装命令，你也可以直接复制我下面的指令。

首先在电脑上打开终端命令行工具，输入如下命令

> 注意目前命令支持：Linux、macOS、WSL2（Windows 原生好像还不支持），尽量还要确保本设备Git已可以使用，可以使用git verion命令进行检查

```bash
## 检查git是否可用
git version

## 打开终端输入如下命令
bashcurl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

这里我看了一下要安装的东西不少，如果网络不好，可能要多等待一会儿。

> 比如 Python 、Node.js、ffmpeg 等所有依赖、仓库克隆，并创建全局 hermes 命令

![图像](https://pbs.twimg.com/media/HFVdiLFa8AMC0W3?format=jpg&name=large)

安装完毕之后就可以进行设置了

![图像](https://pbs.twimg.com/media/HFVfkR_bwAAlb0W?format=jpg&name=large)

这里我选择Quick setup模式

![图像](https://pbs.twimg.com/media/HFVgF2EaoAArp8j?format=jpg&name=large)

然后进行选择大模型,你可以直接选择Claude、OpenAI等，这里我直接选择OpenAI Codex，这里选择完毕，它直接读取我原来本地的OpenAI Codex的授权配置了，有点方便。

![图像](https://pbs.twimg.com/media/HFVifYta8AAme1M?format=jpg&name=large)

这里如果选择第二个跳过，然后可以直接终端命令行中输入命令hermes，就可以看到如下界面，直接在命令行中进行聊天了。

说明我们的Hermes初步安装完毕。

![图像](https://pbs.twimg.com/media/HFVtLVgaYAAIQz6?format=jpg&name=large)

如果你想继续配置聊天机器人可以重新运行命令

```bash
hermes gateway setup
```

同样会跳转到配置聊天机器人的相关配置

## 2、配置聊天机器人

上面如果我们没有选择Skip，选择Set up messaging now, 也就是对接IM 聊天工具

![图像](https://pbs.twimg.com/media/HFVjZd4boAAZUlW?format=jpg&name=large)

这里我就选择最简单的Telegram来进行配对, 看下图的1234就知道需要先到Telegram进行配置了。

设置完毕再回来设置这个Bot token

![图像](https://pbs.twimg.com/media/HFVnWjAa8AMJC4N?format=jpg&name=large)

根据上面这个截图的四部开始

![图像](https://pbs.twimg.com/media/HFVoKRBa0AAEYOG?format=jpg&name=large)

1、打开Telegram，搜索BotFather

2、输入/newbot，设置两个name

将我上面标红的HTTP API也就是 Bot token 复制到命令行工具中

> 注意粘贴后是看不到消息的，直接回车就可以了

![图像](https://pbs.twimg.com/media/HFVqp96a8AA01Ud?format=jpg&name=large)

这个 user IDs就是前面HTTP API 前面的数字部分，同样复制即可

进入下一步

![图像](https://pbs.twimg.com/media/HFVq-hWa8AIm7W6?format=jpg&name=large)

安装过OpenClaw的可能都熟悉就是要进行配对了

那接下来回到Telegram 工具

![图像](https://pbs.twimg.com/media/HFVuEFEa8AAJR8G?format=jpg&name=large)

点击箭头的链接跳转到聊天机器人

![图像](https://pbs.twimg.com/media/HFVuTUDaAAAttDf?format=jpg&name=large)

然后复制上面的命令到终端命令行中执行，执行完毕就可以聊天了

![图像](https://pbs.twimg.com/media/HFVzq3qa8AEJbX5?format=jpg&name=large)

## 3、其他机器人配置

其他聊天机器人同理跟OpenClaw其实没什么区别，详情可以直接参考官网的安装指南，像飞书、企业微信、叮叮等都已支持

[https://hermes-agent.nousresearch.com/docs/user-guide/messaging/](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)

## 4、命令行指南

可直接命令行输入hermes -h查看指南

![图像](https://pbs.twimg.com/media/HFV1uysa8AAn2DU?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HFV13CIa8AA7Fuw?format=jpg&name=large)

## 5、最后

可以使用命令 hermes doctor 进行检查

![图像](https://pbs.twimg.com/media/HFV2rouaEAA9cHa?format=jpg&name=large)

还支持从OpenClaw进行迁移配置，很多命令其实跟OpenClaw大同小异。后续将会继续分享关于hermes-agent的精彩内容。