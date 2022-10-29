import{_ as s,o as n,c as a,a as l}from"./app.848cc861.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-08-22-nginx \u8D1F\u8F7D\u5747\u8861.md","lastUpdated":1667037972000}'),p={name:"javascript/2022-08-22-nginx \u8D1F\u8F7D\u5747\u8861.md"},e=l(`<ul><li>\u5148\u4E0A\u4E00\u4E2A\u524D\u7AEF\u7248\u672C\uFF0C\u540C\u4E00\u4EFD\u6253\u5305\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\uFF0C\u5206\u522B\u90E8\u7F72\u5230one\u548Ctwo.</li><li>\u56E0\u4E3A\u6211\u53EA\u6709\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u8FD9\u91CC\u901A\u8FC7\u7AEF\u53E3\u8FDB\u884C\u6F14\u793A\uFF1A one\u5BF9\u5E94\u7AEF\u53E391\uFF0Ctwo\u5BF9\u5E94\u7AEF\u53E392.</li><li>\u901A\u8FC7upstream nginxlbdemo\u8FDB\u884C\u8D1F\u8F7D\u914D\u7F6E.</li><li>\u6700\u540E\u901A\u8FC7proxy_pass\u53CD\u5411\u4EE3\u7406 upstream.</li><li>\u5982\u679C\u6709\u4FEE\u6539nginx\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FEE\u6539\u5B8C\u6BD5\u540E\u8BB0\u5F97 <code>nginx -s reload</code></li></ul><p>nginx-lb.conf</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 90;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://nginxlbdemo;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 91;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /usr/local/aehyok/nginx-lb/one;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 204;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 92;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /usr/local/aehyok/nginx-lb/two;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 204;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90E8\u7F72\u5B8C\u6BD5\u540E\uFF0C\u901A\u8FC7\u7535\u8111\u67E5\u770B\uFF0C\u6211\u6CA1\u529E\u6CD5\u505A\u6D4B\u8BD5\uFF0C\u53EA\u80FD\u901A\u8FC7\u505C\u638991\u6216\u8005\u505C\u638992\u6765\u8BBF\u95EE90\uFF0C\u90FD\u662F\u6CA1\u95EE\u9898\u7684\u3002 \u90A3\u8FD9\u91CC\u53EA\u597D\u901A\u8FC7node\u5F00\u542F\u540E\u7AEF\u670D\u52A1\u6765\u6D4B\u8BD5\u4E00\u4E0B\u3002</p><p>\u4E0B\u9762\u7684\u4EE3\u7801\u7B97\u7B97\u662F\u6A21\u62DF91\u548C92\u4E24\u4E2A\u7AEF\u53E3\uFF0C\u76F8\u5F53\u4E8E\u4E24\u53F0\u670D\u52A1\u5668\uFF0C\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668\u4E0A\uFF0C\u901A\u8FC7 node index.js\u8FD0\u884C\u8D77\u6765</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const http = require(&quot;http&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const port1 = 91</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const server1 = http</span></span>
<span class="line"><span style="color:#A6ACCD;">  .createServer(function (req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`Request: \${req.url}--port \${port1}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end(\`hello world! - \${port1}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  .listen(port1, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server1.once(&quot;listening&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`Server http://127.0.0.1:\${port1}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const port2 = 92</span></span>
<span class="line"><span style="color:#A6ACCD;">const server2 = http</span></span>
<span class="line"><span style="color:#A6ACCD;">  .createServer(function (req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`Request: \${req.url}--port \${port2}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.end(\`hello world! - \${port2}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  .listen(port2, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server2.once(&quot;listening&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`Server http://127.0.0.1:\${port2}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u91CD\u65B0\u914D\u7F6Enginx-lb.conf\uFF0C\u7136\u540E <code>nginx -s reload</code></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 90;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://nginxlbdemo;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u901A\u8FC7http://139.159.245.209:90\uFF0C\u4F60\u53EF\u4EE5\u4E0D\u65AD\u7684\u5237\u65B0\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230node \u540E\u53F0\u7684\u8BF7\u6C42\u65E5\u5FD7 91\u548C92\u7AEF\u53E3\u5728\u4E0D\u505C\u7684\u5207\u6362</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbb31c29e0ae46a8a485fcd2c7a767a5~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>\u9ED8\u8BA4\u8F6E\u8BE2 nginx\u9ED8\u8BA4\u5C31\u662F\u8F6E\u8BE2\uFF0C\u5176\u6743\u91CD\u9ED8\u8BA4\u90FD\u662F1\uFF0C\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u987A\u5E8F: \u7B2C1\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C2\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C3\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C4\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C5\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C6\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C7\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C8\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 ....</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91; </span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92;  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u52A0\u6743\u8F6E\u8BE2 nginx\u6839\u636E\u914D\u7F6E\u7684\u6743\u91CD\u5927\u5C0F\u800C\u5206\u53D1\u7ED9\u5BF9\u5E94\u670D\u52A1\u5668\u5BF9\u5E94\u6743\u91CD \u6570\u91CF\u7684\u5176\u4F60\uFF0C\u5176\u6743\u91CD\u9ED8\u8BA4\u90FD\u662F1\uFF0C\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u987A\u5E8F: \u7B2C1\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C2\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C3\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C4\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C5\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C6\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C7\u4E2A\u8BF7\u6C42 91\u7AEF\u53E3 \u7B2C8\u4E2A\u8BF7\u6C42 92\u7AEF\u53E3 \u7B2C9\u4E2A\u8BF7\u6C42 93\u7AEF\u53E3</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91 weight=1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92 weight=2; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>ip_hash nginx \u4F1A\u8BA9\u76F8\u540C\u7684\u5BA2\u6237\u7AEFip\u8BF7\u6C42\u76F8\u540C\u7684\u670D\u52A1\u5668\u3002</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ip_hash;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u70ED\u5907 \u5F00\u59CB\u65F6\u53EA\u4F1A\u8BBF\u95EE91\u7AEF\u53E3\uFF0C\u5982\u679C91\u7AEF\u53E3\u670D\u52A1\u5668\u53D1\u751F\u6545\u969C\uFF0C\u624D\u4F1A\u5F00\u542F\u7B2C\u4E8C\u53F0\u670D\u52A1\u5668\u7ED9\u63D0\u4F9B\u670D\u52A1\u3002</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream nginxlbdemo{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ip_hash;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:91;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:92 backup; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),o=[e];function c(r,t,i,A,C,y){return n(),a("div",null,o)}var u=s(p,[["render",c]]);export{d as __pageData,u as default};
