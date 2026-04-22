---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/aehyok/status/2046468146790568359"
created: 2026-04-21
---
![图像](https://pbs.twimg.com/media/HGSIgydaMAASSAx?format=jpg&name=large)

这是这个系列第三篇文章，我会把自己最近从零开始梳理，整理 Mac 使用过程中的经验与步骤记录下来，作为留存与分享。如果拿到一款新的Mac，我最先安装的终端工具就是Ghostty。

我的Mac使用指南系列文章：

- 1、**Homebrew软件包管理器从入门到精通：**[https://x.com/aehyok/status/2042527221332508866](https://x.com/aehyok/status/2042527221332508866)
- **2、从零搭建Codex App桌面端结合GitHub CLI，体验 AI 自动化克隆与提交：**[https://x.com/aehyok/status/2044239791231996394](https://x.com/aehyok/status/2044239791231996394)

一直是轻度使用mac的用户，所以一直使用的就是mac自带的终端工具。但是在飞速发展的AI时代，自带的终端确实不够给力，打开Claude Code 想换行输入信息不好搞，想多加个命令行窗体要重开一个切换也麻烦等等。

刚好，Ghostty这个终端管理器又对AI工具特别友好，不过它支持mac和linux，但是目前还不支持window。

如果你使用AI终端比较多，比如Claude Code、Codex、Gemini Cli,那么这个终端工具或许你可以试试看。

## 1、codex app中安装ghostty

当然了你也可以使用其他的AI 客户端工具进行安装，都是没问题的

![图像](https://pbs.twimg.com/media/HFCZS_xboAEjuD5?format=jpg&name=large)

安装完毕，它是一个单独的APP应用，找到它，如果无法打开

![图像](https://pbs.twimg.com/media/HFCa8K1aIAAbW2D?format=png&name=large)

点击右上角❓-> 点击隐私与安全->安全性->点击仍要打开就可以了。

![图像](https://pbs.twimg.com/media/HFCbk87bUAAc8De?format=jpg&name=large)

如果你担心AI执行有问题。同样可以再终端下执行如下命令,如果你还没安装Homebrew,请查看我上面系列文章的第一篇。

```bash
## 先通过命令查找工具
brew search ghostty

## 安装工具
brew install --cask ghostty

## 也可以去官网进行
## ghostty.org/download
```

## 2、配置

上面安装完了，可以直接到App中查看点击使用，也可以进行设置命令行中开启如下图

![图像](https://pbs.twimg.com/media/HFChsV2agAAiso-?format=jpg&name=large)

设置别名完毕，再让他生成一份“适合写代码”的Ghostty初始化配置。

![图像](https://pbs.twimg.com/media/HFCijm_bEAAod_a?format=jpg&name=large)

我暂时就这么用用看，可以双Tab，然后 Command + 1, Command +2 轻松切换Tab。

![图像](https://pbs.twimg.com/media/HFCj4cjasAAWfq3?format=jpg&name=large)

也可以一个Tab 左右两个命令行窗口： Command + D

也可以一个Tab上下两个命令行：Command + Shift + D

还可以通过Command + option + left 向左边聚焦，其他三个以此类推

这里我也提供一个完整的配置

```yaml
# ===========================
# Ghostty 完整配置
# ===========================

# --- 外观 ---
# 主题跟随系统深色模式自动切换
theme = light:Catppuccin Latte,dark:Catppuccin Mocha

# 背景透明度（0.0 ~ 1.0）
background-opacity = 0.88

# 背景模糊（配合透明度使用，毛玻璃效果）
background-blur = 20

# 背景图片（可选，放一张喜欢的图，终端瞬间好看）
# background-image = ~/Pictures/wallpaper.png
# background-image-opacity = 0.3
# background-image-fit = cover

# 标题栏集成 Tab 栏（比 hidden 多了 Tab 支持）
macos-titlebar-style = tabs

# 非活跃分屏的透明度（让你一眼看出焦点在哪）
unfocused-split-opacity = 0.9

# --- 字体 ---
# 推荐 Maple Mono NF CN（brew install --cask font-maple-mono-nf-cn）
font-family = "Maple Mono NF CN"
font-size = 14
font-thicken = true

# 连字支持
font-feature = calt
font-feature = liga

# --- 窗口行为 ---
# 永远记住窗口状态（分屏、Tab、目录）
window-save-state = always

# 新分屏继承当前目录
window-inherit-working-directory = true

# 新窗口继承字体大小
window-inherit-font-size = true

# 内边距
window-padding-x = 4
window-padding-y = 4
window-padding-balance = true

# --- Quick Terminal（下拉终端） ---
keybind = global:ctrl+grave_accent=toggle_quick_terminal
quick-terminal-screen = main
quick-terminal-position = top
quick-terminal-size = 50%
quick-terminal-autohide = true
quick-terminal-animation-duration = 0.15

# --- 分屏焦点切换 ---
keybind = cmd+alt+left=goto_split:left
keybind = cmd+alt+right=goto_split:right
keybind = cmd+alt+up=goto_split:top
keybind = cmd+alt+down=goto_split:bottom

# --- Shell 集成 ---
# 自动注入 shell 集成（光标样式、sudo、标题、SSH terminfo）
shell-integration-features = cursor,sudo,title,ssh-terminfo,ssh-env

# --- 滚动 ---
# 滚动缓冲区大小，单位是字节（默认 10MB，这里设为 50MB）
scrollback-limit = 50000000

# --- 光标 ---
cursor-style = block
cursor-style-blink = false

# 鼠标隐藏（打字时自动隐藏鼠标）
mouse-hide-while-typing = true

# --- 剪贴板 ---
# 选中即复制到系统剪贴板（和 iTerm2 一样）
copy-on-select = clipboard

# 复制时自动去除行尾空格
clipboard-trim-trailing-spaces = true

# --- macOS 专属 ---
# 退出时不弹确认框（如果你习惯了 Cmd+Q）
confirm-close-surface = false

# Option 键作为 Alt 使用（对 vim/emacs 用户很重要）
macos-option-as-alt = true
```

**使用方法：**

在 Ghostty 里按 Cmd + , 打开配置文件，把上面的内容粘贴进去。

里面使用了一个字体，别忘了装：

```bash
brew install --cask font-maple-mono-nf-cn
```

然后按 Cmd + Shift + , 重载配置，搞定。

上面完整的配置文件参考的是这篇文章整理非常细致，我只是添加了分屏焦点切换的快捷键。

> 3月16日

## 3、最后

奉上一份Ghostty快捷键有时候可以多查查。

![图像](https://pbs.twimg.com/media/HFCqvN6b0AA0RSw?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HFCrQnxbIAAwC9Q?format=jpg&name=large)