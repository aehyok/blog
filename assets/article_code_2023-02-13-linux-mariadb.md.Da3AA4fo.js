import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.Cpzi45lG.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-02-13-linux-mariadb.md","filePath":"article/code/2023-02-13-linux-mariadb.md","lastUpdated":1756696176000}'),i={name:"article/code/2023-02-13-linux-mariadb.md"};function l(t,a,c,r,d,o){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ip 用户名 密码</span></span>
<span class="line"><span>175.178.60.76 root  Hk</span></span></code></pre></div><h2 id="设置mariadb源" tabindex="-1">设置mariadb源 <a class="header-anchor" href="#设置mariadb源" aria-label="Permalink to &quot;设置mariadb源&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /etc/yum.repos.d</span></span>
<span class="line"><span>vim Mariadb.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mariadb]</span></span>
<span class="line"><span>name = MariaDB</span></span>
<span class="line"><span>baseurl = https://mirrors.aliyun.com/mariadb/yum/10.4/centos7-amd64</span></span>
<span class="line"><span>gpgkey = https://mirrors.aliyun.com/mariadb/yum/RPM-GPG-KEY-MariaDB</span></span>
<span class="line"><span>gpgcheck = 1</span></span></code></pre></div><h2 id="mariadb" tabindex="-1">mariadb <a class="header-anchor" href="#mariadb" aria-label="Permalink to &quot;mariadb&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install MariaDB-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl enable mariadb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl start mariadb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置密码 M9</span></span>
<span class="line"><span>mysql_secure_installation</span></span></code></pre></div><h2 id="可能会乱码设置" tabindex="-1">可能会乱码设置 <a class="header-anchor" href="#可能会乱码设置" aria-label="Permalink to &quot;可能会乱码设置&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7096757877909487629" target="_blank" rel="noreferrer">https://juejin.cn/post/7096757877909487629</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>utf8mb4</span></span>
<span class="line"><span>utf8mb4_unicode_ci</span></span></code></pre></div>`,9)]))}const m=s(i,[["render",l]]);export{u as __pageData,m as default};
