import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.Crtr1jMB.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-01-02-fastgpt.md","filePath":"javascript/2024-01-02-fastgpt.md","lastUpdated":1748596488000}'),t={name:"javascript/2024-01-02-fastgpt.md"};function o(l,a,i,c,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="容器操作" tabindex="-1">容器操作 <a class="header-anchor" href="#容器操作" aria-label="Permalink to &quot;容器操作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 移除所有的镜像</span></span>
<span class="line"><span>docker rmi $(docker images -q)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//停止所有的容器</span></span>
<span class="line"><span>docker stop $(docker ps -q)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 移除所有的容器</span></span>
<span class="line"><span>docker rm $(docker ps -a -q)</span></span></code></pre></div><h2 id="下载docker-compose配置文件" tabindex="-1">下载docker-compose配置文件 <a class="header-anchor" href="#下载docker-compose配置文件" aria-label="Permalink to &quot;下载docker-compose配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://doc.fastgpt.in/docs/development/docker/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir fastgpt</span></span>
<span class="line"><span>cd fastgpt</span></span>
<span class="line"><span>curl -O https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml</span></span>
<span class="line"><span>curl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在 docker-compose.yml 同级目录下执行</span></span>
<span class="line"><span># 要先修改docker-compose.yml中的相关配置</span></span>
<span class="line"><span>docker-compose pull</span></span>
<span class="line"><span>docker-compose up -d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同样用户名root，密码在docker-compose - DEFAULT_ROOT_PSW</span></span></code></pre></div><h2 id="部署成功" tabindex="-1">部署成功 <a class="header-anchor" href="#部署成功" aria-label="Permalink to &quot;部署成功&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://8.219.92.157:3000/</span></span>
<span class="line"><span>root Hk</span></span></code></pre></div><h2 id="本地开发配置" tabindex="-1">本地开发配置 <a class="header-anchor" href="#本地开发配置" aria-label="Permalink to &quot;本地开发配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://doc.fastgpt.in/docs/development/intro/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改配置文件</span></span>
<span class="line"><span>projects/app/.env.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将根package.json中的依赖进行修改</span></span>
<span class="line"><span>  &quot;i18next&quot;: &quot;22.5.1&quot;,</span></span>
<span class="line"><span>  &quot;next-i18next&quot;: &quot;13.3.0&quot;,</span></span>
<span class="line"><span>  &quot;react-i18next&quot;: &quot;12.3.1&quot;,</span></span></code></pre></div><h2 id="mongodb-通过navicat连接" tabindex="-1">mongodb 通过navicat连接 <a class="header-anchor" href="#mongodb-通过navicat连接" aria-label="Permalink to &quot;mongodb 通过navicat连接&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>数据库名使用admin</span></span>
<span class="line"><span>用户名和密码使用上面docker-compose.yml中的配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---这里重点忘记了如何连入mongodb数据库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker exec -it mongo sh</span></span>
<span class="line"><span>mongo -u username -p password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongo -u username -p password --host 127.0.0.1 --port 27017</span></span></code></pre></div><h2 id="所使用的技术栈" tabindex="-1">所使用的技术栈 <a class="header-anchor" href="#所使用的技术栈" aria-label="Permalink to &quot;所使用的技术栈&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/xyflow/xyflow</span></span></code></pre></div>`,12)]))}const m=s(t,[["render",o]]);export{u as __pageData,m as default};
