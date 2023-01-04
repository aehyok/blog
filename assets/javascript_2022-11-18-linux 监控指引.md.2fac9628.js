import{_ as s,o as a,c as n,a as l}from"./app.0a2a86d4.js";const h=JSON.parse('{"title":"mysql\u67E5\u770B","description":"","frontmatter":{},"headers":[{"level":2,"title":"mysql\u67E5\u770B","slug":"mysql\u67E5\u770B"},{"level":2,"title":"mysql\u6162\u67E5\u8BE2\u67E5\u770B\uFF08mysql8\u7248\u672C\uFF09","slug":"mysql\u6162\u67E5\u8BE2\u67E5\u770B\uFF08mysql8\u7248\u672C\uFF09"},{"level":2,"title":"\u6162\u67E5\u8BE2 muysqldumpslow \u547D\u4EE4\u7684\u4F7F\u7528","slug":"\u6162\u67E5\u8BE2-muysqldumpslow-\u547D\u4EE4\u7684\u4F7F\u7528"},{"level":2,"title":"mysql \u6700\u5927\u94FE\u63A5\u6570","slug":"mysql-\u6700\u5927\u94FE\u63A5\u6570"}],"relativePath":"javascript/2022-11-18-linux \u76D1\u63A7\u6307\u5F15.md","lastUpdated":1672831830000}'),e={name:"javascript/2022-11-18-linux \u76D1\u63A7\u6307\u5F15.md"},p=l(`<ul><li><a href="https://juejin.cn/post/7165767441883398175" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7165767441883398175</a></li></ul><h2 id="mysql\u67E5\u770B" tabindex="-1">mysql\u67E5\u770B <a class="header-anchor" href="#mysql\u67E5\u770B" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">use performance_schema;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">select * from threads;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mysql\u6162\u67E5\u8BE2\u67E5\u770B\uFF08mysql8\u7248\u672C\uFF09" tabindex="-1">mysql\u6162\u67E5\u8BE2\u67E5\u770B\uFF08mysql8\u7248\u672C\uFF09 <a class="header-anchor" href="#mysql\u6162\u67E5\u8BE2\u67E5\u770B\uFF08mysql8\u7248\u672C\uFF09" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u518D\u8F93\u5165password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5207\u6362\u5230\u5177\u4F53\u7684\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">use dvsdb30; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6162\u67E5\u8BE2\u65E5\u5FD7\u662F\u5426\u5F00\u542F  on\u4E3A\u5F00\u542F  off\u4E3A\u5173\u95ED \u9ED8\u8BA4\u662F\u5173\u95ED\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">show variables like &#39;slow_query_log&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u662F\u5426\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u671F\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">set global slow_query_log = on;    #\u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">set global slow_query_log = off;   #\u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6162\u67E5\u8BE2\u7684\u9608\u503C\uFF08\u9ED8\u8BA4\u662F10\u79D2\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">show variables like &#39;long_query_time&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5982\u679C\u60F3\u4FEE\u6539\u6162\u67E5\u8BE2\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u9608\u503C\u8BBE\u7F6E\u4E3A1\u79D2</span></span>
<span class="line"><span style="color:#A6ACCD;">set long_query_time = 1;   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6CD5\u5236\u8BBE\u7F6E\u5168\u5C40\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">set global long_query_time = 1;   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6162\u67E5\u8BE2\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">show variables like &#39;slow_query_log_file&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd /usr/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--  \u8FD9\u91CC-S\u53C2\u6570\u540E\u9762\u8DDF\u7684r\u662Frow\u7684\u7F29\u5199\u610F\u601D\u662F\u4ECEslow log\u91CC\u67E5\u627E\u6309\u7167\u8FD4\u56DE\u884C\u6570\u6700\u9AD8\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u662Fat\u5373\u5E73\u5747\u6267\u884C\u65F6\u95F4\u3002-r \u540E\u9762\u8DDF\u7740\u7684\u6570\u5B57\u662F\u8FD4\u56DE\u51E0\u4E2A\u7ED3\u679C\uFF0C\u7C7B\u4F3C\u4E8Elimit</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldumpslow -S r -t 2 /usr/local/aehyok/ba52a9d7d924-slow.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6162\u67E5\u8BE2-muysqldumpslow-\u547D\u4EE4\u7684\u4F7F\u7528" tabindex="-1">\u6162\u67E5\u8BE2 muysqldumpslow \u547D\u4EE4\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u6162\u67E5\u8BE2-muysqldumpslow-\u547D\u4EE4\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844904037888851976" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904037888851976</a></p><h2 id="mysql-\u6700\u5927\u94FE\u63A5\u6570" tabindex="-1">mysql \u6700\u5927\u94FE\u63A5\u6570 <a class="header-anchor" href="#mysql-\u6700\u5927\u94FE\u63A5\u6570" aria-hidden="true">#</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903876999512078#comment" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903876999512078#comment</a></p></li><li><p>\u5F53\u524D\u7684\u94FE\u63A5\u6570</p></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">show status like &#39;Thread%&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6162\u67E5\u8BE2\u65E5\u5FD7\u5206\u6790\u5DE5\u5177</p><p><a href="https://juejin.cn/post/7078552705421180958#heading-13" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7078552705421180958#heading-13</a><a href="https://zhuanlan.zhihu.com/p/257975998" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/257975998</a></p><p>zypper install perl-DBI.x86_64 zypper install perl-DBD-MySQL.x86_64 zypper install perl-IO-Socket-SSL.noarch zypper install perl-Digest-MD5.x86_64 zypper install perl-TermReadKey.x86_64</p>`,13),o=[p];function r(t,c,i,y,A,C){return a(),n("div",null,o)}var u=s(e,[["render",r]]);export{h as __pageData,u as default};
