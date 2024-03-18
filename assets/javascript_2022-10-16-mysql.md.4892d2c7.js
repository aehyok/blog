import{_ as a,o as s,c as n,b as l}from"./app.39978e14.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"linux 登录","slug":"linux-登录","link":"#linux-登录","children":[]},{"level":2,"title":"读写分离 中间件","slug":"读写分离-中间件","link":"#读写分离-中间件","children":[]},{"level":2,"title":"sql优化","slug":"sql优化","link":"#sql优化","children":[]},{"level":2,"title":"mycat读写分离 分库分表","slug":"mycat读写分离-分库分表","link":"#mycat读写分离-分库分表","children":[]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[]},{"level":2,"title":"查看数据表所占的空间大小","slug":"查看数据表所占的空间大小","link":"#查看数据表所占的空间大小","children":[]},{"level":2,"title":"explain 中各个参数的详解说明","slug":"explain-中各个参数的详解说明","link":"#explain-中各个参数的详解说明","children":[]},{"level":2,"title":"mysql中的各种函数","slug":"mysql中的各种函数","link":"#mysql中的各种函数","children":[]},{"level":2,"title":"union all","slug":"union-all","link":"#union-all","children":[]}],"relativePath":"javascript/2022-10-16-mysql.md","lastUpdated":1710768133000}'),e={name:"javascript/2022-10-16-mysql.md"},p=l(`<h2 id="linux-登录" tabindex="-1">linux 登录 <a class="header-anchor" href="#linux-登录" aria-hidden="true">#</a></h2><p>··· mysql -u root -p ··· 再输入密码</p><p>// 列出所有数据库</p><p>show databases;</p><p>// 选择数据库 use dvsdb30;</p><p>// 查看查询计划 explain select ***;</p><h2 id="读写分离-中间件" tabindex="-1">读写分离 中间件 <a class="header-anchor" href="#读写分离-中间件" aria-hidden="true">#</a></h2><ul><li>官网 <a href="https://github.com/sysown/proxysql" target="_blank" rel="noreferrer">https://github.com/sysown/proxysql</a></li><li>详细配置 <a href="https://www.cnblogs.com/keme/p/12290977.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/keme/p/12290977.html</a></li></ul><h2 id="sql优化" tabindex="-1">sql优化 <a class="header-anchor" href="#sql优化" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/keme/p/9882663.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/keme/p/9882663.html</a></li></ul><h2 id="mycat读写分离-分库分表" tabindex="-1">mycat读写分离 分库分表 <a class="header-anchor" href="#mycat读写分离-分库分表" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6930430192511156237" target="_blank" rel="noreferrer">https://juejin.cn/post/6930430192511156237</a></li></ul><h2 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-hidden="true">#</a></h2><ul><li><p><a href="https://juejin.cn/post/7022138503115276324" target="_blank" rel="noreferrer">https://juejin.cn/post/7022138503115276324</a></p><ul><li>unique 唯一索引 不会重复的字段</li><li>normal 普通索引</li><li>fulltext 全文索引</li><li>spatial 空间索引</li></ul></li><li><p>联合索引</p><ul><li>使用的时候必须要有第一个字段的查询，否则联合索引会失效</li></ul></li></ul><h2 id="查看数据表所占的空间大小" tabindex="-1">查看数据表所占的空间大小 <a class="header-anchor" href="#查看数据表所占的空间大小" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 先切换数据库</span></span>
<span class="line"><span style="color:#babed8;">use information_schema;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看数据库db的大小</span></span>
<span class="line"><span style="color:#babed8;">select concat(round(sum(data_length/1024/1024),2),&#39;MB&#39;) as data </span></span>
<span class="line"><span style="color:#babed8;">from tables where table_schema=&#39;dvsdb30&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查询所有表所占空间大小</span></span>
<span class="line"><span style="color:#babed8;">SELECT table_schema AS &#39;数据库&#39;, table_name AS &#39;表名&#39;, table_rows AS &#39;记录数&#39;,</span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE(data_length / 1024 / 1024, 2) AS &#39;数据容量(MB)&#39;,</span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE</span></span>
<span class="line"><span style="color:#babed8;">	(index_length / 1024 / 1024, 2) AS &#39;索引容量(MB)&#39;</span></span>
<span class="line"><span style="color:#babed8;">FROM</span></span>
<span class="line"><span style="color:#babed8;">	information_schema.tables</span></span>
<span class="line"><span style="color:#babed8;">WHERE</span></span>
<span class="line"><span style="color:#babed8;">	table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#babed8;">	-- </span></span>
<span class="line"><span style="color:#babed8;">ORDER BY</span></span>
<span class="line"><span style="color:#babed8;">	data_length DESC,</span></span>
<span class="line"><span style="color:#babed8;">	index_length DESC;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查询单表所占空间</span></span>
<span class="line"><span style="color:#babed8;">SELECT table_schema AS &#39;数据库&#39;, table_name AS &#39;表名&#39;, table_rows AS &#39;记录数&#39;,</span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE(data_length / 1024 / 1024, 2) AS &#39;数据容量(MB)&#39;,</span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE</span></span>
<span class="line"><span style="color:#babed8;">	(index_length / 1024 / 1024, 2) AS &#39;索引容量(MB)&#39;</span></span>
<span class="line"><span style="color:#babed8;">FROM</span></span>
<span class="line"><span style="color:#babed8;">	information_schema.tables</span></span>
<span class="line"><span style="color:#babed8;">WHERE</span></span>
<span class="line"><span style="color:#babed8;">	table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#babed8;">	</span></span>
<span class="line"><span style="color:#babed8;">	and table_name =&#39;CollectDataSummary&#39;</span></span>
<span class="line"><span style="color:#babed8;">ORDER BY</span></span>
<span class="line"><span style="color:#babed8;">	data_length DESC,</span></span>
<span class="line"><span style="color:#babed8;">	index_length DESC;  </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查询单表所占空间</span></span>
<span class="line"><span style="color:#babed8;">select </span></span>
<span class="line"><span style="color:#babed8;">table_name, </span></span>
<span class="line"><span style="color:#babed8;">table_rows, </span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE(data_length/1024/1024,2) as &#39;data(MB)&#39;, </span></span>
<span class="line"><span style="color:#babed8;">TRUNCATE(index_length/1024/1024,2) as &#39;index(MB)&#39;</span></span>
<span class="line"><span style="color:#babed8;">from information_schema.tables</span></span>
<span class="line"><span style="color:#babed8;">where table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#babed8;">and table_name = &#39;CollectDataSummary&#39; </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li><p>RLink</p><ul><li><a href="http://www.yiidian.com/mysql/mysql-rlike-operator.html" target="_blank" rel="noreferrer">http://www.yiidian.com/mysql/mysql-rlike-operator.html</a></li></ul></li><li><p>查看mysql事务的级别</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">show variables like &#39;%tx_isolation%&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="explain-中各个参数的详解说明" tabindex="-1">explain 中各个参数的详解说明 <a class="header-anchor" href="#explain-中各个参数的详解说明" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7164652941159170078" target="_blank" rel="noreferrer">https://juejin.cn/post/7164652941159170078</a></li></ul><h2 id="mysql中的各种函数" tabindex="-1">mysql中的各种函数 <a class="header-anchor" href="#mysql中的各种函数" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7163148228420960263" target="_blank" rel="noreferrer">https://juejin.cn/post/7163148228420960263</a></li></ul><h2 id="union-all" tabindex="-1">union all <a class="header-anchor" href="#union-all" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903737228541965" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903737228541965</a></li></ul>`,24),t=[p];function i(r,o,c,d,b,h){return s(),n("div",null,t)}const m=a(e,[["render",i]]);export{y as __pageData,m as default};
