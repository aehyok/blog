import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{"theme":"vuepress","highlight":"tomorrow-night"},"headers":[],"relativePath":"javascript/2022-09-26-axios-utils.md","lastUpdated":1685064468000}'),p={name:"javascript/2022-09-26-axios-utils.md"},o=l(`<p>我报名参加金石计划1期挑战——瓜分10万奖池，这是我的第1篇文章，<a href="https://s.juejin.cn/ds/jooSN7t" title="https://s.juejin.cn/ds/jooSN7t" target="_blank" rel="noreferrer">点击查看活动详情</a>。</p><p>本文参加了由<a href="https://link.juejin.cn/?target=https%3A%2F%2Flxchuan12.gitee.io" title="https://link.juejin.cn/?target=https%3A%2F%2Flxchuan12.gitee.io" target="_blank" rel="noreferrer">公众号@若川视野</a> 发起的每周源码共读活动，<a href="https://juejin.cn/post/7079706017579139102" title="https://juejin.cn/post/7079706017579139102" target="_blank" rel="noreferrer">点击了解详情一起参与。</a></p><p>本文属于源码共读第19期 | axios 工具函数,<a href="https://juejin.cn/post/7083113675879350309" target="_blank" rel="noreferrer">点击了解本期详情一起参与</a>。</p><blockquote><p>大家好，我是 <code>那个曾经的少年回来了</code>。10年前我也曾经年轻过，如今已步入被淘汰的年龄，但如下幡然醒悟，所以活在当下，每天努力一点点，来看看2024年的时候自己会是什么样子吧，2024年的前端又会是什么样子，而2024年的中国乃至全球又会变成什么样子，如果你也有想法，那还不赶紧行动起来。期待是美好的，但是更重要的是要为美好而为之奋斗付诸于行动。</p></blockquote><h2 id="两个箭头函数的演绎" tabindex="-1">两个箭头函数的演绎 <a class="header-anchor" href="#两个箭头函数的演绎" aria-label="Permalink to &quot;两个箭头函数的演绎&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//这个在顶部单独拎出来的</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> kindOf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#A6ACCD;font-style:italic;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">thing</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">thing</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上面kindOf方法由两个连续的箭头函数完成的，扎眼一看，确实看不明白。那我先来一个最简单的箭头函数</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>相信有点JavaScript基础的朋友们应该都能看懂上面的代码，所以参考上面的小例子，来类比一下</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> kindOf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">cache</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 也就是把第一个箭头函数后面全部返回即可</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">thing</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">thing</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>进一步的拆解便是这样的,将第二个箭头函数进行返回即可。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> kindOf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">cache</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">thing</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">thing</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)(</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>首先提一下 Object.create(null) 就是生成一个空的对象 <code>{}</code>，创建完kindOf后先传入了一个空对象进行IIFE自执行闭包,cache 由字面意思便可以看出来缓存的意思，也就是传进来的空对象，在执行完闭包之后，cache就一直存在了不会释放掉，也就有了缓存的意思。</p><blockquote><p>如果你想进一步了解一下闭包，我之前有整理过一篇非常容易理解的文章：[<a href="https://juejin.cn/post/7120371754274553887" target="_blank" rel="noreferrer">https://juejin.cn/post/7120371754274553887</a>](<a href="https://juejin.cn/post/7120371754274553887" target="_blank" rel="noreferrer">https://juejin.cn/post/7120371754274553887</a>)</p></blockquote><p>这样再来看这个函数，就非常的清晰了，这里截取了<code>[object Array]</code> <code>Array</code>, 从第八位字符串开始到最后。 所有最后总结这个kindOf函数的作用便是，传入一个值，输出一个类型。接下来就简单说明一下上面用到的 <code>toString</code>方法。</p><h2 id="tostring方法的解析" tabindex="-1">toString方法的解析 <a class="header-anchor" href="#tostring方法的解析" aria-label="Permalink to &quot;toString方法的解析&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>JavaScript中所有数据类型，都是对象的一种类型。有一句话总结为：万物皆对象。</p><p>下面我们就来看看对象衍生出来的类型有哪些？就可以通过Object.prototype.toString，来判断数据类型</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//  &#39;[object Null]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object Undefined]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object Number]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#C792EA;">n</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object BigInt]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object String]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object Boolean]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object Symbol]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;[object Object]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;[object Array]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;[object Date]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Function</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;[object Function]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">t</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;[object Function]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(Math)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;[object Math]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;[object RegExp]&#39;</span></span></code></pre></div><p>通过我的console打印可以非常明确的看到类型标注，这也是上面 <code>kindOf</code> 为什么使用了slice(8, -1)</p><p>通过Object.prototype.toString可以清晰的返回当前调用者的对象类型。可以说是判断数据类型的天花板级别的方法了。</p><h2 id="判断数据类型方法整理" tabindex="-1">判断数据类型方法整理 <a class="header-anchor" href="#判断数据类型方法整理" aria-label="Permalink to &quot;判断数据类型方法整理&quot;">​</a></h2><p>再来看一下下面的调用示例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const kindOfTest = (type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type = type.toLowerCase();</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (thing) =&gt; kindOf(thing) === type</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这个函数相对来说就比较好理解，一个箭头函数里面开始执行，函数体第二行最终又返回一个箭头函数。 其实意思便是先传入一个类型，再通过返回的函数，传入某个参数，来判断参数的类型是否与type一致。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为RegExp类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isRegExp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RegExp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为日期类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为ArrayBuffer类型</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isArrayBuffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ArrayBuffer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为文件类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">File</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为Blob类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isBlob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Blob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为文件列表类型 FileList的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFileList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FileList</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为URLSearchParams类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isURLSearchParams </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">URLSearchParams</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否为HTMLFormElement类型的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isHTMLForm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kindOfTest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HTMLFormElement</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="数组相关方法" tabindex="-1">数组相关方法 <a class="header-anchor" href="#数组相关方法" aria-label="Permalink to &quot;数组相关方法&quot;">​</a></h2><p>// 判断是否为数组的方法</p><p>直接使用Array数组本身中的方法</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isArray</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h2><p>这是我之前整理的原型和原型链就是这么简单 <a href="https://juejin.cn/post/7126061672032108551/" target="_blank" rel="noreferrer">https://juejin.cn/post/7126061672032108551/</a></p><blockquote><p>我的个人博客：<a href="http://vue.tuokecat.com/blog" target="_blank" rel="noreferrer">http://vue.tuokecat.com/blog</a></p></blockquote><blockquote><p>我的个人github：<a href="https://github.com/aehyok" target="_blank" rel="noreferrer">https://github.com/aehyok</a></p></blockquote><blockquote><p>我的前端项目：pnpm + monorepo + qiankun + vue3 + vite3 + 工具库、组件库 + 工程化 + 自动化<br> 不断完善中,整体框架都有了 <br> 在线预览：<a href="http://vue.tuokecat.com" target="_blank" rel="noreferrer">http://vue.tuokecat.com</a> <br> github源码：<a href="https://github.com/aehyok/vue-qiankun" target="_blank" rel="noreferrer">https://github.com/aehyok/vue-qiankun</a></p></blockquote>`,36),t=[o];function e(c,r,y,F,D,A){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{i as __pageData,h as default};