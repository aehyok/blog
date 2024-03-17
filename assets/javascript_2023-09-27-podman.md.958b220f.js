import{_ as s,o as a,c as n,b as e}from"./app.39978e14.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"podman更换镜像源","slug":"podman更换镜像源","link":"#podman更换镜像源","children":[]},{"level":2,"title":"换上阿里云私有镜像源","slug":"换上阿里云私有镜像源","link":"#换上阿里云私有镜像源","children":[]}],"relativePath":"javascript/2023-09-27-podman.md","lastUpdated":1710690882000}'),l={name:"javascript/2023-09-27-podman.md"},t=e(`<h2 id="podman更换镜像源" tabindex="-1">podman更换镜像源 <a class="header-anchor" href="#podman更换镜像源" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/qq_33745102/article/details/122713263" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_33745102/article/details/122713263</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 配置文件位置</span></span>
<span class="line"><span style="color:#babed8;">vim cat /etc/containers/registries.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 添加配置</span></span>
<span class="line"><span style="color:#babed8;">[[registry]]</span></span>
<span class="line"><span style="color:#babed8;">prefix = &quot;docker.io&quot;</span></span>
<span class="line"><span style="color:#babed8;">insecure = true</span></span>
<span class="line"><span style="color:#babed8;">location = &quot;hub-mirror.c.163.com&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//上面的location换成适合的源地址</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;https://cr.console.aliyun.com&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">原来的配置</span></span>
<span class="line"><span style="color:#babed8;">unqualified-search-registries = [&quot;registry.access.redhat.com&quot;, &quot;registry.redhat.io&quot;, &quot;docker.io&quot;]</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="换上阿里云私有镜像源" tabindex="-1">换上阿里云私有镜像源 <a class="header-anchor" href="#换上阿里云私有镜像源" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span>
<span class="line"><span style="color:#babed8;">搜索  容器镜像服务 镜像工具   镜像加速器 位置可以找到自己的私有镜像加速地址</span></span>
<span class="line"><span style="color:#babed8;">https://p5t4gim3.mirror.aliyuncs.com</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,6),o=[t];function p(c,r,i,d,b,u){return a(),n("div",null,o)}const y=s(l,[["render",p]]);export{m as __pageData,y as default};
