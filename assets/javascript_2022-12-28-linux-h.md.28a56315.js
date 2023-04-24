import{_ as s,o as n,c as a,O as p}from"./chunks/framework.7d656979.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-12-28-linux-h.md","lastUpdated":1682325546000}'),l={name:"javascript/2022-12-28-linux-h.md"},o=p(`<h2 id="dotnet-启动dll文件" tabindex="-1">dotnet 启动dll文件 <a class="header-anchor" href="#dotnet-启动dll文件" aria-label="Permalink to &quot;dotnet 启动dll文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dotnet SLMDEngine.Base.dll --urls http://locaohost:8000</span></span></code></pre></div><h2 id="mysql-查看进程" tabindex="-1">mysql 查看进程 <a class="header-anchor" href="#mysql-查看进程" aria-label="Permalink to &quot;mysql 查看进程&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">数字乡村2.0打包机器 139.9.1.176  /home/soft  把编译好的文件拷贝到响应的目录下  执行 sh build.sh 2.2.0.005</span></span>
<span class="line"><span style="color:#A6ACCD;">生成的RPM包路径 /usr/src/packages/RPMS/noarch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">chmod -R 777 文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R root.root 文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">拷贝文件到其他服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">scp ./x264.tar root@172.16.140.234:/home/soft</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i lo -s 0 tcp and port 80 -w 001.pcap</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">curl模拟调用接口</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -i -X GET http://url/bind/agentOnWork/v2?Sig=*******</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -i -X POST -d &#39;{&quot;iptvAccount&quot;:&quot;lqm&quot;}&#39; http://114.55.108.222:10080/api/epg/auth/login</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -i -X POST -H &#39;Accept:application/json&#39; -H &#39;Content-Type:application/json;charset=utf-8&#39; -H &#39;Authorization:XXXXXX&#39; -d &#39;{&quot;iptvAccount&quot;:&quot;lqm&quot;}&#39; http://114.55.108.222:10080/api/epg/auth/login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">curl -i -X POST -d &#39;{}&#39; http://localhost:11043/api/common/sl/GetQueryToken?userName=hh&amp;code=4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . | xargs grep -ril &quot;hocto.utuapp.cn&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">iptables -A INPUT -s 172.16.121.25 -p tcp -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">120.25.57.223     2288     root       iastestserver2018</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -h 192.168.0.42 -p 3719 -a &#39;sunlight2010&#39; -c </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">auth sunlight2010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">select 0 </span></span>
<span class="line"><span style="color:#A6ACCD;">keys *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">集群信息cluster info    节点信息cluster nodes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -hlocalhost -P 3307 -uroot -psunlight2021</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">select column_name, column_comment from information_schema.columns where  table_name = &#39;picture&#39; ;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">desc picture;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h10.0.18.61 -uroot -psunlight@2020</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h10.0.0.1 -uroot -p123 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h139.9.184.171 -uroot -psunlight2021</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -h192.168.88.158 -psunlight2010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 10.25.0.10:2719/nc -u nc -p nc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 127.0.0.1:27017/ips -u ips -p ips</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">show collections</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.XXXX.find({})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看集群状态</span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 172.31.3.185:3718/admin</span></span>
<span class="line"><span style="color:#A6ACCD;">use admin</span></span>
<span class="line"><span style="color:#A6ACCD;">db.auth(&#39;root&#39;,&quot;OpenLab2021&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">rs.status()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SIT1 环境连接  mongo &quot;mongodb://ips:ips@localhost:2718/ips&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">两种连接方式：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo &quot;mongodb://ucms:uc123_(ms@172.17.0.10:23000,172.17.0.13:23000,172.17.0.14:23000/ucms&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo -u test -p test --host 127.0.0.1 --port 27017        //适用于mongo版本4.x以下 </span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 127.0.0.1:27017/数据库名 -u test -p test            //适用于mongo版本4.x以上</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MONGO_DB=mongodb://nc:nc@10.25.0.10:2718,10.25.0.10:2719/nc?replicaSet=NC</span></span>
<span class="line"><span style="color:#A6ACCD;">ucms:&#39;uc123_(ms&#39;@172.17.0.10,172.17.0.13,172.17.0.14:23000/ucms?replicaSet=ucms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MONGO_DB=mongodb://nc:nc@10.25.0.10:2718/nc</span></span>
<span class="line"><span style="color:#A6ACCD;">REDIS_PREFIX=nc_dev_</span></span>
<span class="line"><span style="color:#A6ACCD;">IMAGE_SERVER=http://114.55.108.222:10080</span></span>
<span class="line"><span style="color:#A6ACCD;">REDIS_DB=[{&quot;host&quot;:&quot;localhost&quot;,&quot;port&quot;:6379}]</span></span>
<span class="line"><span style="color:#A6ACCD;">NETWORK_OPERATOR=gddx</span></span>
<span class="line"><span style="color:#A6ACCD;">UPLOAD_KEY=3754ez6iz7mx9jlswtal101bp6b7a4sb</span></span>
<span class="line"><span style="color:#A6ACCD;">CMS_ADDRESS=https://114.55.108.245:10080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find . | xargs grep -ril &quot;hocto.utuapp.cn&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linux上安装.net core sdk 2.2（离线安装和yum仓库安装）</span></span>
<span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/u010476739/article/details/100144287?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1-100144287.nonecase&amp;utm_term=linux%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85dotnet</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RPM包操作</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa |grep epg 查询</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh xxx.rpm 安装</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e XXXX 卸载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">apache</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">停止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">停止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">停止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">停止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">下面看下centos7重启php-fpm命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm stop</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm restart</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall常用命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    1、重启、关闭、开启、firewalld.serverice 服务</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld restart 重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld start  开启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld stop  关闭</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl status firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl stop firewalld  关闭</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl start firewalld 开启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl  restart firewalld 重启</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl  disable firewalld  关闭开机启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl  disable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl  enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    2、查看状态</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        firewall-cmd --state</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    3、查看防火墙规则</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        firewall-cmd --list-all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 添加</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=80/tcp --permanent   （--permanent永久生效，没有此参数重启后失效）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重新载入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --query-port=80/tcp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">删除</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl list-unit-files |grep enabled           查看所有开机启动的服务</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef | grep beanstalkd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/redis-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service beanstalkd start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看系统整体的负载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">命令：top</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">总体内存占用的查看</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">命令：free</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看内存占用前五的进程</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">命令：ps auxw | head -1;ps auxw|sort -rn -k4|head -5 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看CPU占用前三的进程</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">命令：ps auxw|head -1;ps auxw|sort -rn -k3|head -3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">列出所有端口： netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -anpt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看 TCP 22 端口有两种方法</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntlp | grep 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lsof -i tcp:22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep mongod</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php 中php-fpm 的重启、终止操作命令:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service php-fpm restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service mongod start  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service redis start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service beanstalkd start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看php-fpm进程数：</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep -c php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看运行内存</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/php  -i | grep mem</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看php编译参数</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/php  -i | grep Configure</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">首先要找到php-fpm.conf配置文件，查看pid的配置路径(不是安装路径)，然后把下面对应的地方改掉才能正常执行。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[root@DO-SG-H1 ~]# ps aux | grep php-fpm   </span></span>
<span class="line"><span style="color:#A6ACCD;">root     11799  0.0  0.0 103248   880 pts/0    S+   13:51   0:00 grep --color php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">root     11973  0.0  0.0 417748   964 ?        Ss   Jun01   0:20 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/php-fpm.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">看到</span></span>
<span class="line"><span style="color:#A6ACCD;">pid = /var/run/php-fpm/php-fpm.pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm配置测试</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -t</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -c /usr/local/php/etc/php.ini -y /usr/local/php/etc/php-fpm.conf -t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm 启动：</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -c /usr/local/php/etc/php.ini -y /usr/local/php/etc/php-fpm.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm 关闭：</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -INT \`cat /var/run/php-fpm/php-fpm.pid\`</span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm 重启：</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -USR2 \`cat /var/run/php-fpm/php-fpm.pid\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查看php-fpm进程数：</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep -c php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">消息队列：</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/beanstalkd -l 0.0.0.0 -p 11300 &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">redis：</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/redis-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">测试 /usr/bin/redis-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">测试环境手工启动mongodb命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/mongod -dbpath /data/mongodb/ -logpath /data/log/mongodb/mongod.log -logappend -fork -port 27017</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">正式环境手工启动mongodb命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/mongod -dbpath /var/lib/mongo/ -logpath /var/log/mongodb/mongod.log -logappend -fork -port 27017</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongod --dbpath=/var/lib/mongo/  --port=27017  --fork --logpath=/var/log/mongodb/mongod.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongod --repair --dbpath /var/lib/mongo/ --repairpath /tmp/mongodb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongod -port=27017 -storageEngine=mmapv1  -dbpath=/var/lib/mongo/ -logpath=/var/log/mongodb/mongod.log --logappend --journal --fork</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/home/git/.gitolite/conf/gitolite.conf  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">grep -rn &quot;{填写关键字}&quot; *</span></span>
<span class="line"><span style="color:#A6ACCD;">: 表示当前目录所有文件，也可以是某个文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">-r 是递归查找</span></span>
<span class="line"><span style="color:#A6ACCD;">-n 是显示行号</span></span>
<span class="line"><span style="color:#A6ACCD;">-R 查找所有文件包含子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">-i 忽略大小写</span></span>
<span class="line"><span style="color:#A6ACCD;">-l 只列出匹配的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">-L 列出不匹配的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">-w 只匹配整个单词，而不是字符串的一部分</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">grep -rn &quot;https://mt{s}.sea.utuapp.cn/220122/models/0001/{z}/{x}/{y}.png&quot; *</span></span></code></pre></div>`,4),e=[o];function c(t,A,C,r,i,y){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
