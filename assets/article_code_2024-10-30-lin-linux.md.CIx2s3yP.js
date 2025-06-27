import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-10-30-lin-linux.md","filePath":"article/code/2024-10-30-lin-linux.md","lastUpdated":1751017616000}'),l={name:"article/code/2024-10-30-lin-linux.md"};function o(c,s,i,t,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="opencloudos通过yum安装docker-compose" tabindex="-1">opencloudos通过yum安装docker-compose <a class="header-anchor" href="#opencloudos通过yum安装docker-compose" aria-label="Permalink to &quot;opencloudos通过yum安装docker-compose&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker-compose -v</span></span></code></pre></div><h2 id="安装fastgpt-docker" tabindex="-1">安装fastgpt docker <a class="header-anchor" href="#安装fastgpt-docker" aria-label="Permalink to &quot;安装fastgpt docker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 使用docker-compose 安装</span></span>
<span class="line"><span> https://github.com/labring/FastGPT/blob/main/files/docker/docker-compose-pgvector.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//如果docker-compose 版本过低，需要手动卸载升级</span></span>
<span class="line"><span>which docker-compose 查看版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 然后移除卸载</span></span>
<span class="line"><span>sudo rm /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重新下载比如这个版本号，并重新设置到/usr/local/bin/docker-compose</span></span>
<span class="line"><span>sudo curl -L &quot;https://github.com/docker/compose/releases/download/v2.17.0/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果github上下载太慢了可以更换为国内的</span></span>
<span class="line"><span>sudo curl -L https://get.daocloud.io/docker/compose/releases/download/v2.17.0/docker-compose-\`uname -s\`-\`uname -m\` -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 也可以直接在gihub上下载后再使用（找到对应的版本即可）</span></span>
<span class="line"><span>uname -s 查看系统</span></span>
<span class="line"><span>uname -m 查看系统位数</span></span>
<span class="line"><span>- x86_64: 64 位的 x86 架构（常见于大多数现代桌面和服务器）。</span></span>
<span class="line"><span>- i686 或 i386: 32 位的 x86 架构。</span></span>
<span class="line"><span>- armv7l: 32 位的 ARM 架构。</span></span>
<span class="line"><span>- aarch64: 64 位的 ARM 架构。</span></span>
<span class="line"><span>- ppc64le: 64 位的 PowerPC 架构（小端）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://github.com/docker/compose/releases/tag/v2.30.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重新授权</span></span>
<span class="line"><span>sudo chmod +x /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看版本</span></span>
<span class="line"><span>docker-compose version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 安装时可能存在问题，请点击链接</span></span>
<span class="line"><span>https://juejin.cn/post/7220730324752859195?searchId=202410311129016E330B83E21403718938</span></span></code></pre></div><h2 id="代理的问题" tabindex="-1">代理的问题 <a class="header-anchor" href="#代理的问题" aria-label="Permalink to &quot;代理的问题&quot;">​</a></h2><ul><li>cloudflare 中转代理 <ul><li><a href="https://doc.tryfastgpt.ai/docs/development/proxy/cloudflare/" target="_blank" rel="noreferrer">https://doc.tryfastgpt.ai/docs/development/proxy/cloudflare/</a></li><li>优选IP提速 <a href="https://github.com/XIU2/CloudflareSpeedTest" target="_blank" rel="noreferrer">https://github.com/XIU2/CloudflareSpeedTest</a></li></ul></li></ul><h2 id="top查看内存" tabindex="-1">top查看内存 <a class="header-anchor" href="#top查看内存" aria-label="Permalink to &quot;top查看内存&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>top</span></span>
<span class="line"><span>//清空缓存</span></span>
<span class="line"><span>sudo sync; echo 3 | sudo tee /proc/sys/vm/drop_caches</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//只清空页面缓存</span></span>
<span class="line"><span>sudo sync; echo 1 | sudo tee /proc/sys/vm/drop_caches</span></span></code></pre></div><h2 id="暂停容器和移除容器" tabindex="-1">暂停容器和移除容器 <a class="header-anchor" href="#暂停容器和移除容器" aria-label="Permalink to &quot;暂停容器和移除容器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker stop fastgpt</span></span>
<span class="line"><span>docker stop oneapi</span></span>
<span class="line"><span>docker stop sandbox</span></span>
<span class="line"><span>docker stop pg</span></span>
<span class="line"><span>docker stop mysql</span></span>
<span class="line"><span>docker stop mongo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker rm fastgpt</span></span>
<span class="line"><span>docker rm oneapi</span></span>
<span class="line"><span>docker rm sandbox</span></span>
<span class="line"><span>docker rm pg</span></span>
<span class="line"><span>docker rm mysql</span></span>
<span class="line"><span>docker rm mongo</span></span></code></pre></div><p>3001 root Lin2024!!! 放到sh文件中执行可能会报错，主要因为换行符不一致 可以使用如下命令 dos2unix del.sh</p>`,11)]))}const m=a(l,[["render",o]]);export{h as __pageData,m as default};
