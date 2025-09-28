import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.ELrfyV9R.js";const u=JSON.parse('{"title":"bind 127.0.0.1 -::1 将这一行暂时注释掉","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-12-28-debian.md","filePath":"article/code/2023-12-28-debian.md","lastUpdated":1759102741000}'),l={name:"article/code/2023-12-28-debian.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="ubuntu说明" tabindex="-1">ubuntu说明 <a class="header-anchor" href="#ubuntu说明" aria-label="Permalink to &quot;ubuntu说明&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://blog.csdn.net/holyvslin/article/details/131780197</span></span></code></pre></div><h2 id="debian-中如何在vim中启用粘贴和复制" tabindex="-1">debian 中如何在vim中启用粘贴和复制 <a class="header-anchor" href="#debian-中如何在vim中启用粘贴和复制" aria-label="Permalink to &quot;debian 中如何在vim中启用粘贴和复制&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vi /usr/share/vim/vim82/defaults.vim</span></span>
<span class="line"><span>vi /usr/share/vim/vim90/defaults.vim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>找到：set mouse=a</span></span>
<span class="line"><span>改为：set mouse-=a</span></span>
<span class="line"><span>esc退出后便可以进行粘贴和复制操作</span></span></code></pre></div><h2 id="开启docker" tabindex="-1">开启Docker <a class="header-anchor" href="#开启docker" aria-label="Permalink to &quot;开启Docker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 启动docker守护进程</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置让docker服务岁系统自动启动</span></span>
<span class="line"><span>systemctl enable docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 取消开机自动启动</span></span>
<span class="line"><span>systemctl disable docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 停止docker服务</span></span>
<span class="line"><span>systemctl stop docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看docker版本，确认docker是否安装成功</span></span>
<span class="line"><span>docker version</span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 安装git</span></span>
<span class="line"><span>apt-get install git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看git版本</span></span>
<span class="line"><span>git version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看OpenSSH版本</span></span>
<span class="line"><span>ssh -V</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成ssh密钥对</span></span>
<span class="line"><span>ssh-keygen -t rsa -b 4096</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一路默认即可，生成</span></span>
<span class="line"><span>// 生成的路径一般在/root/.ssh/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看</span></span>
<span class="line"><span>ls -li</span></span>
<span class="line"><span>920236 -rw------- 1 root root  406 Dec 28 19:12 authorized_keys</span></span>
<span class="line"><span>919704 -rw------- 1 root root 3369 Dec 28 19:39 id_rsa</span></span>
<span class="line"><span>919708 -rw-r--r-- 1 root root  737 Dec 28 19:39 id_rsa.pub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一般是将id_rsa.pub拷贝到服务器或者直接将里面的长字符串进行配置后使用</span></span>
<span class="line"><span>我这里是将id_rsa.pub 拷贝到了github上用来拉去项目的</span></span></code></pre></div><h2 id="准备mysql-redis-rabbitmq" tabindex="-1">准备mysql redis rabbitmq <a class="header-anchor" href="#准备mysql-redis-rabbitmq" aria-label="Permalink to &quot;准备mysql redis rabbitmq&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /root</span></span>
<span class="line"><span>mkdir docker</span></span>
<span class="line"><span>cd docker </span></span>
<span class="line"><span>mkdir redis</span></span>
<span class="line"><span>mkdir mysql</span></span>
<span class="line"><span>mkdir rabbitmq</span></span></code></pre></div><h2 id="redis-配置" tabindex="-1">redis 配置 <a class="header-anchor" href="#redis-配置" aria-label="Permalink to &quot;redis 配置&quot;">​</a></h2><ul><li>配置文件位置 <ul><li>英文版 <a href="https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf" target="_blank" rel="noreferrer">https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf</a></li><li>中文版 <a href="https://juejin.cn/post/7316794084998348851?searchId=20231228200452F893C938CCCBA53BD65F" target="_blank" rel="noreferrer">https://juejin.cn/post/7316794084998348851?searchId=20231228200452F893C938CCCBA53BD65F</a></li></ul></li></ul><p>我这里主要修改了</p><ul><li>英文版中的requirepass密码 然后拷贝到/root/docker/redis/conf中去了</li><li><h1 id="bind-127-0-0-1-1-将这一行暂时注释掉" tabindex="-1">bind 127.0.0.1 -::1 将这一行暂时注释掉 <a class="header-anchor" href="#bind-127-0-0-1-1-将这一行暂时注释掉" aria-label="Permalink to &quot;bind 127.0.0.1 -::1 将这一行暂时注释掉&quot;">​</a></h1></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --restart=always \\</span></span>
<span class="line"><span>-p 6379:6379 \\</span></span>
<span class="line"><span>--name redis \\</span></span>
<span class="line"><span>-e &quot;TZ=Asia/Shanghai&quot; \\</span></span>
<span class="line"><span>-v /root/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\</span></span>
<span class="line"><span>-v /root/docker/redis/data:/data \\</span></span>
<span class="line"><span>-itd redis:7.0.12 redis-server /etc/redis/redis.conf</span></span></code></pre></div><h2 id="mysql配置" tabindex="-1">mysql配置 <a class="header-anchor" href="#mysql配置" aria-label="Permalink to &quot;mysql配置&quot;">​</a></h2><p>docker search mysql</p><p>docker pull mysql</p><ul><li><a href="https://www.jianshu.com/p/e8a4ac2a92e0" target="_blank" rel="noreferrer">https://www.jianshu.com/p/e8a4ac2a92e0</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name mysql \\</span></span>
<span class="line"><span>--restart always \\</span></span>
<span class="line"><span>--privileged=true \\</span></span>
<span class="line"><span>-p 13306:3306 \\</span></span>
<span class="line"><span>-v /root/docker/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span>-v /root/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf \\</span></span>
<span class="line"><span>-v /root/docker/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span>-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>-d mysql:8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;M9y2512!&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-label="Permalink to &quot;rabbitmq&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker search rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --restart always -itd --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 15672进入rabbitmq数据管理后台的</span></span>
<span class="line"><span>上面创建并运行容器后其实已经设置用户名和密码来登录15672: admin  admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  rabbitmq port 15672端口无法访问</span></span>
<span class="line"><span>  - https://blog.csdn.net/web18334137065/article/details/126327427</span></span>
<span class="line"><span>  docker exec -it rabbitmq bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 进入容器启用插件</span></span>
<span class="line"><span>  rabbitmq-plugins enable rabbitmq_management</span></span></code></pre></div><h2 id="seq" tabindex="-1">seq <a class="header-anchor" href="#seq" aria-label="Permalink to &quot;seq&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull datalust/seq</span></span>
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
<span class="line"><span>docker run --restart always --name seq -itd -e ACCEPT_EULA=Y -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=&quot;$SeqPwd&quot;  -v /root/docker/seq/data:/data --memory=512m --memory-swap=512m -e SEQ_CACHE_SYSTEMRAMTARGET=0 -p 12000:80 -p 5341:5341 datalust/seq\`</span></span></code></pre></div><h2 id="git拉取项目" tabindex="-1">git拉取项目 <a class="header-anchor" href="#git拉取项目" aria-label="Permalink to &quot;git拉取项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>cd /root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建目录，并cd过去</span></span>
<span class="line"><span>mkdir github</span></span>
<span class="line"><span>cd github</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//克隆项目</span></span>
<span class="line"><span>git clone git@github.com:aehyok/NET8.0.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//给脚本授权</span></span>
<span class="line"><span>chmod 777 run.sh</span></span></code></pre></div><h2 id="systemd-服务" tabindex="-1">systemd 服务 <a class="header-anchor" href="#systemd-服务" aria-label="Permalink to &quot;systemd 服务&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DOTNET_FILE=aspnetcore-runtime-8.0.0-linux-x64.tar.gz</span></span>
<span class="line"><span>export  =$(pwd)/.dotnet</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p &quot;$DOTNET_ROOT&quot; &amp;&amp; tar zxf &quot;$DOTNET_FILE&quot; -C &quot;$DOTNET_ROOT&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拷贝到docker中</span></span>
<span class="line"><span>docker cp /root/soft/aspnetcore-runtime-8.0.0-linux-x64.tar.gz e850bc7b0b95:/opt/goploy/aspnetcore-runtime-8.0.0-linux-x64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker exec -it e850bc7b0b95 sh</span></span></code></pre></div><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装nginx&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 安装nginx</span></span>
<span class="line"><span>apt install nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看版本</span></span>
<span class="line"><span>nginx -V</span></span></code></pre></div><h2 id="goploy" tabindex="-1">goploy <a class="header-anchor" href="#goploy" aria-label="Permalink to &quot;goploy&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker search goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull zhenorzz/goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建mysql数据库</span></span>
<span class="line"><span>// 并初始化数据库结构</span></span>
<span class="line"><span>https://github.com/zhenorzz/goploy/blob/master/database/goploy.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建docker参数 https://hub.docker.com/r/zhenorzz/goploy</span></span>
<span class="line"><span>docker run -it \\</span></span>
<span class="line"><span>    -p 9000:80 \\</span></span>
<span class="line"><span>    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span>    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span>    -v /root/docker/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span>    zhenorzz/goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 然后设置一些数据库的初始化参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问9000查看页面</span></span>
<span class="line"><span>初始化的用户名和密码</span></span>
<span class="line"><span>admin admin!@#</span></span></code></pre></div><h2 id="docker-compose-安装" tabindex="-1">docker-compose 安装 <a class="header-anchor" href="#docker-compose-安装" aria-label="Permalink to &quot;docker-compose 安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 下载docker-compose</span></span>
<span class="line"><span>https://github.com/docker/compose/releases/tag</span></span></code></pre></div>`,34)]))}const b=a(l,[["render",i]]);export{u as __pageData,b as default};
