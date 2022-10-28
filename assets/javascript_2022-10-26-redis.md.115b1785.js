import{_ as s,o as a,c as n,a as l}from"./app.848cc861.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-10-26-redis.md","lastUpdated":1666873399000}'),e={name:"javascript/2022-10-26-redis.md"},p=l(`<ul><li><p>Keys * \u5C3D\u91CF\u4E0D\u7528</p><ul><li><a href="https://www.cnblogs.com/jackson0714/p/redis_transaction.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/jackson0714/p/redis_transaction.html</a></li></ul></li><li><p>list\u548Cset</p><ul><li><a href="https://www.cnblogs.com/yangxu-pro/p/10309415.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/yangxu-pro/p/10309415.html</a></li></ul></li><li><p>\u7B80\u5355\u5B89\u88C5 \u542F\u52A8 \u8FDE\u63A5 \u914D\u7F6E \u4F7F\u7528</p><ul><li><a href="https://juejin.cn/post/6979019298543140901#heading-5" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6979019298543140901#heading-5</a></li></ul></li><li><p>\u67E5\u770B\u7248\u672C</p></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-server - v</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u67E5\u770Bredis\u8FD0\u884C\u7684\u8FDB\u7A0B</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ps -aux | grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u770B\u5230redis\u5B89\u88C5\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u542F\u52A8</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-server redis.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4FEE\u6539redis.conf</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u4FEE\u6539\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">requirepass  password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5F00\u542F\u5B88\u62A4</span></span>
<span class="line"><span style="color:#A6ACCD;">daemonize  yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4FEE\u6539\u540E\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server redis.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u8FDB\u5165redis</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">auth password</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6210\u529F\u540E\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4F7F\u7528\u547D\u4EE4</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">SET key</span></span>
<span class="line"><span style="color:#A6ACCD;">GET key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),o=[p];function c(r,i,t,d,A,C){return a(),n("div",null,o)}var _=s(e,[["render",c]]);export{u as __pageData,_ as default};
