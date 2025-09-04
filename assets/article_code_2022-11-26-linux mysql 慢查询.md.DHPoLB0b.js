import{_ as a,c as n,o as l,ag as e}from"./chunks/framework.ELrfyV9R.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-11-26-linux mysql 慢查询.md","filePath":"article/code/2022-11-26-linux mysql 慢查询.md","lastUpdated":1756978673000}'),p={name:"article/code/2022-11-26-linux mysql 慢查询.md"};function t(i,s,o,r,c,d){return l(),n("div",null,s[0]||(s[0]=[e(`<ul><li><a href="https://juejin.cn/post/7165767441883398175" target="_blank" rel="noreferrer">https://juejin.cn/post/7165767441883398175</a></li></ul><h2 id="查看linux服务器状态" tabindex="-1">查看linux服务器状态 <a class="header-anchor" href="#查看linux服务器状态" aria-label="Permalink to &quot;查看linux服务器状态&quot;">​</a></h2><ul><li>通过指令查看服务器进程的状态（CPU 和内存占用情况）<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>top</span></span></code></pre></div>%us：表示用户进程的 CPU 使用时间（没有通过 nice 调度） %sy：表示系统进程的 CPU 使用时间，主要是内核使用。 %ni：表示用户进程中，通过 CPU 调度（nice）过的使用时间。 %id：空闲的 CPU 时间 %wa：CPU 运行时在等待 IO 的时间 %hi：CPU 处理硬中断花费的时间 %si：CPU 处理软中断花费的时间 %st：被虚拟机偷走的 CPU 时间</li></ul><p>参考 %us 的定义，对于 Linux 系统来说，MySQL 进程和它启动的所有线程都不算内核进程，因此 MySQL 的系统线程和用户线程在繁忙的时候，都会体现在 CPU 使用率的 %us 指标上。</p><ul><li>通过指令查看进程中的线程状态<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>top -Hp pid</span></span></code></pre></div></li></ul><h2 id="mysql查看" tabindex="-1">mysql查看 <a class="header-anchor" href="#mysql查看" aria-label="Permalink to &quot;mysql查看&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>use performance_schema;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>select * from threads;</span></span></code></pre></div><h2 id="mysql慢查询查看-mysql8版本" tabindex="-1">mysql慢查询查看（mysql8版本） <a class="header-anchor" href="#mysql慢查询查看-mysql8版本" aria-label="Permalink to &quot;mysql慢查询查看（mysql8版本）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span>// 再输入password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//切换到具体的数据库</span></span>
<span class="line"><span>use dvsdb30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看慢查询日志是否开启  on为开启  off为关闭 默认是关闭的</span></span>
<span class="line"><span>pp</span></span>
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
<span class="line"><span>set global long_query_time = 1;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看慢查询日志文件路径</span></span>
<span class="line"><span>show variables like &#39;slow_query_log_file&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /usr/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--  这里-S参数后面跟的r是row的缩写意思是从slow log里查找按照返回行数最高排序，默认是at即平均执行时间。-r 后面跟着的数字是返回几个结果，类似于limit</span></span>
<span class="line"><span>mysqldumpslow -S r -t 20 /usr/local/aehyok/ba52a9d7d924-slow.log</span></span></code></pre></div><ul><li>清空慢查询日志，并恢复 <a href="https://blog.csdn.net/weixin_41275260/article/details/125461408" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_41275260/article/details/125461408</a></li></ul><p>mysql&gt; FLUSH LOGS; Query OK, 0 rows affected (0.01 sec)</p><ul><li>慢查询 日志查看 <a href="https://cloud.tencent.com/developer/article/2154418" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/2154418</a><a href="https://juejin.cn/post/7033623654416007181" target="_blank" rel="noreferrer">https://juejin.cn/post/7033623654416007181</a></li><li>查看mysql 线程列表 select * from PROCESSLIST w where w.USER=&#39;dvs&#39; and w.db=&#39;dvsdb30&#39; order by TIME desc;</li></ul><p>慢查询日志文件 删除成功后 flush logs重置成功</p><h2 id="mysql-最大链接数" tabindex="-1">mysql 最大链接数 <a class="header-anchor" href="#mysql-最大链接数" aria-label="Permalink to &quot;mysql 最大链接数&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903876999512078#comment" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903876999512078#comment</a></p></li><li><p>当前的链接数</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>show status like &#39;Thread%&#39;;</span></span></code></pre></div><p>mysqladmin -u root-p flush-logs</p><p>flush failed; error: &#39;Access denied; you need (at least one of) the RELOAD privilege(s) for this operation&#39;</p><h2 id="查看mysql线程" tabindex="-1">查看mysql线程 <a class="header-anchor" href="#查看mysql线程" aria-label="Permalink to &quot;查看mysql线程&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_36551991/article/details/113665145" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_36551991/article/details/113665145</a></li></ul><h2 id="order-by-null" tabindex="-1">order by null <a class="header-anchor" href="#order-by-null" aria-label="Permalink to &quot;order by null&quot;">​</a></h2><ul><li><a href="https://www.jianshu.com/p/16f827724e8c" target="_blank" rel="noreferrer">https://www.jianshu.com/p/16f827724e8c</a></li></ul><h2 id="mysql-group-by-性能优化" tabindex="-1">mysql group by 性能优化 <a class="header-anchor" href="#mysql-group-by-性能优化" aria-label="Permalink to &quot;mysql group by 性能优化&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903696644440072" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903696644440072</a></li></ul><h2 id="慢查询几个常用的指令" tabindex="-1">慢查询几个常用的指令 <a class="header-anchor" href="#慢查询几个常用的指令" aria-label="Permalink to &quot;慢查询几个常用的指令&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844904037888851976#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904037888851976#heading-12</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>mysqldumpslow -s t -t 100 -g /data/mysql/slow.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到返回记录集最多的10条SQL：</span></span>
<span class="line"><span>mysqldumpslow -s r -t  10 /var/lib/mysql/695f5026f0f6-slow.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到访问次数最多的10条SQL：</span></span>
<span class="line"><span>mysqldumpslow -s r -t  10 /data/mysql/slow.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>得到按照时间排序的前10条里面含有左连接的SQL：</span></span>
<span class="line"><span>mysqldumpslow -s t -t 100 -g &quot;left join&quot; /var/lib/mysql/695f5026f0f6-slow.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>也支持管道符命令</span></span>
<span class="line"><span>mysqldumpslow -s t -t 10 -g &quot;left join&quot; /var/lib/mysql/695f5026f0f6-slow.log | more //分页显示</span></span></code></pre></div>`,27)]))}const m=a(p,[["render",t]]);export{h as __pageData,m as default};
