import{_ as s,o as n,c as a,a as l}from"./app.930700d9.js";const d=JSON.parse('{"title":"IOC\u548CDI \u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165","description":"","frontmatter":{},"headers":[{"level":2,"title":"IOC\u548CDI \u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165","slug":"ioc\u548Cdi-\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165"},{"level":2,"title":"C#\u4E2D\u4E09\u79CD\u65B9\u5F0F","slug":"c-\u4E2D\u4E09\u79CD\u65B9\u5F0F"},{"level":2,"title":"C# \u6CE8\u5165\u7684\u58F0\u660E\u5468\u671F","slug":"c-\u6CE8\u5165\u7684\u58F0\u660E\u5468\u671F"},{"level":2,"title":"\u4F9D\u8D56","slug":"\u4F9D\u8D56"}],"relativePath":"javascript/2022-09-01-javascript-ioc.md","lastUpdated":1662552126000}'),p={name:"javascript/2022-09-01-javascript-ioc.md"},e=l(`<h2 id="ioc\u548Cdi-\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">IOC\u548CDI \u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#ioc\u548Cdi-\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/jhli/p/6019895.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/jhli/p/6019895.html</a></li></ul><h2 id="c-\u4E2D\u4E09\u79CD\u65B9\u5F0F" tabindex="-1">C#\u4E2D\u4E09\u79CD\u65B9\u5F0F <a class="header-anchor" href="#c-\u4E2D\u4E09\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h2><ul><li>\u6784\u9020\u51FD\u6570\u6CE8\u5165 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li><li>\u5C5E\u6027\u6CE8\u5165 <a href="https://www.cnblogs.com/GuZhenYin/p/8301500.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/GuZhenYin/p/8301500.html</a></li><li>\u65B9\u6CD5\u6CE8\u5165</li></ul><h2 id="c-\u6CE8\u5165\u7684\u58F0\u660E\u5468\u671F" tabindex="-1">C# \u6CE8\u5165\u7684\u58F0\u660E\u5468\u671F <a class="header-anchor" href="#c-\u6CE8\u5165\u7684\u58F0\u660E\u5468\u671F" aria-hidden="true">#</a></h2><ul><li>\u552F\u4E00\u7684</li><li>\u4F5C\u7528\u57DF</li><li>\u77AC\u65F6\u7684 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li></ul><h2 id="\u4F9D\u8D56" tabindex="-1">\u4F9D\u8D56 <a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5929\u5929\u7528\u6765\u6572\u4EE3\u7801\u7684\u7535\u8111\uFF0C\u4EE5\u53CA\u5929\u5929\u7528\u6765\u626B\u7801\u7684\u624B\u673A\uFF0C\u6253\u5F00\u540E\u4F60\u53EF\u4EE5\u53D1\u73B0\uFF0C\u91CC\u9762\u4F1A\u6709\u5404\u79CD\u5404\u6837\u7684\u96F6\u4EF6\uFF0C \u6211\u4EEC\u5929\u5929\u4F7F\u7528\u7684\u9879\u76EE\u4E2D\uFF0C\u4F1A\u4E0D\u65AD\u7684npm install xxxx\u6765\u5B89\u88C5\u6211\u4EEC\u9879\u76EE\u4E2D\u6240\u9700\u8981\u7684\u4F9D\u8D56\u3002 <a href="https://zhuanlan.zhihu.com/p/125024256" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/125024256</a></p><p>\u6211\u5C31\u62FF\u5FAE\u4FE1\u6765\u4E3E\u4F8B\uFF0C\u90A3\u4E48\u9996\u5148\u5148\u5B9A\u4E49\u4E00\u4E2A\u5FAE\u4FE1\u51FA\u6765</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u6211\u662F\${name}\u7684\u5FAE\u4FE1\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;\u5C0F\u660E&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B9A\u4E49\u4E00\u4E2AWeixin,\u5E76\u5728\u4E0B\u9762\u5B9E\u4F8B\u4E86\u4E00\u4E2A <code>weixin</code>\uFF0C\u6267\u884C\u540E\u4FBF\u4F1A\u6253\u5370\u51FA <code>\u6211\u662F\u5C0F\u660E\u7684\u5FAE\u4FE1</code></p><p>\u5C0F\u660E\u8FD9\u91CC\u7ED9\u5FAE\u4FE1\u914D\u7F6E\u4E86\u4E24\u4E2A\u529F\u80FD\uFF0C\u4E00\u4E2A\u662F\u7ED9\u597D\u53CB\u53D1\u6D88\u606F\u7684\u529F\u80FD\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F\u53D1\u670B\u53CB\u5708\u7684\u529F\u80FD</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u7ED9\u597D\u53CB\u53D1\u6D88\u606F\u7684\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u7ED9\u5C0F\u7EA2\u53D1\u7684\u6D88\u606F\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53D1\u5E03\u670B\u53CB\u5708\u7684\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u53D1\u9001\u670B\u53CB\u5708\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u91CD\u65B0\u7ED9weixin\u914D\u7F6E\u4E24\u4E2A\u529F\u80FD</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.Friends = new Friends();</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.Message = new Message();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u6211\u662F\${name}\u7684\u5FAE\u4FE1\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;\u5C0F\u660E&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;\u6211\u4EEC\u4E00\u8D77\u51FA\u53BB\u73A9\u5427\uFF1F&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;\u548C\u5C0F\u7EA2\u51FA\u53BB\u73A9\u7684\u4E5D\u5BAB\u683C\u56FE\u7247&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u53D1\u73B0\u4E24\u4E2A\u529F\u80FD\u7ED9Weixin\u914D\u7F6E\u51FA\u6765\u4E86\uFF0C\u4F46\u662F\u8FD9\u6837\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u6BCF\u6DFB\u52A0\u4E00\u4E2A\u529F\u80FD\uFF0C\u90FD\u5FC5\u987B\u8981\u4FEE\u6539Weixin\u8FD9\u4E2A\u7C7B\u3002 \u90A3\u6709\u6CA1\u6709\u529E\u6CD5\u6211\u4EEC\u52A0\u5165\u529F\u80FD\u7684\u65F6\u5019\u4E0D\u7528\u518D\u4FEE\u6539Weixin\u8FD9\u4E2A\u7C7B\u5462\uFF1F\u6211\u4EEC\u6765\u8BD5\u8BD5\u770B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static functions = new Map()</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let fun of Weixin.functions.values()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fun.init(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u6211\u662F\${name}\u7684\u5FAE\u4FE1\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static inject(module) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Weixin.functions.set(module.constructor.name, module);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">  init(weixin) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    weixin.Message = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u7ED9\u5C0F\u7EA2\u53D1\u7684\u6D88\u606F\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  init(weixin) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    weixin.Friends = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u53D1\u9001\u670B\u53CB\u5708\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const message = new Message();</span></span>
<span class="line"><span style="color:#A6ACCD;">Weixin.inject(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const friends = new Friends();</span></span>
<span class="line"><span style="color:#A6ACCD;">Weixin.inject(friends);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;\u5C0F\u660E&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;\u6211\u4EEC\u4E00\u8D77\u51FA\u53BB\u73A9\u5427\uFF1F&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;\u548C\u5C0F\u7EA2\u51FA\u53BB\u73A9\u7684\u4E5D\u5BAB\u683C\u56FE\u7247&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7\u5C5E\u6027\u6CE8\u5165\u8FDB\u4E00\u6B65\u89E3\u8026</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Inject(modules: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function(target: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    modules.forEach((module: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      target.prototype[module.name] = new module()</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u7ED9\u5C0F\u7EA2\u53D1\u7684\u6D88\u606F\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u53D1\u9001\u670B\u53CB\u5708\uFF1A\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Inject([Message, Friends])</span></span>
<span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`\u6211\u662F\${name}\u7684\u5FAE\u4FE1\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming: any = new Weixin(&quot;\u5C0F\u660E&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;\u6211\u4EEC\u4E00\u8D77\u51FA\u53BB\u73A9\u5427\uFF1F&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;\u548C\u5C0F\u7EA2\u51FA\u53BB\u73A9\u7684\u4E5D\u5BAB\u683C\u56FE\u7247&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[e];function c(i,t,r,C,A,y){return n(),a("div",null,o)}var h=s(p,[["render",c]]);export{d as __pageData,h as default};
