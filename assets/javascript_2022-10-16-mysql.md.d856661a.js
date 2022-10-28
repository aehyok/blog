import{_ as s,o as a,c as n,a as l}from"./app.848cc861.js";const y=JSON.parse('{"title":"linux \u767B\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"linux \u767B\u5F55","slug":"linux-\u767B\u5F55"},{"level":2,"title":"\u8BFB\u5199\u5206\u79BB \u4E2D\u95F4\u4EF6","slug":"\u8BFB\u5199\u5206\u79BB-\u4E2D\u95F4\u4EF6"},{"level":2,"title":"sql\u4F18\u5316","slug":"sql\u4F18\u5316"},{"level":2,"title":"mycat\u8BFB\u5199\u5206\u79BB \u5206\u5E93\u5206\u8868","slug":"mycat\u8BFB\u5199\u5206\u79BB-\u5206\u5E93\u5206\u8868"},{"level":2,"title":"\u67E5\u770B\u6570\u636E\u8868\u6240\u5360\u7684\u7A7A\u95F4\u5927\u5C0F","slug":"\u67E5\u770B\u6570\u636E\u8868\u6240\u5360\u7684\u7A7A\u95F4\u5927\u5C0F"}],"relativePath":"javascript/2022-10-16-mysql.md","lastUpdated":1666873399000}'),e={name:"javascript/2022-10-16-mysql.md"},p=l(`<h2 id="linux-\u767B\u5F55" tabindex="-1">linux \u767B\u5F55 <a class="header-anchor" href="#linux-\u767B\u5F55" aria-hidden="true">#</a></h2><p>\xB7\xB7\xB7 mysql -u root -p \xB7\xB7\xB7 \u518D\u8F93\u5165\u5BC6\u7801</p><p>// \u5217\u51FA\u6240\u6709\u6570\u636E\u5E93</p><p>show databases;</p><p>// \u9009\u62E9\u6570\u636E\u5E93 use dvsdb30;</p><p>// \u67E5\u770B\u67E5\u8BE2\u8BA1\u5212 explain select ***;</p><h2 id="\u8BFB\u5199\u5206\u79BB-\u4E2D\u95F4\u4EF6" tabindex="-1">\u8BFB\u5199\u5206\u79BB \u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u8BFB\u5199\u5206\u79BB-\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u5B98\u7F51 <a href="https://github.com/sysown/proxysql" target="_blank" rel="noopener noreferrer">https://github.com/sysown/proxysql</a></li><li>\u8BE6\u7EC6\u914D\u7F6E <a href="https://www.cnblogs.com/keme/p/12290977.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/keme/p/12290977.html</a></li></ul><h2 id="sql\u4F18\u5316" tabindex="-1">sql\u4F18\u5316 <a class="header-anchor" href="#sql\u4F18\u5316" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/keme/p/9882663.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/keme/p/9882663.html</a></li></ul><h2 id="mycat\u8BFB\u5199\u5206\u79BB-\u5206\u5E93\u5206\u8868" tabindex="-1">mycat\u8BFB\u5199\u5206\u79BB \u5206\u5E93\u5206\u8868 <a class="header-anchor" href="#mycat\u8BFB\u5199\u5206\u79BB-\u5206\u5E93\u5206\u8868" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6930430192511156237" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6930430192511156237</a></li></ul><h2 id="\u67E5\u770B\u6570\u636E\u8868\u6240\u5360\u7684\u7A7A\u95F4\u5927\u5C0F" tabindex="-1">\u67E5\u770B\u6570\u636E\u8868\u6240\u5360\u7684\u7A7A\u95F4\u5927\u5C0F <a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u8868\u6240\u5360\u7684\u7A7A\u95F4\u5927\u5C0F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5148\u5207\u6362\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">use information_schema;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6570\u636E\u5E93db\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">select concat(round(sum(data_length/1024/1024),2),&#39;MB&#39;) as data </span></span>
<span class="line"><span style="color:#A6ACCD;">from tables where table_schema=&#39;dvsdb30&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u8BE2\u6240\u6709\u8868\u6240\u5360\u7A7A\u95F4\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT table_schema AS &#39;\u6570\u636E\u5E93&#39;, table_name AS &#39;\u8868\u540D&#39;, table_rows AS &#39;\u8BB0\u5F55\u6570&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE(data_length / 1024 / 1024, 2) AS &#39;\u6570\u636E\u5BB9\u91CF(MB)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE</span></span>
<span class="line"><span style="color:#A6ACCD;">	(index_length / 1024 / 1024, 2) AS &#39;\u7D22\u5F15\u5BB9\u91CF(MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">	information_schema.tables</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">	table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	-- </span></span>
<span class="line"><span style="color:#A6ACCD;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">	data_length DESC,</span></span>
<span class="line"><span style="color:#A6ACCD;">	index_length DESC;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u8BE2\u5355\u8868\u6240\u5360\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT table_schema AS &#39;\u6570\u636E\u5E93&#39;, table_name AS &#39;\u8868\u540D&#39;, table_rows AS &#39;\u8BB0\u5F55\u6570&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE(data_length / 1024 / 1024, 2) AS &#39;\u6570\u636E\u5BB9\u91CF(MB)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE</span></span>
<span class="line"><span style="color:#A6ACCD;">	(index_length / 1024 / 1024, 2) AS &#39;\u7D22\u5F15\u5BB9\u91CF(MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">	information_schema.tables</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">	table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	and table_name =&#39;CollectDataSummary&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">	data_length DESC,</span></span>
<span class="line"><span style="color:#A6ACCD;">	index_length DESC;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u8BE2\u5355\u8868\u6240\u5360\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">select </span></span>
<span class="line"><span style="color:#A6ACCD;">table_name, </span></span>
<span class="line"><span style="color:#A6ACCD;">table_rows, </span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE(data_length/1024/1024,2) as &#39;data(MB)&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">TRUNCATE(index_length/1024/1024,2) as &#39;index(MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">from information_schema.tables</span></span>
<span class="line"><span style="color:#A6ACCD;">where table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">and table_name = &#39;CollectDataSummary&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),t=[p];function o(c,r,i,A,C,h){return a(),n("div",null,t)}var _=s(e,[["render",o]]);export{y as __pageData,_ as default};
