import{_ as s,o as a,c as n,b as e}from"./app.8c2fb036.js";const u=JSON.parse('{"title":"bind 127.0.0.1 -::1 将这一行暂时注释掉","description":"","frontmatter":{},"headers":[{"level":2,"title":"ubuntu说明","slug":"ubuntu说明","link":"#ubuntu说明","children":[]},{"level":2,"title":"debian 中如何在vim中启用粘贴和复制","slug":"debian-中如何在vim中启用粘贴和复制","link":"#debian-中如何在vim中启用粘贴和复制","children":[]},{"level":2,"title":"开启Docker","slug":"开启docker","link":"#开启docker","children":[]},{"level":2,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":2,"title":"准备mysql redis rabbitmq","slug":"准备mysql-redis-rabbitmq","link":"#准备mysql-redis-rabbitmq","children":[]},{"level":2,"title":"redis 配置","slug":"redis-配置","link":"#redis-配置","children":[]},{"level":2,"title":"mysql配置","slug":"mysql配置","link":"#mysql配置","children":[]},{"level":2,"title":"rabbitmq","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":2,"title":"seq","slug":"seq","link":"#seq","children":[]},{"level":2,"title":"git拉取项目","slug":"git拉取项目","link":"#git拉取项目","children":[]},{"level":2,"title":"systemd 服务","slug":"systemd-服务","link":"#systemd-服务","children":[]},{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"goploy","slug":"goploy","link":"#goploy","children":[]},{"level":2,"title":"docker-compose 安装","slug":"docker-compose-安装","link":"#docker-compose-安装","children":[]}],"relativePath":"javascript/2023-12-28-debian.md","lastUpdated":1712752059000}'),l={name:"javascript/2023-12-28-debian.md"},p=e(`<h2 id="ubuntu说明" tabindex="-1">ubuntu说明 <a class="header-anchor" href="#ubuntu说明" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://blog.csdn.net/holyvslin/article/details/131780197</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="debian-中如何在vim中启用粘贴和复制" tabindex="-1">debian 中如何在vim中启用粘贴和复制 <a class="header-anchor" href="#debian-中如何在vim中启用粘贴和复制" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">vi /usr/share/vim/vim82/defaults.vim</span></span>
<span class="line"><span style="color:#babed8;">vi /usr/share/vim/vim90/defaults.vim</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">找到：set mouse=a</span></span>
<span class="line"><span style="color:#babed8;">改为：set mouse-=a</span></span>
<span class="line"><span style="color:#babed8;">esc退出后便可以进行粘贴和复制操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="开启docker" tabindex="-1">开启Docker <a class="header-anchor" href="#开启docker" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 启动docker守护进程</span></span>
<span class="line"><span style="color:#babed8;">systemctl start docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 配置让docker服务岁系统自动启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl enable docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 取消开机自动启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl disable docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 停止docker服务</span></span>
<span class="line"><span style="color:#babed8;">systemctl stop docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看docker版本，确认docker是否安装成功</span></span>
<span class="line"><span style="color:#babed8;">docker version </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 安装git</span></span>
<span class="line"><span style="color:#babed8;">apt-get install git</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看git版本</span></span>
<span class="line"><span style="color:#babed8;">git version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看OpenSSH版本</span></span>
<span class="line"><span style="color:#babed8;">ssh -V</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 生成ssh密钥对</span></span>
<span class="line"><span style="color:#babed8;">ssh-keygen -t rsa -b 4096</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 一路默认即可，生成</span></span>
<span class="line"><span style="color:#babed8;">// 生成的路径一般在/root/.ssh/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看</span></span>
<span class="line"><span style="color:#babed8;">ls -li</span></span>
<span class="line"><span style="color:#babed8;">920236 -rw------- 1 root root  406 Dec 28 19:12 authorized_keys</span></span>
<span class="line"><span style="color:#babed8;">919704 -rw------- 1 root root 3369 Dec 28 19:39 id_rsa</span></span>
<span class="line"><span style="color:#babed8;">919708 -rw-r--r-- 1 root root  737 Dec 28 19:39 id_rsa.pub</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">一般是将id_rsa.pub拷贝到服务器或者直接将里面的长字符串进行配置后使用</span></span>
<span class="line"><span style="color:#babed8;">我这里是将id_rsa.pub 拷贝到了github上用来拉去项目的</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="准备mysql-redis-rabbitmq" tabindex="-1">准备mysql redis rabbitmq <a class="header-anchor" href="#准备mysql-redis-rabbitmq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cd /root</span></span>
<span class="line"><span style="color:#babed8;">mkdir docker</span></span>
<span class="line"><span style="color:#babed8;">cd docker </span></span>
<span class="line"><span style="color:#babed8;">mkdir redis</span></span>
<span class="line"><span style="color:#babed8;">mkdir mysql</span></span>
<span class="line"><span style="color:#babed8;">mkdir rabbitmq</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="redis-配置" tabindex="-1">redis 配置 <a class="header-anchor" href="#redis-配置" aria-hidden="true">#</a></h2><ul><li>配置文件位置 <ul><li>英文版 <a href="https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf" target="_blank" rel="noreferrer">https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf</a></li><li>中文版 <a href="https://juejin.cn/post/7316794084998348851?searchId=20231228200452F893C938CCCBA53BD65F" target="_blank" rel="noreferrer">https://juejin.cn/post/7316794084998348851?searchId=20231228200452F893C938CCCBA53BD65F</a></li></ul></li></ul><p>我这里主要修改了</p><ul><li>英文版中的requirepass密码 然后拷贝到/root/docker/redis/conf中去了</li><li><h1 id="bind-127-0-0-1-1-将这一行暂时注释掉" tabindex="-1">bind 127.0.0.1 -::1 将这一行暂时注释掉 <a class="header-anchor" href="#bind-127-0-0-1-1-将这一行暂时注释掉" aria-hidden="true">#</a></h1></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker run --restart=always \\</span></span>
<span class="line"><span style="color:#babed8;">-p 6379:6379 \\</span></span>
<span class="line"><span style="color:#babed8;">--name redis \\</span></span>
<span class="line"><span style="color:#babed8;">-e &quot;TZ=Asia/Shanghai&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/docker/redis/data:/data \\</span></span>
<span class="line"><span style="color:#babed8;">-itd redis:7.0.12 redis-server /etc/redis/redis.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql配置" tabindex="-1">mysql配置 <a class="header-anchor" href="#mysql配置" aria-hidden="true">#</a></h2><p>docker search mysql</p><p>docker pull mysql</p><ul><li><a href="https://www.jianshu.com/p/e8a4ac2a92e0" target="_blank" rel="noreferrer">https://www.jianshu.com/p/e8a4ac2a92e0</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker run --name mysql \\</span></span>
<span class="line"><span style="color:#babed8;">--restart always \\</span></span>
<span class="line"><span style="color:#babed8;">--privileged=true \\</span></span>
<span class="line"><span style="color:#babed8;">-p 13306:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/docker/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/docker/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_ROOT_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-d mysql:8.0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;M9y2512!&#39;;</span></span>
<span class="line"><span style="color:#babed8;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker search rabbitmq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker pull rabbitmq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run --restart always -itd --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 15672进入rabbitmq数据管理后台的</span></span>
<span class="line"><span style="color:#babed8;">上面创建并运行容器后其实已经设置用户名和密码来登录15672: admin  admin</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  rabbitmq port 15672端口无法访问</span></span>
<span class="line"><span style="color:#babed8;">  - https://blog.csdn.net/web18334137065/article/details/126327427</span></span>
<span class="line"><span style="color:#babed8;">  docker exec -it rabbitmq bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 进入容器启用插件</span></span>
<span class="line"><span style="color:#babed8;">  rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="seq" tabindex="-1">seq <a class="header-anchor" href="#seq" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker pull datalust/seq</span></span>
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
<span class="line"><span style="color:#babed8;">docker run --restart always --name seq -itd -e ACCEPT_EULA=Y -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=&quot;$SeqPwd&quot;  -v /root/docker/seq/data:/data --memory=512m --memory-swap=512m -e SEQ_CACHE_SYSTEMRAMTARGET=0 -p 12000:80 -p 5341:5341 datalust/seq\`</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="git拉取项目" tabindex="-1">git拉取项目 <a class="header-anchor" href="#git拉取项目" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd /root</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 创建目录，并cd过去</span></span>
<span class="line"><span style="color:#babed8;">mkdir github</span></span>
<span class="line"><span style="color:#babed8;">cd github</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//克隆项目</span></span>
<span class="line"><span style="color:#babed8;">git clone git@github.com:aehyok/NET8.0.git</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//给脚本授权</span></span>
<span class="line"><span style="color:#babed8;">chmod 777 run.sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="systemd-服务" tabindex="-1">systemd 服务 <a class="header-anchor" href="#systemd-服务" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">DOTNET_FILE=aspnetcore-runtime-8.0.0-linux-x64.tar.gz</span></span>
<span class="line"><span style="color:#babed8;">export  =$(pwd)/.dotnet</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mkdir -p &quot;$DOTNET_ROOT&quot; &amp;&amp; tar zxf &quot;$DOTNET_FILE&quot; -C &quot;$DOTNET_ROOT&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 拷贝到docker中</span></span>
<span class="line"><span style="color:#babed8;">docker cp /root/soft/aspnetcore-runtime-8.0.0-linux-x64.tar.gz e850bc7b0b95:/opt/goploy/aspnetcore-runtime-8.0.0-linux-x64.tar.gz</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker exec -it e850bc7b0b95 sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 安装nginx</span></span>
<span class="line"><span style="color:#babed8;">apt install nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看版本</span></span>
<span class="line"><span style="color:#babed8;">nginx -V</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="goploy" tabindex="-1">goploy <a class="header-anchor" href="#goploy" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker search goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker pull zhenorzz/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//创建mysql数据库</span></span>
<span class="line"><span style="color:#babed8;">// 并初始化数据库结构</span></span>
<span class="line"><span style="color:#babed8;">https://github.com/zhenorzz/goploy/blob/master/database/goploy.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 创建docker参数 https://hub.docker.com/r/zhenorzz/goploy</span></span>
<span class="line"><span style="color:#babed8;">docker run -it \\</span></span>
<span class="line"><span style="color:#babed8;">    -p 9000:80 \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh:/root/.ssh \\</span></span>
<span class="line"><span style="color:#babed8;">    -v ~/.ssh/known_hosts:/etc/hosts \\</span></span>
<span class="line"><span style="color:#babed8;">    -v /root/docker/goploy/repository:/opt/goploy/repository \\</span></span>
<span class="line"><span style="color:#babed8;">    zhenorzz/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">- 然后设置一些数据库的初始化参数</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">访问9000查看页面</span></span>
<span class="line"><span style="color:#babed8;">初始化的用户名和密码</span></span>
<span class="line"><span style="color:#babed8;">admin admin!@#</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="docker-compose-安装" tabindex="-1">docker-compose 安装 <a class="header-anchor" href="#docker-compose-安装" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 下载docker-compose</span></span>
<span class="line"><span style="color:#babed8;">https://github.com/docker/compose/releases/tag</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,34),o=[p];function t(c,i,r,d,b,y){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
