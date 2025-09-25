import{_ as a,c as n,o as p,ag as l}from"./chunks/framework.ELrfyV9R.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-12-20-mysql.md","filePath":"article/code/2022-12-20-mysql.md","lastUpdated":1758764735000}'),e={name:"article/code/2022-12-20-mysql.md"};function t(i,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[l(`<h2 id="登录mysql数据库" tabindex="-1">登录mysql数据库 <a class="header-anchor" href="#登录mysql数据库" aria-label="Permalink to &quot;登录mysql数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// -h hostname mysql数据库服务器ip</span></span>
<span class="line"><span>// -P(大写)  port端口号</span></span>
<span class="line"><span>// -u user-name 用户名</span></span>
<span class="line"><span>// -p password 密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql -h192.168.0.104 -P4006 -uroot -p</span></span></code></pre></div><h2 id="查看文件大小" tabindex="-1">查看文件大小 <a class="header-anchor" href="#查看文件大小" aria-label="Permalink to &quot;查看文件大小&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>du -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls -li </span></span>
<span class="line"><span></span></span>
<span class="line"><span>du /tmp/xxx</span></span>
<span class="line"><span>ls -li /tmp/xxx</span></span></code></pre></div><h2 id="导出表结构和数据库" tabindex="-1">导出表结构和数据库 <a class="header-anchor" href="#导出表结构和数据库" aria-label="Permalink to &quot;导出表结构和数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 只导出单个数据库的表结构</span></span>
<span class="line"><span>// -d 相当于 --no-data</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -d metadata&gt;/usr/local/sunlight/metadata.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只导出单个数据库的表数据</span></span>
<span class="line"><span>-t, --no-create-info</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -t metadata&gt;/usr/local/sunlight/metadata-data.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出单个数据库 表结构和表数据</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -B metadata&gt;/usr/local/sunlight/metadata_dd.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只导出单个数据库单个表的表结构和数据</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 dvsdb30 CollectFormMetaData&gt;/usr/local/sunlight/CollectFormMetaData.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只导出单个数据库多个表 通过空格隔开</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 dvsdb30 table1 table2 table3 table4&gt;/usr/local/sunlight/CollectFormMetaData.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据where条件导出表数据和数据</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021  --tables dvsdb30 ConfigureCache   --where=&#39;isDevelop=1 and id&gt;2&#39; &gt; /usr/local/sunlight/ak.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据where条件只导出数据</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -t --tables dvsdb30 ConfigureCache   --where=&#39;isDevelop=1 and id&gt;2&#39; &gt; /usr/local/sunlight/ak.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出单个数据库中多个表的表结构和表数据 （加上-t只导出多个表的数据）</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -p4006  -uroot -psunlight2021 dvsdb30  --tables BasicUser BasicRole  &gt; /usr/local/sunlight/test.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -p4006  -uroot -psunlight2021 -t  dvsdb30  --tables BasicUser BasicRole  &gt; /usr/local/sunlight/test1.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出所有以DAS_开头的表结构和数据(还可以压缩 |gzip &gt;&gt; 1.sql.gz)</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 dvsdb30 $(mysql -uroot -psunlight2021 -D dvsdb30 -Bse &quot;show tables like &#39;DAS_%&#39;&quot;) | gzip&gt;&gt; /usr/local/sunlight/abc.sql.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// -d只导出表结构</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -d dvsdb30 $(mysql -uroot -psunlight2021 -D dvsdb30 -Bse &quot;show tables like &#39;DAS_%&#39;&quot;) &gt;&gt; /usr/local/sunlight/abcd.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// -t 只导出表数据</span></span>
<span class="line"><span>mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -t dvsdb30 $(mysql -uroot -psunlight2021 -D dvsdb30 -Bse &quot;show tables like &#39;DAS_%&#39;&quot;) &gt;&gt; /usr/local/sunlight/abcde.sql</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// mysql命令下直接导出（注意路径好像只能是/tmp下，可以设置show variables like &#39;tmpdir&#39;;）</span></span>
<span class="line"><span>// 也可以设置目录权限 https://www.cnblogs.com/ccku/p/13560119.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看mysql进程用户</span></span>
<span class="line"><span>ps aux|grep mysqld   看到的用户是mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看目录所属权限用户 ls -ld /usr/local/sunlight </span></span>
<span class="line"><span>// 这里要给mysql用户目录权限</span></span>
<span class="line"><span>chown -R mysql.mysql /usr/local/sunlight</span></span>
<span class="line"><span>select * from ConfigureCache INTO OUTFILE &#39;/usr/local/sunlight/ConfigureCache.sql&#39;;</span></span></code></pre></div><h2 id="导入表结构和数据库" tabindex="-1">导入表结构和数据库 <a class="header-anchor" href="#导入表结构和数据库" aria-label="Permalink to &quot;导入表结构和数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//假如备份的是多个数据库，可以直接执行</span></span>
<span class="line"><span>mysql -uroot -psunlight2010 &lt;all.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 先进入mysql</span></span>
<span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span>source /usr/local/aehyok/metadata.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者直接导入</span></span>
<span class="line"><span>mysql -uroot -psunlight2010 metadata&lt;/usr/local/aehyok/metadata.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql -uroot -psunlight2010 metadata&lt;/usr/local/aehyok/CollectFormMetaData.sql</span></span></code></pre></div><h2 id="mysql全量备份和增量备份" tabindex="-1">mysql全量备份和增量备份 <a class="header-anchor" href="#mysql全量备份和增量备份" aria-label="Permalink to &quot;mysql全量备份和增量备份&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/weixin_51867896/article/details/123181512" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_51867896/article/details/123181512</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>参考如下：</span></span>
<span class="line"><span>## 如果是mariadb，可以用官方备份工具， </span></span>
<span class="line"><span>## mariabackup --backup --target-dir=$full_bk_dir --user=root </span></span>
<span class="line"><span>## 全量备份，然后 </span></span>
<span class="line"><span>## mariabackup --backup --target-dir=$inc_bk_dir --incremental-basedir=$full_bk_dir --user=root </span></span>
<span class="line"><span>## 增量备份，速度非常快，可以试一下。 里面的变量自己替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全量备份</span></span>
<span class="line"><span>mariabackup -uroot -psunlight2010 --backup --target-dir=/usr/local/aehyok/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 增量备份（依据全量备份为基础的增量）</span></span>
<span class="line"><span>mariabackup -uroot -psunlight2010 --backup --target-dir=/usr/local/aehyok/backup/inc1 --incremental-basedir=/usr/local/aehyok/backup</span></span></code></pre></div><h2 id="查看mysql线程" tabindex="-1">查看mysql线程 <a class="header-anchor" href="#查看mysql线程" aria-label="Permalink to &quot;查看mysql线程&quot;">​</a></h2><ul><li>kill 不掉线程的问题 <ul><li><a href="https://www.modb.pro/db/491961" target="_blank" rel="noreferrer">https://www.modb.pro/db/491961</a></li><li><a href="https://cloud.tencent.com/developer/article/1634259" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1634259</a></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在mysql 命令行中执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看当前用户下的线程</span></span>
<span class="line"><span>show processlist;</span></span>
<span class="line"><span>// 查看所有用户下的线程</span></span>
<span class="line"><span>show full processlist;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// mysqladmin 命令同理可以查看  我这里线程数较少，得确认是否是full  全部的线程</span></span>
<span class="line"><span>mysqladmin -h192.168.0.104 -uroot -psunlight2021  processlist;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 比如查看到上面有一个update大批量数据的 可以执行kill掉该id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 断开该线程，并停止执行其中的update语句</span></span>
<span class="line"><span>kill id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 断开当前线程中执行的sql语句，不断开线程链接</span></span>
<span class="line"><span>kill query id;</span></span></code></pre></div>`,15)]))}const m=a(e,[["render",t]]);export{h as __pageData,m as default};
