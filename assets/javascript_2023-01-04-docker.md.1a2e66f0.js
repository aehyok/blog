import{_ as s,o as a,c as n,a as l}from"./app.0a2a86d4.js";const D=JSON.parse('{"title":"linux \u4E0B\u5B89\u88C5docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"linux \u4E0B\u5B89\u88C5docker","slug":"linux-\u4E0B\u5B89\u88C5docker"},{"level":2,"title":"","slug":""},{"level":2,"title":"\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90","slug":"\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90"},{"level":2,"title":"\u64CD\u4F5C\u955C\u50CF","slug":"\u64CD\u4F5C\u955C\u50CF"},{"level":2,"title":"\u64CD\u4F5C\u5BB9\u5668","slug":"\u64CD\u4F5C\u5BB9\u5668"}],"relativePath":"javascript/2023-01-04-docker.md","lastUpdated":1672831830000}'),e={name:"javascript/2023-01-04-docker.md"},p=l(`<h2 id="linux-\u4E0B\u5B89\u88C5docker" tabindex="-1">linux \u4E0B\u5B89\u88C5docker <a class="header-anchor" href="#linux-\u4E0B\u5B89\u88C5docker" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/book/6844733746462064654/section/6844733746545950734" target="_blank" rel="noopener noreferrer">https://juejin.cn/book/6844733746462064654/section/6844733746545950734</a></li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90" tabindex="-1">\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90 <a class="header-anchor" href="#\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Docker \u5B98\u65B9\u63D0\u4F9B\u7684\u56FD\u5185\u955C\u50CF\u6E90: registry.docker-cn.com</span></span>
<span class="line"><span style="color:#A6ACCD;">// /etc/docker/daemon.json \u5982\u679C\u6B64\u6587\u4EF6\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">touch daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /etc/docker</span></span>
<span class="line"><span style="color:#A6ACCD;">vim daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;https://registry.docker-cn.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4FEE\u6539\u5B8C\u914D\u7F6E\u540E\uFF0C\u91CD\u542Fdocker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u64CD\u4F5C\u955C\u50CF" tabindex="-1">\u64CD\u4F5C\u955C\u50CF <a class="header-anchor" href="#\u64CD\u4F5C\u955C\u50CF" aria-hidden="true">#</a></h2><ul><li>\u67E5\u770B\u955C\u50CF</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// IMAGE ID \u955C\u50CFID  8b6c5f52aa82  \u53EA\u663E\u793A\u4E86\u524D12\u4F4D\u5B57\u7B26\uFF0C\u5176\u5B9E\u662F64\u4F4D\u7684\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u62C9\u53D6\u955C\u50CF</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// xxx\u955C\u50CF\u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u7248\u672C\u53F7 xxx:1.2.3</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u67E5\u770B\u955C\u50CF</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u62C9\u53D6\u955C\u50CF\u540E\uFF0C\u955C\u50CF\u5C31\u5B58\u653E\u5230\u672C\u5730\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5220\u9664\u955C\u50CF</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// xxx \u955C\u50CF\u7684\u540D\u79F0\u6216ID</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi xxx </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u64CD\u4F5C\u5BB9\u5668" tabindex="-1">\u64CD\u4F5C\u5BB9\u5668 <a class="header-anchor" href="#\u64CD\u4F5C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA\u5BB9\u5668  \u901A\u8FC7--name\u914D\u7F6E\u5BB9\u5668\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker create --name consul  consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5217\u51FA\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5217\u51FA\u6240\u6709\u72B6\u6001\u7684\u5BB9\u5668\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -a </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5220\u9664\u5BB9\u5668 (\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u662F\u4E0D\u80FD\u5220\u9664\u7684\uFF0C\u6240\u4EE5\u5148\u505C\u6B62\u5BB9\u5668\u518D\u8FDB\u884C\u5220\u9664)</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm consul</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),c=[p];function o(r,t,i,A,C,d){return a(),n("div",null,c)}var u=s(e,[["render",o]]);export{D as __pageData,u as default};
