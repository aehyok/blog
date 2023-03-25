import{_ as s,o as n,c as a,N as l}from"./chunks/framework.294d0221.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"theme":"vuepress","highlight":"tomorrow-night"},"headers":[],"relativePath":"javascript/2022-08-17-nginx.md","lastUpdated":1679779555000}'),p={name:"javascript/2022-08-17-nginx.md"},e=l(`<p>携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第23天，<a href="https://juejin.cn/post/7123120819437322247" title="https://juejin.cn/post/7123120819437322247" target="_blank" rel="noreferrer">点击查看活动详情</a>。</p><blockquote><p>前言：大家好，我是 <code>那个曾经的少年回来了</code>。10年前我也曾经年轻过，如今已步入被淘汰的年龄，但如下幡然醒悟，所以活在当下，每天努力一点点，来看看2024年的时候自己会是什么样子吧，2024年的前端又会是什么样子，而2024年的中国乃至全球又会变成什么样子，如果你也有想法，那还不赶紧行动起来。期待是美好的，但是更重要的是要为美好而为之奋斗付诸于行动。</p></blockquote><p>opensuse 通过zypper可以方便的进行软件管理，类似centos的yum 软件。</p><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装nginx&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查找nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">zypper search nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过zypper安装nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">zypper install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看nginx是否安装成功,安装成功则出现版本相关信息</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="设置nginx服务自动启动" tabindex="-1">设置nginx服务自动启动 <a class="header-anchor" href="#设置nginx服务自动启动" aria-label="Permalink to &quot;设置nginx服务自动启动&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 设置nginx开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 取消开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动nginx服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止nginx服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看nginx服务的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//修改nginx配置文件等，重新载入</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="在-etc-nginx-conf-d文件夹下新建一个html-conf" tabindex="-1">在/etc/nginx/conf.d文件夹下新建一个html.conf <a class="header-anchor" href="#在-etc-nginx-conf-d文件夹下新建一个html-conf" aria-label="Permalink to &quot;在/etc/nginx/conf.d文件夹下新建一个html.conf&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 端口</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 88;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ##  前端项目打包后的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /usr/local/qiankun/blog;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 设置跨域，其实可以忽略</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 204;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>这里我直接使用我自己的项目，这个项目也在github上开源了，谁都可以看到 <a href="https://github.com/aehyok/blog" target="_blank" rel="noreferrer">https://github.com/aehyok/blog</a></p><p>当然这里面已经包含了我的半自动化脚本和全自动 github Actions yml脚本，推送代码到指定分支的时候就会自动部署。</p><h2 id="通过脚本执行打包后-自动拷贝到linux服务器" tabindex="-1">通过脚本执行打包后，自动拷贝到linux服务器 <a class="header-anchor" href="#通过脚本执行打包后-自动拷贝到linux服务器" aria-label="Permalink to &quot;通过脚本执行打包后，自动拷贝到linux服务器&quot;">​</a></h2><p>在package.json中引入zx</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i zx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后在package.json中的scripts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;buildtome&quot;: &quot;npm run build &amp;&amp; zx ./scripts/prebuild.mjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>prebuild.js文件内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { $, argv } from &quot;zx&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const isWin = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // win32 代表window平台</span></span>
<span class="line"><span style="color:#A6ACCD;">  // darwin 代表mac平台</span></span>
<span class="line"><span style="color:#A6ACCD;">  //</span></span>
<span class="line"><span style="color:#A6ACCD;">  return process.platform === &quot;win32&quot; ? true : false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = process.cwd()</span></span>
<span class="line"><span style="color:#A6ACCD;">let dir = isWin() ? &#39;/h/github/blog&#39;: root</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(process.platform, &#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let path = \`\${dir}/docs/.vitepress/dist\` </span></span>
<span class="line"><span style="color:#A6ACCD;">const gitPullInfo = await $\`scp -r \${path}/* root@81.69.241.99:/usr/local/qiankun/blog/\`</span></span>
<span class="line"><span style="color:#A6ACCD;">// const gitPullInfo = await $\`cd \${path};\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(gitPullInfo.exitCode === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;复制到linux远程服务器成功&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;发生错误&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>先来判断是在window执行的脚本，还是在mac下（linux应该也可以不过我没尝试过）两者获取路径的方式是不太一样。 然后其实就是通过scp指令，将本地打包编译好的目录，拷贝到服务器对应的目录上</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><ul><li></li></ul>`,22),o=[e];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
