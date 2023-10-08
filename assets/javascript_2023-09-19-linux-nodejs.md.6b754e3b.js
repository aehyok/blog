import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ce94e18e.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-09-19-linux-nodejs.md","lastUpdated":1696682207000}'),p={name:"javascript/2023-09-19-linux-nodejs.md"},e=l(`<h2 id="linux下安装nodejs" tabindex="-1">linux下安装nodejs <a class="header-anchor" href="#linux下安装nodejs" aria-label="Permalink to &quot;linux下安装nodejs&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查看CPU架构</span></span>
<span class="line"><span style="color:#A6ACCD;">  lscpu</span></span>
<span class="line"><span style="color:#A6ACCD;">  uname -m</span></span>
<span class="line"><span style="color:#A6ACCD;">  arch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 1、下载地址</span></span>
<span class="line"><span style="color:#A6ACCD;"> https://nodejs.org/dist/v18.18.0/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 2、拷贝到linux服务器 -- 手动安装版本</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    - https://blog.csdn.net/weixin_42940467/article/details/113866473</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`javascript</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1、可从官网下载nodejs安装包</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2、然后通过xftp上传到服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3、解压文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar -xvf node-v12.14.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 4、复制文件夹到指定位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    sudo mv ./node-v12.14.1-linux-x64 /usr/local/node</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 5、为node和npm创建快捷方式</span></span>
<span class="line"><span style="color:#A6ACCD;">    sudo ln -s /usr/local/node/bin/node /usr/bin/node</span></span>
<span class="line"><span style="color:#A6ACCD;">    sudo ln -s /usr/local/node/bin/npm /usr/bin/npm</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 6、查看版本确认安装是否成功</span></span>
<span class="line"><span style="color:#A6ACCD;">    node -v   npm -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 3、在线安装nodejs </span></span>
<span class="line"><span style="color:#A6ACCD;">  https://github.com/nodesource/distributions</span></span></code></pre></div><h2 id="测试是否安装成功" tabindex="-1">测试是否安装成功 <a class="header-anchor" href="#测试是否安装成功" aria-label="Permalink to &quot;测试是否安装成功&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">  npm -v</span></span></code></pre></div>`,4),o=[e];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const D=s(p,[["render",c]]);export{y as __pageData,D as default};
