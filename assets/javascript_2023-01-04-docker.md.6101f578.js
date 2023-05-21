import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-01-04-docker.md","lastUpdated":1684661605000}'),p={name:"javascript/2023-01-04-docker.md"},e=l(`<h2 id="linux-下安装docker" tabindex="-1">linux 下安装docker <a class="header-anchor" href="#linux-下安装docker" aria-label="Permalink to &quot;linux 下安装docker&quot;">​</a></h2><ul><li><a href="https://juejin.cn/book/6844733746462064654/section/6844733746545950734" target="_blank" rel="noreferrer">https://juejin.cn/book/6844733746462064654/section/6844733746545950734</a></li></ul><h2 id="配置国内镜像源" tabindex="-1">配置国内镜像源 <a class="header-anchor" href="#配置国内镜像源" aria-label="Permalink to &quot;配置国内镜像源&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Docker 官方提供的国内镜像源: registry.docker-cn.com</span></span>
<span class="line"><span style="color:#A6ACCD;">// /etc/docker/daemon.json 如果此文件不存在</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">touch daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /etc/docker</span></span>
<span class="line"><span style="color:#A6ACCD;">vim daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;https://registry.docker-cn.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改完配置后，重启docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span></code></pre></div><h2 id="操作镜像" tabindex="-1">操作镜像 <a class="header-anchor" href="#操作镜像" aria-label="Permalink to &quot;操作镜像&quot;">​</a></h2><ul><li>查看镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// IMAGE ID 镜像ID  8b6c5f52aa82  只显示了前12位字符，其实是64位的字符</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span></code></pre></div><ul><li>拉取镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// xxx镜像名称，也可以加版本号 xxx:1.2.3</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull xxx</span></span></code></pre></div><ul><li>查看镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 拉取镜像后，镜像就存放到本地了，可以使用命令查看</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span></code></pre></div><ul><li>删除镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// xxx 镜像的名称或ID</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi xxx</span></span></code></pre></div><h2 id="操作容器" tabindex="-1">操作容器 <a class="header-anchor" href="#操作容器" aria-label="Permalink to &quot;操作容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 创建容器  通过--name配置容器名称</span></span>
<span class="line"><span style="color:#A6ACCD;">docker create --name consul  consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 列出正在运行中的容器列表</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 列出所有状态的容器列表</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -a </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 停止容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除容器 (正在运行的容器是不能删除的，所以先停止容器再进行删除)</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm consul</span></span></code></pre></div><h2 id="docker网络" tabindex="-1">docker网络 <a class="header-anchor" href="#docker网络" aria-label="Permalink to &quot;docker网络&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1.docker 网络的组成 沙盒 网络 端点</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2.docker 容器之间的网络打通是通过 --link 和expose端口暴露实现</span></span>
<span class="line"><span style="color:#A6ACCD;">// 3.docker 容器与宿主机之间的网络打通是根据端口映射实现</span></span>
<span class="line"><span style="color:#A6ACCD;">// 关于docker的网络知识 之前只是粗略了解端口映射 通过这节 了解了更多 感谢</span></span></code></pre></div><h2 id="管理和存储数据" tabindex="-1">管理和存储数据 <a class="header-anchor" href="#管理和存储数据" aria-label="Permalink to &quot;管理和存储数据&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 沙盒文件系统跟随容器生命周期所创建和移除的，数据以及文件无法直接被持久化存储。</span></span>
<span class="line"><span style="color:#A6ACCD;">// 由于容器隔离，我们很难从容器外部获得或操作容器内部文件中的数据。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Docker 容器文件系统UnionFS 支持挂载不同类型的文件系统到统一的目录结构中，所以我们只需要将宿主操作系统中，文件系统里的文件或目录挂载到容器中，便能够让容器内外共享这个文件。</span></span></code></pre></div><p>挂载方式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-v 或--volume</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> -v &lt;host-path&gt;:&lt;container-path&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> host-path： 宿主机文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;"> container-path  容器内文件目录</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name mysql-1 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 4006:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MYSQL_ROOT_PASSWORD=sunlight2021 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf: 将容器中 /etc/mysql/mysql.conf.d/mysqld.cnf 配置文件挂载到宿主机的 /usr/local/docker/mysql/config/mysqld.cnf 文件上；</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/mysql/data:/var/lib/mysql: 将容器中 /var/lib/mysql 数据目录挂载到宿主机的 /usr/local/docker/mysql/data 目录下；</span></span></code></pre></div><p>Docker 还支持以只读的方式挂载,这样容器中的程序是不能修改这个目录的文件的，在-v后的命令后再加上:ro</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-v &lt;host-path&gt;:&lt;container-path&gt;:ro</span></span></code></pre></div><ul><li>挂载临时文件目录</li></ul><p>它主要是通过内存来存储数据。可以通过 --tmpfs 挂在临时目录到容器，由于内存的具体位置不需要我们来指定，这个选项里我们只需要传递挂载到容器内的目录即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d --name webapp --tmpfs /usr/local/sunlight mysql</span></span></code></pre></div><p>我们的部署文件，前端打包文件或者后端微服务文件可以通过挂载的方式，这样不用每次都重新创建容器</p><ul><li>使用数据卷进行挂载</li></ul><p>我们不需要知道数据具体存储在了宿主操作系统的何处，只需要给定容器中的哪个目录会被挂载即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d --name webapp -v /usr/local/sunlight mysql</span></span></code></pre></div><p>我们也可以通过 -v name:container-path 这种形式来命名数据卷。 name便是给数据卷起别名</p><p>数据卷可以用于在多个容器（可在多个物理机上）共享数据</p><h2 id="将容器保存为镜像" tabindex="-1">将容器保存为镜像 <a class="header-anchor" href="#将容器保存为镜像" aria-label="Permalink to &quot;将容器保存为镜像&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 先查看所有的容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// xxx container-id  或者 names</span></span>
<span class="line"><span style="color:#A6ACCD;">docker commit xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker commit -m &#39;message&#39;  xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 便可以看到上面提交的镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过Images Id为镜像取名字</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag 4441940323ea consul-1:1.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 还可以对已有镜像创建新的命名（相当于生成了一个新的容器）</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag webapp:1.0 webapp:latest</span></span></code></pre></div><h2 id="镜像迁移" tabindex="-1">镜像迁移 <a class="header-anchor" href="#镜像迁移" aria-label="Permalink to &quot;镜像迁移&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 先将镜像保存位tar格式</span></span>
<span class="line"><span style="color:#A6ACCD;">docker save consul-1&gt;/usr/local/aehyok/consul-1.tar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 然后可以拷贝到其他远程服务器上</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 拷贝完毕后，导入镜像文件 == 执行完毕，镜像则导入成功</span></span>
<span class="line"><span style="color:#A6ACCD;">docker load &lt; /usr/local/aehyok/consul-1.tar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过命令查看生成的镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span></code></pre></div><h2 id="镜像迁移另外一种方式" tabindex="-1">镜像迁移另外一种方式 <a class="header-anchor" href="#镜像迁移另外一种方式" aria-label="Permalink to &quot;镜像迁移另外一种方式&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 将容器的commit和save 通过export 合并成一条指令</span></span>
<span class="line"><span style="color:#A6ACCD;">docker export -o /usr/local/aehyok/consul-2.tar sul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 然后可以拷贝到其他远程服务器上</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将镜像导入（还可以给镜像命名）</span></span>
<span class="line"><span style="color:#A6ACCD;">docker import /usr/local/aehyok/consul-2.tar consul-2:1.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过命令查看生成的镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span></code></pre></div><h2 id="dockerfile-构建镜像" tabindex="-1">DockerFile 构建镜像 <a class="header-anchor" href="#dockerfile-构建镜像" aria-label="Permalink to &quot;DockerFile 构建镜像&quot;">​</a></h2><ul><li><a href="https://yeasy.gitbook.io/docker_practice/image/build" target="_blank" rel="noreferrer">https://yeasy.gitbook.io/docker_practice/image/build</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 通过 \\ 合并命令</span></span>
<span class="line"><span style="color:#A6ACCD;">// 行尾添加 \\ 的命令换行方式，以及行首 # 进行注释的格式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir mynginx</span></span>
<span class="line"><span style="color:#A6ACCD;">cd mynginx</span></span>
<span class="line"><span style="color:#A6ACCD;">touch Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">// 编写Dockerfile文件</span></span>
<span class="line"><span style="color:#A6ACCD;">//......</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// imageName 给生成的镜像取名字 以及打上tag  dir便是Dockerfile所在的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -t imageName: tagName dir</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 给镜像取admin的名字   dir为. 表示当前目录</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -t admin .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">FROM </span></span>
<span class="line"><span style="color:#A6ACCD;">// 指定一个基础镜像  （可以合并两个镜像）</span></span>
<span class="line"><span style="color:#A6ACCD;">// 一个Dockerfile中可以存在多个FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">// 当 FROM 第二次或者之后出现时，表示在此刻构建时，要将当前指出镜像的内容合并到此刻构建镜像的内容里。</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM nginx:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM nginx:1.22.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RUN 用于向控制台发送命令的指令</span></span>
<span class="line"><span style="color:#A6ACCD;">// RUN 支持通过 \\ 换行，对单行太长的指令 建议切割 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COPY</span></span>
<span class="line"><span style="color:#A6ACCD;">// 将当前目录中的package.json 拷贝到容器 /usr/src/app 目录下</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY package.json /usr/src/app/</span></span>
<span class="line"><span style="color:#A6ACCD;">// COPY 也支持通配符 https://golang.org/pkg/path/filepath/#Match</span></span>
<span class="line"><span style="color:#A6ACCD;">// *</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY hom* /usr/src/app/</span></span>
<span class="line"><span style="color:#A6ACCD;">// ?</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY hom?.txt /usr/src/app/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ADD </span></span>
<span class="line"><span style="color:#A6ACCD;">// 跟COPY类似</span></span>
<span class="line"><span style="color:#A6ACCD;">// ADD 能够支持使用网络端的 URL 地址作为 src 源，并且在源文件被识别为压缩包时，自动进行解压，而 COPY 没有这两个能力</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ENV</span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV DATA 8</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV VERSION 8.0.53</span></span>
<span class="line"><span style="color:#A6ACCD;">// 环境变量便可以在下面使用</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN  .......$VERSION ......</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ARG</span></span>
<span class="line"><span style="color:#A6ACCD;">// 构建命令的参数变量</span></span>
<span class="line"><span style="color:#A6ACCD;">ARG DATA</span></span>
<span class="line"><span style="color:#A6ACCD;">ARG VERSION</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker build --build-arg DATA=pro  --build-arg VERSION= 1.1.1 .........</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ENTRYPOINT</span></span></code></pre></div><h2 id="docker-compose" tabindex="-1">docker compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;docker compose&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ubuntu 安装docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">apt install docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启用容器  docker-compose 命令默认会识别当前控制台所在目录内的 docker-compose.yml 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up</span></span>
<span class="line"><span style="color:#A6ACCD;">// -d代表容器后台运行</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过 -p 选项来定义项目名</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -p myapp up -d</span></span>
<span class="line"><span style="color:#A6ACCD;">// 指定yml配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -f ./compose/docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 日志</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose create  xx 对应   docker create  xx</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose start   xx 对应  docker start xx</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose stop xx 对应  docker  stop xx</span></span></code></pre></div>`,44),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
