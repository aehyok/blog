import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.ELrfyV9R.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-11-18-linux 监控指引.md","filePath":"article/code/2022-11-18-linux 监控指引.md","lastUpdated":1758237884000}'),l={name:"article/code/2022-11-18-linux 监控指引.md"};function t(i,s,r,o,c,h){return p(),n("div",null,s[0]||(s[0]=[e(`<ul><li><a href="https://juejin.cn/post/7165767441883398175" target="_blank" rel="noreferrer">https://juejin.cn/post/7165767441883398175</a></li></ul><h2 id="mysql查看" tabindex="-1">mysql查看 <a class="header-anchor" href="#mysql查看" aria-label="Permalink to &quot;mysql查看&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>use performance_schema;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>select * from threads;</span></span></code></pre></div><h2 id="mysql慢查询查看-mysql8版本" tabindex="-1">mysql慢查询查看（mysql8版本） <a class="header-anchor" href="#mysql慢查询查看-mysql8版本" aria-label="Permalink to &quot;mysql慢查询查看（mysql8版本）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span>// 再输入password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//切换到具体的数据库</span></span>
<span class="line"><span>use dvsdb30; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看慢查询日志是否开启  on为开启  off为关闭 默认是关闭的</span></span>
<span class="line"><span>show variables like &#39;slow_query_log&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置是否开启慢查询日期记录</span></span>
<span class="line"><span>set global slow_query_log = on;    #开启</span></span>
<span class="line"><span>set global slow_query_log = off;   #关闭</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看慢查询的阈值（默认是10秒）</span></span>
<span class="line"><span>show variables like &#39;long_query_time&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果想修改慢查询的阈值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 阈值设置为1秒</span></span>
<span class="line"><span>set long_query_time = 1;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 法制设置全局的</span></span>
<span class="line"><span>set global long_query_time = 1;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看慢查询日志文件路径</span></span>
<span class="line"><span>show variables like &#39;slow_query_log_file&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /usr/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--  这里-S参数后面跟的r是row的缩写意思是从slow log里查找按照返回行数最高排序，默认是at即平均执行时间。-r 后面跟着的数字是返回几个结果，类似于limit</span></span>
<span class="line"><span>mysqldumpslow -S r -t 2 /usr/local/aehyok/ba52a9d7d924-slow.log</span></span></code></pre></div><h2 id="慢查询-muysqldumpslow-命令的使用" tabindex="-1">慢查询 muysqldumpslow 命令的使用 <a class="header-anchor" href="#慢查询-muysqldumpslow-命令的使用" aria-label="Permalink to &quot;慢查询 muysqldumpslow 命令的使用&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844904037888851976" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904037888851976</a></p><h2 id="mysql-最大链接数" tabindex="-1">mysql 最大链接数 <a class="header-anchor" href="#mysql-最大链接数" aria-label="Permalink to &quot;mysql 最大链接数&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903876999512078#comment" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903876999512078#comment</a></p></li><li><p>当前的链接数</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>show status like &#39;Thread%&#39;;</span></span></code></pre></div><p>慢查询日志分析工具</p><p><a href="https://juejin.cn/post/7078552705421180958#heading-13" target="_blank" rel="noreferrer">https://juejin.cn/post/7078552705421180958#heading-13</a><a href="https://zhuanlan.zhihu.com/p/257975998" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/257975998</a></p><p>zypper install perl-DBI.x86_64 zypper install perl-DBD-MySQL.x86_64 zypper install perl-IO-Socket-SSL.noarch zypper install perl-Digest-MD5.x86_64 zypper install perl-TermReadKey.x86_64</p>`,13)]))}const m=a(l,[["render",t]]);export{u as __pageData,m as default};
