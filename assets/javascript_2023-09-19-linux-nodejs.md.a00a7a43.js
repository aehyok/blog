import{_ as s,o as n,c as a,b as e}from"./app.39978e14.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"linux下安装nodejs","slug":"linux下安装nodejs","link":"#linux下安装nodejs","children":[]},{"level":2,"title":"测试是否安装成功","slug":"测试是否安装成功","link":"#测试是否安装成功","children":[]}],"relativePath":"javascript/2023-09-19-linux-nodejs.md","lastUpdated":1709289250000}'),l={name:"javascript/2023-09-19-linux-nodejs.md"},p=e(`<h2 id="linux下安装nodejs" tabindex="-1">linux下安装nodejs <a class="header-anchor" href="#linux下安装nodejs" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  // 查看CPU架构</span></span>
<span class="line"><span style="color:#babed8;">  lscpu</span></span>
<span class="line"><span style="color:#babed8;">  uname -m</span></span>
<span class="line"><span style="color:#babed8;">  arch</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 1、下载地址</span></span>
<span class="line"><span style="color:#babed8;"> https://nodejs.org/dist/v18.18.0/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 2、拷贝到linux服务器 -- 手动安装版本</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    - https://blog.csdn.net/weixin_42940467/article/details/113866473</span></span>
<span class="line"><span style="color:#babed8;">    \`\`\`javascript</span></span>
<span class="line"><span style="color:#babed8;">    // 1、可从官网下载nodejs安装包</span></span>
<span class="line"><span style="color:#babed8;">    // 2、然后通过xftp上传到服务器</span></span>
<span class="line"><span style="color:#babed8;">    // 3、解压文件</span></span>
<span class="line"><span style="color:#babed8;">    tar -xvf node-v12.14.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#babed8;">    // 4、复制文件夹到指定位置</span></span>
<span class="line"><span style="color:#babed8;">    sudo mv ./node-v12.14.1-linux-x64 /usr/local/node</span></span>
<span class="line"><span style="color:#babed8;">    // 5、为node和npm创建快捷方式</span></span>
<span class="line"><span style="color:#babed8;">    sudo ln -s /usr/local/node/bin/node /usr/bin/node</span></span>
<span class="line"><span style="color:#babed8;">    sudo ln -s /usr/local/node/bin/npm /usr/bin/npm</span></span>
<span class="line"><span style="color:#babed8;">    // 6、查看版本确认安装是否成功</span></span>
<span class="line"><span style="color:#babed8;">    node -v   npm -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 3、在线安装nodejs </span></span>
<span class="line"><span style="color:#babed8;">  https://github.com/nodesource/distributions</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="测试是否安装成功" tabindex="-1">测试是否安装成功 <a class="header-anchor" href="#测试是否安装成功" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  node -v</span></span>
<span class="line"><span style="color:#babed8;">  npm -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,4),o=[p];function c(t,i,d,r,b,u){return n(),a("div",null,o)}const _=s(l,[["render",c]]);export{h as __pageData,_ as default};
