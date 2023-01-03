import{_ as s,o as a,c as n,a as l}from"./app.4e2aadac.js";const u=JSON.parse('{"title":"\u767B\u5F55mysql\u6570\u636E\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u767B\u5F55mysql\u6570\u636E\u5E93","slug":"\u767B\u5F55mysql\u6570\u636E\u5E93"},{"level":2,"title":"\u67E5\u770B\u6587\u4EF6\u5927\u5C0F","slug":"\u67E5\u770B\u6587\u4EF6\u5927\u5C0F"},{"level":2,"title":"\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93","slug":"\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93"},{"level":2,"title":"\u5BFC\u5165\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93","slug":"\u5BFC\u5165\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93"},{"level":2,"title":"mysql\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD","slug":"mysql\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD"},{"level":2,"title":"\u67E5\u770Bmysql\u7EBF\u7A0B","slug":"\u67E5\u770Bmysql\u7EBF\u7A0B"}],"relativePath":"javascript/2022-12-20-mysql.md","lastUpdated":1672714362000}'),p={name:"javascript/2022-12-20-mysql.md"},e=l(`<h2 id="\u767B\u5F55mysql\u6570\u636E\u5E93" tabindex="-1">\u767B\u5F55mysql\u6570\u636E\u5E93 <a class="header-anchor" href="#\u767B\u5F55mysql\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// -h hostname mysql\u6570\u636E\u5E93\u670D\u52A1\u5668ip</span></span>
<span class="line"><span style="color:#A6ACCD;">// -P(\u5927\u5199)  port\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">// -u user-name \u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">// -p password \u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h192.168.0.104 -P4006 -uroot -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770B\u6587\u4EF6\u5927\u5C0F" tabindex="-1">\u67E5\u770B\u6587\u4EF6\u5927\u5C0F <a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u5927\u5C0F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">du -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ls -li </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">du /tmp/xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -li /tmp/xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93" tabindex="-1">\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EA\u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u5E93\u7684\u8868\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">// -d \u76F8\u5F53\u4E8E --no-data</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -d metadata&gt;/usr/local/sunlight/metadata.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EA\u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u5E93\u7684\u8868\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">-t, --no-create-info</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -t metadata&gt;/usr/local/sunlight/metadata-data.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u5E93 \u8868\u7ED3\u6784\u548C\u8868\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -B metadata&gt;/usr/local/sunlight/metadata_dd.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EA\u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u5E93\u5355\u4E2A\u8868\u7684\u8868\u7ED3\u6784\u548C\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 dvsdb30 CollectFormMetaData&gt;/usr/local/sunlight/CollectFormMetaData.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6839\u636Ewhere\u6761\u4EF6\u5BFC\u51FA\u8868\u6570\u636E\u548C\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021  --tables dvsdb30 ConfigureCache   --where=&#39;isDevelop=1 and id&gt;2&#39; &gt; /usr/local/sunlight/ak.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6839\u636Ewhere\u6761\u4EF6\u53EA\u5BFC\u51FA\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -P4006  -uroot -psunlight2021 -t --tables dvsdb30 ConfigureCache   --where=&#39;isDevelop=1 and id&gt;2&#39; &gt; /usr/local/sunlight/ak.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u5E93\u4E2D\u591A\u4E2A\u8868\u7684\u8868\u7ED3\u6784\u548C\u8868\u6570\u636E \uFF08\u52A0\u4E0A-t\u53EA\u5BFC\u51FA\u591A\u4E2A\u8868\u7684\u6570\u636E\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -p4006  -uroot -psunlight2021 dvsdb30  --tables BasicUser BasicRole  &gt; /usr/local/sunlight/test.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h192.168.0.104 -p4006  -uroot -psunlight2021 -t  dvsdb30  --tables BasicUser BasicRole  &gt; /usr/local/sunlight/test1.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// mysql\u547D\u4EE4\u4E0B\u76F4\u63A5\u5BFC\u51FA\uFF08\u6CE8\u610F\u8DEF\u5F84\u597D\u50CF\u53EA\u80FD\u662F/tmp\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6Eshow variables like &#39;tmpdir&#39;;\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u76EE\u5F55\u6743\u9650 https://www.cnblogs.com/ccku/p/13560119.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bmysql\u8FDB\u7A0B\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux|grep mysqld   \u770B\u5230\u7684\u7528\u6237\u662Fmysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u76EE\u5F55\u6240\u5C5E\u6743\u9650\u7528\u6237 ls -ld /usr/local/sunlight </span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u91CC\u8981\u7ED9mysql\u7528\u6237\u76EE\u5F55\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R mysql.mysql /usr/local/sunlight</span></span>
<span class="line"><span style="color:#A6ACCD;">select * from ConfigureCache INTO OUTFILE &#39;/usr/local/sunlight/ConfigureCache.sql&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5BFC\u5165\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93" tabindex="-1">\u5BFC\u5165\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5BFC\u5165\u8868\u7ED3\u6784\u548C\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u5047\u5982\u5907\u4EFD\u7684\u662F\u591A\u4E2A\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -psunlight2010 &lt;all.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5148\u8FDB\u5165mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#A6ACCD;">source /usr/local/aehyok/metadata.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6216\u8005\u76F4\u63A5\u5BFC\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -psunlight2010 metadata&lt;/usr/local/aehyok/metadata.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -psunlight2010 metadata&lt;/usr/local/aehyok/CollectFormMetaData.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mysql\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD" tabindex="-1">mysql\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD <a class="header-anchor" href="#mysql\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/weixin_51867896/article/details/123181512" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_51867896/article/details/123181512</a></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u53C2\u8003\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">## \u5982\u679C\u662Fmariadb\uFF0C\u53EF\u4EE5\u7528\u5B98\u65B9\u5907\u4EFD\u5DE5\u5177\uFF0C </span></span>
<span class="line"><span style="color:#A6ACCD;">## mariabackup --backup --target-dir=$full_bk_dir --user=root </span></span>
<span class="line"><span style="color:#A6ACCD;">## \u5168\u91CF\u5907\u4EFD\uFF0C\u7136\u540E </span></span>
<span class="line"><span style="color:#A6ACCD;">## mariabackup --backup --target-dir=$inc_bk_dir --incremental-basedir=$full_bk_dir --user=root </span></span>
<span class="line"><span style="color:#A6ACCD;">## \u589E\u91CF\u5907\u4EFD\uFF0C\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u53EF\u4EE5\u8BD5\u4E00\u4E0B\u3002 \u91CC\u9762\u7684\u53D8\u91CF\u81EA\u5DF1\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5168\u91CF\u5907\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">mariabackup -uroot -psunlight2010 --backup --target-dir=/usr/local/aehyok/backup</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u589E\u91CF\u5907\u4EFD\uFF08\u4F9D\u636E\u5168\u91CF\u5907\u4EFD\u4E3A\u57FA\u7840\u7684\u589E\u91CF\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">mariabackup -uroot -psunlight2010 --backup --target-dir=/usr/local/aehyok/backup/inc1 --incremental-basedir=/usr/local/aehyok/backup</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770Bmysql\u7EBF\u7A0B" tabindex="-1">\u67E5\u770Bmysql\u7EBF\u7A0B <a class="header-anchor" href="#\u67E5\u770Bmysql\u7EBF\u7A0B" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5728mysql \u547D\u4EE4\u884C\u4E2D\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u5F53\u524D\u7528\u6237\u4E0B\u7684\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">show processlist;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6240\u6709\u7528\u6237\u4E0B\u7684\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">show full processlist;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// mysqladmin \u547D\u4EE4\u540C\u7406\u53EF\u4EE5\u67E5\u770B  \u6211\u8FD9\u91CC\u7EBF\u7A0B\u6570\u8F83\u5C11\uFF0C\u5F97\u786E\u8BA4\u662F\u5426\u662Ffull  \u5168\u90E8\u7684\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqladmin -h192.168.0.104 -uroot -psunlight2021  processlist;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}var h=s(p,[["render",c]]);export{u as __pageData,h as default};
