import{_ as s,o as a,c as n,O as e}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-09-27-podman.md","lastUpdated":1696682207000}'),o={name:"javascript/2023-09-27-podman.md"},t=e(`<h2 id="podman更换镜像源" tabindex="-1">podman更换镜像源 <a class="header-anchor" href="#podman更换镜像源" aria-label="Permalink to &quot;podman更换镜像源&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_33745102/article/details/122713263" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_33745102/article/details/122713263</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 配置文件位置</span></span>
<span class="line"><span style="color:#A6ACCD;">vim cat /etc/containers/registries.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 添加配置</span></span>
<span class="line"><span style="color:#A6ACCD;">[[registry]]</span></span>
<span class="line"><span style="color:#A6ACCD;">prefix = &quot;docker.io&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">insecure = true</span></span>
<span class="line"><span style="color:#A6ACCD;">location = &quot;hub-mirror.c.163.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//上面的location换成适合的源地址</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://cr.console.aliyun.com&quot;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">原来的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">unqualified-search-registries = [&quot;registry.access.redhat.com&quot;, &quot;registry.redhat.io&quot;, &quot;docker.io&quot;]</span></span></code></pre></div><h2 id="换上阿里云私有镜像源" tabindex="-1">换上阿里云私有镜像源 <a class="header-anchor" href="#换上阿里云私有镜像源" aria-label="Permalink to &quot;换上阿里云私有镜像源&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span>
<span class="line"><span style="color:#A6ACCD;">搜索  容器镜像服务 镜像工具   镜像加速器 位置可以找到自己的私有镜像加速地址</span></span>
<span class="line"><span style="color:#A6ACCD;">https://p5t4gim3.mirror.aliyuncs.com</span></span></code></pre></div>`,6),l=[t];function p(c,r,i,d,u,C){return a(),n("div",null,l)}const m=s(o,[["render",p]]);export{h as __pageData,m as default};
