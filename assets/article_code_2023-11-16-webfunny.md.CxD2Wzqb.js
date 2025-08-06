import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.Cpzi45lG.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-11-16-webfunny.md","filePath":"article/code/2023-11-16-webfunny.md","lastUpdated":1754476621000}'),l={name:"article/code/2023-11-16-webfunny.md"};function i(t,a,c,o,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="创建数据库的命令" tabindex="-1">创建数据库的命令 <a class="header-anchor" href="#创建数据库的命令" aria-label="Permalink to &quot;创建数据库的命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE DATABASE webfunny_db</span></span>
<span class="line"><span>DEFAULT CHARACTER SET utf8</span></span>
<span class="line"><span>DEFAULT COLLATE utf8_bin;</span></span></code></pre></div><h2 id="nginx-配置的变更" tabindex="-1">nginx 配置的变更 <a class="header-anchor" href="#nginx-配置的变更" aria-label="Permalink to &quot;nginx 配置的变更&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://www.webfunny.com/desMonitor?blogUrl=53&amp;menuKey=menu1&amp;blogKey=1-7</span></span></code></pre></div><h2 id="通过容器部署" tabindex="-1">通过容器部署 <a class="header-anchor" href="#通过容器部署" aria-label="Permalink to &quot;通过容器部署&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 根据DockFile文件创建镜像</span></span>
<span class="line"><span>docker image build -t webfunny_monitor --platform linux/aarch64 .</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>docker run -it --rm -d --name webfunny -p 8010:8010 -p 8011:8011  webfunny_monitor</span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install git</span></span></code></pre></div><h2 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;mysql&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 进入到mysql的容器</span></span>
<span class="line"><span>docker exec -it mysql /bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行登录mysql</span></span>
<span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示所有数据库</span></span>
<span class="line"><span>show databases;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 切换到webfunny_db数据库</span></span>
<span class="line"><span>use webfunny_db;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示所有表</span></span>
<span class="line"><span>show tables;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看Project表结构</span></span>
<span class="line"><span>desc Project;</span></span>
<span class="line"><span>// 或者</span></span>
<span class="line"><span>show columns from Project;</span></span></code></pre></div>`,10)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
