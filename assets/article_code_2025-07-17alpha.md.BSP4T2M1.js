import{_ as s,c as e,o as n,ag as p}from"./chunks/framework.ELrfyV9R.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2025-07-17alpha.md","filePath":"article/code/2025-07-17alpha.md","lastUpdated":1764759240000}'),t={name:"article/code/2025-07-17alpha.md"};function l(i,a,r,c,h,o){return n(),e("div",null,a[0]||(a[0]=[p(`<h2 id="获取api-key地址" tabindex="-1">获取API Key地址 <a class="header-anchor" href="#获取api-key地址" aria-label="Permalink to &quot;获取API Key地址&quot;">​</a></h2><ul><li><a href="https://docs.etherscan.io/etherscan-v2/getting-an-api-key" target="_blank" rel="noreferrer">https://docs.etherscan.io/etherscan-v2/getting-an-api-key</a></li><li><a href="https://etherscan.io/apidashboard" target="_blank" rel="noreferrer">https://etherscan.io/apidashboard</a></li></ul><h2 id="api-所支持的链" tabindex="-1">API 所支持的链 <a class="header-anchor" href="#api-所支持的链" aria-label="Permalink to &quot;API 所支持的链&quot;">​</a></h2><ul><li><a href="https://docs.etherscan.io/etherscan-v2/supported-chains" target="_blank" rel="noreferrer">https://docs.etherscan.io/etherscan-v2/supported-chains</a></li></ul><h2 id="参考项目" tabindex="-1">参考项目 <a class="header-anchor" href="#参考项目" aria-label="Permalink to &quot;参考项目&quot;">​</a></h2><ul><li><a href="https://github.com/holazz/bn-alpha" target="_blank" rel="noreferrer">https://github.com/holazz/bn-alpha</a></li></ul><h2 id="可参考接口地址" tabindex="-1">可参考接口地址 <a class="header-anchor" href="#可参考接口地址" aria-label="Permalink to &quot;可参考接口地址&quot;">​</a></h2><ul><li><a href="http://cw.hubwiz.com/card/c/etherscan-api/1/1/7/" target="_blank" rel="noreferrer">http://cw.hubwiz.com/card/c/etherscan-api/1/1/7/</a></li><li><a href="https://web3.okx.com/zh-hans/build/dev-docs/dex-api/dex-what-is-dex-api" target="_blank" rel="noreferrer">https://web3.okx.com/zh-hans/build/dev-docs/dex-api/dex-what-is-dex-api</a></li></ul><h2 id="gas-gasused-gasprice-作用" tabindex="-1">gas gasUsed gasPrice 作用 <a class="header-anchor" href="#gas-gasused-gasprice-作用" aria-label="Permalink to &quot;gas gasUsed gasPrice 作用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gas</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作用：交易的gas限制（gas limit）</span></span>
<span class="line"><span>含义：这笔交易最多可以消耗的gas数量</span></span>
<span class="line"><span>设置：由发送方在提交交易时预先设定</span></span>
<span class="line"><span>目的：防止交易消耗过多资源，避免无限循环等问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gasUsed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作用：交易实际消耗的gas数量</span></span>
<span class="line"><span>含义：这笔交易在执行过程中真正使用了多少gas</span></span>
<span class="line"><span>特点：总是 ≤ gas（gas限制）</span></span>
<span class="line"><span>计费基础：实际的交易费用按照gasUsed计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gasPrice</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作用：每单位gas的价格</span></span>
<span class="line"><span>单位：通常以Gwei为单位（1 Gwei = 10^-9 ETH）</span></span>
<span class="line"><span>影响：决定交易的优先级，价格越高越容易被矿工打包</span></span></code></pre></div>`,10)]))}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
