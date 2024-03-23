import{_ as s,o as a,c as n,b as e}from"./app.39978e14.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"docker下创建redis容器","slug":"docker下创建redis容器","link":"#docker下创建redis容器","children":[]}],"relativePath":"javascript/2023-11-28-redis.md","lastUpdated":1711189881000}'),l={name:"javascript/2023-11-28-redis.md"},p=e(`<h2 id="docker下创建redis容器" tabindex="-1">docker下创建redis容器 <a class="header-anchor" href="#docker下创建redis容器" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  // 查看redis镜像，找到Stars数量最多的</span></span>
<span class="line"><span style="color:#babed8;">  docker search redis</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 拉取redis镜像</span></span>
<span class="line"><span style="color:#babed8;">  docker pull redis</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 查看本地镜像</span></span>
<span class="line"><span style="color:#babed8;">  docker images</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 运行容器，指定映射端口号号容器名称  redis,并设置容器重启启动</span></span>
<span class="line"><span style="color:#babed8;">  docker run --restart always -itd --name redis -p 16379:6379 redis</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 如果你的系统是ARM64 上运行的容器，那么很可能会报如下错误</span></span>
<span class="line"><span style="color:#babed8;">  Redis will now exit to prevent data corruption. Note that it is possible to suppress this warning by setting the following config: ignore-warnings ARM64-COW-BUG</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 此时我重新运行容器，指定参数</span></span>
<span class="line"><span style="color:#babed8;">  docker run --restart always -itd --name redis -p 16379:6379 redis --ignore-warnings ARM64-COW-BUG</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 查看容器是否运行</span></span>
<span class="line"><span style="color:#babed8;">  dock</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 再查看容器日志（查看是否启动成功）</span></span>
<span class="line"><span style="color:#babed8;">  docker logs redis </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 进入容器</span></span>
<span class="line"><span style="color:#babed8;">  docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 进入redis</span></span>
<span class="line"><span style="color:#babed8;">  redis-cli</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 查看redis版本</span></span>
<span class="line"><span style="color:#babed8;">  info</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  //此时已经连入，exit退出redis-cli， 设置密码（）</span></span>
<span class="line"><span style="color:#babed8;">  redis-cli CONFIG SET requirepass 123456</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,2),o=[p];function c(r,i,t,d,b,y){return a(),n("div",null,o)}const k=s(l,[["render",c]]);export{h as __pageData,k as default};
