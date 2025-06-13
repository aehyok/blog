import{_ as s,c as a,o as p,ag as e}from"./chunks/framework.DyQ3i0fn.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-09-01-javascript-ioc.md","filePath":"article/code/2022-09-01-javascript-ioc.md","lastUpdated":1749786424000}'),l={name:"article/code/2022-09-01-javascript-ioc.md"};function i(c,n,t,o,r,d){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="ioc和di-控制反转和依赖注入" tabindex="-1">IOC和DI 控制反转和依赖注入 <a class="header-anchor" href="#ioc和di-控制反转和依赖注入" aria-label="Permalink to &quot;IOC和DI 控制反转和依赖注入&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/jhli/p/6019895.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jhli/p/6019895.html</a></li></ul><h2 id="c-中三种方式" tabindex="-1">C#中三种方式 <a class="header-anchor" href="#c-中三种方式" aria-label="Permalink to &quot;C#中三种方式&quot;">​</a></h2><ul><li>构造函数注入 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li><li>属性注入 <a href="https://www.cnblogs.com/GuZhenYin/p/8301500.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8301500.html</a></li><li>方法注入</li></ul><h2 id="c-注入的声明周期" tabindex="-1">C# 注入的声明周期 <a class="header-anchor" href="#c-注入的声明周期" aria-label="Permalink to &quot;C# 注入的声明周期&quot;">​</a></h2><ul><li>唯一的</li><li>作用域</li><li>瞬时的 <a href="https://www.cnblogs.com/GuZhenYin/p/8297145.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/GuZhenYin/p/8297145.html</a></li></ul><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><p>我们天天用来敲代码的电脑，以及天天用来扫码的手机，打开后你可以发现，里面会有各种各样的零件， 我们天天使用的项目中，会不断的npm install xxxx来安装我们项目中所需要的依赖。 <a href="https://zhuanlan.zhihu.com/p/125024256" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/125024256</a></p><p>我就拿微信来举例，那么首先先定义一个微信出来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Weixin {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let xiaoming = new Weixin(&#39;小明&#39;)</span></span></code></pre></div><p>定义一个Weixin,并在下面实例了一个 <code>weixin</code>，执行后便会打印出 <code>我是小明的微信</code></p><p>小明这里给微信配置了两个功能，一个是给好友发消息的功能，另外一个是发朋友圈的功能</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 给好友发消息的功能</span></span>
<span class="line"><span>class Message {</span></span>
<span class="line"><span>  Send(content) {</span></span>
<span class="line"><span>    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//发布朋友圈的功能</span></span>
<span class="line"><span>class Friends {</span></span>
<span class="line"><span>  Send(content) {</span></span>
<span class="line"><span>    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新给weixin配置两个功能</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Weixin {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    this.Friends = new Friends();</span></span>
<span class="line"><span>    this.Message = new Message();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let xiaoming = new Weixin(&#39;小明&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span>xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div><p>这个时候可以发现两个功能给Weixin配置出来了，但是这样有一个问题，每添加一个功能，都必须要修改Weixin这个类。 那有没有办法我们加入功能的时候不用再修改Weixin这个类呢？我们来试试看。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Weixin {</span></span>
<span class="line"><span>  static functions = new Map()</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    for(let fun of Weixin.functions.values()) {</span></span>
<span class="line"><span>      fun.init(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  static inject(module) {</span></span>
<span class="line"><span>    Weixin.functions.set(module.constructor.name, module);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Message {</span></span>
<span class="line"><span>  init(weixin) {</span></span>
<span class="line"><span>    weixin.Message = this;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Send(content) {</span></span>
<span class="line"><span>    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Friends {</span></span>
<span class="line"><span>  init(weixin) {</span></span>
<span class="line"><span>    weixin.Friends = this;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Send(content) {</span></span>
<span class="line"><span>    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const message = new Message();</span></span>
<span class="line"><span>Weixin.inject(message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const friends = new Friends();</span></span>
<span class="line"><span>Weixin.inject(friends);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let xiaoming = new Weixin(&#39;小明&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span>xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div><p>通过属性注入进一步解耦</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Inject(modules: any) {</span></span>
<span class="line"><span>  return function(target: any) {</span></span>
<span class="line"><span>    modules.forEach((module: any) =&gt; {</span></span>
<span class="line"><span>      target.prototype[module.name] = new module()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Message {</span></span>
<span class="line"><span>  Send(content: string) {</span></span>
<span class="line"><span>    console.log(\`给小红发的消息：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Friends {</span></span>
<span class="line"><span>  Send(content: string) {</span></span>
<span class="line"><span>    console.log(\`发送朋友圈：\${content}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Inject([Message, Friends])</span></span>
<span class="line"><span>class Weixin {</span></span>
<span class="line"><span>  constructor(name: string) {</span></span>
<span class="line"><span>    console.log(\`我是\${name}的微信\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let xiaoming: any = new Weixin(&quot;小明&quot;)</span></span>
<span class="line"><span>xiaoming.Message.Send(&#39;我们一起出去玩吧？&#39;)</span></span>
<span class="line"><span>xiaoming.Friends.Send(&#39;和小红出去玩的九宫格图片&#39;)</span></span></code></pre></div>`,19)]))}const u=s(l,[["render",i]]);export{g as __pageData,u as default};
