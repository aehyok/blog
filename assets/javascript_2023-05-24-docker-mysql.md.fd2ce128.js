import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-05-24-docker-mysql.md","lastUpdated":1690855504000}'),e={name:"javascript/2023-05-24-docker-mysql.md"},p=l(`<h2 id="查看centos版本信息" tabindex="-1">查看centos版本信息 <a class="header-anchor" href="#查看centos版本信息" aria-label="Permalink to &quot;查看centos版本信息&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat /etc/centos-release</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">uname -r</span></span></code></pre></div><h2 id="centos-安装docker" tabindex="-1">centos 安装docker <a class="header-anchor" href="#centos-安装docker" aria-label="Permalink to &quot;centos 安装docker&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo yum update</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum install docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动docker</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置开机启动</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl enable docker</span></span></code></pre></div><h2 id="docker-创建mysql容器" tabindex="-1">docker 创建mysql容器 <a class="header-anchor" href="#docker-创建mysql容器" aria-label="Permalink to &quot;docker 创建mysql容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker pull mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置-p  通过外网便可以访问</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name gpt-mysql -p 3306:3306 -v /root/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name gpt-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 不知道为啥 设置了 映射  就有问题 </span></span>
<span class="line"><span style="color:#A6ACCD;">// 于是docker-compose派上用场了</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name gpt-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /root/mysql/data:/var/lib/mysql \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">  -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always --privileged=true \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name gpt-mysql1 -p 4306:3306  \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /root/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /root/mysql/conf.d:/etc/mysql/conf.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /root/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name gpt-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /root/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /root/mysql/conf.d:/etc/mysql/conf.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -e MYSQL_ROOT_PASSWORD=M9y2512! \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d mysql</span></span></code></pre></div><h2 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-label="Permalink to &quot;进入容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it some-mysql mysql -u root -p</span></span></code></pre></div><h2 id="mysql字符集和排序规则" tabindex="-1">mysql字符集和排序规则 <a class="header-anchor" href="#mysql字符集和排序规则" aria-label="Permalink to &quot;mysql字符集和排序规则&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SHOW VARIABLES LIKE &#39;character_set%&#39;;  // utf8mb4</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW VARIABLES LIKE &#39;collation%&#39;;</span></span></code></pre></div><h2 id="给用户授权-刷新权限" tabindex="-1">给用户授权 刷新权限 <a class="header-anchor" href="#给用户授权-刷新权限" aria-label="Permalink to &quot;给用户授权 刷新权限&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE USER &#39;aehyok&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;M9y2512!&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON \`ak47-gpt\`.* TO &#39;aehyok&#39;@&#39;%&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES;</span></span></code></pre></div>`,12),o=[p];function c(t,r,i,A,C,y){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{m as __pageData,D as default};
