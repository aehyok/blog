import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.DxMCroLl.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-10-26-培训.md","filePath":"javascript/2023-10-26-培训.md","lastUpdated":1748475861000}'),l={name:"javascript/2023-10-26-培训.md"};function i(t,s,o,c,d,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="备份文件" tabindex="-1">备份文件 <a class="header-anchor" href="#备份文件" aria-label="Permalink to &quot;备份文件&quot;">​</a></h2><ul><li>/etc/nginx/conf.d/</li></ul><h2 id="数据库直接通过开发环境生成一个dvsv3" tabindex="-1">数据库直接通过开发环境生成一个dvsv3 <a class="header-anchor" href="#数据库直接通过开发环境生成一个dvsv3" aria-label="Permalink to &quot;数据库直接通过开发环境生成一个dvsv3&quot;">​</a></h2><ul><li>1、出数据库的结构和表数据</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  mysqldump -hxxx.xxx.xxx.xxx -P4006  -uroot -pxxxxxxxx dvsv3&gt;/usr/local/sunlight/sql/dvsv3.sql;</span></span></code></pre></div><ul><li>2、在新服务器上线创建数据库 注意字符集 utf8mb4 注意排序规则 utf8mb4_general_ci</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE DATABASE deploy</span></span>
<span class="line"><span>CHARACTER SET utf8mb4</span></span>
<span class="line"><span>COLLATE utf8mb4_general_ci;</span></span></code></pre></div><ul><li>3、然后导入到新数据库</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql -hlocalhost -P4006 -uroot -pxxxxxxxxx dvsv3&lt;/usr/local/sunlight/sql/dvsv3.sql</span></span></code></pre></div><h2 id="修改数据库连接" tabindex="-1">修改数据库连接 <a class="header-anchor" href="#修改数据库连接" aria-label="Permalink to &quot;修改数据库连接&quot;">​</a></h2><ul><li>/usr/local/sunlight/dvsv3/etc</li></ul><h2 id="修改redis连接" tabindex="-1">修改redis连接 <a class="header-anchor" href="#修改redis连接" aria-label="Permalink to &quot;修改redis连接&quot;">​</a></h2><h2 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-label="Permalink to &quot;nginx配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/etc/nginx/conf.d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// dvsv3.conf</span></span>
<span class="line"><span>// 可以找到nginx日志记录</span></span>
<span class="line"><span>// nginx 访问日志access_log /var/log/nginx/dvsv3.access.log;</span></span>
<span class="line"><span>// nginx 错误日志error_log /var/log/nginx/dvsv3.error.log warn;</span></span></code></pre></div><h2 id="系统服务配置文件" tabindex="-1">系统服务配置文件 <a class="header-anchor" href="#系统服务配置文件" aria-label="Permalink to &quot;系统服务配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/usr/lib/systemd/system</span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-label="Permalink to &quot;rabbitmq&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 配置文件路径</span></span>
<span class="line"><span>  /etc/rabbitmq/rabbitmq.config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // RabbitMQ 管理页面 用户名和密码</span></span>
<span class="line"><span>  http://localhost:15675/#/</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 通过命令可以查看用户</span></span>
<span class="line"><span>  sudo rabbitmqctl list_users</span></span>
<span class="line"><span>  sun sunlight2010</span></span></code></pre></div><h2 id="mysql查看死锁-解除死锁" tabindex="-1">mysql查看死锁 解除死锁 <a class="header-anchor" href="#mysql查看死锁-解除死锁" aria-label="Permalink to &quot;mysql查看死锁 解除死锁&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/wufagang/article/details/125554792" target="_blank" rel="noreferrer">https://blog.csdn.net/wufagang/article/details/125554792</a></p></li><li><p>查看死锁</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1、查看正在进行中的事务</span></span>
<span class="line"><span>SELECT * FROM information_schema.INNODB_TRX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、查看正在锁的事务</span></span>
<span class="line"><span>SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、查看等待锁的事务</span></span>
<span class="line"><span>SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、查询是否锁表</span></span>
<span class="line"><span>SHOW OPEN TABLES where In_use &gt; 0;</span></span>
<span class="line"><span>在发生死锁时，这几种方式都可以查询到和当前死锁相关的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5、查看最近死锁的日志</span></span>
<span class="line"><span>  show engine innodb status</span></span></code></pre></div></li><li><p>解除死锁</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>show processlist;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM information_schema.INNODB_TRX;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查询出来后 杀死进程</span></span>
<span class="line"><span>kill id</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 杀完再来验证一下</span></span>
<span class="line"><span>SHOW OPEN TABLES where In_use &gt; 0;</span></span></code></pre></div></li></ul><h2 id="seq日志" tabindex="-1">seq日志 <a class="header-anchor" href="#seq日志" aria-label="Permalink to &quot;seq日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/datalust?q=seq&amp;type=all&amp;language=&amp;sort=</span></span>
<span class="line"><span>https://hub.docker.com/r/datalust/seq</span></span>
<span class="line"><span>https://github.com/serilog/serilog</span></span></code></pre></div><h2 id="docker-seq日志" tabindex="-1">docker seq日志 <a class="header-anchor" href="#docker-seq日志" aria-label="Permalink to &quot;docker seq日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 安装docker</span></span>
<span class="line"><span>zypper in docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull datalust/seq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置seq密码,默认用户名为admin</span></span>
<span class="line"><span>SeqPwd=$(echo &#39;sunlight2023&#39; | docker run --rm -i datalust/seq config hash) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置seq日志存放映射的路径</span></span>
<span class="line"><span>/usr/local/sunlight/docker/seq/data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 5341 代码里调用的路径</span></span>
<span class="line"><span>// 80 查看日志的UI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --restart always --name seq -itd -e ACCEPT_EULA=Y -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=&quot;$SeqPwd&quot;  -v /root/docker/seq/data:/data --memory=512m --memory-swap=512m -e SEQ_CACHE_SYSTEMRAMTARGET=0 -p 12000:80 -p 5341:5341 datalust/seq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// nginx 进行配置转发</span></span>
<span class="line"><span> netstat -ntlp|grep 12000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// nginx中添加如下转发规则</span></span>
<span class="line"><span>  location /seq {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:12000;</span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    add_header Cache-Control no-cache;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 解决潜在的路径问题</span></span>
<span class="line"><span>    rewrite ^/seq(/.*)$ $1 break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // nginx配置完毕后,重启一下nginx</span></span>
<span class="line"><span> nginx -s reload </span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 创建seq apikey </span></span>
<span class="line"><span> https://www.cnblogs.com/RainFate/p/16869403.html</span></span></code></pre></div><h2 id="上传文件文件夹权限设置" tabindex="-1">上传文件文件夹权限设置 <a class="header-anchor" href="#上传文件文件夹权限设置" aria-label="Permalink to &quot;上传文件文件夹权限设置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>linux Access to the path &#39;/usr/local/sunlight/dvsv3/uploads/2023/10/30&#39; is denied.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//设置读写执行权限</span></span>
<span class="line"><span>chmod 755 /usr/local/sunlight/dvsv3/uploads</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 更改文件夹所有者和组（方便systemctl dvsv3-basic（dvs用户调用））</span></span>
<span class="line"><span>chown -R dvs:dvs dvsv3   //-R 递归</span></span>
<span class="line"><span>chown dvs:dvs uploads</span></span></code></pre></div><h2 id="seq-查询" tabindex="-1">seq 查询 <a class="header-anchor" href="#seq-查询" aria-label="Permalink to &quot;seq 查询&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 直接输入字符串</span></span>
<span class="line"><span>  - 请先登录</span></span>
<span class="line"><span>- 根据字段查询</span></span>
<span class="line"><span>  - @Level= &quot;Information&quot; and  @Message like &#39;%127.0.0.1%&#39;</span></span></code></pre></div><h2 id="查看信息中为未找到的日志" tabindex="-1">查看信息中为未找到的日志 <a class="header-anchor" href="#查看信息中为未找到的日志" aria-label="Permalink to &quot;查看信息中为未找到的日志&quot;">​</a></h2><p>实时查找 journalctl -u dvsv3-* -f| grep 未找到</p><p>非实时查找 journalctl -u dvsv3-* | grep 未找到</p><h2 id="升级golang" tabindex="-1">升级golang <a class="header-anchor" href="#升级golang" aria-label="Permalink to &quot;升级golang&quot;">​</a></h2><ul><li>查看当前版本<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>go version </span></span>
<span class="line"><span>// 显示版本号如下</span></span>
<span class="line"><span>go version go1.10.8 linux/arm64</span></span></code></pre></div></li><li>下载安装包，拷贝到服务器<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /data/go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo tar -C /usr/local -xzf go1.19.3.linux-arm64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置环境变量</span></span>
<span class="line"><span>// /etc/profile</span></span>
<span class="line"><span>export PATH=$PATH:/usr/local/go/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新版本安装路径</span></span>
<span class="line"><span>/usr/local/go/bin/go version</span></span></code></pre></div></li></ul><h2 id="安装docker-compose" tabindex="-1">安装docker-compose <a class="header-anchor" href="#安装docker-compose" aria-label="Permalink to &quot;安装docker-compose&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 安装</span></span>
<span class="line"><span>zypper install docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看版本</span></span>
<span class="line"><span>docker-compose version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发现python </span></span>
<span class="line"><span>pip</span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  zypper install git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  git version</span></span></code></pre></div><h2 id="安装nodejs" tabindex="-1">安装nodejs <a class="header-anchor" href="#安装nodejs" aria-label="Permalink to &quot;安装nodejs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 下载 </span></span>
<span class="line"><span>https://nodejs.org/dist/v16.14.2/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 解压</span></span>
<span class="line"><span>tar -xzf node-v16.14.2-linux-arm64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 移动</span></span>
<span class="line"><span>sudo mv node-v16.14.2-linux-arm64 /usr/local/lib/nodejs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置环境变量</span></span>
<span class="line"><span>export PATH=/usr/local/lib/nodejs/bin:$PATH</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看版本</span></span>
<span class="line"><span>node -v</span></span>
<span class="line"><span>npm -v</span></span></code></pre></div><h2 id="修改文件夹的名字" tabindex="-1">修改文件夹的名字 <a class="header-anchor" href="#修改文件夹的名字" aria-label="Permalink to &quot;修改文件夹的名字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // codeup 旧文件夹名字</span></span>
<span class="line"><span> // work 新文件夹名字</span></span>
<span class="line"><span> mv codeup work</span></span></code></pre></div><h2 id="递归拷贝文件夹" tabindex="-1">递归拷贝文件夹 <a class="header-anchor" href="#递归拷贝文件夹" aria-label="Permalink to &quot;递归拷贝文件夹&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在release/cms 目录下的</span></span>
<span class="line"><span>cp -r console  /usr/local/sunlight/dvsv3/ui/</span></span>
<span class="line"><span>cp -r dvs-monitor /usr/local/sunlight/dvsv3/ui/console/child</span></span></code></pre></div><h2 id="查看当前用户" tabindex="-1">查看当前用户 <a class="header-anchor" href="#查看当前用户" aria-label="Permalink to &quot;查看当前用户&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>whoami</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $USER</span></span></code></pre></div><h2 id="安装goploy" tabindex="-1">安装goploy <a class="header-anchor" href="#安装goploy" aria-label="Permalink to &quot;安装goploy&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/zhenorzz/goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -it \\</span></span>
<span class="line"><span>    -p 9000:80 \\</span></span>
<span class="line"><span>    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span>    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span>    -v /root/docker/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span>    zhenorzz/goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -it -d \\</span></span>
<span class="line"><span>    --name goploy \\</span></span>
<span class="line"><span>    -p 9000:80 \\</span></span>
<span class="line"><span>    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span>    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span>    -v /root/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span>    goploy </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    docker run -it -d \\</span></span>
<span class="line"><span>    --name gogo \\</span></span>
<span class="line"><span>    -p 19029:80 \\</span></span>
<span class="line"><span>    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span>    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span>    -v /root/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span>    gogo</span></span></code></pre></div><h2 id="查看版本" tabindex="-1">查看版本 <a class="header-anchor" href="#查看版本" aria-label="Permalink to &quot;查看版本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> /usr/local/dotnet-sdk/dotnet --version</span></span></code></pre></div>`,49)]))}const g=a(l,[["render",i]]);export{u as __pageData,g as default};
