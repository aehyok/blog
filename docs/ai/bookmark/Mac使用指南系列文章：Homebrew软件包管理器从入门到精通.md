---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/aehyok/status/2042527221332508866"
created: 2026-04-10
---
![图像](https://pbs.twimg.com/media/HFeko9SaQAAatUH?format=jpg&name=large)

这是这个系列第一篇文章，我会把自己最近从零开始梳理，整理 Mac 使用过程中的经验与步骤记录下来，作为留存与分享。如果拿到一款新的Mac，我什么都没动，看了大量的装机必备指南后，我首先能想到的就是来安装Homebrew。

开篇帖子在这里

> 4月7日
> 
> 去他妈的window，我受够你了。 问问大伙们，拿到自己mac后你们是怎么开始的？ 我是这么干的： 1、连接好WIFI 2、浏览器下载微信 3、通过微信传输小飞机安装 4、打开小飞机网址导入订阅链接 5、开启进入新世纪的大门

[Homebrew](https://brew.sh/)— macOS 的包管理器，一切的起点，无论是命令行工具还是图形化应用，都可以用它安装，不用你自己去下载安装包了。后面你会看到大量 brew install，没它寸步难行。

**为什么大家推荐用 Homebrew？**

- **安装方便**：一条命令就能装好
- **管理省心**：更新、卸载都很方便
- **会自动补齐需要的东西**：缺什么依赖，它会帮你一起装
- **卸载更干净**：不容易留下乱七八糟的文件
- **软件很多**：常见开发工具基本都能装

## 1、安装Homebrew前置条件

这玩意不到 2GB，装完你就有了 git、clang、make 这些基础工具。和完整的 Xcode（30GB 起步）不是一回事，别搞混了。

打开终端,**按下 Cmd + 空格，输入 Terminal（终端），回车打开。**

```bash
xcode-select --install
```

弹出对话框中点击“安装”

验证安装成功

```bash
xcode-select -p
```

如果输出类似下面的路径，就说明安装成功了

```shell
/Library/Developer/CommandLineTools
```

## 2、安装Homebrew

在终端中粘贴以下命令并回车，这个命令官网也是有的直接复制即可：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"Info这
```

关键一步：配置PATH环境变量

上面命令安装完毕之后，会提示如下，意思就是复制红色箭头命令继续在命令行中执行，配置PATH环境变量

![图像](https://pbs.twimg.com/media/HE_sGkMaoAI6vvy?format=jpg&name=large)

验证安装是否成功

```bash
## 验证版本，上面截图也使用了brew help 可以看到指令列表
brew --version
```

## 3、常见问题

**\- command not found： brew 没有配置PATH，执行命令**

**\- 安装卡在下载很慢： 网络问题（github访问慢），切换网络**

> 重要原则：永远不要用 sudo brew 来安装软件。Homebrew 设计上就不需要管理员权限来安装软件包。如果某个操作提示需要 sudo，说明环境配置有问题，先用 brew doctor 诊断。

## 4、常用命令

**4.1、安装和卸载命令**

```bash
# 安装命令行工具（formula）
brew install <软件名>

# 安装 GUI 应用程序（cask）
brew install --cask <应用名>

# 卸载
brew uninstall <软件名>
```

> **Formula**：命令行工具，如 git、python、node

> **Cask**：图形界面应用，如 visual-studio-code、google-chrome、iterm2

示例

```bash
brew install  node                  # 安装nodejs 环境
brew install --cask visual-studio-code  # 安装 VS Code
brew uninstall node                  # 卸载 wget
```

**4.2、更新和升级**

```bash
# 更新 Homebrew 自身及软件目录（只是更新"菜单"，不升级已安装软件）
brew update

# 查看哪些已安装的软件有新版本
brew outdated

# 升级所有已安装的软件到最新版
brew upgrade

# 只升级指定软件
brew upgrade <软件名>3.3 查看与搜索
```

**4.3、查看和搜索**

```bash
# 搜索软件
brew search <关键词>

# 查看软件详细信息（版本、依赖、说明等）
brew info <软件名>

# 列出所有已安装的命令行工具
brew list

# 列出所有已安装的 GUI 应用
brew list --cask

# 查看某个软件的依赖关系树
brew deps --tree <软件名>
```

想安装什么可以先搜索一下，或者直接叫AI帮我你找，找完再安装

![图像](https://pbs.twimg.com/media/HFBX1fYaEAAJKzu?format=jpg&name=large)

4.4、维护和清理

```bash
# 系统诊断（检查 Homebrew 环境是否健康）
brew doctor

# 清理旧版本和下载缓存
brew cleanup

# 更彻底的清理（包括未安装软件的缓存）
brew cleanup -s

# 查看 Homebrew 系统配置
brew config
```

4.5、版本锁定

```bash
# 锁定某个软件版本，防止被 brew upgrade 升级
brew pin <软件名>

# 解除锁定
brew unpin <软件名>
```

4.6、后台服务管理

```bash
# 查看所有 Homebrew 管理的后台服务
brew services list

# 启动服务（并设为开机自启）
brew services start <软件名>

# 停止服务
brew services stop <软件名>

# 重启服务
brew services restart <软件名>
```

## 5、最后

后续什么python多版本管理、nodejs多版本管理、以及很多常用的工具都可以使用brew install 进行安装了。

不过Homebrew也有问题，比如有时候很慢。因为它的底子实在是太老了，主要是用的Ruby+Shell脚本实现的。这在当年可能是非常合理的选择，但是有一个新工具，Zerobrew，最近一段时间刚刚开源目前已经有7.1K star。

![图像](https://pbs.twimg.com/media/HFBrY_MaoAAnc7f?format=jpg&name=large)

每次执行brew，都要先启动一整套Ruby运行时，哪怕只是装一个小工具，流程也是一样重。

但是Zerobrew 它用 Rust 重写一个 Homebrew 级别的 macOS 包管理器，只为一件事：更快。

有兴趣的可以去尝试一下。