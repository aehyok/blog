import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.oOnQ0Tzd.js";const h=JSON.parse('{"title":"bind 127.0.0.1 -::1 将这一行暂时注释掉","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-12-28-ubuntu.md","filePath":"article/code/2023-12-28-ubuntu.md","lastUpdated":1749345060000}'),l={name:"article/code/2023-12-28-ubuntu.md"};function i(t,s,c,r,o,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="ubuntu说明" tabindex="-1">ubuntu说明 <a class="header-anchor" href="#ubuntu说明" aria-label="Permalink to &quot;ubuntu说明&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//安装工具</span></span>
<span class="line"><span>apt-get install xxxx</span></span></code></pre></div><h2 id="准备安装docker" tabindex="-1">准备安装docker <a class="header-anchor" href="#准备安装docker" aria-label="Permalink to &quot;准备安装docker&quot;">​</a></h2><ul><li>参考 <a href="https://juejin.cn/post/7314968141280051240?searchId=20231228192336770F203FBB57DC35F323" target="_blank" rel="noreferrer">https://juejin.cn/post/7314968141280051240?searchId=20231228192336770F203FBB57DC35F323</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 更新包索引并安装添加新 HTTPS 存储库所需的依赖项</span></span>
<span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加 Docker 的官方 GPG 密钥</span></span>
<span class="line"><span>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加Docker存储库</span></span>
<span class="line"><span>sudo add-apt-repository &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 更新软件包索引并安装 Docker Engine</span></span>
<span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install docker-ce docker-ce-cli containerd.io</span></span></code></pre></div><h2 id="开启docker" tabindex="-1">开启Docker <a class="header-anchor" href="#开启docker" aria-label="Permalink to &quot;开启Docker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 启动docker守护进程</span></span>
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
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-label="Permalink to &quot;rabbitmq&quot;">​</a></h2><p>docker search rabbitmq</p><p>docker pull rabbitmq</p><p>docker run --restart always -itd --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</p><p>// 15672进入rabbitmq数据管理后台的 上面创建并运行容器后其实已经设置用户名和密码来登录15672: admin admin</p><p>rabbitmq port 15672端口无法访问</p><ul><li><a href="https://blog.csdn.net/web18334137065/article/details/126327427" target="_blank" rel="noreferrer">https://blog.csdn.net/web18334137065/article/details/126327427</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it rabbitmq bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 进入容器启用插件</span></span>
<span class="line"><span>rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull rabbitmq:management</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --restart always -itd --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq:management</span></span></code></pre></div><h2 id="seq" tabindex="-1">seq <a class="header-anchor" href="#seq" aria-label="Permalink to &quot;seq&quot;">​</a></h2><p>docker pull datalust/seq</p><p>// 设置seq密码,默认用户名为admin SeqPwd=$(echo &#39;sunlight2023&#39; | docker run --rm -i datalust/seq config hash)</p><p>// 设置seq日志存放映射的路径 /usr/local/sunlight/docker/seq/data</p><p>// 5341 代码里调用的路径 // 80 查看日志的UI</p><p>docker run --restart always --name seq -itd -e ACCEPT_EULA=Y -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=&quot;$SeqPwd&quot; -v /root/docker/seq/data:/data --memory=512m --memory-swap=512m -e SEQ_CACHE_SYSTEMRAMTARGET=0 -p 12000:80 -p 5341:5341 datalust/seq</p><h2 id="git拉取项目" tabindex="-1">git拉取项目 <a class="header-anchor" href="#git拉取项目" aria-label="Permalink to &quot;git拉取项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>cd /root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建目录，并cd过去</span></span>
<span class="line"><span>mkdir github</span></span>
<span class="line"><span>cd github</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//克隆项目</span></span>
<span class="line"><span>git clone git@github.com:aehyok/NET8.0.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//给脚本授权</span></span>
<span class="line"><span>chmod 777 run.sh</span></span></code></pre></div>`,37)]))}const b=a(l,[["render",i]]);export{h as __pageData,b as default};
