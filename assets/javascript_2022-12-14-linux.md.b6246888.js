import{_ as s,o as a,c as n,b as l}from"./app.39978e14.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"zabbix 安装教程 ubuntu","slug":"zabbix-安装教程-ubuntu","link":"#zabbix-安装教程-ubuntu","children":[]},{"level":2,"title":"查看系统信息","slug":"查看系统信息","link":"#查看系统信息","children":[]},{"level":2,"title":"查看CPU 内存","slug":"查看cpu-内存","link":"#查看cpu-内存","children":[]},{"level":2,"title":"查看CPU","slug":"查看cpu","link":"#查看cpu","children":[]},{"level":2,"title":"查看内存","slug":"查看内存","link":"#查看内存","children":[]},{"level":2,"title":"查看文件（可以打印多个文件）","slug":"查看文件-可以打印多个文件","link":"#查看文件-可以打印多个文件","children":[]},{"level":2,"title":"登录mysql","slug":"登录mysql","link":"#登录mysql","children":[]},{"level":2,"title":"mysql 备份","slug":"mysql-备份","link":"#mysql-备份","children":[]},{"level":2,"title":"cron 周期性计划任务","slug":"cron-周期性计划任务","link":"#cron-周期性计划任务","children":[]},{"level":2,"title":"cron ubuntu 安装","slug":"cron-ubuntu-安装","link":"#cron-ubuntu-安装","children":[]},{"level":2,"title":"文件和目录的权限","slug":"文件和目录的权限","link":"#文件和目录的权限","children":[]},{"level":2,"title":"系统服务所在的路径位置","slug":"系统服务所在的路径位置","link":"#系统服务所在的路径位置","children":[]},{"level":2,"title":"查看systemctl 服务日志","slug":"查看systemctl-服务日志","link":"#查看systemctl-服务日志","children":[]},{"level":2,"title":"硬盘 分区 挂载","slug":"硬盘-分区-挂载","link":"#硬盘-分区-挂载","children":[]},{"level":2,"title":"linux基础  变量","slug":"linux基础-变量","link":"#linux基础-变量","children":[]}],"relativePath":"javascript/2022-12-14-linux.md","lastUpdated":1709295462000}'),e={name:"javascript/2022-12-14-linux.md"},p=l(`<ul><li><a href="https://juejin.cn/post/6917096816118857736" target="_blank" rel="noreferrer">https://juejin.cn/post/6917096816118857736</a></li></ul><h2 id="zabbix-安装教程-ubuntu" tabindex="-1">zabbix 安装教程 ubuntu <a class="header-anchor" href="#zabbix-安装教程-ubuntu" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/Magiclala/p/16595587.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/Magiclala/p/16595587.html</a></li></ul><h2 id="查看系统信息" tabindex="-1">查看系统信息 <a class="header-anchor" href="#查看系统信息" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">uname -a    // 电脑操作系统信息</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cat /proc/version   //内核版本</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cat /etc/issue   //发行版本信息</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">lsb_release -a  //</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// openSUSE 版本</span></span>
<span class="line"><span style="color:#babed8;">sudo  hostnamectl</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看cpu-内存" tabindex="-1">查看CPU 内存 <a class="header-anchor" href="#查看cpu-内存" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">查看系统整体的负载</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">命令：top</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">总体内存占用的查看</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">命令：free</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">查看CPU占用前三的进程</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">命令：ps auxw|head -1;ps auxw|sort -rn -k3|head -3</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">列出所有端口： netstat -ntlp</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">netstat -anpt</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">查看 TCP 22 端口有两种方法</span></span>
<span class="line"><span style="color:#babed8;">netstat -ntlp | grep 22</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">lsof -i tcp:22</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">ps aux | grep mongod</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看cpu" tabindex="-1">查看CPU <a class="header-anchor" href="#查看cpu" aria-hidden="true">#</a></h2><ul><li>通过指令查看服务器进程的状态（CPU 和内存占用情况）<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">top</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>%us：表示用户进程的 CPU 使用时间（没有通过 nice 调度） %sy：表示系统进程的 CPU 使用时间，主要是内核使用。 %ni：表示用户进程中，通过 CPU 调度（nice）过的使用时间。 %id：空闲的 CPU 时间 %wa：CPU 运行时在等待 IO 的时间 %hi：CPU 处理硬中断花费的时间 %si：CPU 处理软中断花费的时间 %st：被虚拟机偷走的 CPU 时间</li></ul><p>参考 %us 的定义，对于 Linux 系统来说，MySQL 进程和它启动的所有线程都不算内核进程，因此 MySQL 的系统线程和用户线程在繁忙的时候，都会体现在 CPU 使用率的 %us 指标上。</p><ul><li>通过指令查看进程中的线程状态<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">top -Hp pid</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><h2 id="查看内存" tabindex="-1">查看内存 <a class="header-anchor" href="#查看内存" aria-hidden="true">#</a></h2><ul><li>free</li><li>free -m 查看多少MB</li><li>free -g 查看多少GB</li><li>查看内存占用前五的进程 <ul><li>ps auxw | head -1;ps auxw|sort -rn -k4|head -5</li></ul></li></ul><h2 id="查看文件-可以打印多个文件" tabindex="-1">查看文件（可以打印多个文件） <a class="header-anchor" href="#查看文件-可以打印多个文件" aria-hidden="true">#</a></h2><ul><li>cat file</li><li>head file // 开头的行数</li><li>head -n 5 file // 开头五行</li><li>tail file // 结尾的行数</li><li>tail -n 5 file // 结尾5行</li><li>wc -l file // 统计文件行数</li></ul><p>tail -n 20 dvsv3.error.log | grep &quot;error&quot;</p><h2 id="登录mysql" tabindex="-1">登录mysql <a class="header-anchor" href="#登录mysql" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 登录mysql</span></span>
<span class="line"><span style="color:#babed8;">mysql -h192.168.0.107  -P4006 -uroot -p</span></span>
<span class="line"><span style="color:#babed8;">mysql -h192.168.0.104  -P4006 -uroot -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 批量生成删除mysql数据表的语句</span></span>
<span class="line"><span style="color:#babed8;">select CONCAT( &#39;drop table &#39;, table_name, &#39;;&#39; ) FROM information_schema.tables Where table_name LIKE &#39;DAS_%&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql-备份" tabindex="-1">mysql 备份 <a class="header-anchor" href="#mysql-备份" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">如果是mariadb，可以用官方备份工具， </span></span>
<span class="line"><span style="color:#babed8;">mariabackup --backup --target-dir=$full_bk_dir --user=root 全量备份，</span></span>
<span class="line"><span style="color:#babed8;">然后 mariabackup --backup --target-dir=$inc_bk_dir --incremental-basedir=$full_bk_dir --user=root 增量备份，</span></span>
<span class="line"><span style="color:#babed8;">速度非常快，可以试一下。 里面的变量自己替换</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p><a href="https://www.modb.pro/db/454219" target="_blank" rel="noreferrer">https://www.modb.pro/db/454219</a><a href="https://www.cnblogs.com/liuxingke/articles/9216867.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/liuxingke/articles/9216867.html</a></p><p>mysqldump -u USER -p test $(mysql -u USER -p -D test -Bse &quot;show tables like &#39;wiki_%&#39;&quot;)</p><h2 id="cron-周期性计划任务" tabindex="-1">cron 周期性计划任务 <a class="header-anchor" href="#cron-周期性计划任务" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 最小运行的单位是分钟级别 </span></span>
<span class="line"><span style="color:#babed8;">// 查看已有的周期性计划任务</span></span>
<span class="line"><span style="color:#babed8;">crontab -l</span></span>
<span class="line"><span style="color:#babed8;">30 2 * * * /home/backup.sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">分钟 小时  日期  月份 星期 执行的命令</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">* * * * 1 星期一执行</span></span>
<span class="line"><span style="color:#babed8;">* * * * 5 星期五执行</span></span>
<span class="line"><span style="color:#babed8;">* * * * 1,5 星期一和星期五执行</span></span>
<span class="line"><span style="color:#babed8;">* * * * 1-5 星期一到星期五执行</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 编辑周期性计划任务</span></span>
<span class="line"><span style="color:#babed8;">crontab -e</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mysqldump -h172.16.4.78 -udvs -psunlight2010! --single-transaction dvsdb30 &gt; /data/backup/dvsdb30_$(date +%Y%m%d_%H%M%S).sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mysqldump -h172.16.4.78 -udvs -psunlight2010! --single-transaction metadata &gt; /data/backup/metadata_$(date +%Y%m%d_%H%M%S).sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="cron-ubuntu-安装" tabindex="-1">cron ubuntu 安装 <a class="header-anchor" href="#cron-ubuntu-安装" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">安装：apt-get install cron</span></span>
<span class="line"><span style="color:#babed8;">启动：service cron start</span></span>
<span class="line"><span style="color:#babed8;">重启：service cron restart</span></span>
<span class="line"><span style="color:#babed8;">停止：service cron stop</span></span>
<span class="line"><span style="color:#babed8;">检查状态：service cron status</span></span>
<span class="line"><span style="color:#babed8;">查询cron可用的命令：service cron</span></span>
<span class="line"><span style="color:#babed8;">检查crontab工具是否安装：crontab -l </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Ubuntu系统默认是不打开cron日志的，在cd 到/var/log目录下是找不到cron.log文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">修改配置文件</span></span>
<span class="line"><span style="color:#babed8;">vim /etc/rsyslog.d/50-default.conf</span></span>
<span class="line"><span style="color:#babed8;">// 找到cron，将其#注释去掉</span></span>
<span class="line"><span style="color:#babed8;">cron.*                          /var/log/cron.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 修改完配置文件后，记得重启服务</span></span>
<span class="line"><span style="color:#babed8;">sudo service rsyslog restart</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//cron.log文件就产生了</span></span>
<span class="line"><span style="color:#babed8;">vim /var/log/cron.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">每个用户有一个当前用户的文件在目录下</span></span>
<span class="line"><span style="color:#babed8;">/var/spool/cron/crontabs</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// .sh 文件目录下可能没权限</span></span>
<span class="line"><span style="color:#babed8;">chmod 777 *.sh</span></span>
<span class="line"><span style="color:#babed8;">chmod +x  *.sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 将sh中的echo日志输出到日志文件中</span></span>
<span class="line"><span style="color:#babed8;">* * * * * /usr/local/aehyok/sh/backup.sh &gt;&gt; /usr/local/aehyok/sh/sh.log 2&gt;&amp;1</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="文件和目录的权限" tabindex="-1">文件和目录的权限 <a class="header-anchor" href="#文件和目录的权限" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// .sh 文件目录下可能没权限</span></span>
<span class="line"><span style="color:#babed8;">chmod 777 *.sh</span></span>
<span class="line"><span style="color:#babed8;">chmod +x  *.sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">- 普通文件</span></span>
<span class="line"><span style="color:#babed8;">d 目录文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 普通文件</span></span>
<span class="line"><span style="color:#babed8;">// r读  4</span></span>
<span class="line"><span style="color:#babed8;">// w写  2</span></span>
<span class="line"><span style="color:#babed8;">// x可执行  1</span></span>
<span class="line"><span style="color:#babed8;">82402238 -rwxr-xr-x  1 root root     33 Dec 20 19:10 11.txt</span></span>
<span class="line"><span style="color:#babed8;">67155554 -rw-------. 1 root root   1419 Jun 24  2021 anaconda-ks.cfg</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 目录文件</span></span>
<span class="line"><span style="color:#babed8;">//x 进入目录</span></span>
<span class="line"><span style="color:#babed8;">// wx 可以修改目录</span></span>
<span class="line"><span style="color:#babed8;">// rx可以读取目录</span></span>
<span class="line"><span style="color:#babed8;">67255694 drwxr-xr-x  3 root root    153 Aug 18 16:07 install</span></span>
<span class="line"><span style="color:#babed8;">ls -ld /test 查看目录的权限</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">chown mysql /test</span></span>
<span class="line"><span style="color:#babed8;">chown :group1 /test</span></span>
<span class="line"><span style="color:#babed8;">chgrp user3 /test</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">touch afile</span></span>
<span class="line"><span style="color:#babed8;">ls -l afile</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 给用户添加x可执行权限</span></span>
<span class="line"><span style="color:#babed8;">chmod u+x afile</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 给组减少r读的权限</span></span>
<span class="line"><span style="color:#babed8;">chmod g-r afile</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 其他权限 最后面的三个</span></span>
<span class="line"><span style="color:#babed8;">chomd o=w afile</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 三个位置都设置r读的权限</span></span>
<span class="line"><span style="color:#babed8;">chomd a+r afile</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="系统服务所在的路径位置" tabindex="-1">系统服务所在的路径位置 <a class="header-anchor" href="#系统服务所在的路径位置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 参考文章</span></span>
<span class="line"><span style="color:#babed8;">// https://www.51cto.com/article/704405.html</span></span>
<span class="line"><span style="color:#babed8;">// http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 服务所在位置路径</span></span>
<span class="line"><span style="color:#babed8;">/usr/lib/systemd/system</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 启动服务 dvs-collect</span></span>
<span class="line"><span style="color:#babed8;">systemctl start dvs-collect.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 停止服务 dvs-collect</span></span>
<span class="line"><span style="color:#babed8;">systemctl stop dvs-collect.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 重新启动服务 dvs-collect</span></span>
<span class="line"><span style="color:#babed8;">systemctl restart dvs-collect.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看服务状态</span></span>
<span class="line"><span style="color:#babed8;">systemctl status dvs-collect</span></span>
<span class="line"><span style="color:#babed8;">// 查看单元的状态</span></span>
<span class="line"><span style="color:#babed8;">systemctl is-active dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 杀死一个服务的所有子进程</span></span>
<span class="line"><span style="color:#babed8;">systemctl kill dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 重新加载一个服务的配置文件</span></span>
<span class="line"><span style="color:#babed8;">systemctl reload dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 重载所有修改过的配置文件</span></span>
<span class="line"><span style="color:#babed8;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 显示某个 Unit 的所有底层参数</span></span>
<span class="line"><span style="color:#babed8;">systemctl show dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 显示某个 Unit 的指定属性的值</span></span>
<span class="line"><span style="color:#babed8;">systemctl show -p CPUShares dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置某个 Unit 的指定属性</span></span>
<span class="line"><span style="color:#babed8;">systemctl set-property dvs-collect CPUShares=500</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看systemctl-服务日志" tabindex="-1">查看systemctl 服务日志 <a class="header-anchor" href="#查看systemctl-服务日志" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 实时查看滚动日志</span></span>
<span class="line"><span style="color:#babed8;">sudo journalctl -u dvs-collect -f</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="硬盘-分区-挂载" tabindex="-1">硬盘 分区 挂载 <a class="header-anchor" href="#硬盘-分区-挂载" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看文件夹所占的空间</span></span>
<span class="line"><span style="color:#babed8;">du -sh /usr/local/docker/mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// lsblk  https://zhuanlan.zhihu.com/p/555993724</span></span>
<span class="line"><span style="color:#babed8;">//列表所有可用块设备的信息</span></span>
<span class="line"><span style="color:#babed8;">lsblk -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 列出当前系统中所有硬盘设备及其分区的信息</span></span>
<span class="line"><span style="color:#babed8;">fdisk -l</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// &quot;-h&quot;选项可以显示更易读的容量单位，而&quot;-T&quot;选项用于显示对应文件系统的类型 </span></span>
<span class="line"><span style="color:#babed8;">df -hT</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看磁盘挂载</span></span>
<span class="line"><span style="color:#babed8;">// 每一行记录对应一个分区或设备的挂载配置信息</span></span>
<span class="line"><span style="color:#babed8;">cat /etc/fstab</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">第1字段：设备名或设备卷标名。</span></span>
<span class="line"><span style="color:#babed8;">第2字段：文件系统的挂载点目录的位置。</span></span>
<span class="line"><span style="color:#babed8;">第3字段：文件系统类型，如ext4、swap等。</span></span>
<span class="line"><span style="color:#babed8;">第4字段：挂载参数，mount命令&quot;-o&quot;选项后可使用的参数。</span></span>
<span class="line"><span style="color:#babed8;">（defaults、rw、ro、noexec分别表示默认参数、可写、只读、禁用执行程序）</span></span>
<span class="line"><span style="color:#babed8;">第5字段：表示文件系统是否需要dump备份，为1时表示需要，为0时将被dump所忽略。</span></span>
<span class="line"><span style="color:#babed8;">第6字段：该数字用于决定在系统启动时进行磁盘检查的顺序。0表示不进行检查，1表示优先检查，2表示其次检查，对于根分区应设为1，其他分区设为2。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mount -a 的意思是将/etc/fstab的所有内容重新加载。</span></span>
<span class="line"><span style="color:#babed8;">mount 是可以显示/etc/fstab的内容</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 将/dev/sdb2挂载到/media/test</span></span>
<span class="line"><span style="color:#babed8;">mount /dev/sdb2 /media/test</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="linux基础-变量" tabindex="-1">linux基础 变量 <a class="header-anchor" href="#linux基础-变量" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/qq_35258036/article/details/123419703" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_35258036/article/details/123419703</a></li></ul>`,36),c=[p];function o(t,b,i,r,d,y){return a(),n("div",null,c)}const m=s(e,[["render",o]]);export{u as __pageData,m as default};
