import{_ as a,c as n,o as e,ag as p}from"./chunks/framework.ELrfyV9R.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-11-15-docker-mysql.md","filePath":"article/code/2023-11-15-docker-mysql.md","lastUpdated":1759102256000}'),l={name:"article/code/2023-11-15-docker-mysql.md"};function t(i,s,c,o,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="docker-run-创建mysql容器" tabindex="-1">docker run 创建mysql容器 <a class="header-anchor" href="#docker-run-创建mysql容器" aria-label="Permalink to &quot;docker run 创建mysql容器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -p 13306:3306 --name mysql --restart=always --privileged=true \\</span></span>
<span class="line"><span>-v /root/docker/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span>-v /root/docker/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-v /root/docker/mysql/conf:/etc/mysql \\</span></span>
<span class="line"><span>-v /etc/local/docker/mysql/conf.d:/etc/mysql/conf.d \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql:8.0</span></span></code></pre></div><h2 id="创建一个无密码的容器" tabindex="-1">创建一个无密码的容器 <a class="header-anchor" href="#创建一个无密码的容器" aria-label="Permalink to &quot;创建一个无密码的容器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker stop mysql-原来的容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建一个新的MySQL容器，覆盖默认的命令（跳过权限）</span></span>
<span class="line"><span>docker run --name mysql-temp -v /root/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0 --skip-grant-tables</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//稍等片刻 进入容器，并直接进入mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker exec -it mysql-temp mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5. 在MySQL提示符下，执行以下SQL命令来重置root密码</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span>
<span class="line"><span>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;M9y2512!!!???&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span>
<span class="line"><span>EXIT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 停止并删除临时容器</span></span>
<span class="line"><span>docker stop mysql-temp</span></span>
<span class="line"><span>docker rm mysql-temp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重新启动原始的MySQL容器（使用新密码）</span></span>
<span class="line"><span>docker start mysql-container</span></span></code></pre></div><h2 id="查看容器的ip地址" tabindex="-1">查看容器的ip地址 <a class="header-anchor" href="#查看容器的ip地址" aria-label="Permalink to &quot;查看容器的ip地址&quot;">​</a></h2><ul><li>docker inspect 容器id/容器name</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  docker inspect -f &#39;{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39; mysql</span></span></code></pre></div><h2 id="根据容器ip-登录mysql" tabindex="-1">根据容器ip 登录mysql <a class="header-anchor" href="#根据容器ip-登录mysql" aria-label="Permalink to &quot;根据容器ip 登录mysql&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> mysql -h xxx.xxx.xx.x -uxxxx -p</span></span>
<span class="line"><span> 123456</span></span></code></pre></div><h2 id="查看容器日志" tabindex="-1">查看容器日志 <a class="header-anchor" href="#查看容器日志" aria-label="Permalink to &quot;查看容器日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker log mysql --tail 10 //最近10条日志记录</span></span></code></pre></div>`,11)]))}const y=a(l,[["render",t]]);export{h as __pageData,y as default};
