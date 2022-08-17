import{_ as s,o as n,c as a,a as p}from"./app.930700d9.js";const D=JSON.parse('{"title":"\u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0Bdist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u4E2D /usr/share/nginx/html/ \u76EE\u5F55\u4E0B","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-08-17-docker.md","lastUpdated":1660739467000}'),l={name:"javascript/2022-08-17-docker.md"},e=p(`<p>Docker \u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6765\u6784\u5EFA\u548C\u90E8\u7F72\u5BB9\u5668\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u628A\u81EA\u5DF1\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u8005\u670D\u52A1\u6253\u5305\u653E\u8FDB\u5BB9\u5668\u5373\u53EF\u3002</p><p>\u5BB9\u5668\u662F\u57FA\u4E8E\u955C\u50CF\u542F\u52A8\u8D77\u6765\u7684\uFF0C\u5BB9\u5668\u4E2D\u53EF\u4EE5\u8FD0\u884C\u4E00\u4E2A\u6216\u591A\u4E2A\u8FDB\u7A0B\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\uFF0C\u955C\u50CF\u662FDocker \u751F\u547D\u5468\u671F\u4E2D\u7684\u6784\u5EFA\u6216\u8005\u6253\u5305\u9636\u6BB5\uFF0C\u800C\u5BB9\u5668\u5219\u662F\u542F\u52A8\u6216\u8005\u6267\u884C\u9636\u6BB5\u3002 \u5BB9\u5668\u57FA\u4E8E\u955C\u50CF\u542F\u52A8\uFF0C\u4E00\u65E6\u5BB9\u5668\u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u767B\u5F55\u5230\u5BB9\u5668\u4E2D\u5B89\u88C5\u81EA\u5DF1\u9700\u8981\u7684\u8F6F\u4EF6\u6216\u8005\u670D\u52A1\uFF0C\u6240\u4EE5Docker \u5BB9\u5668\u5C31\u662F\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//1\u3001\u5B89\u88C5docker</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo zypper in docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//2\u3001\u67E5\u770Bdocker\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//3\u3001\u914D\u7F6E\u8BA9docker\u670D\u52A1\u5C81\u7CFB\u7EDF\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//4\u3001 \u542F\u52A8docker\u5B88\u62A4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//5\u3001\u914D\u7F6Edocker \u955C\u50CF\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/docker/daemon.json</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6DFB\u52A0\u5982\u4E0B\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;registry-mirrors&quot; : [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;https://cr.console.aliyun.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">//6\u3001\u91CD\u542Fdocker\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//7\u3001\u67E5\u770B\u4E0B\u8F7D\u7684\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//8\u3001 docker\u4E2D\u62C9\u53BBnginx\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//9\u3001\u67E5\u770Bnginx\u955C\u50CF \uFF08IMAGE ID\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//10\u3001\u6D4B\u8BD5nginx\u955C\u50CF\u662F\u5426\u53EF\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d --name mynginx -p 80:80 605c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// -d   \u6307\u5B9A\u5BB9\u5668\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u5728\u540E\u53F0\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">// --name \u6307\u5B9A\u5BB9\u5668\u540D\u79F0\uFF0C\u6B64\u5904\u6211\u6307\u5B9A\u7684\u662Fmynginx</span></span>
<span class="line"><span style="color:#A6ACCD;">// -p \u6307\u5B9A\u4E3B\u673A\u4E0E\u5BB9\u5668\u5185\u90E8\u7684\u7AEF\u53E3\u53F7\u6620\u5C04\u5173\u7CFB\uFF0C\u683C\u5F0F -p  [\u5BBF\u4E3B\u673A\u7AEF\u53E3\u53F7]\uFF1A[\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3]\uFF0C\u6B64\u5904\u6211\u4F7F\u7528\u4E86\u4E3B\u673A80\u7AEF\u53E3\uFF0C\u6620\u5C04\u5BB9\u566880\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">// 605c \u662Fnginx\u7684\u955C\u50CFIMAGE ID\u524D4\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6267\u884C\u4E0A\u9762\u7684docker run\u540E\u751F\u6210\u4E00\u4E32\u5B57\u7B26\u4E32\uFF08\u5BB9\u5668ID\uFF09\u8BF4\u660E\u6267\u884C\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">ecs-78441:/etc/docker # docker run -d --name mynginx -p 80:80 605c</span></span>
<span class="line"><span style="color:#A6ACCD;">ddc72b6047dba505f24559d181c99043be50eaa6a383549b7c0fe147266fb0b2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 11\u3001\u6D4B\u8BD5nginx\u955C\u50CF\u901A\u8FC7\u6D4F\u89C8\u5668\u8FDB\u884C\u8BBF\u95EE\uFF08\u7AEF\u53E3\u8981\u8BB0\u5F97\u505A\u6620\u5C04\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C06\u81EA\u5DF1\u7684\u9879\u76EE\u90E8\u7F72\u5230docker</p><p>1\u3001\u5F00\u59CB\u5C06\u81EA\u5DF1\u7684vue\u524D\u7AEF\u9879\u76EE\u6253\u5305\u5230dist\u76EE\u5F55</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2\u3001\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2ADockerfile</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">FROM nginx:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0Bdist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u4E2D /usr/share/nginx/html/ \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY dist/ /usr/share/nginx/html/</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY default.conf /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3\u3001\u540C\u6837\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2Adefault.conf\uFF08nginx\u914D\u7F6E\u6587\u4EF6\uFF09</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html index.htm;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~/api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">       proxy_pass https://proapi.azurewebsites.net;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~/so/api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://139.186.205.7:5000/api/;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~/blog/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://139.186.205.7:8090/;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4\u3001\u5C06\u6253\u5305\u540E\u7684\u6587\u4EF6dist\u6587\u4EF6\u5939\u548CDockerfile\u4EE5\u53CAdefault.conf\u4E0A\u4F20\u5230linux\u670D\u52A1\u5668</p><p><img src="" alt=""></p><p>5\u3001\u5728\u670D\u52A1\u5668\u4E0Acd\u5230\u6307\u5B9A\u76EE\u5F55</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cd  /usr/local/aehyok/docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>6\u3001\u5F00\u59CB\u901A\u8FC7Dockerfile\u521B\u5EFA\u955C\u50CF(admin\u6307\u7684\u662F\u955C\u50CF\u7684\u540D\u5B57)</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -t admin .</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5E94\u8BE5\u4F1A\u63D0\u793ASuccessfully tagged admin:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BF4\u660E\u521B\u5EFA\u6210\u529F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>7\u3001\u67E5\u770B\u521A\u521A\u521B\u5EFA\u7684\u955C\u50CF(\u627E\u5230admin\u955C\u50CF\u7684IMAGE ID\u7684\u524D\u56DB\u4F4D)</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker images </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>8\u3001\u901A\u8FC7\u955C\u50CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u5E76\u8FD0\u884C\u5BB9\u5668</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 80:80 --name myreact ba04</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>9\u3001\u67E5\u770B\u5BB9\u5668</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u5217\u51FA\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5217\u51FA\u6240\u6709\u5BB9\u5668\uFF08\u5305\u62EC\u672A\u8FD0\u884C\u7684\u5BB9\u5668\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F00\u542F\u5BB9\u5668 (container id)</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start dsfsdfas</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop dfdssdf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>10\u3001\u901A\u8FC7\u6D4F\u89C8\u5668\u8FDB\u884C\u8BBF\u95EE\u5730\u5740\u5373\u53EF\uFF0C\u5B8C\u7F8E\u7ED3\u675F</p><ul><li><p>[ ] \u5B89\u88C5docker</p><ul><li><a href="https://www.cnblogs.com/lusaisai/p/13263808.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/lusaisai/p/13263808.html</a></li><li><a href="https://blog.csdn.net/achaodzyj/article/details/116074208" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/achaodzyj/article/details/116074208</a></li></ul></li><li><p>[ ] docker\u5E38\u7528\u547D\u4EE4</p><ul><li><a href="https://juejin.cn/post/7050304120082661407#heading-8" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7050304120082661407#heading-8</a></li></ul></li><li><p>[ ] docker nginx</p><ul><li><a href="https://juejin.cn/post/6992848354753380389" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6992848354753380389</a></li></ul></li><li><p>[ ] docker \u5BB9\u5668</p><ul><li><a href="https://www.runoob.com/docker/docker-container-usage.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/docker/docker-container-usage.html</a></li></ul></li></ul>`,25),o=[e];function c(r,t,i,A,C,d){return n(),a("div",null,o)}var u=s(l,[["render",c]]);export{D as __pageData,u as default};
