import{_ as s,o as n,c as a,N as l}from"./chunks/framework.294d0221.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-11-16-token.md","lastUpdated":1681105986000}'),p={name:"javascript/2022-11-16-token.md"},e=l(`<p><em><strong>本文正在参加<a href="https://juejin.cn/post/7162096952883019783" title="https://juejin.cn/post/7162096952883019783" target="_blank" rel="noreferrer">「金石计划 . 瓜分6万现金大奖」</a></strong></em></p><h2 id="_1、前言" tabindex="-1">1、前言 <a class="header-anchor" href="#_1、前言" aria-label="Permalink to &quot;1、前言&quot;">​</a></h2><p>Token 可以说是一个令牌，前端在访问服务端接口时，验证通过后服务端会为其签发一个令牌，之后，客户端就可以携带令牌访问服务器，服务端只需要验证令牌的有效性即可。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6699cdeb1a884ebabbe68ace26eef8b4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>我找了一个公司正在开发项目中的token进行解析查看。主要结构如上图所示。解密以后最重要的信息便是uid，或者说是用户在后端中的唯一的用户id，那么通过uid便可以查询到相关的身份认证信息。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2acb3aa1387c44f684fe2a77317461d3~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-label="Permalink to &quot;后端&quot;">​</a></h2><p>登录接口，通过用户名和密码，或者手机号验证码的方式通过验证</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public async Task&lt;dynamic&gt; Login([FromServices] IAuthService authService, [FromBody] FormLoginRequest loginModel)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return await authService.login(loginModel);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // authoService.login中的逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断是否匹配，匹配成功</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 将token写入redis,并设置超期时间</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 之前业务接口调用时，直接从redis中获取</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 如果有超期，返回给前端一个标识</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>后端服务首先会全局注册环绕AOP，每次前端有请求到达后端的时候都会对token先进行处理</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">AllowAnonymousAttribute allowAnonymousAttribute = descriptor.MethodInfo.GetCustomAttribute&lt;AllowAnonymousAttribute&gt;(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断可不验证token</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (allowAnonymousAttribute != null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">      await next(); </span></span>
<span class="line"><span style="color:#A6ACCD;">      return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //获取请求头中的Authorization</span></span>
<span class="line"><span style="color:#A6ACCD;">  string token = context.HttpContext.Request.Headers[&quot;Authorization&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 相当于对前端传递的token进行转换</span></span>
<span class="line"><span style="color:#A6ACCD;">  string tokenKey = &quot;sso.&quot; + Utils.MD5(token);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // redis获取，看看是否有效，直接取出返回</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  string loginUserJson = await RedisHelper.GetAsync(tokenKey);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!loginUserJson.IsNullOrWhiteSpace()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    RedisSSOVerifyResult resultInfo = JsonSerializer.Deserialize&lt;RedisSSOVerifyResult&gt;(loginUserJson);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(resultInfo.ExpiresAt &gt; DateTime.now()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      loginUser = resultInfo.LoginUser;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      RedisHelper.RemoveAsync(tokenKey); // 无效了 从redis中移除</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span></code></pre></div><p>大致的一个token认证过程是这样的，实际项目中相对来说还是比较复杂的，这是我从公司项目中扣取出来的。还有很多代码没有列出来，要不然会显得比较臃肿，而且主要逻辑不容易查看。</p><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><p>通过登录页面，输入登录名和密码，或者手机号和验证码，获取到token,现将token存储到localStorage中，再通过token获取其他业务接口的数据。 通常可能首先通过token获取个人信息或者一些权限数据（这里只是提一下）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const adminLogin = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   state.loading = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      const res = await loginByMobile({</span></span>
<span class="line"><span style="color:#A6ACCD;">        mobile: state.loginForm.phone,</span></span>
<span class="line"><span style="color:#A6ACCD;">        captchaValue: state.loginForm.verificationCode,</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.loading = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (res?.code === 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        localStorage.setItem(</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;token&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          JSON.stringify({</span></span>
<span class="line"><span style="color:#A6ACCD;">            ...res.data,</span></span>
<span class="line"><span style="color:#A6ACCD;">            account: state.loginForm.phone,</span></span>
<span class="line"><span style="color:#A6ACCD;">          })</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">        store.dispatch(&quot;fetchMenu&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span></code></pre></div><p>我这里登录完，直接通过token来获取当前登录用户的个人信息以及后台勾选的菜单权限，后端分别通过两个接口进行的数据返回。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">async fetchMenu({ commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const information = await getMyInformation()</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (information?.code === 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(information, &#39;information&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          commit(&quot;setMyInformation&quot; , information.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">          const res = await getMyMenu()</span></span>
<span class="line"><span style="color:#A6ACCD;">          if(res?.code === 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            commit(&quot;changeMenuList&quot;,res.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.location.href = &quot;/&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      } catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span></code></pre></div><p>这里是axios针对每次的请求添加请求头</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  (request) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const token = localStorage.token</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? JSON.parse(localStorage.token)</span></span>
<span class="line"><span style="color:#A6ACCD;">      : {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    request.headers = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Authorization&quot;: token.authorization || &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Content-Type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    return request;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  (error) =&gt; Promise.reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>这里是针对后端接口返回数据的判断处理，其中有一个-2的特殊判断，这里是跟后端返回一起约定的code</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  (response) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // token</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response.data.code === -2) {   </span></span>
<span class="line"><span style="color:#A6ACCD;">      // token失效</span></span>
<span class="line"><span style="color:#A6ACCD;">      ElMessage({</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &quot;身份认证无效，请重新登录&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: &quot;warning&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      // localStorage.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">      clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.location.href = &quot;/&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response.data.code !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Promise.reject(new Error(response.data.message));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    /// ..... 其他的逻辑判断</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return response.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上面通过-2进行判断 ，然后清除掉缓存数据，那么在vue-router路由中会进行判断处理</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, _from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  NProgress.start()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (to.path === &#39;/login&#39; || to.path === &#39;/init-password&#39; ||  to.path === &#39;/login-cellphone&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!localStorage.getItem(&#39;token&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    next(&#39;/login&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (to.name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (childrenPath.some((item) =&gt; to.path.includes(item))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;child&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 如果找不到路由跳转到404</span></span>
<span class="line"><span style="color:#A6ACCD;">  next(&quot;/404&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return false</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>前端和后端大致的一个过程就在这里简单说完了，梳理完了以后，发现自己更清楚了，其实还有很多的问题要去处理，就当做是优化了。</p>`,25),o=[e];function t(c,i,r,A,C,y){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
