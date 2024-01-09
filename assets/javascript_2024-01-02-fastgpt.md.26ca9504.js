import{_ as s,o as a,c as n,b as e}from"./app.232525a4.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"容器操作","slug":"容器操作","link":"#容器操作","children":[]},{"level":2,"title":"下载docker-compose配置文件","slug":"下载docker-compose配置文件","link":"#下载docker-compose配置文件","children":[]},{"level":2,"title":"部署成功","slug":"部署成功","link":"#部署成功","children":[]},{"level":2,"title":"本地开发配置","slug":"本地开发配置","link":"#本地开发配置","children":[]},{"level":2,"title":"mongodb 通过navicat连接","slug":"mongodb-通过navicat连接","link":"#mongodb-通过navicat连接","children":[]},{"level":2,"title":"所使用的技术栈","slug":"所使用的技术栈","link":"#所使用的技术栈","children":[]}],"relativePath":"javascript/2024-01-02-fastgpt.md","lastUpdated":1704780781000}'),l={name:"javascript/2024-01-02-fastgpt.md"},p=e(`<h2 id="容器操作" tabindex="-1">容器操作 <a class="header-anchor" href="#容器操作" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 移除所有的镜像</span></span>
<span class="line"><span style="color:#babed8;">docker rmi $(docker images -q)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//停止所有的容器</span></span>
<span class="line"><span style="color:#babed8;">docker stop $(docker ps -q)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 移除所有的容器</span></span>
<span class="line"><span style="color:#babed8;">docker rm $(docker ps -a -q)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="下载docker-compose配置文件" tabindex="-1">下载docker-compose配置文件 <a class="header-anchor" href="#下载docker-compose配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://doc.fastgpt.in/docs/development/docker/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mkdir fastgpt</span></span>
<span class="line"><span style="color:#babed8;">cd fastgpt</span></span>
<span class="line"><span style="color:#babed8;">curl -O https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml</span></span>
<span class="line"><span style="color:#babed8;">curl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 在 docker-compose.yml 同级目录下执行</span></span>
<span class="line"><span style="color:#babed8;"># 要先修改docker-compose.yml中的相关配置</span></span>
<span class="line"><span style="color:#babed8;">docker-compose pull</span></span>
<span class="line"><span style="color:#babed8;">docker-compose up -d</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">同样用户名root，密码在docker-compose - DEFAULT_ROOT_PSW</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="部署成功" tabindex="-1">部署成功 <a class="header-anchor" href="#部署成功" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">http://8.219.92.157:3000/</span></span>
<span class="line"><span style="color:#babed8;">root Hk</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="本地开发配置" tabindex="-1">本地开发配置 <a class="header-anchor" href="#本地开发配置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://doc.fastgpt.in/docs/development/intro/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 修改配置文件</span></span>
<span class="line"><span style="color:#babed8;">projects/app/.env.local</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 将根package.json中的依赖进行修改</span></span>
<span class="line"><span style="color:#babed8;">  &quot;i18next&quot;: &quot;22.5.1&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;next-i18next&quot;: &quot;13.3.0&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;react-i18next&quot;: &quot;12.3.1&quot;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mongodb-通过navicat连接" tabindex="-1">mongodb 通过navicat连接 <a class="header-anchor" href="#mongodb-通过navicat连接" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">数据库名使用admin</span></span>
<span class="line"><span style="color:#babed8;">用户名和密码使用上面docker-compose.yml中的配置</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">---这里重点忘记了如何连入mongodb数据库</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker exec -it mongo sh</span></span>
<span class="line"><span style="color:#babed8;">mongo -u username -p password</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mongo -u username -p password --host 127.0.0.1 --port 27017</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="所使用的技术栈" tabindex="-1">所使用的技术栈 <a class="header-anchor" href="#所使用的技术栈" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://github.com/xyflow/xyflow</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,12),o=[p];function t(c,i,d,r,b,h){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
