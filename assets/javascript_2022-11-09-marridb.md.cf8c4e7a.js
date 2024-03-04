import{_ as a,o as s,c as e,b as n}from"./app.39978e14.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"mariadb版本列表","slug":"mariadb版本列表","link":"#mariadb版本列表","children":[]},{"level":2,"title":"mysql版本列表","slug":"mysql版本列表","link":"#mysql版本列表","children":[]},{"level":2,"title":"mariadb和mysql版本对应关系列表","slug":"mariadb和mysql版本对应关系列表","link":"#mariadb和mysql版本对应关系列表","children":[]},{"level":2,"title":"systemctl","slug":"systemctl","link":"#systemctl","children":[]},{"level":2,"title":"mariadb 安装目录","slug":"mariadb-安装目录","link":"#mariadb-安装目录","children":[]},{"level":2,"title":"查找mariadb安装目录","slug":"查找mariadb安装目录","link":"#查找mariadb安装目录","children":[]},{"level":2,"title":"卸载mariadb","slug":"卸载mariadb","link":"#卸载mariadb","children":[]},{"level":2,"title":"count计算","slug":"count计算","link":"#count计算","children":[]},{"level":2,"title":"CPU爆满","slug":"cpu爆满","link":"#cpu爆满","children":[]}],"relativePath":"javascript/2022-11-09-marridb.md","lastUpdated":1709512763000}'),l={name:"javascript/2022-11-09-marridb.md"},r=n(`<h2 id="mariadb版本列表" tabindex="-1">mariadb版本列表 <a class="header-anchor" href="#mariadb版本列表" aria-hidden="true">#</a></h2><ul><li><a href="https://mariadb.org/mariadb/all-releases/" target="_blank" rel="noreferrer">https://mariadb.org/mariadb/all-releases/</a></li></ul><h2 id="mysql版本列表" tabindex="-1">mysql版本列表 <a class="header-anchor" href="#mysql版本列表" aria-hidden="true">#</a></h2><ul><li><a href="http://mirrors.sohu.com/mysql/" target="_blank" rel="noreferrer">http://mirrors.sohu.com/mysql/</a></li></ul><h2 id="mariadb和mysql版本对应关系列表" tabindex="-1">mariadb和mysql版本对应关系列表 <a class="header-anchor" href="#mariadb和mysql版本对应关系列表" aria-hidden="true">#</a></h2><ul><li><a href="https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/" target="_blank" rel="noreferrer">https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/</a></li></ul><h2 id="systemctl" tabindex="-1">systemctl <a class="header-anchor" href="#systemctl" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cd /etc/systemd/system</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mariadb-安装目录" tabindex="-1">mariadb 安装目录 <a class="header-anchor" href="#mariadb-安装目录" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">whereis mariadb</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">/usr/share/mariadb</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查找mariadb安装目录" tabindex="-1">查找mariadb安装目录 <a class="header-anchor" href="#查找mariadb安装目录" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">find / -name mariadb;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">find / -name mysql;</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;">find / -name my.cnf;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 数据库文件目录</span></span>
<span class="line"><span style="color:#babed8;">/var/lib/mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="卸载mariadb" tabindex="-1">卸载mariadb <a class="header-anchor" href="#卸载mariadb" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 卸载mariadb;</span></span>
<span class="line"><span style="color:#babed8;">zypper remove mariadb;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 移除配置文件</span></span>
<span class="line"><span style="color:#babed8;">rm -rf /etc/my.cnf</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看关联</span></span>
<span class="line"><span style="color:#babed8;">rpm -qa | grep mariadb</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 并移除关联</span></span>
<span class="line"><span style="color:#babed8;">sudo rpm -e mariadb-errormessages-10.2.25-lp150.2.16.1.noarch</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 命令直接移除msyql相关</span></span>
<span class="line"><span style="color:#babed8;">find / -name mysql | xargs rm -rf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="count计算" tabindex="-1">count计算 <a class="header-anchor" href="#count计算" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/EDDYCJY/article/details/125688558" target="_blank" rel="noreferrer">https://blog.csdn.net/EDDYCJY/article/details/125688558</a></li></ul><h2 id="cpu爆满" tabindex="-1">CPU爆满 <a class="header-anchor" href="#cpu爆满" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6889327678042669070" target="_blank" rel="noreferrer">https://juejin.cn/post/6889327678042669070</a></li></ul>`,18),i=[r];function p(t,d,c,o,b,m){return s(),e("div",null,i)}const u=a(l,[["render",p]]);export{y as __pageData,u as default};
