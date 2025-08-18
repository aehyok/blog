import{_ as s,c as a,o as p,ag as e}from"./chunks/framework.Cpzi45lG.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-09-19-linux-nodejs.md","filePath":"article/code/2023-09-19-linux-nodejs.md","lastUpdated":1755507248000}'),l={name:"article/code/2023-09-19-linux-nodejs.md"};function i(t,n,c,o,d,r){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="linux下安装nodejs" tabindex="-1">linux下安装nodejs <a class="header-anchor" href="#linux下安装nodejs" aria-label="Permalink to &quot;linux下安装nodejs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 查看CPU架构</span></span>
<span class="line"><span>  lscpu</span></span>
<span class="line"><span>  uname -m</span></span>
<span class="line"><span>  arch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 1、下载地址</span></span>
<span class="line"><span> https://nodejs.org/dist/v18.18.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 2、拷贝到linux服务器 -- 手动安装版本</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    - https://blog.csdn.net/weixin_42940467/article/details/113866473</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    // 1、可从官网下载nodejs安装包</span></span>
<span class="line"><span>    // 2、然后通过xftp上传到服务器</span></span>
<span class="line"><span>    // 3、解压文件</span></span>
<span class="line"><span>    tar -xvf node-v12.14.1-linux-x64.tar.xz</span></span>
<span class="line"><span>    // 4、复制文件夹到指定位置</span></span>
<span class="line"><span>    sudo mv ./node-v12.14.1-linux-x64 /usr/local/node</span></span>
<span class="line"><span>    // 5、为node和npm创建快捷方式</span></span>
<span class="line"><span>    sudo ln -s /usr/local/node/bin/node /usr/bin/node</span></span>
<span class="line"><span>    sudo ln -s /usr/local/node/bin/npm /usr/bin/npm</span></span>
<span class="line"><span>    // 6、查看版本确认安装是否成功</span></span>
<span class="line"><span>    node -v   npm -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 3、在线安装nodejs </span></span>
<span class="line"><span>  https://github.com/nodesource/distributions</span></span></code></pre></div><h2 id="测试是否安装成功" tabindex="-1">测试是否安装成功 <a class="header-anchor" href="#测试是否安装成功" aria-label="Permalink to &quot;测试是否安装成功&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>  node -v</span></span>
<span class="line"><span>  npm -v</span></span></code></pre></div>`,4)]))}const m=s(l,[["render",i]]);export{h as __pageData,m as default};
