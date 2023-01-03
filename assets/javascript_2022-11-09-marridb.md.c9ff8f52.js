import{_ as a,o as s,c as n,a as e}from"./app.4e2aadac.js";const A=JSON.parse('{"title":"mariadb\u7248\u672C\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"mariadb\u7248\u672C\u5217\u8868","slug":"mariadb\u7248\u672C\u5217\u8868"},{"level":2,"title":"mysql\u7248\u672C\u5217\u8868","slug":"mysql\u7248\u672C\u5217\u8868"},{"level":2,"title":"mariadb\u548Cmysql\u7248\u672C\u5BF9\u5E94\u5173\u7CFB\u5217\u8868","slug":"mariadb\u548Cmysql\u7248\u672C\u5BF9\u5E94\u5173\u7CFB\u5217\u8868"},{"level":2,"title":"systemctl","slug":"systemctl"},{"level":2,"title":"mariadb \u5B89\u88C5\u76EE\u5F55","slug":"mariadb-\u5B89\u88C5\u76EE\u5F55"},{"level":2,"title":"\u67E5\u627Emariadb\u5B89\u88C5\u76EE\u5F55","slug":"\u67E5\u627Emariadb\u5B89\u88C5\u76EE\u5F55"},{"level":2,"title":"\u5378\u8F7Dmariadb","slug":"\u5378\u8F7Dmariadb"},{"level":2,"title":"count\u8BA1\u7B97","slug":"count\u8BA1\u7B97"},{"level":2,"title":"CPU\u7206\u6EE1","slug":"cpu\u7206\u6EE1"}],"relativePath":"javascript/2022-11-09-marridb.md","lastUpdated":1672712388000}'),l={name:"javascript/2022-11-09-marridb.md"},r=e(`<h2 id="mariadb\u7248\u672C\u5217\u8868" tabindex="-1">mariadb\u7248\u672C\u5217\u8868 <a class="header-anchor" href="#mariadb\u7248\u672C\u5217\u8868" aria-hidden="true">#</a></h2><ul><li><a href="https://mariadb.org/mariadb/all-releases/" target="_blank" rel="noopener noreferrer">https://mariadb.org/mariadb/all-releases/</a></li></ul><h2 id="mysql\u7248\u672C\u5217\u8868" tabindex="-1">mysql\u7248\u672C\u5217\u8868 <a class="header-anchor" href="#mysql\u7248\u672C\u5217\u8868" aria-hidden="true">#</a></h2><ul><li><a href="http://mirrors.sohu.com/mysql/" target="_blank" rel="noopener noreferrer">http://mirrors.sohu.com/mysql/</a></li></ul><h2 id="mariadb\u548Cmysql\u7248\u672C\u5BF9\u5E94\u5173\u7CFB\u5217\u8868" tabindex="-1">mariadb\u548Cmysql\u7248\u672C\u5BF9\u5E94\u5173\u7CFB\u5217\u8868 <a class="header-anchor" href="#mariadb\u548Cmysql\u7248\u672C\u5BF9\u5E94\u5173\u7CFB\u5217\u8868" aria-hidden="true">#</a></h2><ul><li><a href="https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/" target="_blank" rel="noopener noreferrer">https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/</a></li></ul><h2 id="systemctl" tabindex="-1">systemctl <a class="header-anchor" href="#systemctl" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cd /etc/systemd/system</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mariadb-\u5B89\u88C5\u76EE\u5F55" tabindex="-1">mariadb \u5B89\u88C5\u76EE\u5F55 <a class="header-anchor" href="#mariadb-\u5B89\u88C5\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">whereis mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u627Emariadb\u5B89\u88C5\u76EE\u5F55" tabindex="-1">\u67E5\u627Emariadb\u5B89\u88C5\u76EE\u5F55 <a class="header-anchor" href="#\u67E5\u627Emariadb\u5B89\u88C5\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">find / -name mariadb;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name mysql;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name my.cnf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6570\u636E\u5E93\u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">/var/lib/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5378\u8F7Dmariadb" tabindex="-1">\u5378\u8F7Dmariadb <a class="header-anchor" href="#\u5378\u8F7Dmariadb" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5378\u8F7Dmariadb;</span></span>
<span class="line"><span style="color:#A6ACCD;">zypper remove mariadb;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u79FB\u9664\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf /etc/my.cnf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u5173\u8054</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa | grep mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5E76\u79FB\u9664\u5173\u8054</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo rpm -e mariadb-errormessages-10.2.25-lp150.2.16.1.noarch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u547D\u4EE4\u76F4\u63A5\u79FB\u9664msyql\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name mysql | xargs rm -rf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="count\u8BA1\u7B97" tabindex="-1">count\u8BA1\u7B97 <a class="header-anchor" href="#count\u8BA1\u7B97" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/EDDYCJY/article/details/125688558" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/EDDYCJY/article/details/125688558</a></li></ul><h2 id="cpu\u7206\u6EE1" tabindex="-1">CPU\u7206\u6EE1 <a class="header-anchor" href="#cpu\u7206\u6EE1" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6889327678042669070" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6889327678042669070</a></li></ul>`,18),p=[r];function i(t,c,o,d,m,C){return s(),n("div",null,p)}var y=a(l,[["render",i]]);export{A as __pageData,y as default};
