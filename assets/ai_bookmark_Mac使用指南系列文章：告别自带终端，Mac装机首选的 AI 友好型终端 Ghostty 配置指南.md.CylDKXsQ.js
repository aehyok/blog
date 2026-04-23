import{_ as a,c as n,o as i,ag as p}from"./chunks/framework.ELrfyV9R.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{"type":"inbox","status":"pending","source":"web-clipper","url":"https://x.com/aehyok/status/2046468146790568359","created":"2026-04-21T00:00:00.000Z"},"headers":[],"relativePath":"ai/bookmark/Mac使用指南系列文章：告别自带终端，Mac装机首选的 AI 友好型终端 Ghostty 配置指南.md","filePath":"ai/bookmark/Mac使用指南系列文章：告别自带终端，Mac装机首选的 AI 友好型终端 Ghostty 配置指南.md","lastUpdated":1776945928000}'),l={name:"ai/bookmark/Mac使用指南系列文章：告别自带终端，Mac装机首选的 AI 友好型终端 Ghostty 配置指南.md"};function t(e,s,h,k,c,r){return i(),n("div",null,s[0]||(s[0]=[p(`<p><img src="https://pbs.twimg.com/media/HGSIgydaMAASSAx?format=jpg&amp;name=large" alt="图像"></p><p>这是这个系列第三篇文章，我会把自己最近从零开始梳理，整理 Mac 使用过程中的经验与步骤记录下来，作为留存与分享。如果拿到一款新的Mac，我最先安装的终端工具就是Ghostty。</p><p>我的Mac使用指南系列文章：</p><ul><li>1、<strong>Homebrew软件包管理器从入门到精通：</strong><a href="https://x.com/aehyok/status/2042527221332508866" target="_blank" rel="noreferrer">https://x.com/aehyok/status/2042527221332508866</a></li><li><strong>2、从零搭建Codex App桌面端结合GitHub CLI，体验 AI 自动化克隆与提交：</strong><a href="https://x.com/aehyok/status/2044239791231996394" target="_blank" rel="noreferrer">https://x.com/aehyok/status/2044239791231996394</a></li></ul><p>一直是轻度使用mac的用户，所以一直使用的就是mac自带的终端工具。但是在飞速发展的AI时代，自带的终端确实不够给力，打开Claude Code 想换行输入信息不好搞，想多加个命令行窗体要重开一个切换也麻烦等等。</p><p>刚好，Ghostty这个终端管理器又对AI工具特别友好，不过它支持mac和linux，但是目前还不支持window。</p><p>如果你使用AI终端比较多，比如Claude Code、Codex、Gemini Cli,那么这个终端工具或许你可以试试看。</p><h2 id="_1、codex-app中安装ghostty" tabindex="-1">1、codex app中安装ghostty <a class="header-anchor" href="#_1、codex-app中安装ghostty" aria-label="Permalink to &quot;1、codex app中安装ghostty&quot;">​</a></h2><p>当然了你也可以使用其他的AI 客户端工具进行安装，都是没问题的</p><p><img src="https://pbs.twimg.com/media/HFCZS_xboAEjuD5?format=jpg&amp;name=large" alt="图像"></p><p>安装完毕，它是一个单独的APP应用，找到它，如果无法打开</p><p><img src="https://pbs.twimg.com/media/HFCa8K1aIAAbW2D?format=png&amp;name=large" alt="图像"></p><p>点击右上角❓-&gt; 点击隐私与安全-&gt;安全性-&gt;点击仍要打开就可以了。</p><p><img src="https://pbs.twimg.com/media/HFCbk87bUAAc8De?format=jpg&amp;name=large" alt="图像"></p><p>如果你担心AI执行有问题。同样可以再终端下执行如下命令,如果你还没安装Homebrew,请查看我上面系列文章的第一篇。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 先通过命令查找工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghostty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 安装工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghostty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 也可以去官网进行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## ghostty.org/download</span></span></code></pre></div><h2 id="_2、配置" tabindex="-1">2、配置 <a class="header-anchor" href="#_2、配置" aria-label="Permalink to &quot;2、配置&quot;">​</a></h2><p>上面安装完了，可以直接到App中查看点击使用，也可以进行设置命令行中开启如下图</p><p><img src="https://pbs.twimg.com/media/HFChsV2agAAiso-?format=jpg&amp;name=large" alt="图像"></p><p>设置别名完毕，再让他生成一份“适合写代码”的Ghostty初始化配置。</p><p><img src="https://pbs.twimg.com/media/HFCijm_bEAAod_a?format=jpg&amp;name=large" alt="图像"></p><p>我暂时就这么用用看，可以双Tab，然后 Command + 1, Command +2 轻松切换Tab。</p><p><img src="https://pbs.twimg.com/media/HFCj4cjasAAWfq3?format=jpg&amp;name=large" alt="图像"></p><p>也可以一个Tab 左右两个命令行窗口： Command + D</p><p>也可以一个Tab上下两个命令行：Command + Shift + D</p><p>还可以通过Command + option + left 向左边聚焦，其他三个以此类推</p><p>这里我也提供一个完整的配置</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ===========================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ghostty 完整配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ===========================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 外观 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 主题跟随系统深色模式自动切换</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">theme = light:Catppuccin Latte,dark:Catppuccin Mocha</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 背景透明度（0.0 ~ 1.0）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">background-opacity = 0.88</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 背景模糊（配合透明度使用，毛玻璃效果）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">background-blur = 20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 背景图片（可选，放一张喜欢的图，终端瞬间好看）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># background-image = ~/Pictures/wallpaper.png</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># background-image-opacity = 0.3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># background-image-fit = cover</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 标题栏集成 Tab 栏（比 hidden 多了 Tab 支持）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">macos-titlebar-style = tabs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 非活跃分屏的透明度（让你一眼看出焦点在哪）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unfocused-split-opacity = 0.9</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 字体 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推荐 Maple Mono NF CN（brew install --cask font-maple-mono-nf-cn）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">font-family = &quot;Maple Mono NF CN&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">font-size = 14</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">font-thicken = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 连字支持</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">font-feature = calt</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">font-feature = liga</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 窗口行为 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 永远记住窗口状态（分屏、Tab、目录）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-save-state = always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新分屏继承当前目录</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-inherit-working-directory = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新窗口继承字体大小</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-inherit-font-size = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 内边距</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-padding-x = 4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-padding-y = 4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">window-padding-balance = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- Quick Terminal（下拉终端） ---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keybind = global:ctrl+grave_accent=toggle_quick_terminal</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quick-terminal-screen = main</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quick-terminal-position = top</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quick-terminal-size = 50%</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quick-terminal-autohide = true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quick-terminal-animation-duration = 0.15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 分屏焦点切换 ---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keybind = cmd+alt+left=goto_split:left</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keybind = cmd+alt+right=goto_split:right</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keybind = cmd+alt+up=goto_split:top</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keybind = cmd+alt+down=goto_split:bottom</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- Shell 集成 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动注入 shell 集成（光标样式、sudo、标题、SSH terminfo）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">shell-integration-features = cursor,sudo,title,ssh-terminfo,ssh-env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 滚动 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 滚动缓冲区大小，单位是字节（默认 10MB，这里设为 50MB）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scrollback-limit = 50000000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 光标 ---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cursor-style = block</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cursor-style-blink = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 鼠标隐藏（打字时自动隐藏鼠标）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mouse-hide-while-typing = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- 剪贴板 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 选中即复制到系统剪贴板（和 iTerm2 一样）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">copy-on-select = clipboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制时自动去除行尾空格</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">clipboard-trim-trailing-spaces = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --- macOS 专属 ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退出时不弹确认框（如果你习惯了 Cmd+Q）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">confirm-close-surface = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Option 键作为 Alt 使用（对 vim/emacs 用户很重要）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">macos-option-as-alt = true</span></span></code></pre></div><p><strong>使用方法：</strong></p><p>在 Ghostty 里按 Cmd + , 打开配置文件，把上面的内容粘贴进去。</p><p>里面使用了一个字体，别忘了装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> font-maple-mono-nf-cn</span></span></code></pre></div><p>然后按 Cmd + Shift + , 重载配置，搞定。</p><p>上面完整的配置文件参考的是这篇文章整理非常细致，我只是添加了分屏焦点切换的快捷键。</p><blockquote><p>3月16日</p></blockquote><h2 id="_3、最后" tabindex="-1">3、最后 <a class="header-anchor" href="#_3、最后" aria-label="Permalink to &quot;3、最后&quot;">​</a></h2><p>奉上一份Ghostty快捷键有时候可以多查查。</p><p><img src="https://pbs.twimg.com/media/HFCqvN6b0AA0RSw?format=jpg&amp;name=large" alt="图像"></p><p><img src="https://pbs.twimg.com/media/HFCrQnxbIAAwC9Q?format=jpg&amp;name=large" alt="图像"></p>`,39)]))}const g=a(l,[["render",t]]);export{d as __pageData,g as default};
