import{_ as s,o as n,c as a,a as l}from"./app.930700d9.js";const D=JSON.parse('{"title":"\u5B89\u88C5nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5nginx","slug":"\u5B89\u88C5nginx"},{"level":2,"title":"\u8BBE\u7F6Enginx\u670D\u52A1\u81EA\u52A8\u542F\u52A8","slug":"\u8BBE\u7F6Enginx\u670D\u52A1\u81EA\u52A8\u542F\u52A8"},{"level":2,"title":"\u5728/etc/nginx/conf.d\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2Ahtml.conf","slug":"\u5728-etc-nginx-conf-d\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2Ahtml-conf"},{"level":2,"title":"\u901A\u8FC7\u811A\u672C\u6267\u884C\u6253\u5305\u540E\uFF0C\u81EA\u52A8\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668","slug":"\u901A\u8FC7\u811A\u672C\u6267\u884C\u6253\u5305\u540E\uFF0C\u81EA\u52A8\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668"}],"relativePath":"javascript/2022-08-17-nginx.md","lastUpdated":1660739467000}'),p={name:"javascript/2022-08-17-nginx.md"},e=l(`<p>opensuse \u901A\u8FC7zypper\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C\u8F6F\u4EF6\u7BA1\u7406\uFF0C\u7C7B\u4F3Ccentos\u7684yum \u8F6F\u4EF6\u3002</p><h2 id="\u5B89\u88C5nginx" tabindex="-1">\u5B89\u88C5nginx <a class="header-anchor" href="#\u5B89\u88C5nginx" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u67E5\u627Enginx</span></span>
<span class="line"><span style="color:#A6ACCD;">zypper search nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u901A\u8FC7zypper\u5B89\u88C5nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">zypper install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bnginx\u662F\u5426\u5B89\u88C5\u6210\u529F,\u5B89\u88C5\u6210\u529F\u5219\u51FA\u73B0\u7248\u672C\u76F8\u5173\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BBE\u7F6Enginx\u670D\u52A1\u81EA\u52A8\u542F\u52A8" tabindex="-1">\u8BBE\u7F6Enginx\u670D\u52A1\u81EA\u52A8\u542F\u52A8 <a class="header-anchor" href="#\u8BBE\u7F6Enginx\u670D\u52A1\u81EA\u52A8\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6Enginx\u5F00\u673A\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53D6\u6D88\u5F00\u673A\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8nginx\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62nginx\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bnginx\u670D\u52A1\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6\u7B49\uFF0C\u91CD\u65B0\u8F7D\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5728-etc-nginx-conf-d\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2Ahtml-conf" tabindex="-1">\u5728/etc/nginx/conf.d\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2Ahtml.conf <a class="header-anchor" href="#\u5728-etc-nginx-conf-d\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2Ahtml-conf" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## \u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 88;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ##  \u524D\u7AEF\u9879\u76EE\u6253\u5305\u540E\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /usr/local/aehyok/h5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## \u8BBE\u7F6E\u8DE8\u57DF\uFF0C\u5176\u5B9E\u53EF\u4EE5\u5FFD\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 204;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files $uri $uri/ = 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u901A\u8FC7\u811A\u672C\u6267\u884C\u6253\u5305\u540E\uFF0C\u81EA\u52A8\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668" tabindex="-1">\u901A\u8FC7\u811A\u672C\u6267\u884C\u6253\u5305\u540E\uFF0C\u81EA\u52A8\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668 <a class="header-anchor" href="#\u901A\u8FC7\u811A\u672C\u6267\u884C\u6253\u5305\u540E\uFF0C\u81EA\u52A8\u62F7\u8D1D\u5230linux\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5728package.json\u4E2D\u5F15\u5165zx</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i zx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728package.json\u4E2D\u7684scripts</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;buildtome&quot;: &quot;npm run build &amp;&amp; zx ./scripts/prebuild.mjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>prebuild.js\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { $, argv } from &quot;zx&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const isWin = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // win32 \u4EE3\u8868window\u5E73\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  // darwin \u4EE3\u8868mac\u5E73\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  //</span></span>
<span class="line"><span style="color:#A6ACCD;">  return process.platform === &quot;win32&quot; ? true : false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = process.cwd()</span></span>
<span class="line"><span style="color:#A6ACCD;">let dir = isWin() ? &#39;/h/github/blog&#39;: root</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(process.platform, &#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let path = \`\${dir}/docs/.vitepress/dist\` </span></span>
<span class="line"><span style="color:#A6ACCD;">const gitPullInfo = await $\`scp -r \${path}/* root@81.69.241.99:/usr/local/qiankun/blog/\`</span></span>
<span class="line"><span style="color:#A6ACCD;">// const gitPullInfo = await $\`cd \${path};\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(gitPullInfo.exitCode === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;\u590D\u5236\u5230linux\u8FDC\u7A0B\u670D\u52A1\u5668\u6210\u529F&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;\u53D1\u751F\u9519\u8BEF&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5148\u6765\u5224\u65AD\u662F\u5728window\u6267\u884C\u7684\u811A\u672C\uFF0C\u8FD8\u662F\u5728mac\u4E0B\uFF08linux\u5E94\u8BE5\u4E5F\u53EF\u4EE5\u4E0D\u8FC7\u6211\u6CA1\u5C1D\u8BD5\u8FC7\uFF09\u4E24\u8005\u83B7\u53D6\u8DEF\u5F84\u7684\u65B9\u5F0F\u662F\u4E0D\u592A\u4E00\u6837\u3002 \u7136\u540E\u5176\u5B9E\u5C31\u662F\u901A\u8FC7scp\u6307\u4EE4\uFF0C\u5C06\u672C\u5730\u6253\u5305\u7F16\u8BD1\u597D\u7684\u76EE\u5F55\uFF0C\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u5BF9\u5E94\u7684\u76EE\u5F55\u4E0A</p>`,15),o=[e];function c(i,t,r,A,C,d){return n(),a("div",null,o)}var g=s(p,[["render",c]]);export{D as __pageData,g as default};
