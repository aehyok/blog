import{_ as n,c as s,o as e,ag as p}from"./chunks/framework.Cpzi45lG.js";const m=JSON.parse('{"title":"整理（https://www.cnblogs.com/SavionZhang/p/14863781.html）","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-12-23-net8.0.md","filePath":"article/code/2023-12-23-net8.0.md","lastUpdated":1754476621000}'),t={name:"article/code/2023-12-23-net8.0.md"};function l(i,a,o,c,r,d){return e(),s("div",null,a[0]||(a[0]=[p(`<h2 id="_1、参考" tabindex="-1">1、参考 <a class="header-anchor" href="#_1、参考" aria-label="Permalink to &quot;1、参考&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=linux&amp;pivots=dotnet-8-0" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=linux&amp;pivots=dotnet-8-0</a></li><li>多阶段构建docker镜像 <ul><li><a href="https://docs.docker.com/build/building/multi-stage/" target="_blank" rel="noreferrer">https://docs.docker.com/build/building/multi-stage/</a></li></ul></li></ul><h2 id="_2、dockerfle" tabindex="-1">2、Dockerfle <a class="header-anchor" href="#_2、dockerfle" aria-label="Permalink to &quot;2、Dockerfle&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Learn about building .NET container images:</span></span>
<span class="line"><span># https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md</span></span>
<span class="line"><span>FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ARG 硬件架构</span></span>
<span class="line"><span>ARG TARGETARCH</span></span>
<span class="line"><span>WORKDIR /source</span></span>
<span class="line"><span></span></span>
<span class="line"><span># copy csproj and restore as distinct layers</span></span>
<span class="line"><span>COPY aspnetapp/*.csproj .</span></span>
<span class="line"><span>RUN dotnet restore -a $TARGETARCH</span></span>
<span class="line"><span></span></span>
<span class="line"><span># copy and publish app and libraries</span></span>
<span class="line"><span>COPY aspnetapp/. .</span></span>
<span class="line"><span>RUN dotnet publish --no-restore -a $TARGETARCH -o /app -f net8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Enable globalization and time zones:</span></span>
<span class="line"><span># https://github.com/dotnet/dotnet-docker/blob/main/samples/enable-globalization.md</span></span>
<span class="line"><span># final stage/image</span></span>
<span class="line"><span>FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine</span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span>COPY --from=build /app .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENTRYPOINT [&quot;./WebApplication2&quot;]</span></span></code></pre></div><h2 id="_3、命令" tabindex="-1">3、命令 <a class="header-anchor" href="#_3、命令" aria-label="Permalink to &quot;3、命令&quot;">​</a></h2><p>··· docker build -t net8-demo .</p><p>docker run --restart always -itd --name net8-d -p 8000:8080 net8-demo</p><p>docker exec -it net8-d /bin/bash</p><p>docker logs net8-d</p><p>docker run --restart always -itd --name ak-1 -p 11000:8080 ak</p><p>docker build -t ak-basic -f Dockerfile-Basic .</p><p>docker run --restart always -itd --name ak2 -p 11001:8080 ak-basic ···</p><h2 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name nginx --network mynetwork -p 80:80 -v /path/to/nginx/conf:/etc/nginx/conf.d nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --restart always -itd --name nginx -p 80:80 -v /root/github/NET8.0/nginx.conf:/etc/nginx/conf.d/dvs.conf nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --restart always -itd --name nginx -p 8080:80 -v /root/github/NET8.0/nginx.conf:/etc/nginx/conf.d/default.conf nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建容器专属网络</span></span>
<span class="line"><span>docker network create -d bridge aehyok</span></span></code></pre></div><h1 id="整理-https-www-cnblogs-com-savionzhang-p-14863781-html" tabindex="-1">整理（<a href="https://www.cnblogs.com/SavionZhang/p/14863781.html%EF%BC%89" target="_blank" rel="noreferrer">https://www.cnblogs.com/SavionZhang/p/14863781.html）</a> <a class="header-anchor" href="#整理-https-www-cnblogs-com-savionzhang-p-14863781-html" aria-label="Permalink to &quot;整理（https://www.cnblogs.com/SavionZhang/p/14863781.html）&quot;">​</a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>`,16)]))}const b=n(t,[["render",l]]);export{m as __pageData,b as default};
