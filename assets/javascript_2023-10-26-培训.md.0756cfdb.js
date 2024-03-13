import{_ as s,o as a,c as n,b as l}from"./app.39978e14.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"备份文件","slug":"备份文件","link":"#备份文件","children":[]},{"level":2,"title":"数据库直接通过开发环境生成一个dvsv3","slug":"数据库直接通过开发环境生成一个dvsv3","link":"#数据库直接通过开发环境生成一个dvsv3","children":[]},{"level":2,"title":"修改数据库连接","slug":"修改数据库连接","link":"#修改数据库连接","children":[]},{"level":2,"title":"修改redis连接","slug":"修改redis连接","link":"#修改redis连接","children":[]},{"level":2,"title":"nginx配置文件","slug":"nginx配置文件","link":"#nginx配置文件","children":[]},{"level":2,"title":"系统服务配置文件","slug":"系统服务配置文件","link":"#系统服务配置文件","children":[]},{"level":2,"title":"rabbitmq","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":2,"title":"mysql查看死锁 解除死锁","slug":"mysql查看死锁-解除死锁","link":"#mysql查看死锁-解除死锁","children":[]},{"level":2,"title":"seq日志","slug":"seq日志","link":"#seq日志","children":[]},{"level":2,"title":"docker seq日志","slug":"docker-seq日志","link":"#docker-seq日志","children":[]},{"level":2,"title":"上传文件文件夹权限设置","slug":"上传文件文件夹权限设置","link":"#上传文件文件夹权限设置","children":[]},{"level":2,"title":"seq 查询","slug":"seq-查询","link":"#seq-查询","children":[]},{"level":2,"title":"查看信息中为未找到的日志","slug":"查看信息中为未找到的日志","link":"#查看信息中为未找到的日志","children":[]},{"level":2,"title":"升级golang","slug":"升级golang","link":"#升级golang","children":[]},{"level":2,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]},{"level":2,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":2,"title":"安装nodejs","slug":"安装nodejs","link":"#安装nodejs","children":[]},{"level":2,"title":"修改文件夹的名字","slug":"修改文件夹的名字","link":"#修改文件夹的名字","children":[]},{"level":2,"title":"递归拷贝文件夹","slug":"递归拷贝文件夹","link":"#递归拷贝文件夹","children":[]},{"level":2,"title":"查看当前用户","slug":"查看当前用户","link":"#查看当前用户","children":[]},{"level":2,"title":"安装goploy","slug":"安装goploy","link":"#安装goploy","children":[]},{"level":2,"title":"查看版本","slug":"查看版本","link":"#查看版本","children":[]}],"relativePath":"javascript/2023-10-26-培训.md","lastUpdated":1710337617000}'),e={name:"javascript/2023-10-26-培训.md"},p=l(`<h2 id="备份文件" tabindex="-1">备份文件 <a class="header-anchor" href="#备份文件" aria-hidden="true">#</a></h2><ul><li>/etc/nginx/conf.d/</li></ul><h2 id="数据库直接通过开发环境生成一个dvsv3" tabindex="-1">数据库直接通过开发环境生成一个dvsv3 <a class="header-anchor" href="#数据库直接通过开发环境生成一个dvsv3" aria-hidden="true">#</a></h2><ul><li>1、出数据库的结构和表数据</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  mysqldump -hxxx.xxx.xxx.xxx -P4006  -uroot -pxxxxxxxx dvsv3&gt;/usr/local/sunlight/sql/dvsv3.sql;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>2、在新服务器上线创建数据库 注意字符集 utf8mb4 注意排序规则 utf8mb4_general_ci</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">CREATE DATABASE your_database_name</span></span>
<span class="line"><span style="color:#babed8;">CHARACTER SET utf8mb4</span></span>
<span class="line"><span style="color:#babed8;">COLLATE utf8mb4_general_ci;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>3、然后导入到新数据库</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mysql -hlocalhost -P4006 -uroot -pxxxxxxxxx dvsv3&lt;/usr/local/sunlight/sql/dvsv3.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="修改数据库连接" tabindex="-1">修改数据库连接 <a class="header-anchor" href="#修改数据库连接" aria-hidden="true">#</a></h2><ul><li>/usr/local/sunlight/dvsv3/etc</li></ul><h2 id="修改redis连接" tabindex="-1">修改redis连接 <a class="header-anchor" href="#修改redis连接" aria-hidden="true">#</a></h2><h2 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="系统服务配置文件" tabindex="-1">系统服务配置文件 <a class="header-anchor" href="#系统服务配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">/usr/lib/systemd/system</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  // 配置文件路径</span></span>
<span class="line"><span style="color:#babed8;">  /etc/rabbitmq/rabbitmq.config</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // RabbitMQ 管理页面 用户名和密码</span></span>
<span class="line"><span style="color:#babed8;">  http://localhost:15675/#/</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  // 通过命令可以查看用户</span></span>
<span class="line"><span style="color:#babed8;">  sudo rabbitmqctl list_users</span></span>
<span class="line"><span style="color:#babed8;">  sun sunlight2010</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql查看死锁-解除死锁" tabindex="-1">mysql查看死锁 解除死锁 <a class="header-anchor" href="#mysql查看死锁-解除死锁" aria-hidden="true">#</a></h2><ul><li><p><a href="https://blog.csdn.net/wufagang/article/details/125554792" target="_blank" rel="noreferrer">https://blog.csdn.net/wufagang/article/details/125554792</a></p></li><li><p>查看死锁</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">1、查看正在进行中的事务</span></span>
<span class="line"><span style="color:#babed8;">SELECT * FROM information_schema.INNODB_TRX</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">2、查看正在锁的事务</span></span>
<span class="line"><span style="color:#babed8;">SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">3、查看等待锁的事务</span></span>
<span class="line"><span style="color:#babed8;">SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">4、查询是否锁表</span></span>
<span class="line"><span style="color:#babed8;">SHOW OPEN TABLES where In_use &gt; 0;</span></span>
<span class="line"><span style="color:#babed8;">在发生死锁时，这几种方式都可以查询到和当前死锁相关的信息。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">5、查看最近死锁的日志</span></span>
<span class="line"><span style="color:#babed8;">  show engine innodb status</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li><p>解除死锁</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">show processlist;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">SELECT * FROM information_schema.INNODB_TRX;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查询出来后 杀死进程</span></span>
<span class="line"><span style="color:#babed8;">kill id</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 杀完再来验证一下</span></span>
<span class="line"><span style="color:#babed8;">SHOW OPEN TABLES where In_use &gt; 0;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><h2 id="seq日志" tabindex="-1">seq日志 <a class="header-anchor" href="#seq日志" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://github.com/datalust?q=seq&amp;type=all&amp;language=&amp;sort=</span></span>
<span class="line"><span style="color:#babed8;">https://hub.docker.com/r/datalust/seq</span></span>
<span class="line"><span style="color:#babed8;">https://github.com/serilog/serilog</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="docker-seq日志" tabindex="-1">docker seq日志 <a class="header-anchor" href="#docker-seq日志" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 安装docker</span></span>
<span class="line"><span style="color:#babed8;">zypper in docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker pull datalust/seq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置seq密码,默认用户名为admin</span></span>
<span class="line"><span style="color:#babed8;">SeqPwd=$(echo &#39;sunlight2023&#39; | docker run --rm -i datalust/seq config hash) </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置seq日志存放映射的路径</span></span>
<span class="line"><span style="color:#babed8;">/usr/local/sunlight/docker/seq/data</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 5341 代码里调用的路径</span></span>
<span class="line"><span style="color:#babed8;">// 80 查看日志的UI</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run --restart always --name seq -itd -e ACCEPT_EULA=Y -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=&quot;$SeqPwd&quot;  -v /root/docker/seq/data:/data --memory=512m --memory-swap=512m -e SEQ_CACHE_SYSTEMRAMTARGET=0 -p 12000:80 -p 5341:5341 datalust/seq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// nginx 进行配置转发</span></span>
<span class="line"><span style="color:#babed8;"> netstat -ntlp|grep 12000</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// nginx中添加如下转发规则</span></span>
<span class="line"><span style="color:#babed8;">  location /seq {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://127.0.0.1:12000;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="color:#babed8;">    add_header Cache-Control no-cache;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    # 解决潜在的路径问题</span></span>
<span class="line"><span style="color:#babed8;">    rewrite ^/seq(/.*)$ $1 break;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> // nginx配置完毕后,重启一下nginx</span></span>
<span class="line"><span style="color:#babed8;"> nginx -s reload </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> // 创建seq apikey </span></span>
<span class="line"><span style="color:#babed8;"> https://www.cnblogs.com/RainFate/p/16869403.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="上传文件文件夹权限设置" tabindex="-1">上传文件文件夹权限设置 <a class="header-anchor" href="#上传文件文件夹权限设置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">linux Access to the path &#39;/usr/local/sunlight/dvsv3/uploads/2023/10/30&#39; is denied.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//设置读写执行权限</span></span>
<span class="line"><span style="color:#babed8;">chmod 755 /usr/local/sunlight/dvsv3/uploads</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 更改文件夹所有者和组（方便systemctl dvsv3-basic（dvs用户调用））</span></span>
<span class="line"><span style="color:#babed8;">chown -R dvs:dvs dvsv3   //-R 递归</span></span>
<span class="line"><span style="color:#babed8;">chown dvs:dvs uploads</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="seq-查询" tabindex="-1">seq 查询 <a class="header-anchor" href="#seq-查询" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">- 直接输入字符串</span></span>
<span class="line"><span style="color:#babed8;">  - 请先登录</span></span>
<span class="line"><span style="color:#babed8;">- 根据字段查询</span></span>
<span class="line"><span style="color:#babed8;">  - @Level= &quot;Information&quot; and  @Message like &#39;%127.0.0.1%&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看信息中为未找到的日志" tabindex="-1">查看信息中为未找到的日志 <a class="header-anchor" href="#查看信息中为未找到的日志" aria-hidden="true">#</a></h2><p>journalctl -u dvsv3-* -f| grep 未找到</p><h2 id="升级golang" tabindex="-1">升级golang <a class="header-anchor" href="#升级golang" aria-hidden="true">#</a></h2><ul><li>查看当前版本<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">go version </span></span>
<span class="line"><span style="color:#babed8;">// 显示版本号如下</span></span>
<span class="line"><span style="color:#babed8;">go version go1.10.8 linux/arm64</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>下载安装包，拷贝到服务器<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cd /data/go</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo tar -C /usr/local -xzf go1.19.3.linux-arm64.tar.gz</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置环境变量</span></span>
<span class="line"><span style="color:#babed8;">// /etc/profile</span></span>
<span class="line"><span style="color:#babed8;">export PATH=$PATH:/usr/local/go/bin</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 新版本安装路径</span></span>
<span class="line"><span style="color:#babed8;">/usr/local/go/bin/go version</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><h2 id="安装docker-compose" tabindex="-1">安装docker-compose <a class="header-anchor" href="#安装docker-compose" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 安装</span></span>
<span class="line"><span style="color:#babed8;">zypper install docker-compose</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看版本</span></span>
<span class="line"><span style="color:#babed8;">docker-compose version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 发现python </span></span>
<span class="line"><span style="color:#babed8;">pip </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  zypper install git</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  git version</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装nodejs" tabindex="-1">安装nodejs <a class="header-anchor" href="#安装nodejs" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 下载 </span></span>
<span class="line"><span style="color:#babed8;">https://nodejs.org/dist/v16.14.2/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 解压</span></span>
<span class="line"><span style="color:#babed8;">tar -xzf node-v16.14.2-linux-arm64.tar.gz</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 移动</span></span>
<span class="line"><span style="color:#babed8;">sudo mv node-v16.14.2-linux-arm64 /usr/local/lib/nodejs</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置环境变量</span></span>
<span class="line"><span style="color:#babed8;">export PATH=/usr/local/lib/nodejs/bin:$PATH</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看版本</span></span>
<span class="line"><span style="color:#babed8;">node -v</span></span>
<span class="line"><span style="color:#babed8;">npm -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="修改文件夹的名字" tabindex="-1">修改文件夹的名字 <a class="header-anchor" href="#修改文件夹的名字" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> // codeup 旧文件夹名字</span></span>
<span class="line"><span style="color:#babed8;"> // work 新文件夹名字</span></span>
<span class="line"><span style="color:#babed8;"> mv codeup work </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="递归拷贝文件夹" tabindex="-1">递归拷贝文件夹 <a class="header-anchor" href="#递归拷贝文件夹" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 在release/cms 目录下的</span></span>
<span class="line"><span style="color:#babed8;">cp -r console  /usr/local/sunlight/dvsv3/ui/</span></span>
<span class="line"><span style="color:#babed8;">cp -r dvs-monitor /usr/local/sunlight/dvsv3/ui/console/child</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看当前用户" tabindex="-1">查看当前用户 <a class="header-anchor" href="#查看当前用户" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">whoami</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">echo $USER</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装goploy" tabindex="-1">安装goploy <a class="header-anchor" href="#安装goploy" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://github.com/zhenorzz/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -it \\</span></span>
<span class="line"><span style="color:#babed8;">    -p 9000:80 \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span style="color:#babed8;">    -v /root/docker/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span style="color:#babed8;">    zhenorzz/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -it -d \\</span></span>
<span class="line"><span style="color:#babed8;">    --name goploy \\</span></span>
<span class="line"><span style="color:#babed8;">    -p 9000:80 \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span style="color:#babed8;">    -v /root/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span style="color:#babed8;">    goploy </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    docker run -it -d \\</span></span>
<span class="line"><span style="color:#babed8;">    --name gogo \\</span></span>
<span class="line"><span style="color:#babed8;">    -p 19029:80 \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span style="color:#babed8;">    -v /root/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span style="color:#babed8;">    gogo    </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看版本" tabindex="-1">查看版本 <a class="header-anchor" href="#查看版本" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> /usr/local/dotnet-sdk/dotnet --version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,48),o=[p];function c(t,i,d,r,b,h){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{g as __pageData,u as default};
