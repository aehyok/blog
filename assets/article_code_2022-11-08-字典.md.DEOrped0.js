import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-11-08-字典.md","filePath":"article/code/2022-11-08-字典.md","lastUpdated":1752978426000}'),l={name:"article/code/2022-11-08-字典.md"};function t(i,s,c,r,o,d){return p(),n("div",null,s[0]||(s[0]=[e(`<p>关于字典项目在前端的简单应用</p><h2 id="_1、前言" tabindex="-1">1、前言 <a class="header-anchor" href="#_1、前言" aria-label="Permalink to &quot;1、前言&quot;">​</a></h2><p>上一篇文章算的话是9月20日发的，到今天11月10日，大致有50天没有发文了。这段时间当然也在学习，一方面解决自己的问题，另外一方面公司刚好也比较忙，到现在应该说是又可以回归正常了。那么还说什么呢？开始卷文章学习吧。</p><hr><p>最近接触了一点公司的后端代码，刚好自己有非常多的疑问，带着这些疑问，我就来看看公司后端的代码是如何实现的。由于工作中表单的录入工作相对频繁，而且有非常多的下拉选项，所以就先来看看字典项目的获取。</p><p>不看不知道，一看吓一跳，后端们用了史上最简单粗暴的方式进行处理的。也就是每个下拉都会调用mysql</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94acfd594f7349f294b40aa4a796914b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const  GetDictionaryData = (typeCode) =&gt; {</span></span>
<span class="line"><span>  // 通过sql返回列表数据</span></span>
<span class="line"><span>  select code, name from  dictionary where typeCode = typeCode</span></span>
<span class="line"><span>  // result = 返回列表</span></span>
<span class="line"><span>  return result</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后前端怎么做呢？在用到字典的地方调用接口就完事了。对于一般的系统，用户量比较少，或者并发性能要求没那么高，慢点就慢点也就无所谓了。</p><p>这其中其实存在蛮多的问题？来看看我是怎么处理的呢？不能说我处理的好吧，只能说在现有基础上做了一些改进，有效的提升了一部分性能和方便性。</p><h2 id="_2、前后端的第一波调整" tabindex="-1">2、前后端的第一波调整 <a class="header-anchor" href="#_2、前后端的第一波调整" aria-label="Permalink to &quot;2、前后端的第一波调整&quot;">​</a></h2><h4 id="_2-1、后端" tabindex="-1">2.1、后端 <a class="header-anchor" href="#_2-1、后端" aria-label="Permalink to &quot;2.1、后端&quot;">​</a></h4><p>这里其实我是将后端的字典项，存到了redis中，先简单看一下模拟方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const GetDictionaryData = (typeCode) =&gt; {</span></span>
<span class="line"><span>   // 先判断redis中是否缓存</span></span>
<span class="line"><span>   if(redis.get(typeCode)) {</span></span>
<span class="line"><span>      return redis.get(typeCode)</span></span>
<span class="line"><span>   } else {</span></span>
<span class="line"><span>      // 先从数据库中获取</span></span>
<span class="line"><span>      var list = mysql查询返回结果</span></span>
<span class="line"><span>      redis.set(typeCode, list);</span></span>
<span class="line"><span>      return list;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在后端简单将字典项目缓存到redis,这样有效的缓解了数据库的访问压力。不用每次都来调用数据库。</p><h4 id="_2-2、前端" tabindex="-1">2.2、前端 <a class="header-anchor" href="#_2-2、前端" aria-label="Permalink to &quot;2.2、前端&quot;">​</a></h4><p>前端的考虑跟后端有点类似，那就是缓存一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const GetDictionaryData = async (typeCode) =&gt; {</span></span>
<span class="line"><span>    // 比如这里先来判断localStorage或者sessionStorage等等中是否缓存</span></span>
<span class="line"><span>    if(localStorage.getItem(typeCode)) {</span></span>
<span class="line"><span>       return JSON.parse(localStorage.getItem(typeCode))</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        const result = await getApi({typeCode})</span></span>
<span class="line"><span>        if(result.code === 200){</span></span>
<span class="line"><span>            localStorage.setItem(typeCode, JSON.stringify(result.data))</span></span>
<span class="line"><span>            return result.data</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>也就是在调用接口前，先判断浏览器缓存中是否存储了字典的数据项，如果有那么直接使用本地的，不用调用后端接口了，如果缓存不存在，则通过接口调用，并写入到本地缓存中。</p><h2 id="_3、前后端第二波更新" tabindex="-1">3、前后端第二波更新 <a class="header-anchor" href="#_3、前后端第二波更新" aria-label="Permalink to &quot;3、前后端第二波更新&quot;">​</a></h2><p>在第一波更新中存在一个小问题，如果后端数据更新了,后端的缓存数据也更新了，而我们前端还是拿的我们浏览器缓存的，那么数据就出现了非一致性的问题了。那现在我就来进行简单的调整。</p><h4 id="_3-1、后端" tabindex="-1">3.1、后端 <a class="header-anchor" href="#_3-1、后端" aria-label="Permalink to &quot;3.1、后端&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const GetDictionaryData = (typeCode,timeStamp) =&gt; {</span></span>
<span class="line"><span>   // 先判断redis中是否缓存</span></span>
<span class="line"><span>   if(redis.get(typeCode)) {</span></span>
<span class="line"><span>      var result = redis.get(typeCode)</span></span>
<span class="line"><span>      if(result.timeStamp != timeStamp) {</span></span>
<span class="line"><span>         return redis.get(typeCode)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>          return {</span></span>
<span class="line"><span>              timeStamp</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>   } else {</span></span>
<span class="line"><span>      // 先从数据库中获取</span></span>
<span class="line"><span>      var list = mysql查询返回结果</span></span>
<span class="line"><span>      var result = {</span></span>
<span class="line"><span>          list: list,</span></span>
<span class="line"><span>          timeStamp: 时间戳</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      redis.set(typeCode, result);</span></span>
<span class="line"><span>      return result;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>再来看一下前端代码的修改</p><h4 id="_3-2、前端" tabindex="-1">3.2、前端 <a class="header-anchor" href="#_3-2、前端" aria-label="Permalink to &quot;3.2、前端&quot;">​</a></h4><p>先说一下思路，因为害怕后端数据会更新，所以每次都进行调用接口来获取字典项目，但是多了一个参数，timeStamp,第一次的时候可以不传递。获取到接口返回的数据后还是要进行浏览器缓存存储。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const GetDictionaryData = async (typeCode) =&gt; {</span></span>
<span class="line"><span>    // 比如这里先来判断localStorage或者sessionStorage等等中是否缓存</span></span>
<span class="line"><span>    if(localStorage.getItem(typeCode)) {</span></span>
<span class="line"><span>        let cache = JSON.parse(localStorage.getItem(typeCode))</span></span>
<span class="line"><span>        const result = await getApi({</span></span>
<span class="line"><span>            typeCode: typeCode,</span></span>
<span class="line"><span>            timeStamp: cache.timeStamp</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        if(result.code === 200 ) {</span></span>
<span class="line"><span>            // 如果本地时间戳与接口返回的时间戳一致</span></span>
<span class="line"><span>            // 则后端只返回时间戳，字典列表项就不返回了</span></span>
<span class="line"><span>            // 直接使用前端缓存的字典项</span></span>
<span class="line"><span>            if(result.data.timeStamp === cache.timeStamp){</span></span>
<span class="line"><span>                return cache.list</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // 如果时间戳不一致，则代表后端接口数据返回可能发生变更了</span></span>
<span class="line"><span>                // 先更新缓存</span></span>
<span class="line"><span>                localStorage.setItem(typeCode, JSON.stringify(result.data))</span></span>
<span class="line"><span>                return result.data.list</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 则代表缓存没有数据</span></span>
<span class="line"><span>        const result = await getApi({typeCode})</span></span>
<span class="line"><span>        if(result.code === 200 ) { {</span></span>
<span class="line"><span>            localStorage.setItem(typeCode, JSON.stringify(result.data))</span></span>
<span class="line"><span>            return result.data.list</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过时间戳字段进行对比，时间戳相同，则代码钱后端数据一致，后端可以不传递list字典项目，只传递时间戳，方便与前端比对。前端传递的时间戳如果与后端的不一致，那后端就需要将字典项目list 和时间戳一起返回，前端需要更新浏览器缓存。</p><p>这里虽然每次都请求了服务器，但当字典第一次从数据库获取被缓存之后，就相当于只返回时间戳字段，而且对于获取的数据是读取的是redis缓存中的，对mysql数据库服务器的压力将大大减少。当然redis的作用也绝不仅仅就是缓存，还有很多其他更牛逼的功能。</p><h2 id="_4、可能还有第三波" tabindex="-1">4、可能还有第三波 <a class="header-anchor" href="#_4、可能还有第三波" aria-label="Permalink to &quot;4、可能还有第三波&quot;">​</a></h2><p>如果系统够大，做的更精细化一些。是不是针对字典项目会有专门的地方进行维护，维护到mysql数据库的时候，同时会同步到redis缓存中，这样后端的缓存将会使用的更加到位吧？也只是我的猜测，实际的话要根据具体的业务需求来吧</p><h2 id="_5、总结" tabindex="-1">5、总结 <a class="header-anchor" href="#_5、总结" aria-label="Permalink to &quot;5、总结&quot;">​</a></h2><p>最近在公司折腾了一点后端，初步想法是最近半年允许的话，在公司项目的基础上多搞一下后端，全身心投入两年前端，自己感触也颇多，等年底有空的时候也来唠一唠。</p><ul><li><p>搞一搞mysql数据库性能方面的优化</p></li><li><p>搞一搞redis在后端中的角色成分</p></li><li><p>搞一搞比如rabbitMQ 消息队列</p></li><li><p>搞一搞微服务相关的搭建构件</p></li><li><p>当然还有其他的，比如Grpc、DDD、IOC、AOP、Docker、K8S、Cron、JWT、 等等吧，加油趁着现在还有折腾的欲望再卷一卷。</p></li></ul><p>当然我搞的是比较偏门的语言：.net core，有兴趣的或者正在路上的咱们可以一起多交流。</p><p>搞前端两年多一点点了，最近有机会看看公司后端的代码，于是来看看自己平常觉得疑虑比较多的地方，今天索性就先来看看关于字典的前后端思考。</p>`,36)]))}const m=a(l,[["render",t]]);export{u as __pageData,m as default};
