
前置条件是安装nodejs、git、obdisian客户端，如果没有的话可以让AI帮忙安装一下也可以自己手动进行下载。

![[Pasted image 20260315204709.png]]


开始安装vitepress

![[Pasted image 20260315225057.png]]

项目已经搭建完毕，‘pnpm install ’准备安装项目所需要的依赖包了，让他继续安装就好了。
![[Pasted image 20260315225552.png]]

依赖安装完毕，可以叫他本地直接跑项目看效果了。

![[Pasted image 20260315225813.png]]

看到访问地址基本就OK了，浏览器输入访问看效果。

![[Pasted image 20260315225949.png]]

网站运行OK了,接下来先将代码提交到github。

"将项目上传到github"

![[Pasted image 20260316061033.png]]

"https://github.com/new 浏览器打开这个链接，直接创建项目"

![[Pasted image 20260316063015.png]]

上面链接要先进行登录这里就不进行重点讲解了，主要就是箭头两个重点

- 仓库名称，尽量用英文字母
- choose visibility，我选择的public，意思就是开源，所有人都可以看到，另外一个private就是私有的，只有自己能看到。
- 剩下的你可以直接默认，也可以参考我的进行选择，然后点击右下角 Create repository。
- 仓库创建完毕就会直接跳转到当前仓库。

![[Pasted image 20260316070834.png]]


“ git@github.com:aehyok/vitepress-obsidian.git  这是我新创建的仓库，创建类型为public，请将当前仓库代码上传github”


![[Pasted image 20260317071023.png]]



https://cloudflare.com 打开网站，如果没有账号就进行注册登录，登录之后右上角语言切换简体中文，设置完毕首页如下所示。

![[Pasted image 20260317153943.png]]

点击开始[构建]，进入页面会看到下面  [pages] 点击 开始使用
![[Pasted image 20260317173522.png]]


进入页面后点击 导入现有Git存储库  开始使用，如果没关联过需要登录github进行授权的

选择 Only select repositories-> Select repositories=-> 文本框输入 obsidian-> 选中代码仓库->点击绿色的 Save->稍等片刻会返回到cloudflare网站。也就是关闭弹窗。

![[Pasted image 20260317155017.png]]


回到cloudflare网站，选择好刚刚设置的仓库，点击右下角开始设置就可以了。

![[Pasted image 20260317174611.png]]

点击下一步
框架预设：选择VitePress
构建命令： npm vitepress build
构建输出目录：docs/.vitepress/dist

![[Pasted image 20260317181016.png]]


![[Pasted image 20260317175259.png]]

好了，兄弟们，网站有了。

![[Pasted image 20260317181210.png]]
gh这玩意我没用过
“gh是什么”

![[Pasted image 20260316064929.png]]