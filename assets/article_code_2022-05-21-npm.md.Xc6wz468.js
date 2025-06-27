import{_ as a,c as e,o as s,ag as o}from"./chunks/framework.mJdS8VI0.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-05-21-npm.md","filePath":"article/code/2022-05-21-npm.md","lastUpdated":1751020369000}'),t={name:"article/code/2022-05-21-npm.md"};function r(p,n,i,d,c,h){return s(),e("div",null,n[0]||(n[0]=[o(`<h4 id="_1、安装-nodejs-则其中会包含-npm-安装完-nodejs-后" tabindex="-1">1、安装 nodejs 则其中会包含 npm，安装完 nodejs 后 <a class="header-anchor" href="#_1、安装-nodejs-则其中会包含-npm-安装完-nodejs-后" aria-label="Permalink to &quot;1、安装 nodejs 则其中会包含 npm，安装完 nodejs 后&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看nodejs安装是否成功，成功后会出现版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    npm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同样会出现npm版本</span></span></code></pre></div><h4 id="_2、通过-npm-安装-yarn" tabindex="-1">2、通过 npm 安装 yarn <a class="header-anchor" href="#_2、通过-npm-安装-yarn" aria-label="Permalink to &quot;2、通过 npm 安装 yarn&quot;">​</a></h4><pre><code>\`\`\`javascript
    npm install -g yarn
\`\`\`
</code></pre><h4 id="_2-1-安装yarn" tabindex="-1">2.1.安装yarn <a class="header-anchor" href="#_2-1-安装yarn" aria-label="Permalink to &quot;2.1.安装yarn&quot;">​</a></h4><pre><code>\`\`\`javascript
    npm install -g yarn

    如：vscode 无法yarn时
    解：以管理员运行 power shell
    执行 set-executionpolicy remotesigned
    输入：Y
\`\`\`    
</code></pre><h4 id="_3、通过-npm-安装-cnpm" tabindex="-1">3、通过 npm 安装 cnpm <a class="header-anchor" href="#_3、通过-npm-安装-cnpm" aria-label="Permalink to &quot;3、通过 npm 安装 cnpm&quot;">​</a></h4><pre><code>\`\`\`javascript
    npm install -g cnpm --registry=https://registry.npm.taobao.org
\`\`\`
</code></pre><h4 id="_4、npm-在-vscode-中不能生效-有时候需要将-vscode-右键管理员运行才可以" tabindex="-1">4、npm 在 vscode 中不能生效，有时候需要将 vscode 右键管理员运行才可以 <a class="header-anchor" href="#_4、npm-在-vscode-中不能生效-有时候需要将-vscode-右键管理员运行才可以" aria-label="Permalink to &quot;4、npm 在 vscode 中不能生效，有时候需要将 vscode 右键管理员运行才可以&quot;">​</a></h4><h4 id="_5、npm-创建-vue-cli-脚手架" tabindex="-1">5、npm 创建 @vue/cli 脚手架 <a class="header-anchor" href="#_5、npm-创建-vue-cli-脚手架" aria-label="Permalink to &quot;5、npm 创建 @vue/cli 脚手架&quot;">​</a></h4><pre><code>\`\`\`javascript
    // 安装
    npm install -g @vue/cli
    // or
    yarn global add @vue/cli


    // 检查是否安装成功通过版本
    vue --version

    // 更新版本
    npm update -g @vue/cli

\`\`\`
</code></pre><h4 id="_6、npm-安装版本号" tabindex="-1">6、npm 安装版本号 <a class="header-anchor" href="#_6、npm-安装版本号" aria-label="Permalink to &quot;6、npm 安装版本号&quot;">​</a></h4><pre><code>\`\`\`javascript
    ^主版本号不会变，另外两个版本号会更新到最新
    ~主版本和次要版本不会变，最后一个版本号会更新到最新
    啥也没有：固定版本，不会更新
\`\`\`
</code></pre><h4 id="_7、npm-d-s" tabindex="-1">7、npm -D -S <a class="header-anchor" href="#_7、npm-d-s" aria-label="Permalink to &quot;7、npm -D -S&quot;">​</a></h4><pre><code>\`\`\`javascript
    -D 是在开发环境中协助开发需要使用的
    -S是生产环境打包时需要的
    在package.json中 -D在devDependencies对象中，-S在dependencies对象中
\`\`\`
</code></pre><h4 id="_8、npm-update-更新包" tabindex="-1">8、npm update 更新包 <a class="header-anchor" href="#_8、npm-update-更新包" aria-label="Permalink to &quot;8、npm update 更新包&quot;">​</a></h4><pre><code>\`\`\`
    npm update package-name
\`\`\`
</code></pre><h4 id="_9、-npmjs-com-发布常用操作" tabindex="-1">9、 npmjs.com 发布常用操作 <a class="header-anchor" href="#_9、-npmjs-com-发布常用操作" aria-label="Permalink to &quot;9、 npmjs.com 发布常用操作&quot;">​</a></h4><pre><code>\`\`\`javascript
    // 登录 npmjs // 输入用户名  密码和 注册邮箱
    npm login

    //打包文件（参考aehyok-form-vue3 git仓库 package.json中的scripts）
     npm run lib

    // 修改package.json2文件中的版本号后，可以发布到npmjs上
    npm publish

\`\`\`
</code></pre><h4 id="_10、清理-npm-安装包的缓存" tabindex="-1">10、清理 npm 安装包的缓存 <a class="header-anchor" href="#_10、清理-npm-安装包的缓存" aria-label="Permalink to &quot;10、清理 npm 安装包的缓存&quot;">​</a></h4><pre><code>\`\`\`javascript
    npm cache clean --force
\`\`\`
</code></pre><h4 id="_11、nvm-管理node版本" tabindex="-1">11、nvm 管理node版本 <a class="header-anchor" href="#_11、nvm-管理node版本" aria-label="Permalink to &quot;11、nvm 管理node版本&quot;">​</a></h4><pre><code>- mac下安装 https://juejin.cn/post/7028543262109630495
- window下安装 https://juejin.cn/post/6982074406273024030
- window下下载地址 https://github.com/coreybutler/nvm-windows/releases
</code></pre><h3 id="_12、-node-sass-安装一直失败-直接dart-sass替换吧" tabindex="-1">12、 node-sass 安装一直失败,直接dart-sass替换吧 <a class="header-anchor" href="#_12、-node-sass-安装一直失败-直接dart-sass替换吧" aria-label="Permalink to &quot;12、 node-sass 安装一直失败,直接dart-sass替换吧&quot;">​</a></h3><pre><code>- https://www.cnblogs.com/cilye/p/15107661.html
- https://juejin.cn/post/7023199071439421471
</code></pre><h3 id="_13、node和npm版本对应" tabindex="-1">13、node和npm版本对应 <a class="header-anchor" href="#_13、node和npm版本对应" aria-label="Permalink to &quot;13、node和npm版本对应&quot;">​</a></h3><pre><code>- https://nodejs.org/zh-cn/download/releases/
</code></pre><h3 id="_14、mac下查找ssh" tabindex="-1">14、mac下查找ssh <a class="header-anchor" href="#_14、mac下查找ssh" aria-label="Permalink to &quot;14、mac下查找ssh&quot;">​</a></h3><pre><code>\`\`\`javascript
    // https://juejin.cn/post/6844904169191522317
    cd ~/.ssh
\`\`\`    
</code></pre><h3 id="_15、登录服务器" tabindex="-1">15、登录服务器 <a class="header-anchor" href="#_15、登录服务器" aria-label="Permalink to &quot;15、登录服务器&quot;">​</a></h3><pre><code>\`\`\`javascript
    // 手工登录
    //打开ssh工具
    ssh root@139.159.245.209
    // 然后输入密码即可

    // 自动登录模式
    //https://juejin.cn/post/6844903848402927629#comment
    https://juejin.cn/post/6844903693444186119
    // 将自己本地的ssh public key 拷贝到服务器 cd ~/.ssh  authorized_keys中  拷贝粘贴
\`\`\`   
</code></pre><h3 id="_16、window下配置ls命令" tabindex="-1">16、window下配置ls命令 <a class="header-anchor" href="#_16、window下配置ls命令" aria-label="Permalink to &quot;16、window下配置ls命令&quot;">​</a></h3><pre><code>\`\`\`javascript
    //执行 
    doskey ls=dir
    //然后可以使用ls
    ls

\`\`\`
</code></pre><h3 id="_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm" tabindex="-1">17、ni工具 根据锁文件去选取相应的命令时npm、yarn还是pnpm <a class="header-anchor" href="#_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm" aria-label="Permalink to &quot;17、ni工具 根据锁文件去选取相应的命令时npm、yarn还是pnpm&quot;">​</a></h3><pre><code>- 学习了解 https://juejin.cn/post/7023910122770399269
\`\`\`javascript
npm i -g @antfu/ni

\`\`\`
</code></pre><h3 id="_18、npm-执行顺序的整理" tabindex="-1">18、npm 执行顺序的整理 <a class="header-anchor" href="#_18、npm-执行顺序的整理" aria-label="Permalink to &quot;18、npm 执行顺序的整理&quot;">​</a></h3><pre><code>- https://segmentfault.com/a/1190000008832423?utm_source=tag-newest    
</code></pre><h3 id="_19、400-错误" tabindex="-1">19、400 错误 <a class="header-anchor" href="#_19、400-错误" aria-label="Permalink to &quot;19、400 错误&quot;">​</a></h3><pre><code>- https://segmentfault.com/a/1190000041167927
- https://segmentfault.com/a/1190000041025567
</code></pre><h3 id="_20、npm包源" tabindex="-1">20、npm包源 <a class="header-anchor" href="#_20、npm包源" aria-label="Permalink to &quot;20、npm包源&quot;">​</a></h3><pre><code>- https://npmjs.com
- https://npmmirror.com/
</code></pre>`,41)]))}const u=a(t,[["render",r]]);export{m as __pageData,u as default};
