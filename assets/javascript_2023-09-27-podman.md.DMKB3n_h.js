import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CW9jv5bj.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-09-27-podman.md","filePath":"javascript/2023-09-27-podman.md"}'),t={name:"javascript/2023-09-27-podman.md"},p=e(`<h2 id="podman更换镜像源" tabindex="-1">podman更换镜像源 <a class="header-anchor" href="#podman更换镜像源" aria-label="Permalink to &quot;podman更换镜像源&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_33745102/article/details/122713263" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_33745102/article/details/122713263</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 配置文件位置</span></span>
<span class="line"><span>vim cat /etc/containers/registries.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加配置</span></span>
<span class="line"><span>[[registry]]</span></span>
<span class="line"><span>prefix = &quot;docker.io&quot;</span></span>
<span class="line"><span>insecure = true</span></span>
<span class="line"><span>location = &quot;hub-mirror.c.163.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//上面的location换成适合的源地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span>  &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span>  &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span>  &quot;https://cr.console.aliyun.com&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原来的配置</span></span>
<span class="line"><span>unqualified-search-registries = [&quot;registry.access.redhat.com&quot;, &quot;registry.redhat.io&quot;, &quot;docker.io&quot;]</span></span></code></pre></div><h2 id="换上阿里云私有镜像源" tabindex="-1">换上阿里云私有镜像源 <a class="header-anchor" href="#换上阿里云私有镜像源" aria-label="Permalink to &quot;换上阿里云私有镜像源&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span>
<span class="line"><span>搜索  容器镜像服务 镜像工具   镜像加速器 位置可以找到自己的私有镜像加速地址</span></span>
<span class="line"><span>https://p5t4gim3.mirror.aliyuncs.com</span></span></code></pre></div>`,6),i=[p];function o(c,l,r,d,u,h){return n(),s("div",null,i)}const g=a(t,[["render",o]]);export{_ as __pageData,g as default};