import{_ as s,o as a,c as n,b as l}from"./app.6101b62d.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、基本命令","slug":"_1、基本命令","link":"#_1、基本命令","children":[]},{"level":2,"title":"2、分支管理","slug":"_2、分支管理","link":"#_2、分支管理","children":[]},{"level":2,"title":"3、合并代码","slug":"_3、合并代码","link":"#_3、合并代码","children":[]},{"level":2,"title":"4、tag标签(根据tag标签创建的分支不要与标签名一致)","slug":"_4、tag标签-根据tag标签创建的分支不要与标签名一致","link":"#_4、tag标签-根据tag标签创建的分支不要与标签名一致","children":[]},{"level":2,"title":"5、小技巧","slug":"_5、小技巧","link":"#_5、小技巧","children":[]},{"level":2,"title":"6、合并代码","slug":"_6、合并代码","link":"#_6、合并代码","children":[]},{"level":2,"title":"7、设置忽略文件","slug":"_7、设置忽略文件","link":"#_7、设置忽略文件","children":[]}],"relativePath":"javascript/2022-05-07-git.md","lastUpdated":1711465796000}'),p={name:"javascript/2022-05-07-git.md"},e=l(`<p>平常在windows电脑上使用Git Extensions 工具比较多，大部分的常用指令都可以通过点点点就可以完成。在mac电脑上的话使用sourcetree工具。但有时候也会直接通过git命令，很多时候也是通过百度来临时查阅，所以总结下来方便自己，也方便可能需要的你。</p><h2 id="_1、基本命令" tabindex="-1">1、基本命令 <a class="header-anchor" href="#_1、基本命令" aria-hidden="true">#</a></h2><ul><li>1.1、 生成SSH公钥和私钥，公钥要复制配置到git服务器上,可通过Git Bash Here打开终端命令，前提需要安装git<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 查看ssh版本,同时判断ssh是否已经安装，安装git即可</span></span>
<span class="line"><span style="color:#BABED8;">ssh </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 生成SSH密钥</span></span>
<span class="line"><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">o</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导航到指定目录</span></span>
<span class="line"><span style="color:#BABED8;">cd </span><span style="color:#89DDFF;">~</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.ssh</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看ssh,id_rsa.pub则为公钥，id_rsa则为私钥，将公钥复制到git服务器</span></span>
<span class="line"><span style="color:#BABED8;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mac下可以用cat命令进行查看 .pub后缀名为公钥，另外一个为私钥,将公钥复制到服务器或者github或者code.aliyun.com上</span></span>
<span class="line"><span style="color:#BABED8;">cat </span><span style="color:#89DDFF;">~/.</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">id_rsa</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pub</span></span>
<span class="line"></span></code></pre></div></li><li>1.2、 git config 配置提交用户名和用户邮箱<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">global user</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aehyok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">git config </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">global user</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aehyok@163.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 配置好后可通过这个来查看</span></span>
<span class="line"><span style="color:#BABED8;">git config </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">l</span></span>
<span class="line"></span></code></pre></div></li><li>1.3、 创建项目后如何提交到仓库<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建项目后到指定的项目文件夹中初始化git</span></span>
<span class="line"><span style="color:#BABED8;">git init</span></span>
<span class="line"></span></code></pre></div></li><li>1.4、 将文件添加到暂存区<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将添加或修改的文件提交到暂存区</span></span>
<span class="line"><span style="color:#BABED8;">git add </span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将监控已经被add进暂存区的文件，会将被修改的文件再次提交到暂存区</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或者是</span></span>
<span class="line"><span style="color:#BABED8;">git add </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 则是git add .和 git add -u 两个命令的集合</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或者是</span></span>
<span class="line"><span style="color:#BABED8;">git add </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">A</span></span>
<span class="line"></span></code></pre></div></li><li>1.5、 提交到本地仓库（即自己当前电脑的代码仓库）<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 提交到本地仓库</span></span>
<span class="line"><span style="color:#BABED8;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> feat: 初始化项目</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// commit提交时不进行检查husky钩子</span></span>
<span class="line"><span style="color:#BABED8;">git commit </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">no</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">verify </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li>1.6、 设置远程仓库地址（即代码要提交到哪里的服务器）<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 当然也可以使用ssh 链接</span></span>
<span class="line"><span style="color:#BABED8;">git remote add github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/aehyok/demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 移除远程仓库，默认名称为origin</span></span>
<span class="line"><span style="color:#BABED8;"> git remote rm origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 重新设置远程仓库url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;"> git remote set</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">url origin git@github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">com:aehyok</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">AK47</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">GPT</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">git</span></span>
<span class="line"></span></code></pre></div></li><li>1.6.1、获取远程仓库地址<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 获取远程仓库地址</span></span>
<span class="line"><span style="color:#BABED8;">git remote </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">v</span></span>
<span class="line"></span></code></pre></div></li><li>1.7、 推送到远程服务器（注意一点，首次推送要设置追踪）<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 设置本地分支追踪远程分支、、、之后就可以直接git push</span></span>
<span class="line"><span style="color:#BABED8;">git push </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">set</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">upstream origin main</span></span>
<span class="line"></span></code></pre></div></li><li>1.8、 修改文件名会忽略大小写，默认都是忽略了，所以修改文件名大小写是无效的<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// （查看是否忽略大小写） true则设置了忽略</span></span>
<span class="line"><span style="color:#BABED8;">git config core</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">ignorecase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 后面加上false则直接可设置不忽略，修改文件名大小写后会生效</span></span>
<span class="line"><span style="color:#BABED8;">git config core</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">ignorecase </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre></div></li><li>1.9、修改文件夹名字大小写的问题<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// (修改前先将Test文件夹备份并修改为TestTemp&lt;一个临时文件夹名字而已&gt;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 然后执行命令</span></span>
<span class="line"><span style="color:#BABED8;">git rm Test</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 再将备份文件夹名字修改为需要的文件夹即可</span></span>
<span class="line"><span style="color:#89DDFF;">--------------</span><span style="color:#BABED8;">另外一种简单粗暴的方式</span><span style="color:#89DDFF;">-----------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 还是先备份好要删除的文件，然后将文件删除，提交到仓库。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 完事后将备份的文件复制回来，然后修改文件大小写，再提交即可。</span></span>
<span class="line"></span></code></pre></div></li><li>1.10、 是将远程主机的最新内容拉到本地 ,用户在检查了以后决定是否合并到工作本机分支中。<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git fetch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//更多基本操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//https://www.cnblogs.com/runnerjack/p/9342362.html</span></span>
<span class="line"></span></code></pre></div></li><li>1.11、同样一个本地仓库可以设置多个远程仓库，然后通过不同的git push github.origin<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 设置个github远程仓库</span></span>
<span class="line"><span style="color:#BABED8;"> git remote add github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/aehyok/demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 设置个gitee远程仓库</span></span>
<span class="line"><span style="color:#BABED8;"> git remote add gitee</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/aehyok/demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 推送到github</span></span>
<span class="line"><span style="color:#BABED8;"> git push github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//  推送到gitee</span></span>
<span class="line"><span style="color:#BABED8;"> git push gitee</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 移除远程仓库地址</span></span>
<span class="line"><span style="color:#BABED8;"> git remote rm gitee</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin</span></span>
<span class="line"></span></code></pre></div></li><li>1.12、克隆代码库<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 目前没指定分支，默认为master</span></span>
<span class="line"><span style="color:#BABED8;"> git clone </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/aehyok/demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 指定分支名称</span></span>
<span class="line"><span style="color:#BABED8;"> git clone </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">b dev  </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//github.com/aehyok/demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 克隆指定远程仓库下的指定分支(gitee.origin为git remote add 设置的别名)</span></span>
<span class="line"><span style="color:#BABED8;"> git clone gitee</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">origin  main</span></span>
<span class="line"></span></code></pre></div></li><li>1.13、git add . 时 vscode中警告 warning: LF will be replaced by CRLF in src/index.js.<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    git config </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">global core</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">autocrlf </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre></div></li><li>1.14、拉取远程分支代码到本地（拉取dev分支代码到本地的分支）<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    git fetch origin dev</span></span>
<span class="line"><span style="color:#BABED8;">    </span></span>
<span class="line"><span style="color:#BABED8;">    git pull origin dev</span></span>
<span class="line"></span></code></pre></div></li><li>1.15、如果新装电脑后使用git 操作代码可能会报错<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 升级了OpenSSH 后报错</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Unable to negotiate with 47.98.49.44 port 22: no matching host key type found. Their offer: ssh-rsa</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// fatal: Could not read from remote repository.</span></span>
<span class="line"><span style="color:#BABED8;">        </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Please make sure you have the correct access rights</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// and the repository exists.</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 因为OpenSsh升级了,需要在xx/xx/xx/.ssh目录下添加config文件（没有后缀名） ,添加以下三行代码</span></span>
<span class="line"><span style="color:#BABED8;">    Host </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#BABED8;">    HostkeyAlgorithms </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">rsa</span></span>
<span class="line"><span style="color:#BABED8;">    PubkeyAcceptedKeyTypes </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">rsa      </span></span>
<span class="line"></span></code></pre></div></li><li>1.16、git log 详细操作 <ul><li><a href="https://www.cnblogs.com/lsgxeva/p/9485874.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/lsgxeva/p/9485874.html</a></li></ul></li></ul><h2 id="_2、分支管理" tabindex="-1">2、分支管理 <a class="header-anchor" href="#_2、分支管理" aria-hidden="true">#</a></h2><ul><li>2.1、 创建分支<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 切换到基础分支</span></span>
<span class="line"><span style="color:#BABED8;">git checkout main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据 切换到的main分支，创建dev分支并切换到dev分支</span></span>
<span class="line"><span style="color:#BABED8;">git checkout </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">b dev</span></span>
<span class="line"></span></code></pre></div></li><li>2.2、 查看分支<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 查看本地分支</span></span>
<span class="line"><span style="color:#BABED8;">git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看本地分支和远程分支，如果不存在需要git fetch一下</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">a </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看远程分支</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">r</span></span>
<span class="line"></span></code></pre></div></li><li>2.3、 修改分支名称<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 修改当前本地分支的名称</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m develop</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">lqm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 也可以修改指定的分支  原分支名称  新分支名称</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m develop</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">lam develop</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">lqm</span></span>
<span class="line"></span></code></pre></div></li><li>2.4、 删除本地分支和删除远程分支<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 先切换到其他分支</span></span>
<span class="line"><span style="color:#BABED8;">git checkout dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除本地分支</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">d dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果删除不了，可以进行强制删除</span></span>
<span class="line"><span style="color:#BABED8;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">D dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 有必要的情况下，删除远程分支但是要谨慎使用</span></span>
<span class="line"><span style="color:#BABED8;">git push origin </span><span style="color:#89DDFF;">--delete</span><span style="color:#BABED8;"> dev</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="_3、合并代码" tabindex="-1">3、合并代码 <a class="header-anchor" href="#_3、合并代码" aria-hidden="true">#</a></h2><ul><li>3.1、 将某个提交，任何跟仓库所有分支的commit 合并到当前分支<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// (正常情况直接合并成功，可能存在重复图需要手动解决)</span></span>
<span class="line"><span style="color:#BABED8;">git cherry</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">pick  commitid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// git多个commitid</span></span>
<span class="line"><span style="color:#BABED8;">git cherry</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">pick  commitid commitid1 commitid2 commitid3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正常情况直接push即可，手动解决冲突需要commit 再进行push</span></span>
<span class="line"><span style="color:#BABED8;">git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 扩展阅读：还可以一起提交commitid-A到commitid-B 之间所有的内容修改</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html</span></span>
<span class="line"></span></code></pre></div></li><li>3.2、 当前分支dev的代码提交push成功，此时想合并到main分支上<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 先切换到main分支</span></span>
<span class="line"><span style="color:#BABED8;">git checkout main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将dev分支的变更拉取到main分支上来</span></span>
<span class="line"><span style="color:#BABED8;">git merge dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 合并完成，即可推送到远程服务器</span></span>
<span class="line"><span style="color:#BABED8;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">u origin main</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="_4、tag标签-根据tag标签创建的分支不要与标签名一致" tabindex="-1">4、tag标签(根据tag标签创建的分支不要与标签名一致) <a class="header-anchor" href="#_4、tag标签-根据tag标签创建的分支不要与标签名一致" aria-hidden="true">#</a></h2><ul><li>4.1、添加一个tag，并推送到远程仓库<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git tag </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">a </span><span style="color:#F78C6C;">3.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">3.001</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">release 3.11.3.001</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">git push origin </span><span style="color:#F78C6C;">3.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">3.001</span></span>
<span class="line"></span></code></pre></div></li><li>4.2、 删除一个tag<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git tag </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">d </span><span style="color:#F78C6C;">3.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">3.001</span></span>
<span class="line"><span style="color:#BABED8;">git push </span><span style="color:#FFCB6B;">origin</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">refs</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">tags</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">3.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">3.001</span></span>
<span class="line"></span></code></pre></div></li><li>4.3、 查看tag<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git tag</span></span>
<span class="line"></span></code></pre></div></li><li>4.4、在某个commit上打tag<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git tag test_tag c809ddbf83939a89659e51dc2a5fe183af384233　　　　</span></span>
<span class="line"><span style="color:#BABED8;">git push origin test_tag　　　　</span><span style="color:#676E95;font-style:italic;">//!!!本地tag推送到线上</span></span>
<span class="line"></span></code></pre></div></li><li>4.5、 根据tag创建分支<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.cnblogs.com/senlinyang/p/9455426.html</span></span>
<span class="line"><span style="color:#BABED8;">git branch newbranch </span><span style="color:#F78C6C;">3.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">3.001</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 切换到分支</span></span>
<span class="line"><span style="color:#BABED8;">git checkout newbranch</span></span>
<span class="line"></span></code></pre></div></li><li>4.6、删除已经push到服务器的提交记录，到某个commitid<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">、找到想要退回到的那个commitid</span></span>
<span class="line"><span style="color:#BABED8;">    git log </span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">、然后将代码退回到那个commitid</span></span>
<span class="line"><span style="color:#BABED8;">    git reset </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">hard commitid</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">、推送到服务器，已经要加上</span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">force</span></span>
<span class="line"><span style="color:#BABED8;">    git push origin </span><span style="color:#FFCB6B;">HEAD</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">dev </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">force</span></span>
<span class="line"></span></code></pre></div></li><li>4.7、删除没有push到远程服务器的commit记录<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">     </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">、通过找到想要退回到的commit_id</span></span>
<span class="line"><span style="color:#BABED8;">    git log </span></span>
<span class="line"><span style="color:#BABED8;">     </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">、本地代码会变成你想要的那次代码。这次之后提交的代码都没有了</span></span>
<span class="line"><span style="color:#BABED8;">    git reset </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">hard id </span></span>
<span class="line"><span style="color:#BABED8;">     </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">、完成撤销，停留在当前版本，之前的代码还是在的。只是本地的提交记录没了</span></span>
<span class="line"><span style="color:#BABED8;">    git reset id </span></span>
<span class="line"></span></code></pre></div></li><li>4.8、删除某个很多个提交<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1、查看提交</span></span>
<span class="line"><span style="color:#BABED8;">    git log </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2、列出最后的提交和commitid之间的所有提交</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 然后把不需要的提交删除掉即可</span></span>
<span class="line"><span style="color:#BABED8;">    git rebase </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">i commitid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 3、推送(谨慎使用，尽量单独分支处理好后)</span></span>
<span class="line"><span style="color:#BABED8;">    git push </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">f </span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="_5、小技巧" tabindex="-1">5、小技巧 <a class="header-anchor" href="#_5、小技巧" aria-hidden="true">#</a></h2><ul><li><p>5.1、vscode中配置git bash 作为命令行</p><ul><li><a href="https://zhuanlan.zhihu.com/p/365625019" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/365625019</a></li></ul></li><li><p>5.2、在某个分支暂存某些临时代码（不方便提交的）</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 将当前代码状态暂时切换WIP</span></span>
<span class="line"><span style="color:#BABED8;">    git stash save </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">备注</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 执行后 Saved working directory and index state WIP on dev: b4d9dc5 feat: 合并行和列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 想恢复的话需要切换到之前的分支，然后再执行</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 应用最近一次的stash</span></span>
<span class="line"><span style="color:#BABED8;">    git stash apply   </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 应用指定stash, 先list</span></span>
<span class="line"><span style="color:#BABED8;">    git stash apply  stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">//apply后，list中还会存在</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 或者 pop</span></span>
<span class="line"><span style="color:#BABED8;">    git stash pop stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// pop后，list中不会存在</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//如果stash了多次,可通过list命令列出所有的stash</span></span>
<span class="line"><span style="color:#BABED8;">    git stash list </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 如果都恢复完毕 可以使用clear进行清除</span></span>
<span class="line"><span style="color:#BABED8;">    git stash clear</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 保存未跟踪的文件</span></span>
<span class="line"><span style="color:#BABED8;">    git stash push </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">include</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">untracked </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//或者简写</span></span>
<span class="line"><span style="color:#BABED8;">    git stash push </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">u</span></span>
<span class="line"><span style="color:#BABED8;">    </span></span>
<span class="line"></span></code></pre></div></li><li><p>5.3、恢复commit提交 // <a href="https://mp.weixin.qq.com/s/LDxXR302F9G35x3uwHh0jg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/LDxXR302F9G35x3uwHh0jg</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 最近一次的</span></span>
<span class="line"><span style="color:#BABED8;">    git reset </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">soft HEAD</span><span style="color:#89DDFF;">^</span></span>
<span class="line"><span style="color:#BABED8;">    git log </span><span style="color:#676E95;font-style:italic;">//通过查看日志可以发现，已经commit，但没有push的代码已经返回到本地更改中， 而且git log中不会留下记录</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 指定commitid的提交（最近一次的提交到指定的commitid） 所有更改</span></span>
<span class="line"><span style="color:#BABED8;">    git reset </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">soft commitid</span></span>
<span class="line"><span style="color:#BABED8;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//如果没有push到远程服务器，直接push即可</span></span>
<span class="line"><span style="color:#BABED8;">    git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 如果已经push到远程服务器，因为服务器与本地存在差异</span></span>
<span class="line"><span style="color:#BABED8;">    git push </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 直接重置到commitid  一般慎用</span></span>
<span class="line"><span style="color:#BABED8;">    git reset </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">hard commitid</span></span>
<span class="line"></span></code></pre></div></li><li><p>5.4 如果是已经push的一个提交</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">    // 该提交已经被push到远程服务器， 使用后将删除所有的更改</span></span>
<span class="line"><span style="color:#babed8;">    git reset --hard HEAD~1</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 然后使用强制推送</span></span>
<span class="line"><span style="color:#babed8;">    git push -f</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><h2 id="_6、合并代码" tabindex="-1">6、合并代码 <a class="header-anchor" href="#_6、合并代码" aria-hidden="true">#</a></h2><ul><li><p>6.1、将远程分支代码合并到本地</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 先拉去远程分支代码，确保dev代码师最新的</span></span>
<span class="line"><span style="color:#BABED8;">    git checkout dev </span></span>
<span class="line"><span style="color:#BABED8;">    git pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 切换到自己的代码分支</span></span>
<span class="line"><span style="color:#BABED8;">    git chekout dev</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">lqm</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 执行将dev分支代码合并到dev-lqm</span></span>
<span class="line"><span style="color:#BABED8;">    git merge dev</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 推送代码到自己的远程分支上</span></span>
<span class="line"><span style="color:#BABED8;">    git push </span></span>
<span class="line"></span></code></pre></div></li><li><p>6.2、git subtree</p><ul><li><a href="https://juejin.cn/post/7018344866811740173" target="_blank" rel="noreferrer">https://juejin.cn/post/7018344866811740173</a></li><li><a href="https://segmentfault.com/a/1190000003969060" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000003969060</a></li></ul></li><li><p>6.3 免密登陆linux</p><ul><li><a href="https://juejin.cn/post/6844903734233792519" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903734233792519</a><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//本地生成就不说了在上面 </span></span>
<span class="line"><span style="color:#BABED8;">cat </span><span style="color:#89DDFF;">~/.</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">id_rsa</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pub </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> ssh root@</span><span style="color:#F78C6C;">139.159</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">245.209</span><span style="color:#BABED8;"> “cat </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">~/.</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">authorized_keys”</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>6.4、Are you sure you want to continue connecting (yes/no/[fingerprint])?</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">vim </span><span style="color:#89DDFF;">~/.</span><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加如下</span></span>
<span class="line"><span style="color:#BABED8;">StrictHostKeyChecking no</span></span>
<span class="line"></span></code></pre></div><ul><li><p><a href="https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect</a></p></li><li><p><a href="https://stackoverflow.com/questions/63661505/git-always-prompts-are-you-sure-you-want-to-continue-connecting-yes-no-finger" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/63661505/git-always-prompts-are-you-sure-you-want-to-continue-connecting-yes-no-finger</a></p></li></ul></li><li><p>6.5、两个git仓库进行代码和日志记录的合并</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// git@github.com:aehyok/blog1.git</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// git@github.com:aehyok/blog2.git</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 以blog1仓库的main分支为基础，将blog2仓库的main分之合并到blog1仓库的main.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//1.在blog1仓库下添加远程仓库blog2</span></span>
<span class="line"><span style="color:#BABED8;">  git remote add blog2 git@github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">com:aehyok</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">blog2</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//2.在blog1仓库下拉取数据到本仓库</span></span>
<span class="line"><span style="color:#BABED8;">  git fetch blog2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//3.根据拉取将远程仓库的blog2的main分支，在本地创建blog2main</span></span>
<span class="line"><span style="color:#BABED8;">  git checkout </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">b blog2main blog2</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//4.切换回blog1的main分支</span></span>
<span class="line"><span style="color:#BABED8;">  git checkout main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//5.将本地分支blog2main合并到main分支</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这两个仓库本来就是没有关联的，所以要加上参数</span></span>
<span class="line"><span style="color:#BABED8;">  git merge blog2main </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">allow</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">unrelated</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">histories</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//最后如果没有冲突就结束了</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 如果有冲突就解决一下</span></span>
<span class="line"><span style="color:#BABED8;">  git push</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="_7、设置忽略文件" tabindex="-1">7、设置忽略文件 <a class="header-anchor" href="#_7、设置忽略文件" aria-hidden="true">#</a></h2><ul><li><p>env文件设置忽略</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">//.gitignore文件中添加一行  </span></span>
<span class="line"><span style="color:#babed8;">    .env.*</span></span>
<span class="line"><span style="color:#babed8;">//在.gitignore文件中添加完之后，需要将git索引中的文件移除</span></span>
<span class="line"><span style="color:#babed8;">    git rm --cached .env.*</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li><p>8、恢复文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> // (如果还没有提交文件)撤销单个文件</span></span>
<span class="line"><span style="color:#babed8;"> git restore file </span></span>
<span class="line"><span style="color:#babed8;"> git checkout -- file</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> // 如果是多个文件的话</span></span>
<span class="line"><span style="color:#babed8;"> git chekcout -- . </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> // 取消掉所有的更改</span></span>
<span class="line"><span style="color:#babed8;"> git reset --hard</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li><p>9、设置git忽略</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> // 会匹配根目录下的 /server 目录，也会匹配任何子目录下的     </span></span>
<span class="line"><span style="color:#babed8;"> server</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 设置根目录下的server文件夹</span></span>
<span class="line"><span style="color:#babed8;"> server/  </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul>`,15),t=[e];function o(c,i,r,y,D,g){return a(),n("div",null,t)}const F=s(p,[["render",o]]);export{d as __pageData,F as default};