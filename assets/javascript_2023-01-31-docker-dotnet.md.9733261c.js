import{_ as a,o as s,c as e,N as n}from"./chunks/framework.294d0221.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-01-31-docker-dotnet.md","lastUpdated":1681211494000}'),l={name:"javascript/2023-01-31-docker-dotnet.md"},o=n(`<h2 id="dockerfile下的内容" tabindex="-1">Dockerfile下的内容 <a class="header-anchor" href="#dockerfile下的内容" aria-label="Permalink to &quot;Dockerfile下的内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FROM mcr.microsoft.com/dotnet/aspnet:6.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR  /usr/share/dotnet/ClassService/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COPY ClassService/ /usr/share/dotnet/ClassService/</span></span>
<span class="line"><span style="color:#A6ACCD;">ENTRYPOINT [&quot;dotnet&quot;, &quot;ClassService.dll&quot;,&quot;--urls&quot;,&quot;http://*:5005&quot;]</span></span></code></pre></div><h2 id="根据dockerfile创建镜像" tabindex="-1">根据Dockerfile创建镜像 <a class="header-anchor" href="#根据dockerfile创建镜像" aria-label="Permalink to &quot;根据Dockerfile创建镜像&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker build -t classservice .</span></span></code></pre></div><h2 id="根据镜像创建容器" tabindex="-1">根据镜像创建容器 <a class="header-anchor" href="#根据镜像创建容器" aria-label="Permalink to &quot;根据镜像创建容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 5005:5005 --name classservice1 classservice</span></span></code></pre></div><h2 id="操作容器" tabindex="-1">操作容器 <a class="header-anchor" href="#操作容器" aria-label="Permalink to &quot;操作容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker restart xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop xxx</span></span></code></pre></div><h2 id="映射路径的方式" tabindex="-1">映射路径的方式 <a class="header-anchor" href="#映射路径的方式" aria-label="Permalink to &quot;映射路径的方式&quot;">​</a></h2><h4 id="dockerfile文件" tabindex="-1">Dockerfile文件 <a class="header-anchor" href="#dockerfile文件" aria-label="Permalink to &quot;Dockerfile文件&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FROM mcr.microsoft.com/dotnet/aspnet:6.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR  /usr/share/dotnet/ClassService/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ENTRYPOINT [&quot;dotnet&quot;, &quot;ClassService.dll&quot;,&quot;--urls&quot;,&quot;http://*:5005&quot;]</span></span></code></pre></div><h4 id="生成镜像和容器" tabindex="-1">生成镜像和容器 <a class="header-anchor" href="#生成镜像和容器" aria-label="Permalink to &quot;生成镜像和容器&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 生成镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -t class .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 映射路径</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 5005:5005 --name classservice1 -v /usr/local/aehyok/docker/dotnet/ClassService:/usr/share/dotnet/ClassService class</span></span></code></pre></div>`,13),t=[o];function c(r,p,i,d,h,u){return s(),e("div",null,t)}const k=a(l,[["render",c]]);export{A as __pageData,k as default};