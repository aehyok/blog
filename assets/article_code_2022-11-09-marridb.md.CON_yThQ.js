import{_ as s,c as n,o as e,ag as l}from"./chunks/framework.mJdS8VI0.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-11-09-marridb.md","filePath":"article/code/2022-11-09-marridb.md","lastUpdated":1750753818000}'),i={name:"article/code/2022-11-09-marridb.md"};function p(r,a,t,d,c,o){return e(),n("div",null,a[0]||(a[0]=[l(`<h2 id="mariadb版本列表" tabindex="-1">mariadb版本列表 <a class="header-anchor" href="#mariadb版本列表" aria-label="Permalink to &quot;mariadb版本列表&quot;">​</a></h2><ul><li><a href="https://mariadb.org/mariadb/all-releases/" target="_blank" rel="noreferrer">https://mariadb.org/mariadb/all-releases/</a></li></ul><h2 id="mysql版本列表" tabindex="-1">mysql版本列表 <a class="header-anchor" href="#mysql版本列表" aria-label="Permalink to &quot;mysql版本列表&quot;">​</a></h2><ul><li><a href="http://mirrors.sohu.com/mysql/" target="_blank" rel="noreferrer">http://mirrors.sohu.com/mysql/</a></li></ul><h2 id="mariadb和mysql版本对应关系列表" tabindex="-1">mariadb和mysql版本对应关系列表 <a class="header-anchor" href="#mariadb和mysql版本对应关系列表" aria-label="Permalink to &quot;mariadb和mysql版本对应关系列表&quot;">​</a></h2><ul><li><a href="https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/" target="_blank" rel="noreferrer">https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/</a></li></ul><h2 id="systemctl" tabindex="-1">systemctl <a class="header-anchor" href="#systemctl" aria-label="Permalink to &quot;systemctl&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /etc/systemd/system</span></span></code></pre></div><h2 id="mariadb-安装目录" tabindex="-1">mariadb 安装目录 <a class="header-anchor" href="#mariadb-安装目录" aria-label="Permalink to &quot;mariadb 安装目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>whereis mariadb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/share/mariadb</span></span></code></pre></div><h2 id="查找mariadb安装目录" tabindex="-1">查找mariadb安装目录 <a class="header-anchor" href="#查找mariadb安装目录" aria-label="Permalink to &quot;查找mariadb安装目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>find / -name mariadb;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find / -name mysql;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>find / -name my.cnf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库文件目录</span></span>
<span class="line"><span>/var/lib/mysql</span></span></code></pre></div><h2 id="卸载mariadb" tabindex="-1">卸载mariadb <a class="header-anchor" href="#卸载mariadb" aria-label="Permalink to &quot;卸载mariadb&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 卸载mariadb;</span></span>
<span class="line"><span>zypper remove mariadb;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 移除配置文件</span></span>
<span class="line"><span>rm -rf /etc/my.cnf</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看关联</span></span>
<span class="line"><span>rpm -qa | grep mariadb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 并移除关联</span></span>
<span class="line"><span>sudo rpm -e mariadb-errormessages-10.2.25-lp150.2.16.1.noarch</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命令直接移除msyql相关</span></span>
<span class="line"><span>find / -name mysql | xargs rm -rf</span></span></code></pre></div><h2 id="count计算" tabindex="-1">count计算 <a class="header-anchor" href="#count计算" aria-label="Permalink to &quot;count计算&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/EDDYCJY/article/details/125688558" target="_blank" rel="noreferrer">https://blog.csdn.net/EDDYCJY/article/details/125688558</a></li></ul><h2 id="cpu爆满" tabindex="-1">CPU爆满 <a class="header-anchor" href="#cpu爆满" aria-label="Permalink to &quot;CPU爆满&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6889327678042669070" target="_blank" rel="noreferrer">https://juejin.cn/post/6889327678042669070</a></li></ul>`,18)]))}const b=s(i,[["render",p]]);export{h as __pageData,b as default};
