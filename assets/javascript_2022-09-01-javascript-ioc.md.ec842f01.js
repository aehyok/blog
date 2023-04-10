import{_ as s,o as n,c as a,N as l}from"./chunks/framework.294d0221.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-09-01-javascript-ioc.md","lastUpdated":1681105986000}'),p={name:"javascript/2022-09-01-javascript-ioc.md"},e=l(`<h2 id="ioc和di-控制反转和依赖注入" tabindex="-1">IOC和DI 控制反转和依赖注入 <a class="header-anchor" href="#ioc和di-控制反转和依赖注入" aria-label="Permalink to &quot;IOC和DI 控制反转和依赖注入&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/jhli/p/6019895.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jhli/p/6019895.html</a></li></ul><h2 id="c-中三种方式" tabindex="-1">C#中三种方式 <a class="header-anchor" href="#c-中三种方式" aria-label="Permalink to &quot;C#中三种方式&quot;">​</a></h2><ul><li>构造函数注入 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li><li>属性注入 <a href="https://www.cnblogs.com/GuZhenYin/p/8301500.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8301500.html</a></li><li>方法注入</li></ul><h2 id="c-注入的声明周期" tabindex="-1">C# 注入的声明周期 <a class="header-anchor" href="#c-注入的声明周期" aria-label="Permalink to &quot;C# 注入的声明周期&quot;">​</a></h2><ul><li>唯一的</li><li>作用域</li><li>瞬时的 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li></ul><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><p>我们天天用来敲代码的电脑，以及天天用来扫码的手机，打开后你可以发现，里面会有各种各样的零件， 我们天天使用的项目中，会不断的npm install xxxx来安装我们项目中所需要的依赖。 <a href="https://zhuanlan.zhihu.com/p/125024256" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/125024256</a></p><p>我就拿微信来举例，那么首先先定义一个微信出来</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;小明&#39;)</span></span></code></pre></div><p>定义一个Weixin,并在下面实例了一个 <code>weixin</code>，执行后便会打印出 <code>我是小明的微信</code></p><p>小明这里给微信配置了两个功能，一个是给好友发消息的功能，另外一个是发朋友圈的功能</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 给好友发消息的功能</span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//发布朋友圈的功能</span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>重新给weixin配置两个功能</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.Friends = new Friends();</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.Message = new Message();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;小明&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div><p>这个时候可以发现两个功能给Weixin配置出来了，但是这样有一个问题，每添加一个功能，都必须要修改Weixin这个类。 那有没有办法我们加入功能的时候不用再修改Weixin这个类呢？我们来试试看。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static functions = new Map()</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let fun of Weixin.functions.values()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fun.init(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`我是\${name}的微信\`)</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  init(weixin) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    weixin.Friends = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const message = new Message();</span></span>
<span class="line"><span style="color:#A6ACCD;">Weixin.inject(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const friends = new Friends();</span></span>
<span class="line"><span style="color:#A6ACCD;">Weixin.inject(friends);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming = new Weixin(&#39;小明&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div><p>通过属性注入进一步解耦</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Inject(modules: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function(target: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    modules.forEach((module: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      target.prototype[module.name] = new module()</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Friends {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Send(content: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Inject([Message, Friends])</span></span>
<span class="line"><span style="color:#A6ACCD;">class Weixin {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let xiaoming: any = new Weixin(&quot;小明&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div>`,19),o=[e];function c(t,i,r,C,A,y){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
