import{_ as s,o as n,c as a,a as p}from"./app.930700d9.js";const D=JSON.parse('{"title":"\u5B89\u88C5docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5docker","slug":"\u5B89\u88C5docker"},{"level":2,"title":"\u8BBE\u7F6Edocker\u5F00\u673A\u542F\u52A8","slug":"\u8BBE\u7F6Edocker\u5F00\u673A\u542F\u52A8"},{"level":2,"title":"docker\u955C\u50CF\u6E90","slug":"docker\u955C\u50CF\u6E90"},{"level":2,"title":"\u62C9\u53D6\u955C\u50CF","slug":"\u62C9\u53D6\u955C\u50CF"},{"level":2,"title":"\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668","slug":"\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668"}],"relativePath":"javascript/2022-08-17-docker.md","lastUpdated":1661596556000}'),l={name:"javascript/2022-08-17-docker.md"},e=p(`<p>Docker \u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6765\u6784\u5EFA\u548C\u90E8\u7F72\u5BB9\u5668\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u628A\u81EA\u5DF1\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u8005\u670D\u52A1\u6253\u5305\u653E\u8FDB\u5BB9\u5668\u5373\u53EF\u3002</p><p>\u5BB9\u5668\u662F\u57FA\u4E8E\u955C\u50CF\u542F\u52A8\u8D77\u6765\u7684\uFF0C\u5BB9\u5668\u4E2D\u53EF\u4EE5\u8FD0\u884C\u4E00\u4E2A\u6216\u591A\u4E2A\u8FDB\u7A0B\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\uFF0C\u955C\u50CF\u662FDocker \u751F\u547D\u5468\u671F\u4E2D\u7684\u6784\u5EFA\u6216\u8005\u6253\u5305\u9636\u6BB5\uFF0C\u800C\u5BB9\u5668\u5219\u662F\u542F\u52A8\u6216\u8005\u6267\u884C\u9636\u6BB5\u3002 \u5BB9\u5668\u57FA\u4E8E\u955C\u50CF\u542F\u52A8\uFF0C\u4E00\u65E6\u5BB9\u5668\u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u767B\u5F55\u5230\u5BB9\u5668\u4E2D\u5B89\u88C5\u81EA\u5DF1\u9700\u8981\u7684\u8F6F\u4EF6\u6216\u8005\u670D\u52A1\uFF0C\u6240\u4EE5Docker \u5BB9\u5668\u5C31\u662F\uFF1A</p><h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u5B89\u88C5docker</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo zypper in docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5\u770Bdocker\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BBE\u7F6Edocker\u5F00\u673A\u542F\u52A8" tabindex="-1">\u8BBE\u7F6Edocker\u5F00\u673A\u542F\u52A8 <a class="header-anchor" href="#\u8BBE\u7F6Edocker\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u914D\u7F6E\u8BA9docker\u670D\u52A1\u5C81\u7CFB\u7EDF\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8docker\u5B88\u62A4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53D6\u6D88\u5F00\u673A\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u505C\u6B62docker\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bnginx\u670D\u52A1\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u91CD\u542Fdocker\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="docker\u955C\u50CF\u6E90" tabindex="-1">docker\u955C\u50CF\u6E90 <a class="header-anchor" href="#docker\u955C\u50CF\u6E90" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vim /etc/docker/daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5982\u679C\u6743\u9650\u4E0D\u591F\u53EF\u4EE5\u8981\u52A0\u4E0Asudo</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo vim /etc/docker/daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u518Ddaemon.json\u4E2D\u6DFB\u52A0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;registry-mirrors&quot; : [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;https://cr.console.aliyun.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u67E5\u770B\u4E0B\u8F7D\u7684\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// docker\u4E2D\u62C9\u53BBnginx\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bnginx\u955C\u50CF \uFF08IMAGE ID\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668" tabindex="-1">\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668 <a class="header-anchor" href="#\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u6D4B\u8BD5nginx\u955C\u50CF\u662F\u5426\u53EF\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name mynginx -p 80:80 605c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// -d   \u6307\u5B9A\u5BB9\u5668\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u5728\u540E\u53F0\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">// --name \u6307\u5B9A\u5BB9\u5668\u540D\u79F0\uFF0C\u6B64\u5904\u6211\u6307\u5B9A\u7684\u662Fmynginx</span></span>
<span class="line"><span style="color:#A6ACCD;">// -p \u6307\u5B9A\u4E3B\u673A\u4E0E\u5BB9\u5668\u5185\u90E8\u7684\u7AEF\u53E3\u53F7\u6620\u5C04\u5173\u7CFB\uFF0C\u683C\u5F0F -p  [\u5BBF\u4E3B\u673A\u7AEF\u53E3\u53F7]\uFF1A[\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3]\uFF0C\u6B64\u5904\u6211\u4F7F\u7528\u4E86\u4E3B\u673A80\u7AEF\u53E3\uFF0C\u6620\u5C04\u5BB9\u566880\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">// 605c \u662Fnginx\u7684\u955C\u50CFIMAGE ID\u524D4\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>//\u6267\u884C\u4E0A\u9762\u7684docker run\u540E\u751F\u6210\u4E00\u4E32\u5B57\u7B26\u4E32\uFF08\u5BB9\u5668ID\uFF09\u8BF4\u660E\u6267\u884C\u6210\u529F ecs-78441:/etc/docker # docker run -d --name mynginx -p 80:80 605c ddc72b6047dba505f24559d181c99043be50eaa6a383549b7c0fe147266fb0b2</p><p>// 11\u3001\u6D4B\u8BD5nginx\u955C\u50CF\u901A\u8FC7\u6D4F\u89C8\u5668\u8FDB\u884C\u8BBF\u95EE\uFF08\u7AEF\u53E3\u8981\u8BB0\u5F97\u505A\u6620\u5C04\uFF09</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C06\u81EA\u5DF1\u7684\u9879\u76EE\u90E8\u7F72\u5230docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1\u3001\u5F00\u59CB\u5C06\u81EA\u5DF1\u7684vue\u524D\u7AEF\u9879\u76EE\u6253\u5305\u5230dist\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>yarn build</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2\u3001\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2ADockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>FROM nginx:latest</p><h1 id="\u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0Bdist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u4E2D-usr-share-nginx-html-\u76EE\u5F55\u4E0B" tabindex="-1">\u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0Bdist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u4E2D /usr/share/nginx/html/ \u76EE\u5F55\u4E0B <a class="header-anchor" href="#\u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0Bdist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u4E2D-usr-share-nginx-html-\u76EE\u5F55\u4E0B" aria-hidden="true">#</a></h1><p>COPY dist/ /usr/share/nginx/html/ COPY default.conf /etc/nginx/conf.d/default.conf</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3\u3001\u540C\u6837\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2Adefault.conf\uFF08nginx\u914D\u7F6E\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>server { listen 80; root /usr/share/nginx/html; index index.html index.htm; add_header Access-Control-Allow-Origin *; add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;; add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</p><pre><code>if ($request_method = &#39;OPTIONS&#39;) {
    return 204;
}
location / {
  try_files $uri $uri/ = 404;
}

location ^~/api/ {
   proxy_pass https://proapi.azurewebsites.net;
}

location ^~/so/api/ {
  proxy_pass http://139.186.205.7:5000/api/;  
}

location ^~/blog/ {
  proxy_pass http://139.186.205.7:8090/;
}
</code></pre><p>}</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4\u3001\u5C06\u6253\u5305\u540E\u7684\u6587\u4EF6dist\u6587\u4EF6\u5939\u548CDockerfile\u4EE5\u53CAdefault.conf\u4E0A\u4F20\u5230linux\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">![]()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5\u3001\u5728\u670D\u52A1\u5668\u4E0Acd\u5230\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>cd /usr/local/aehyok/docker</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6\u3001\u5F00\u59CB\u901A\u8FC7Dockerfile\u521B\u5EFA\u955C\u50CF(admin\u6307\u7684\u662F\u955C\u50CF\u7684\u540D\u5B57)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>docker build -t admin . // \u5E94\u8BE5\u4F1A\u63D0\u793ASuccessfully tagged admin:latest // \u8BF4\u660E\u521B\u5EFA\u6210\u529F\u4E86</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7\u3001\u67E5\u770B\u521A\u521A\u521B\u5EFA\u7684\u955C\u50CF(\u627E\u5230admin\u955C\u50CF\u7684IMAGE ID\u7684\u524D\u56DB\u4F4D)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>docker images</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8\u3001\u901A\u8FC7\u955C\u50CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u5E76\u8FD0\u884C\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>docker run -d -p 80:80 --name myreact ba04</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">9\u3001\u67E5\u770B\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>//\u5217\u51FA\u5BB9\u5668 docker ps</p><p>// \u5217\u51FA\u6240\u6709\u5BB9\u5668\uFF08\u5305\u62EC\u672A\u8FD0\u884C\u7684\u5BB9\u5668\uFF09 docker ps -a</p><p>// \u5F00\u542F\u5BB9\u5668 (container id) docker start dsfsdfas</p><p>docker stop dfdssdf</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">10\u3001\u901A\u8FC7\u6D4F\u89C8\u5668\u8FDB\u884C\u8BBF\u95EE\u5730\u5740\u5373\u53EF\uFF0C\u5B8C\u7F8E\u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] \u5B89\u88C5docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -   &lt;https://www.cnblogs.com/lusaisai/p/13263808.html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    -   &lt;https://blog.csdn.net/achaodzyj/article/details/116074208&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker\u5E38\u7528\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -   &lt;https://juejin.cn/post/7050304120082661407#heading-8&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -   &lt;https://juejin.cn/post/6992848354753380389&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-   [ ] docker \u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    -   &lt;https://www.runoob.com/docker/docker-container-usage.html&gt;</span></span></code></pre></div>`,41),c=[e];function o(r,t,i,A,C,d){return n(),a("div",null,c)}var u=s(l,[["render",o]]);export{D as __pageData,u as default};
