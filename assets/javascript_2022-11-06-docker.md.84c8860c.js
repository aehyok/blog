import{_ as s,o as a,c as n,O as e}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-11-06-docker.md","lastUpdated":1696682207000}'),l={name:"javascript/2022-11-06-docker.md"},p=e(`<p>Docker 可以帮助我们来构建和部署容器，我们只需要把自己的应用程序或者服务打包放进容器即可。</p><p>容器是基于镜像启动起来的，容器中可以运行一个或多个进程。</p><p>我们可以认为，镜像是Docker 生命周期中的构建或者打包阶段，而容器则是启动或者执行阶段。 容器基于镜像启动，一旦容器启动完成后，我们就可以登录到容器中安装自己需要的软件或者服务，所以Docker 容器就是：</p><h2 id="安装docker" tabindex="-1">安装docker <a class="header-anchor" href="#安装docker" aria-label="Permalink to &quot;安装docker&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//安装docker</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo zypper in docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//查看docker版本</span></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span></code></pre></div><h2 id="设置docker开机启动" tabindex="-1">设置docker开机启动 <a class="header-anchor" href="#设置docker开机启动" aria-label="Permalink to &quot;设置docker开机启动&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 配置让docker服务岁系统自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动docker守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 取消开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止docker服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看nginx服务的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 重启docker服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker.service</span></span></code></pre></div><h2 id="docker镜像源" tabindex="-1">docker镜像源 <a class="header-anchor" href="#docker镜像源" aria-label="Permalink to &quot;docker镜像源&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/docker/daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果权限不够可以要加上sudo</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo vim /etc/docker/daemon.json</span></span></code></pre></div><p>然后再daemon.json中添加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;registry-mirrors&quot; : [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://cr.console.aliyun.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre></div><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//查看下载的镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// docker中拉去nginx镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看nginx镜像 （IMAGE ID）</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images nginx</span></span></code></pre></div><h2 id="启动一个容器" tabindex="-1">启动一个容器 <a class="header-anchor" href="#启动一个容器" aria-label="Permalink to &quot;启动一个容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//测试nginx镜像是否可用</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name mynginx -p 80:80 605c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// -d   指定容器以守护进程方式在后台运行</span></span>
<span class="line"><span style="color:#A6ACCD;">// --name 指定容器名称，此处我指定的是mynginx</span></span>
<span class="line"><span style="color:#A6ACCD;">// -p 指定主机与容器内部的端口号映射关系，格式 -p  [宿主机端口号]：[容器内部端口]，此处我使用了主机80端口，映射容器80端口</span></span>
<span class="line"><span style="color:#A6ACCD;">// 605c 是nginx的镜像IMAGE ID前4位</span></span></code></pre></div><p>//执行上面的docker run后生成一串字符串（容器ID）说明执行成功 ecs-78441:/etc/docker # docker run -d --name mynginx -p 80:80 605c ddc72b6047dba505f24559d181c99043be50eaa6a383549b7c0fe147266fb0b2</p><p>// 11、测试nginx镜像通过浏览器进行访问（端口要记得做映射）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">将自己的项目部署到docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1、开始将自己的vue前端项目打包到dist目录</span></span></code></pre></div><p>yarn build</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">2、在本地创建一个Dockerfile</span></span></code></pre></div><p>FROM nginx:latest</p><h1 id="将项目根目录下dist文件夹下的所有文件复制到镜像中-usr-share-nginx-html-目录下" tabindex="-1">将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下 <a class="header-anchor" href="#将项目根目录下dist文件夹下的所有文件复制到镜像中-usr-share-nginx-html-目录下" aria-label="Permalink to &quot;将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下&quot;">​</a></h1><p>COPY dist/ /usr/share/nginx/html/ COPY default.conf /etc/nginx/conf.d/default.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">3、同样在本地创建一个default.conf（nginx配置文件）</span></span></code></pre></div><p>server { listen 80; root /usr/share/nginx/html; index index.html index.htm; add_header Access-Control-Allow-Origin *; add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;; add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</p><pre><code>if ($request_method = &#39;OPTIONS&#39;) {
    return 204;
}
location / {
  try_files $uri $uri/ = 404;
}

location ^~/api/ {
   proxy_pass https://proapi.azurewebsites.net;
}

location ^~/so/api/ {
  proxy_pass http://139.186.205.7:5000/api/;  
}

location ^~/blog/ {
  proxy_pass http://139.186.205.7:8090/;
}
</code></pre><p>}</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">4、将打包后的文件dist文件夹和Dockerfile以及default.conf上传到linux服务器</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">![]()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5、在服务器上cd到指定目录</span></span></code></pre></div><p>cd /usr/local/aehyok/docker</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">6、开始通过Dockerfile创建镜像(admin指的是镜像的名字)</span></span></code></pre></div><p>docker build -t admin . // 应该会提示Successfully tagged admin:latest // 说明创建成功了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">7、查看刚刚创建的镜像(找到admin镜像的IMAGE ID的前四位)</span></span></code></pre></div><p>docker images</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">8、通过镜像创建一个新的容器并运行容器</span></span></code></pre></div><p>docker run -d -p 80:80 --name myreact ba04</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">9、查看容器</span></span></code></pre></div><p>//列出容器 docker ps</p><p>// 列出所有容器（包括未运行的容器） docker ps -a</p><p>// 开启容器 (container id) docker start dsfsdfas</p><p>docker stop dfdssdf</p><p>// docker容器自启动</p><p>// 设置容器开机自动启动 docker update --restart=always xxxx</p><p>// 关闭容器开机自动启动 docker update --restart=no xxxx</p><p><a href="https://blog.csdn.net/m0_67392661/article/details/123732115" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_67392661/article/details/123732115</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">10、通过浏览器进行访问地址即可，完美结束</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] 安装docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -  &lt;https://www.cnblogs.com/lusaisai/p/13263808.html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    -  &lt;https://blog.csdn.net/achaodzyj/article/details/116074208&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker常用命令</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -  &lt;https://juejin.cn/post/7050304120082661407#heading-8&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -  &lt;https://juejin.cn/post/6992848354753380389&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker 容器</span></span>
<span class="line"><span style="color:#A6ACCD;">    -  &lt;https://www.runoob.com/docker/docker-container-usage.html&gt;</span></span></code></pre></div>`,45),o=[p];function c(t,r,i,d,C,A){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
