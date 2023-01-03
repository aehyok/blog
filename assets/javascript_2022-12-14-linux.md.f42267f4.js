import{_ as s,o as n,c as a,a as l}from"./app.4e2aadac.js";const D=JSON.parse('{"title":"\u67E5\u770B\u5185\u5B58","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67E5\u770B\u5185\u5B58","slug":"\u67E5\u770B\u5185\u5B58"},{"level":2,"title":"\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09","slug":"\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09"},{"level":2,"title":"\u767B\u5F55mysql","slug":"\u767B\u5F55mysql"},{"level":2,"title":"mysql \u5907\u4EFD","slug":"mysql-\u5907\u4EFD"},{"level":2,"title":"cron \u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1","slug":"cron-\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1"},{"level":2,"title":"cron ubuntu \u5B89\u88C5","slug":"cron-ubuntu-\u5B89\u88C5"},{"level":2,"title":"\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650","slug":"\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650"}],"relativePath":"javascript/2022-12-14-linux.md","lastUpdated":1672712388000}'),p={name:"javascript/2022-12-14-linux.md"},e=l(`<ul><li><a href="https://juejin.cn/post/6917096816118857736" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6917096816118857736</a></li></ul><h2 id="\u67E5\u770B\u5185\u5B58" tabindex="-1">\u67E5\u770B\u5185\u5B58 <a class="header-anchor" href="#\u67E5\u770B\u5185\u5B58" aria-hidden="true">#</a></h2><ul><li>free</li><li>free -m \u67E5\u770B\u591A\u5C11MB</li><li>free -g \u67E5\u770B\u591A\u5C11GB</li></ul><h2 id="\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09" tabindex="-1">\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09 <a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09" aria-hidden="true">#</a></h2><ul><li>cat file</li><li>head file // \u5F00\u5934\u7684\u884C\u6570</li><li>head -n 5 file // \u5F00\u5934\u4E94\u884C</li><li>tail file // \u7ED3\u5C3E\u7684\u884C\u6570</li><li>tail -n 5 file // \u7ED3\u5C3E5\u884C</li><li>wc -l file // \u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</li></ul><h2 id="\u767B\u5F55mysql" tabindex="-1">\u767B\u5F55mysql <a class="header-anchor" href="#\u767B\u5F55mysql" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u767B\u5F55mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h192.168.0.107  -P4006 -uroot -p</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h192.168.0.104  -P4006 -uroot -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6279\u91CF\u751F\u6210\u5220\u9664mysql\u6570\u636E\u8868\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">select CONCAT( &#39;drop table &#39;, table_name, &#39;;&#39; ) FROM information_schema.tables Where table_name LIKE &#39;DAS_%&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mysql-\u5907\u4EFD" tabindex="-1">mysql \u5907\u4EFD <a class="header-anchor" href="#mysql-\u5907\u4EFD" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u662Fmariadb\uFF0C\u53EF\u4EE5\u7528\u5B98\u65B9\u5907\u4EFD\u5DE5\u5177\uFF0C </span></span>
<span class="line"><span style="color:#A6ACCD;">mariabackup --backup --target-dir=$full_bk_dir --user=root \u5168\u91CF\u5907\u4EFD\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7136\u540E mariabackup --backup --target-dir=$inc_bk_dir --incremental-basedir=$full_bk_dir --user=root \u589E\u91CF\u5907\u4EFD\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u53EF\u4EE5\u8BD5\u4E00\u4E0B\u3002 \u91CC\u9762\u7684\u53D8\u91CF\u81EA\u5DF1\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://www.modb.pro/db/454219" target="_blank" rel="noopener noreferrer">https://www.modb.pro/db/454219</a><a href="https://www.cnblogs.com/liuxingke/articles/9216867.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/liuxingke/articles/9216867.html</a></p><p>mysqldump -u USER -p test $(mysql -u USER -p -D test -Bse &quot;show tables like &#39;wiki_%&#39;&quot;)</p><h2 id="cron-\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1" tabindex="-1">cron \u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1 <a class="header-anchor" href="#cron-\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u6700\u5C0F\u8FD0\u884C\u7684\u5355\u4F4D\u662F\u5206\u949F\u7EA7\u522B </span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u5DF2\u6709\u7684\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -l</span></span>
<span class="line"><span style="color:#A6ACCD;">30 2 * * * /home/backup.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u949F \u5C0F\u65F6  \u65E5\u671F  \u6708\u4EFD \u661F\u671F \u6267\u884C\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">* * * * 1 \u661F\u671F\u4E00\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">* * * * 5 \u661F\u671F\u4E94\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">* * * * 1,5 \u661F\u671F\u4E00\u548C\u661F\u671F\u4E94\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">* * * * 1-5 \u661F\u671F\u4E00\u5230\u661F\u671F\u4E94\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7F16\u8F91\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h172.16.4.78 -udvs -psunlight2010! --single-transaction dvsdb30 &gt; /data/backup/dvsdb30_$(date +%Y%m%d_%H%M%S).sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldump -h172.16.4.78 -udvs -psunlight2010! --single-transaction metadata &gt; /data/backup/metadata_$(date +%Y%m%d_%H%M%S).sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="cron-ubuntu-\u5B89\u88C5" tabindex="-1">cron ubuntu \u5B89\u88C5 <a class="header-anchor" href="#cron-ubuntu-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5\uFF1Aapt-get install cron</span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8\uFF1Aservice cron start</span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542F\uFF1Aservice cron restart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62\uFF1Aservice cron stop</span></span>
<span class="line"><span style="color:#A6ACCD;">\u68C0\u67E5\u72B6\u6001\uFF1Aservice cron status</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u8BE2cron\u53EF\u7528\u7684\u547D\u4EE4\uFF1Aservice cron</span></span>
<span class="line"><span style="color:#A6ACCD;">\u68C0\u67E5crontab\u5DE5\u5177\u662F\u5426\u5B89\u88C5\uFF1Acrontab -l</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Ubuntu\u7CFB\u7EDF\u9ED8\u8BA4\u662F\u4E0D\u6253\u5F00cron\u65E5\u5FD7\u7684\uFF0C\u5728cd \u5230/var/log\u76EE\u5F55\u4E0B\u662F\u627E\u4E0D\u5230cron.log\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/rsyslog.d/50-default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u627E\u5230cron\uFF0C\u5C06\u5176#\u6CE8\u91CA\u53BB\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">cron.*                          /var/log/cron.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4FEE\u6539\u5B8C\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u8BB0\u5F97\u91CD\u542F\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo service rsyslog restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//cron.log\u6587\u4EF6\u5C31\u4EA7\u751F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /var/log/cron.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6BCF\u4E2A\u7528\u6237\u6709\u4E00\u4E2A\u5F53\u524D\u7528\u6237\u7684\u6587\u4EF6\u5728\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">/var/spool/cron/crontabs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// .sh \u6587\u4EF6\u76EE\u5F55\u4E0B\u53EF\u80FD\u6CA1\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 777 *.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x  *.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5C06sh\u4E2D\u7684echo\u65E5\u5FD7\u8F93\u51FA\u5230\u65E5\u5FD7\u6587\u4EF6\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">* * * * * /usr/local/aehyok/sh/backup.sh &gt;&gt; /usr/local/aehyok/sh/sh.log 2&gt;&amp;1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650" tabindex="-1">\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650 <a class="header-anchor" href="#\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// .sh \u6587\u4EF6\u76EE\u5F55\u4E0B\u53EF\u80FD\u6CA1\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 777 *.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x  *.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- \u666E\u901A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">d \u76EE\u5F55\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u666E\u901A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">// r\u8BFB  4</span></span>
<span class="line"><span style="color:#A6ACCD;">// w\u5199  2</span></span>
<span class="line"><span style="color:#A6ACCD;">// x\u53EF\u6267\u884C  1</span></span>
<span class="line"><span style="color:#A6ACCD;">82402238 -rwxr-xr-x  1 root root     33 Dec 20 19:10 11.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">67155554 -rw-------. 1 root root   1419 Jun 24  2021 anaconda-ks.cfg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u76EE\u5F55\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">//x \u8FDB\u5165\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">// wx \u53EF\u4EE5\u4FEE\u6539\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">// rx\u53EF\u4EE5\u8BFB\u53D6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">67255694 drwxr-xr-x  3 root root    153 Aug 18 16:07 install</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -ld /test \u67E5\u770B\u76EE\u5F55\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">chown mysql /test</span></span>
<span class="line"><span style="color:#A6ACCD;">chown :group1 /test</span></span>
<span class="line"><span style="color:#A6ACCD;">chgrp user3 /test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">touch afile</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l afile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7ED9\u7528\u6237\u6DFB\u52A0x\u53EF\u6267\u884C\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod u+x afile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7ED9\u7EC4\u51CF\u5C11r\u8BFB\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod g-r afile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5176\u4ED6\u6743\u9650 \u6700\u540E\u9762\u7684\u4E09\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">chomd o=w afile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E09\u4E2A\u4F4D\u7F6E\u90FD\u8BBE\u7F6Er\u8BFB\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chomd a+r afile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),o=[e];function c(r,t,i,A,C,y){return n(),a("div",null,o)}var h=s(p,[["render",c]]);export{D as __pageData,h as default};
