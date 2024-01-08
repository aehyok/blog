import{_ as s,o as a,c as n,b as e}from"./app.232525a4.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"查看centos版本信息","slug":"查看centos版本信息","link":"#查看centos版本信息","children":[]},{"level":2,"title":"centos 安装docker","slug":"centos-安装docker","link":"#centos-安装docker","children":[]},{"level":2,"title":"docker 创建mysql容器","slug":"docker-创建mysql容器","link":"#docker-创建mysql容器","children":[]},{"level":2,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":2,"title":"mysql字符集和排序规则","slug":"mysql字符集和排序规则","link":"#mysql字符集和排序规则","children":[]},{"level":2,"title":"给用户授权 刷新权限","slug":"给用户授权-刷新权限","link":"#给用户授权-刷新权限","children":[]}],"relativePath":"javascript/2023-05-24-docker-mysql.md","lastUpdated":1704697426000}'),l={name:"javascript/2023-05-24-docker-mysql.md"},p=e(`<h2 id="查看centos版本信息" tabindex="-1">查看centos版本信息 <a class="header-anchor" href="#查看centos版本信息" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat /etc/centos-release</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">uname -r</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="centos-安装docker" tabindex="-1">centos 安装docker <a class="header-anchor" href="#centos-安装docker" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">sudo yum update</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo yum install docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 启动docker</span></span>
<span class="line"><span style="color:#babed8;">sudo systemctl start docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置开机启动</span></span>
<span class="line"><span style="color:#babed8;">sudo systemctl enable docker</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="docker-创建mysql容器" tabindex="-1">docker 创建mysql容器 <a class="header-anchor" href="#docker-创建mysql容器" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker pull mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置-p  通过外网便可以访问</span></span>
<span class="line"><span style="color:#babed8;">docker run --name gpt-mysql -p 3306:3306 -v /root/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run --name gpt-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 不知道为啥 设置了 映射  就有问题 </span></span>
<span class="line"><span style="color:#babed8;">// 于是docker-compose派上用场了</span></span>
<span class="line"><span style="color:#babed8;">docker run --name gpt-mysql \\</span></span>
<span class="line"><span style="color:#babed8;">  -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">  -v /root/mysql/data:/var/lib/mysql \\ </span></span>
<span class="line"><span style="color:#babed8;">  -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run \\</span></span>
<span class="line"><span style="color:#babed8;">--restart=always --privileged=true \\</span></span>
<span class="line"><span style="color:#babed8;">--name gpt-mysql1 -p 4306:3306  \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/mysql/conf.d:/etc/mysql/conf.d \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run --name gpt-mysql \\</span></span>
<span class="line"><span style="color:#babed8;">  -v /root/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#babed8;">  -v /root/mysql/conf.d:/etc/mysql/conf.d \\</span></span>
<span class="line"><span style="color:#babed8;">  -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">  -e MYSQL_ROOT_PASSWORD=M9y2512! \\</span></span>
<span class="line"><span style="color:#babed8;">  -d mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker exec -it some-mysql mysql -u root -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql字符集和排序规则" tabindex="-1">mysql字符集和排序规则 <a class="header-anchor" href="#mysql字符集和排序规则" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">SHOW VARIABLES LIKE &#39;character_set%&#39;;  // utf8mb4</span></span>
<span class="line"><span style="color:#babed8;">SHOW VARIABLES LIKE &#39;collation%&#39;;  </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="给用户授权-刷新权限" tabindex="-1">给用户授权 刷新权限 <a class="header-anchor" href="#给用户授权-刷新权限" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">CREATE USER &#39;aehyok&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;M9y2512!&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">GRANT ALL PRIVILEGES ON \`ak47-gpt\`.* TO &#39;aehyok&#39;@&#39;%&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,12),o=[p];function c(t,d,r,i,b,y){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
