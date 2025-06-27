import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-08-22-nginx 负载均衡.md","filePath":"article/code/2022-08-22-nginx 负载均衡.md","lastUpdated":1751020369000}'),l={name:"article/code/2022-08-22-nginx 负载均衡.md"};function i(t,s,c,o,r,d){return p(),a("div",null,s[0]||(s[0]=[e(`<ul><li>先上一个前端版本，同一份打包编译后的文件，分别部署到one和two.</li><li>因为我只有一台服务器，所以这里通过端口进行演示： one对应端口91，two对应端口92.</li><li>通过upstream nginxlbdemo进行负载配置.</li><li>最后通过proxy_pass反向代理 upstream.</li><li>如果有修改nginx的配置文件，修改完毕后记得 <code>nginx -s reload</code></li></ul><p>nginx-lb.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    server 127.0.0.1:91;</span></span>
<span class="line"><span>    server 127.0.0.1:92;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 90;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      proxy_pass http://nginxlbdemo;</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 91;</span></span>
<span class="line"><span>    root /usr/local/aehyok/nginx-lb/one;</span></span>
<span class="line"><span>    index index.html index.htm;</span></span>
<span class="line"><span>    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>        return 204;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 92;</span></span>
<span class="line"><span>    root /usr/local/aehyok/nginx-lb/two;</span></span>
<span class="line"><span>    index index.html index.htm;</span></span>
<span class="line"><span>    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>        return 204;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>部署完毕后，通过电脑查看，我没办法做测试，只能通过停掉91或者停掉92来访问90，都是没问题的。 那这里只好通过node开启后端服务来测试一下。</p><p>下面的代码算算是模拟91和92两个端口，相当于两台服务器，拷贝到linux服务器上，通过 node index.js运行起来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port1 = 91</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const server1 = http</span></span>
<span class="line"><span>  .createServer(function (req, res) {</span></span>
<span class="line"><span>    console.log(\`Request: \${req.url}--port \${port1}\`);</span></span>
<span class="line"><span>    res.end(\`hello world! - \${port1}\`);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .listen(port1, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server1.once(&quot;listening&quot;, () =&gt; {</span></span>
<span class="line"><span>  console.log(\`Server http://127.0.0.1:\${port1}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port2 = 92</span></span>
<span class="line"><span>const server2 = http</span></span>
<span class="line"><span>  .createServer(function (req, res) {</span></span>
<span class="line"><span>    console.log(\`Request: \${req.url}--port \${port2}\`);</span></span>
<span class="line"><span>    res.end(\`hello world! - \${port2}\`);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .listen(port2, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server2.once(&quot;listening&quot;, () =&gt; {</span></span>
<span class="line"><span>  console.log(\`Server http://127.0.0.1:\${port2}\`);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>然后重新配置nginx-lb.conf，然后 <code>nginx -s reload</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    server 127.0.0.1:91;</span></span>
<span class="line"><span>    server 127.0.0.1:92;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 90;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      proxy_pass http://nginxlbdemo;</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后通过<a href="http://139.159.245.209:90" target="_blank" rel="noreferrer">http://139.159.245.209:90</a>，你可以不断的刷新，就可以看到node 后台的请求日志 91和92端口在不停的切换</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbb31c29e0ae46a8a485fcd2c7a767a5~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>默认轮询 nginx默认就是轮询，其权重默认都是1，服务器请求的顺序: 第1个请求 91端口 第2个请求 92端口 第3个请求 91端口 第4个请求 92端口 第5个请求 91端口 第6个请求 92端口 第7个请求 91端口 第8个请求 92端口 ....</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    server 127.0.0.1:91; </span></span>
<span class="line"><span>    server 127.0.0.1:92;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>加权轮询 nginx根据配置的权重大小而分发给对应服务器对应权重 数量的其你，其权重默认都是1，服务器请求的顺序: 第1个请求 91端口 第2个请求 92端口 第3个请求 92端口 第4个请求 91端口 第5个请求 92端口 第6个请求 92端口 第7个请求 91端口 第8个请求 92端口 第9个请求 93端口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    server 127.0.0.1:91 weight=1;</span></span>
<span class="line"><span>    server 127.0.0.1:92 weight=2; </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>ip_hash nginx 会让相同的客户端ip请求相同的服务器。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    ip_hash;</span></span>
<span class="line"><span>    server 127.0.0.1:91;</span></span>
<span class="line"><span>    server 127.0.0.1:92; </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>热备 开始时只会访问91端口，如果91端口服务器发生故障，才会开启第二台服务器给提供服务。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream nginxlbdemo{</span></span>
<span class="line"><span>    ip_hash;</span></span>
<span class="line"><span>    server 127.0.0.1:91;</span></span>
<span class="line"><span>    server 127.0.0.1:92 backup; </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,18)]))}const h=n(l,[["render",i]]);export{g as __pageData,h as default};
