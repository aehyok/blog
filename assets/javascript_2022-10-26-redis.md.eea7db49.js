import{_ as s,o as n,c as a,a as l}from"./app.848cc861.js";const u=JSON.parse('{"title":"\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF","slug":"\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF"}],"relativePath":"javascript/2022-10-26-redis.md","lastUpdated":1667302899000}'),e={name:"javascript/2022-10-26-redis.md"},p=l(`<ul><li><p>Keys * \u5C3D\u91CF\u4E0D\u7528</p><ul><li><a href="https://www.cnblogs.com/jackson0714/p/redis_transaction.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/jackson0714/p/redis_transaction.html</a></li></ul></li><li><p>list\u548Cset</p><ul><li><a href="https://www.cnblogs.com/yangxu-pro/p/10309415.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/yangxu-pro/p/10309415.html</a></li></ul></li><li><p>\u7B80\u5355\u5B89\u88C5 \u542F\u52A8 \u8FDE\u63A5 \u914D\u7F6E \u4F7F\u7528</p><ul><li><a href="https://juejin.cn/post/6979019298543140901#heading-5" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6979019298543140901#heading-5</a></li></ul></li><li><p>\u67E5\u770B\u7248\u672C</p></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-server - v</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u67E5\u770Bredis\u8FD0\u884C\u7684\u8FDB\u7A0B</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ps -aux | grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u770B\u5230redis\u5B89\u88C5\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linux\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF08-p\uFF09 pid</span></span>
<span class="line"><span style="color:#A6ACCD;">top -p 954</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u6301\u4E45\u5316 RDB\u548CAOF</p><ul><li><a href="https://blog.csdn.net/weixin_40172337/article/details/114483168" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_40172337/article/details/114483168</a></li></ul></li><li><p>redis 6.0 \u591A\u7EBF\u7A0B\u6027\u80FD\u63D0\u5347</p><ul><li><a href="https://juejin.cn/post/6844904158697521160" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904158697521160</a></li></ul></li></ul><h2 id="\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF" tabindex="-1">\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF <a class="header-anchor" href="#\u83B7\u53D6\u6240\u6709keys\u7684\u6570\u91CF" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">dbsize</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">info memory</span></span>
<span class="line"><span style="color:#A6ACCD;">info cpu</span></span>
<span class="line"><span style="color:#A6ACCD;">info lastest_fork_usec</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u547D\u4EE4\u6267\u884C\u6B21\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">// calls \u603B\u6B21\u6570 usec \u603B\u8017\u65F6 usec_per_call \u5E73\u5747\u8017\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">info lastest_fork_usec</span></span>
<span class="line"><span style="color:#A6ACCD;">cofig resetstat \u91CD\u7F6E\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- aof rdb</span></span>
<span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/weixin_42614150/article/details/125074667</span></span>
<span class="line"><span style="color:#A6ACCD;">- \u5B9E\u9645\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">  - https://blog.csdn.net/weixin_44977377/article/details/123470054</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> // used_memory_human </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u54C8\u5E0C HMGET field\u5F88\u591A\u65F6\uFF0C\u67E5\u8BE2\u5F88\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528hgetall <ul><li><a href="https://juejin.cn/post/6844903448966758408" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903448966758408</a></li></ul></li></ul><p>redis.conf \u4E2Ddaemonize yes \u5F00\u542F\u5DF2\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C</p><ul><li>\u7248\u672C\u4E0B\u8F7D\u5217\u8868 <ul><li><a href="http://download.redis.io/releases/" target="_blank" rel="noopener noreferrer">http://download.redis.io/releases/</a></li></ul></li></ul>`,18),o=[p];function r(c,i,t,A,C,d){return n(),a("div",null,o)}var D=s(e,[["render",r]]);export{u as __pageData,D as default};
