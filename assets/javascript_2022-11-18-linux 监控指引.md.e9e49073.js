import{_ as s,o as a,c as n,b as l}from"./app.de907897.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"mysql查看","slug":"mysql查看","link":"#mysql查看","children":[]},{"level":2,"title":"mysql慢查询查看（mysql8版本）","slug":"mysql慢查询查看-mysql8版本","link":"#mysql慢查询查看-mysql8版本","children":[]},{"level":2,"title":"慢查询 muysqldumpslow 命令的使用","slug":"慢查询-muysqldumpslow-命令的使用","link":"#慢查询-muysqldumpslow-命令的使用","children":[]},{"level":2,"title":"mysql 最大链接数","slug":"mysql-最大链接数","link":"#mysql-最大链接数","children":[]}],"relativePath":"javascript/2022-11-18-linux 监控指引.md","lastUpdated":1712628734000}'),e={name:"javascript/2022-11-18-linux 监控指引.md"},p=l(`<ul><li><a href="https://juejin.cn/post/7165767441883398175" target="_blank" rel="noreferrer">https://juejin.cn/post/7165767441883398175</a></li></ul><h2 id="mysql查看" tabindex="-1">mysql查看 <a class="header-anchor" href="#mysql查看" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">use performance_schema;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">select * from threads;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql慢查询查看-mysql8版本" tabindex="-1">mysql慢查询查看（mysql8版本） <a class="header-anchor" href="#mysql慢查询查看-mysql8版本" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#babed8;">// 再输入password</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//切换到具体的数据库</span></span>
<span class="line"><span style="color:#babed8;">use dvsdb30; </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看慢查询日志是否开启  on为开启  off为关闭 默认是关闭的</span></span>
<span class="line"><span style="color:#babed8;">show variables like &#39;slow_query_log&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置是否开启慢查询日期记录</span></span>
<span class="line"><span style="color:#babed8;">set global slow_query_log = on;    #开启</span></span>
<span class="line"><span style="color:#babed8;">set global slow_query_log = off;   #关闭</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看慢查询的阈值（默认是10秒）</span></span>
<span class="line"><span style="color:#babed8;">show variables like &#39;long_query_time&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 如果想修改慢查询的阈值</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 阈值设置为1秒</span></span>
<span class="line"><span style="color:#babed8;">set long_query_time = 1;   </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 法制设置全局的</span></span>
<span class="line"><span style="color:#babed8;">set global long_query_time = 1;   </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看慢查询日志文件路径</span></span>
<span class="line"><span style="color:#babed8;">show variables like &#39;slow_query_log_file&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd /usr/bin</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">--  这里-S参数后面跟的r是row的缩写意思是从slow log里查找按照返回行数最高排序，默认是at即平均执行时间。-r 后面跟着的数字是返回几个结果，类似于limit</span></span>
<span class="line"><span style="color:#babed8;">mysqldumpslow -S r -t 2 /usr/local/aehyok/ba52a9d7d924-slow.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="慢查询-muysqldumpslow-命令的使用" tabindex="-1">慢查询 muysqldumpslow 命令的使用 <a class="header-anchor" href="#慢查询-muysqldumpslow-命令的使用" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844904037888851976" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904037888851976</a></p><h2 id="mysql-最大链接数" tabindex="-1">mysql 最大链接数 <a class="header-anchor" href="#mysql-最大链接数" aria-hidden="true">#</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903876999512078#comment" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903876999512078#comment</a></p></li><li><p>当前的链接数</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">show status like &#39;Thread%&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>慢查询日志分析工具</p><p><a href="https://juejin.cn/post/7078552705421180958#heading-13" target="_blank" rel="noreferrer">https://juejin.cn/post/7078552705421180958#heading-13</a><a href="https://zhuanlan.zhihu.com/p/257975998" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/257975998</a></p><p>zypper install perl-DBI.x86_64 zypper install perl-DBD-MySQL.x86_64 zypper install perl-IO-Socket-SSL.noarch zypper install perl-Digest-MD5.x86_64 zypper install perl-TermReadKey.x86_64</p>`,13),o=[p];function t(r,c,i,d,b,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{m as __pageData,u as default};
