import{_ as s,o as a,c as n,b as e}from"./app.de907897.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建数据库的命令","slug":"创建数据库的命令","link":"#创建数据库的命令","children":[]},{"level":2,"title":"nginx 配置的变更","slug":"nginx-配置的变更","link":"#nginx-配置的变更","children":[]},{"level":2,"title":"通过容器部署","slug":"通过容器部署","link":"#通过容器部署","children":[]},{"level":2,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":2,"title":"mysql","slug":"mysql","link":"#mysql","children":[]}],"relativePath":"javascript/2023-11-16-webfunny.md","lastUpdated":1712629544000}'),l={name:"javascript/2023-11-16-webfunny.md"},p=e(`<h2 id="创建数据库的命令" tabindex="-1">创建数据库的命令 <a class="header-anchor" href="#创建数据库的命令" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">CREATE DATABASE webfunny_db</span></span>
<span class="line"><span style="color:#babed8;">DEFAULT CHARACTER SET utf8</span></span>
<span class="line"><span style="color:#babed8;">DEFAULT COLLATE utf8_bin;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="nginx-配置的变更" tabindex="-1">nginx 配置的变更 <a class="header-anchor" href="#nginx-配置的变更" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://www.webfunny.com/desMonitor?blogUrl=53&amp;menuKey=menu1&amp;blogKey=1-7</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="通过容器部署" tabindex="-1">通过容器部署 <a class="header-anchor" href="#通过容器部署" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 根据DockFile文件创建镜像</span></span>
<span class="line"><span style="color:#babed8;">docker image build -t webfunny_monitor --platform linux/aarch64 .</span></span>
<span class="line"><span style="color:#babed8;">//</span></span>
<span class="line"><span style="color:#babed8;">docker run -it --rm -d --name webfunny -p 8010:8010 -p 8011:8011  webfunny_monitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">yum install git</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 进入到mysql的容器</span></span>
<span class="line"><span style="color:#babed8;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 执行登录mysql</span></span>
<span class="line"><span style="color:#babed8;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 显示所有数据库</span></span>
<span class="line"><span style="color:#babed8;">show databases;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 切换到webfunny_db数据库</span></span>
<span class="line"><span style="color:#babed8;">use webfunny_db;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 显示所有表</span></span>
<span class="line"><span style="color:#babed8;">show tables;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查看Project表结构</span></span>
<span class="line"><span style="color:#babed8;">desc Project;</span></span>
<span class="line"><span style="color:#babed8;">// 或者</span></span>
<span class="line"><span style="color:#babed8;">show columns from Project;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,10),t=[p];function o(c,i,d,r,b,y){return a(),n("div",null,t)}const g=s(l,[["render",o]]);export{u as __pageData,g as default};
