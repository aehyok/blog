import{_ as s,o as n,c as a,a as p}from"./app.0a2a86d4.js";const m=JSON.parse('{"title":"dotnet \u542F\u52A8dll\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"dotnet \u542F\u52A8dll\u6587\u4EF6","slug":"dotnet-\u542F\u52A8dll\u6587\u4EF6"},{"level":2,"title":"mysql \u67E5\u770B\u8FDB\u7A0B","slug":"mysql-\u67E5\u770B\u8FDB\u7A0B"}],"relativePath":"javascript/2022-12-28-linux.md","lastUpdated":1672831830000}'),l={name:"javascript/2022-12-28-linux.md"},e=p(`<h2 id="dotnet-\u542F\u52A8dll\u6587\u4EF6" tabindex="-1">dotnet \u542F\u52A8dll\u6587\u4EF6 <a class="header-anchor" href="#dotnet-\u542F\u52A8dll\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">dotnet SLMDEngine.Base.dll --urls http://locaohost:8000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mysql-\u67E5\u770B\u8FDB\u7A0B" tabindex="-1">mysql \u67E5\u770B\u8FDB\u7A0B <a class="header-anchor" href="#mysql-\u67E5\u770B\u8FDB\u7A0B" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6570\u5B57\u4E61\u67512.0\u6253\u5305\u673A\u5668 139.9.1.176  /home/soft  \u628A\u7F16\u8BD1\u597D\u7684\u6587\u4EF6\u62F7\u8D1D\u5230\u54CD\u5E94\u7684\u76EE\u5F55\u4E0B  \u6267\u884C sh build.sh 2.2.0.005</span></span>
<span class="line"><span style="color:#A6ACCD;">\u751F\u6210\u7684RPM\u5305\u8DEF\u5F84 /usr/src/packages/RPMS/noarch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u78C1\u76D8\u6302\u8F7Dcat /etc/fstab     </span></span>
<span class="line"><span style="color:#A6ACCD;">mount -a \u7684\u610F\u601D\u662F\u5C06/etc/fstab\u7684\u6240\u6709\u5185\u5BB9\u91CD\u65B0\u52A0\u8F7D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mount \u662F\u53EF\u4EE5\u663E\u793A/etc/fstab\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">chmod -R 777 \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R root.root \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u62F7\u8D1D\u6587\u4EF6\u5230\u5176\u4ED6\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">scp ./x264.tar root@172.16.140.234:/home/soft</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i lo -s 0 tcp and port 80 -w 001.pcap</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">curl\u6A21\u62DF\u8C03\u7528\u63A5\u53E3</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u96C6\u7FA4\u4FE1\u606Fcluster info    \u8282\u70B9\u4FE1\u606Fcluster nodes</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 172.31.3.185:3718/admin</span></span>
<span class="line"><span style="color:#A6ACCD;">use admin</span></span>
<span class="line"><span style="color:#A6ACCD;">db.auth(&#39;root&#39;,&quot;OpenLab2021&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">rs.status()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SIT1 \u73AF\u5883\u8FDE\u63A5  mongo &quot;mongodb://ips:ips@localhost:2718/ips&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E24\u79CD\u8FDE\u63A5\u65B9\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo &quot;mongodb://ucms:uc123_(ms@172.17.0.10:23000,172.17.0.13:23000,172.17.0.14:23000/ucms&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mongo -u test -p test --host 127.0.0.1 --port 27017        //\u9002\u7528\u4E8Emongo\u7248\u672C4.x\u4EE5\u4E0B </span></span>
<span class="line"><span style="color:#A6ACCD;">mongo 127.0.0.1:27017/\u6570\u636E\u5E93\u540D -u test -p test            //\u9002\u7528\u4E8Emongo\u7248\u672C4.x\u4EE5\u4E0A</span></span>
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
<span class="line"><span style="color:#A6ACCD;">linux\u4E0A\u5B89\u88C5.net core sdk 2.2\uFF08\u79BB\u7EBF\u5B89\u88C5\u548Cyum\u4ED3\u5E93\u5B89\u88C5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/u010476739/article/details/100144287?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1-100144287.nonecase&amp;utm_term=linux%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85dotnet</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RPM\u5305\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa |grep epg \u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh xxx.rpm \u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e XXXX \u5378\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">apache</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart mysqld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0B\u9762\u770B\u4E0Bcentos7\u91CD\u542Fphp-fpm\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm stop</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm restart</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall\u5E38\u7528\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    1\u3001\u91CD\u542F\u3001\u5173\u95ED\u3001\u5F00\u542F\u3001firewalld.serverice \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld restart \u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld start  \u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Service firewalld stop  \u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl status firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl stop firewalld  \u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl start firewalld \u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl  restart firewalld \u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        systemctl  disable firewalld  \u5173\u95ED\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl  disable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl  enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    2\u3001\u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        firewall-cmd --state</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    3\u3001\u67E5\u770B\u9632\u706B\u5899\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        firewall-cmd --list-all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> \u6DFB\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=80/tcp --permanent   \uFF08--permanent\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u65B0\u8F7D\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --query-port=80/tcp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl list-unit-files |grep enabled           \u67E5\u770B\u6240\u6709\u5F00\u673A\u542F\u52A8\u7684\u670D\u52A1</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u7CFB\u7EDF\u6574\u4F53\u7684\u8D1F\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Atop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u603B\u4F53\u5185\u5B58\u5360\u7528\u7684\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Afree</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u5185\u5B58\u5360\u7528\u524D\u4E94\u7684\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Aps auxw | head -1;ps auxw|sort -rn -k4|head -5 </span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php \u4E2Dphp-fpm \u7684\u91CD\u542F\u3001\u7EC8\u6B62\u64CD\u4F5C\u547D\u4EE4:</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770Bphp-fpm\u8FDB\u7A0B\u6570\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep -c php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u8FD0\u884C\u5185\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/php  -i | grep mem</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770Bphp\u7F16\u8BD1\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/php  -i | grep Configure</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u542Fphp-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php-fpm restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9996\u5148\u8981\u627E\u5230php-fpm.conf\u914D\u7F6E\u6587\u4EF6\uFF0C\u67E5\u770Bpid\u7684\u914D\u7F6E\u8DEF\u5F84(\u4E0D\u662F\u5B89\u88C5\u8DEF\u5F84)\uFF0C\u7136\u540E\u628A\u4E0B\u9762\u5BF9\u5E94\u7684\u5730\u65B9\u6539\u6389\u624D\u80FD\u6B63\u5E38\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[root@DO-SG-H1 ~]# ps aux | grep php-fpm   </span></span>
<span class="line"><span style="color:#A6ACCD;">root     11799  0.0  0.0 103248   880 pts/0    S+   13:51   0:00 grep --color php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">root     11973  0.0  0.0 417748   964 ?        Ss   Jun01   0:20 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/php-fpm.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u770B\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">pid = /var/run/php-fpm/php-fpm.pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm\u914D\u7F6E\u6D4B\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -t</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -c /usr/local/php/etc/php.ini -y /usr/local/php/etc/php-fpm.conf -t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm \u542F\u52A8\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/php/sbin/php-fpm -c /usr/local/php/etc/php.ini -y /usr/local/php/etc/php-fpm.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm \u5173\u95ED\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -INT \`cat /var/run/php-fpm/php-fpm.pid\`</span></span>
<span class="line"><span style="color:#A6ACCD;">php-fpm \u91CD\u542F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -USR2 \`cat /var/run/php-fpm/php-fpm.pid\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770Bphp-fpm\u8FDB\u7A0B\u6570\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux | grep -c php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6D88\u606F\u961F\u5217\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/beanstalkd -l 0.0.0.0 -p 11300 &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">redis\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/redis-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6D4B\u8BD5 /usr/bin/redis-server &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6D4B\u8BD5\u73AF\u5883\u624B\u5DE5\u542F\u52A8mongodb\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/mongod -dbpath /data/mongodb/ -logpath /data/log/mongodb/mongod.log -logappend -fork -port 27017</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6B63\u5F0F\u73AF\u5883\u624B\u5DE5\u542F\u52A8mongodb\u547D\u4EE4</span></span>
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
<span class="line"><span style="color:#A6ACCD;">grep -rn &quot;{\u586B\u5199\u5173\u952E\u5B57}&quot; *</span></span>
<span class="line"><span style="color:#A6ACCD;">: \u8868\u793A\u5F53\u524D\u76EE\u5F55\u6240\u6709\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u67D0\u4E2A\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">-r \u662F\u9012\u5F52\u67E5\u627E</span></span>
<span class="line"><span style="color:#A6ACCD;">-n \u662F\u663E\u793A\u884C\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">-R \u67E5\u627E\u6240\u6709\u6587\u4EF6\u5305\u542B\u5B50\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">-i \u5FFD\u7565\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">-l \u53EA\u5217\u51FA\u5339\u914D\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">-L \u5217\u51FA\u4E0D\u5339\u914D\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">-w \u53EA\u5339\u914D\u6574\u4E2A\u5355\u8BCD\uFF0C\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">grep -rn &quot;https://mt{s}.sea.utuapp.cn/220122/models/0001/{z}/{x}/{y}.png&quot; *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function c(t,A,C,r,i,y){return n(),a("div",null,o)}var d=s(l,[["render",c]]);export{m as __pageData,d as default};
