import{_ as s,o as n,c as a,b as e}from"./app.54d7eac7.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"theme":"vuepress","highlight":"tomorrow-night"},"headers":[{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"设置nginx服务自动启动","slug":"设置nginx服务自动启动","link":"#设置nginx服务自动启动","children":[]},{"level":2,"title":"在/etc/nginx/conf.d文件夹下新建一个html.conf","slug":"在-etc-nginx-conf-d文件夹下新建一个html-conf","link":"#在-etc-nginx-conf-d文件夹下新建一个html-conf","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"通过脚本执行打包后，自动拷贝到linux服务器","slug":"通过脚本执行打包后-自动拷贝到linux服务器","link":"#通过脚本执行打包后-自动拷贝到linux服务器","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"javascript/2022-08-17-nginx.md","lastUpdated":1709035351000}'),l={name:"javascript/2022-08-17-nginx.md"},p=e(`<p>携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第23天，<a href="https://juejin.cn/post/7123120819437322247" title="https://juejin.cn/post/7123120819437322247" target="_blank" rel="noreferrer">点击查看活动详情</a>。</p><blockquote><p>前言：大家好，我是 <code>那个曾经的少年回来了</code>。10年前我也曾经年轻过，如今已步入被淘汰的年龄，但如下幡然醒悟，所以活在当下，每天努力一点点，来看看2024年的时候自己会是什么样子吧，2024年的前端又会是什么样子，而2024年的中国乃至全球又会变成什么样子，如果你也有想法，那还不赶紧行动起来。期待是美好的，但是更重要的是要为美好而为之奋斗付诸于行动。</p></blockquote><p>opensuse 通过zypper可以方便的进行软件管理，类似centos的yum 软件。</p><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 查找nginx</span></span>
<span class="line"><span style="color:#babed8;">zypper search nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 通过zypper安装nginx</span></span>
<span class="line"><span style="color:#babed8;">zypper install nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看nginx是否安装成功,安装成功则出现版本相关信息</span></span>
<span class="line"><span style="color:#babed8;">nginx -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="设置nginx服务自动启动" tabindex="-1">设置nginx服务自动启动 <a class="header-anchor" href="#设置nginx服务自动启动" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 设置nginx开机自动启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 取消开机自动启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl disable nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 启动nginx服务</span></span>
<span class="line"><span style="color:#babed8;">systemctl start nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 停止nginx服务</span></span>
<span class="line"><span style="color:#babed8;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看nginx服务的状态</span></span>
<span class="line"><span style="color:#babed8;">systemctl status nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//修改nginx配置文件等，重新载入</span></span>
<span class="line"><span style="color:#babed8;">nginx -s reload</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="在-etc-nginx-conf-d文件夹下新建一个html-conf" tabindex="-1">在/etc/nginx/conf.d文件夹下新建一个html.conf <a class="header-anchor" href="#在-etc-nginx-conf-d文件夹下新建一个html-conf" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">    ## 端口</span></span>
<span class="line"><span style="color:#babed8;">    listen 88;</span></span>
<span class="line"><span style="color:#babed8;">    ##  前端项目打包后的路径</span></span>
<span class="line"><span style="color:#babed8;">    root /usr/local/qiankun/blog;</span></span>
<span class="line"><span style="color:#babed8;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#babed8;">    ## 设置跨域，其实可以忽略</span></span>
<span class="line"><span style="color:#babed8;">    add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#babed8;">    add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#babed8;">        return 204;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    location / {</span></span>
<span class="line"><span style="color:#babed8;">      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-hidden="true">#</a></h2><p>这里我直接使用我自己的项目，这个项目也在github上开源了，谁都可以看到 <a href="https://github.com/aehyok/blog" target="_blank" rel="noreferrer">https://github.com/aehyok/blog</a></p><p>当然这里面已经包含了我的半自动化脚本和全自动 github Actions yml脚本，推送代码到指定分支的时候就会自动部署。</p><h2 id="通过脚本执行打包后-自动拷贝到linux服务器" tabindex="-1">通过脚本执行打包后，自动拷贝到linux服务器 <a class="header-anchor" href="#通过脚本执行打包后-自动拷贝到linux服务器" aria-hidden="true">#</a></h2><p>在package.json中引入zx</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">npm i zx</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>然后在package.json中的scripts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">&quot;buildtome&quot;: &quot;npm run build &amp;&amp; zx ./scripts/prebuild.mjs&quot;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>prebuild.js文件内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">import { $, argv } from &quot;zx&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const isWin = () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  // win32 代表window平台</span></span>
<span class="line"><span style="color:#babed8;">  // darwin 代表mac平台</span></span>
<span class="line"><span style="color:#babed8;">  //</span></span>
<span class="line"><span style="color:#babed8;">  return process.platform === &quot;win32&quot; ? true : false;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const root = process.cwd()</span></span>
<span class="line"><span style="color:#babed8;">let dir = isWin() ? &#39;/h/github/blog&#39;: root</span></span>
<span class="line"><span style="color:#babed8;">console.log(process.platform, &#39;root&#39;)</span></span>
<span class="line"><span style="color:#babed8;">let path = \`\${dir}/docs/.vitepress/dist\` </span></span>
<span class="line"><span style="color:#babed8;">const gitPullInfo = await $\`scp -r \${path}/* root@81.69.241.99:/usr/local/qiankun/blog/\`</span></span>
<span class="line"><span style="color:#babed8;">// const gitPullInfo = await $\`cd \${path};\`;</span></span>
<span class="line"><span style="color:#babed8;">if(gitPullInfo.exitCode === 0) {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;复制到linux远程服务器成功&#39;)</span></span>
<span class="line"><span style="color:#babed8;">} else {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;发生错误&#39;)</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>先来判断是在window执行的脚本，还是在mac下（linux应该也可以不过我没尝试过）两者获取路径的方式是不太一样。 然后其实就是通过scp指令，将本地打包编译好的目录，拷贝到服务器对应的目录上</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><ul><li></li></ul>`,22),o=[p];function t(c,i,r,d,b,h){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
