import{_ as s,o as n,c as a,a as l}from"./app.0a2a86d4.js";const d=JSON.parse('{"title":"zabbix \u5B89\u88C5\u6559\u7A0B ubuntu","description":"","frontmatter":{},"headers":[{"level":2,"title":"zabbix \u5B89\u88C5\u6559\u7A0B ubuntu","slug":"zabbix-\u5B89\u88C5\u6559\u7A0B-ubuntu"},{"level":2,"title":"\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F","slug":"\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F"},{"level":2,"title":"\u67E5\u770BCPU \u5185\u5B58","slug":"\u67E5\u770Bcpu-\u5185\u5B58"},{"level":2,"title":"\u67E5\u770BCPU","slug":"\u67E5\u770Bcpu"},{"level":2,"title":"\u67E5\u770B\u5185\u5B58","slug":"\u67E5\u770B\u5185\u5B58"},{"level":2,"title":"\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09","slug":"\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09"},{"level":2,"title":"\u767B\u5F55mysql","slug":"\u767B\u5F55mysql"},{"level":2,"title":"mysql \u5907\u4EFD","slug":"mysql-\u5907\u4EFD"},{"level":2,"title":"cron \u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1","slug":"cron-\u5468\u671F\u6027\u8BA1\u5212\u4EFB\u52A1"},{"level":2,"title":"cron ubuntu \u5B89\u88C5","slug":"cron-ubuntu-\u5B89\u88C5"},{"level":2,"title":"\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650","slug":"\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u6743\u9650"},{"level":2,"title":"\u7CFB\u7EDF\u670D\u52A1\u6240\u5728\u7684\u8DEF\u5F84\u4F4D\u7F6E","slug":"\u7CFB\u7EDF\u670D\u52A1\u6240\u5728\u7684\u8DEF\u5F84\u4F4D\u7F6E"},{"level":2,"title":"\u67E5\u770Bsystemctl \u670D\u52A1\u65E5\u5FD7","slug":"\u67E5\u770Bsystemctl-\u670D\u52A1\u65E5\u5FD7"}],"relativePath":"javascript/2022-12-14-linux.md","lastUpdated":1672744985000}'),p={name:"javascript/2022-12-14-linux.md"},e=l(`<ul><li><a href="https://juejin.cn/post/6917096816118857736" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6917096816118857736</a></li></ul><h2 id="zabbix-\u5B89\u88C5\u6559\u7A0B-ubuntu" tabindex="-1">zabbix \u5B89\u88C5\u6559\u7A0B ubuntu <a class="header-anchor" href="#zabbix-\u5B89\u88C5\u6559\u7A0B-ubuntu" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/Magiclala/p/16595587.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/Magiclala/p/16595587.html</a></li></ul><h2 id="\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F" tabindex="-1">\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">uname -a    // \u7535\u8111\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cat /proc/version   //\u5185\u6838\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/issue   //\u53D1\u884C\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lsb_release -a  //</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// openSUSE \u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo  hostnamectl</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770Bcpu-\u5185\u5B58" tabindex="-1">\u67E5\u770BCPU \u5185\u5B58 <a class="header-anchor" href="#\u67E5\u770Bcpu-\u5185\u5B58" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u7CFB\u7EDF\u6574\u4F53\u7684\u8D1F\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Atop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u603B\u4F53\u5185\u5B58\u5360\u7528\u7684\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Afree</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770BCPU\u5360\u7528\u524D\u4E09\u7684\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Aps auxw|head -1;ps auxw|sort -rn -k3|head -3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5217\u51FA\u6240\u6709\u7AEF\u53E3\uFF1A netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -anpt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B TCP 22 \u7AEF\u53E3\u6709\u4E24\u79CD\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntlp | grep 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lsof -i tcp:22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep mongod</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770Bcpu" tabindex="-1">\u67E5\u770BCPU <a class="header-anchor" href="#\u67E5\u770Bcpu" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7\u6307\u4EE4\u67E5\u770B\u670D\u52A1\u5668\u8FDB\u7A0B\u7684\u72B6\u6001\uFF08CPU \u548C\u5185\u5B58\u5360\u7528\u60C5\u51B5\uFF09<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">top</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>%us\uFF1A\u8868\u793A\u7528\u6237\u8FDB\u7A0B\u7684 CPU \u4F7F\u7528\u65F6\u95F4\uFF08\u6CA1\u6709\u901A\u8FC7 nice \u8C03\u5EA6\uFF09 %sy\uFF1A\u8868\u793A\u7CFB\u7EDF\u8FDB\u7A0B\u7684 CPU \u4F7F\u7528\u65F6\u95F4\uFF0C\u4E3B\u8981\u662F\u5185\u6838\u4F7F\u7528\u3002 %ni\uFF1A\u8868\u793A\u7528\u6237\u8FDB\u7A0B\u4E2D\uFF0C\u901A\u8FC7 CPU \u8C03\u5EA6\uFF08nice\uFF09\u8FC7\u7684\u4F7F\u7528\u65F6\u95F4\u3002 %id\uFF1A\u7A7A\u95F2\u7684 CPU \u65F6\u95F4 %wa\uFF1ACPU \u8FD0\u884C\u65F6\u5728\u7B49\u5F85 IO \u7684\u65F6\u95F4 %hi\uFF1ACPU \u5904\u7406\u786C\u4E2D\u65AD\u82B1\u8D39\u7684\u65F6\u95F4 %si\uFF1ACPU \u5904\u7406\u8F6F\u4E2D\u65AD\u82B1\u8D39\u7684\u65F6\u95F4 %st\uFF1A\u88AB\u865A\u62DF\u673A\u5077\u8D70\u7684 CPU \u65F6\u95F4</li></ul><p>\u53C2\u8003 %us \u7684\u5B9A\u4E49\uFF0C\u5BF9\u4E8E Linux \u7CFB\u7EDF\u6765\u8BF4\uFF0CMySQL \u8FDB\u7A0B\u548C\u5B83\u542F\u52A8\u7684\u6240\u6709\u7EBF\u7A0B\u90FD\u4E0D\u7B97\u5185\u6838\u8FDB\u7A0B\uFF0C\u56E0\u6B64 MySQL \u7684\u7CFB\u7EDF\u7EBF\u7A0B\u548C\u7528\u6237\u7EBF\u7A0B\u5728\u7E41\u5FD9\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u4F53\u73B0\u5728 CPU \u4F7F\u7528\u7387\u7684 %us \u6307\u6807\u4E0A\u3002</p><ul><li>\u901A\u8FC7\u6307\u4EE4\u67E5\u770B\u8FDB\u7A0B\u4E2D\u7684\u7EBF\u7A0B\u72B6\u6001<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">top -Hp pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="\u67E5\u770B\u5185\u5B58" tabindex="-1">\u67E5\u770B\u5185\u5B58 <a class="header-anchor" href="#\u67E5\u770B\u5185\u5B58" aria-hidden="true">#</a></h2><ul><li>free</li><li>free -m \u67E5\u770B\u591A\u5C11MB</li><li>free -g \u67E5\u770B\u591A\u5C11GB</li><li>\u67E5\u770B\u5185\u5B58\u5360\u7528\u524D\u4E94\u7684\u8FDB\u7A0B <ul><li>ps auxw | head -1;ps auxw|sort -rn -k4|head -5</li></ul></li></ul><h2 id="\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09" tabindex="-1">\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09 <a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\uFF08\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u6587\u4EF6\uFF09" aria-hidden="true">#</a></h2><ul><li>cat file</li><li>head file // \u5F00\u5934\u7684\u884C\u6570</li><li>head -n 5 file // \u5F00\u5934\u4E94\u884C</li><li>tail file // \u7ED3\u5C3E\u7684\u884C\u6570</li><li>tail -n 5 file // \u7ED3\u5C3E5\u884C</li><li>wc -l file // \u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</li></ul><h2 id="\u767B\u5F55mysql" tabindex="-1">\u767B\u5F55mysql <a class="header-anchor" href="#\u767B\u5F55mysql" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u767B\u5F55mysql</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7CFB\u7EDF\u670D\u52A1\u6240\u5728\u7684\u8DEF\u5F84\u4F4D\u7F6E" tabindex="-1">\u7CFB\u7EDF\u670D\u52A1\u6240\u5728\u7684\u8DEF\u5F84\u4F4D\u7F6E <a class="header-anchor" href="#\u7CFB\u7EDF\u670D\u52A1\u6240\u5728\u7684\u8DEF\u5F84\u4F4D\u7F6E" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u53C2\u8003\u6587\u7AE0</span></span>
<span class="line"><span style="color:#A6ACCD;">// https://www.51cto.com/article/704405.html</span></span>
<span class="line"><span style="color:#A6ACCD;">// http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u670D\u52A1\u6240\u5728\u4F4D\u7F6E\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/lib/systemd/system</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u670D\u52A1 dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start dvs-collect.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62\u670D\u52A1 dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop dvs-collect.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u91CD\u65B0\u542F\u52A8\u670D\u52A1 dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart dvs-collect.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u670D\u52A1\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u5355\u5143\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl is-active dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6740\u6B7B\u4E00\u4E2A\u670D\u52A1\u7684\u6240\u6709\u5B50\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl kill dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u91CD\u65B0\u52A0\u8F7D\u4E00\u4E2A\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u91CD\u8F7D\u6240\u6709\u4FEE\u6539\u8FC7\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u663E\u793A\u67D0\u4E2A Unit \u7684\u6240\u6709\u5E95\u5C42\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl show dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u663E\u793A\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl show -p CPUShares dvs-collect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl set-property dvs-collect CPUShares=500</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770Bsystemctl-\u670D\u52A1\u65E5\u5FD7" tabindex="-1">\u67E5\u770Bsystemctl \u670D\u52A1\u65E5\u5FD7 <a class="header-anchor" href="#\u67E5\u770Bsystemctl-\u670D\u52A1\u65E5\u5FD7" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5B9E\u65F6\u67E5\u770B\u6EDA\u52A8\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo journalctl -u dvs-collect -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,31),c=[e];function o(t,r,i,C,A,y){return n(),a("div",null,c)}var u=s(p,[["render",o]]);export{d as __pageData,u as default};
