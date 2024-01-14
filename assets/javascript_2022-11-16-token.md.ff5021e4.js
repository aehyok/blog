import{_ as s,o as a,c as n,b as e}from"./app.232525a4.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、前言","slug":"_1、前言","link":"#_1、前言","children":[]},{"level":2,"title":"后端","slug":"后端","link":"#后端","children":[]},{"level":2,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"javascript/2022-11-16-token.md","lastUpdated":1705237661000}'),l={name:"javascript/2022-11-16-token.md"},p=e(`<p><em><strong>本文正在参加<a href="https://juejin.cn/post/7162096952883019783" title="https://juejin.cn/post/7162096952883019783" target="_blank" rel="noreferrer">「金石计划 . 瓜分6万现金大奖」</a></strong></em></p><h2 id="_1、前言" tabindex="-1">1、前言 <a class="header-anchor" href="#_1、前言" aria-hidden="true">#</a></h2><p>Token 可以说是一个令牌，前端在访问服务端接口时，验证通过后服务端会为其签发一个令牌，之后，客户端就可以携带令牌访问服务器，服务端只需要验证令牌的有效性即可。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6699cdeb1a884ebabbe68ace26eef8b4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>我找了一个公司正在开发项目中的token进行解析查看。主要结构如上图所示。解密以后最重要的信息便是uid，或者说是用户在后端中的唯一的用户id，那么通过uid便可以查询到相关的身份认证信息。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2acb3aa1387c44f684fe2a77317461d3~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-hidden="true">#</a></h2><p>登录接口，通过用户名和密码，或者手机号验证码的方式通过验证</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">public async Task&lt;dynamic&gt; Login([FromServices] IAuthService authService, [FromBody] FormLoginRequest loginModel)</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">  return await authService.login(loginModel);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // authoService.login中的逻辑</span></span>
<span class="line"><span style="color:#babed8;">  // 判断是否匹配，匹配成功</span></span>
<span class="line"><span style="color:#babed8;">  // 将token写入redis,并设置超期时间</span></span>
<span class="line"><span style="color:#babed8;">  // 之前业务接口调用时，直接从redis中获取</span></span>
<span class="line"><span style="color:#babed8;">  // 如果有超期，返回给前端一个标识</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>后端服务首先会全局注册环绕AOP，每次前端有请求到达后端的时候都会对token先进行处理</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  AllowAnonymousAttribute allowAnonymousAttribute = descriptor.MethodInfo.GetCustomAttribute&lt;AllowAnonymousAttribute&gt;(false);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 判断可不验证token</span></span>
<span class="line"><span style="color:#babed8;">  if (allowAnonymousAttribute != null)</span></span>
<span class="line"><span style="color:#babed8;">  {</span></span>
<span class="line"><span style="color:#babed8;">      await next(); </span></span>
<span class="line"><span style="color:#babed8;">      return;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  //获取请求头中的Authorization</span></span>
<span class="line"><span style="color:#babed8;">  string token = context.HttpContext.Request.Headers[&quot;Authorization&quot;];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 相当于对前端传递的token进行转换</span></span>
<span class="line"><span style="color:#babed8;">  string tokenKey = &quot;sso.&quot; + Utils.MD5(token);</span></span>
<span class="line"><span style="color:#babed8;">  // redis获取，看看是否有效，直接取出返回</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  string loginUserJson = await RedisHelper.GetAsync(tokenKey);</span></span>
<span class="line"><span style="color:#babed8;">  if (!loginUserJson.IsNullOrWhiteSpace()) {</span></span>
<span class="line"><span style="color:#babed8;">    RedisSSOVerifyResult resultInfo = JsonSerializer.Deserialize&lt;RedisSSOVerifyResult&gt;(loginUserJson);</span></span>
<span class="line"><span style="color:#babed8;">    if(resultInfo.ExpiresAt &gt; DateTime.now()) {</span></span>
<span class="line"><span style="color:#babed8;">      loginUser = resultInfo.LoginUser;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    else {</span></span>
<span class="line"><span style="color:#babed8;">      RedisHelper.RemoveAsync(tokenKey); // 无效了 从redis中移除</span></span>
<span class="line"><span style="color:#babed8;">      throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  } else {</span></span>
<span class="line"><span style="color:#babed8;">    throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>大致的一个token认证过程是这样的，实际项目中相对来说还是比较复杂的，这是我从公司项目中扣取出来的。还有很多代码没有列出来，要不然会显得比较臃肿，而且主要逻辑不容易查看。</p><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-hidden="true">#</a></h2><p>通过登录页面，输入登录名和密码，或者手机号和验证码，获取到token,现将token存储到localStorage中，再通过token获取其他业务接口的数据。 通常可能首先通过token获取个人信息或者一些权限数据（这里只是提一下）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  const adminLogin = async () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      //   state.loading = true</span></span>
<span class="line"><span style="color:#babed8;">      const res = await loginByMobile({</span></span>
<span class="line"><span style="color:#babed8;">        mobile: state.loginForm.phone,</span></span>
<span class="line"><span style="color:#babed8;">        captchaValue: state.loginForm.verificationCode,</span></span>
<span class="line"><span style="color:#babed8;">      });</span></span>
<span class="line"><span style="color:#babed8;">      state.loading = false;</span></span>
<span class="line"><span style="color:#babed8;">      if (res?.code === 200) {</span></span>
<span class="line"><span style="color:#babed8;">        localStorage.setItem(</span></span>
<span class="line"><span style="color:#babed8;">          &quot;token&quot;,</span></span>
<span class="line"><span style="color:#babed8;">          JSON.stringify({</span></span>
<span class="line"><span style="color:#babed8;">            ...res.data,</span></span>
<span class="line"><span style="color:#babed8;">            account: state.loginForm.phone,</span></span>
<span class="line"><span style="color:#babed8;">          })</span></span>
<span class="line"><span style="color:#babed8;">        );</span></span>
<span class="line"><span style="color:#babed8;">        store.dispatch(&quot;fetchMenu&quot;);</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>我这里登录完，直接通过token来获取当前登录用户的个人信息以及后台勾选的菜单权限，后端分别通过两个接口进行的数据返回。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">    async fetchMenu({ commit }) {</span></span>
<span class="line"><span style="color:#babed8;">      try {</span></span>
<span class="line"><span style="color:#babed8;">        const information = await getMyInformation()</span></span>
<span class="line"><span style="color:#babed8;">        if (information?.code === 200) {</span></span>
<span class="line"><span style="color:#babed8;">          console.log(information, &#39;information&#39;)</span></span>
<span class="line"><span style="color:#babed8;">          commit(&quot;setMyInformation&quot; , information.data)</span></span>
<span class="line"><span style="color:#babed8;">          const res = await getMyMenu()</span></span>
<span class="line"><span style="color:#babed8;">          if(res?.code === 200) {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">            commit(&quot;changeMenuList&quot;,res.data)</span></span>
<span class="line"><span style="color:#babed8;">            window.location.href = &quot;/&quot;</span></span>
<span class="line"><span style="color:#babed8;">          }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        </span></span>
<span class="line"><span style="color:#babed8;">      } catch (error) {</span></span>
<span class="line"><span style="color:#babed8;">        </span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>这里是axios针对每次的请求添加请求头</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#babed8;">  (request) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    const token = localStorage.token</span></span>
<span class="line"><span style="color:#babed8;">      ? JSON.parse(localStorage.token)</span></span>
<span class="line"><span style="color:#babed8;">      : {};</span></span>
<span class="line"><span style="color:#babed8;">    request.headers = {</span></span>
<span class="line"><span style="color:#babed8;">      &quot;Authorization&quot;: token.authorization || &#39;&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded&quot;,</span></span>
<span class="line"><span style="color:#babed8;">      &quot;Content-Type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">    return request;</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  (error) =&gt; Promise.reject(error)</span></span>
<span class="line"><span style="color:#babed8;">);</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>这里是针对后端接口返回数据的判断处理，其中有一个-2的特殊判断，这里是跟后端返回一起约定的code</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#babed8;">  (response) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    // token</span></span>
<span class="line"><span style="color:#babed8;">    if (response.data.code === -2) {   </span></span>
<span class="line"><span style="color:#babed8;">      // token失效</span></span>
<span class="line"><span style="color:#babed8;">      ElMessage({</span></span>
<span class="line"><span style="color:#babed8;">        message: &quot;身份认证无效，请重新登录&quot;,</span></span>
<span class="line"><span style="color:#babed8;">        type: &quot;warning&quot;,</span></span>
<span class="line"><span style="color:#babed8;">      });</span></span>
<span class="line"><span style="color:#babed8;">      // localStorage.clear();</span></span>
<span class="line"><span style="color:#babed8;">      clear()</span></span>
<span class="line"><span style="color:#babed8;">      window.location.href = &quot;/&quot;;</span></span>
<span class="line"><span style="color:#babed8;">      return false;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    if (response.data.code !== 200) {</span></span>
<span class="line"><span style="color:#babed8;">      return Promise.reject(new Error(response.data.message));</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    /// ..... 其他的逻辑判断</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return response.data;</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>上面通过-2进行判断 ，然后清除掉缓存数据，那么在vue-router路由中会进行判断处理</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">router.beforeEach((to, _from, next) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  NProgress.start()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  if (to.path === &#39;/login&#39; || to.path === &#39;/init-password&#39; ||  to.path === &#39;/login-cellphone&#39;) {</span></span>
<span class="line"><span style="color:#babed8;">    next()</span></span>
<span class="line"><span style="color:#babed8;">    return false;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  if (!localStorage.getItem(&#39;token&#39;)) {</span></span>
<span class="line"><span style="color:#babed8;">    next(&#39;/login&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    return false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  if (to.name) {</span></span>
<span class="line"><span style="color:#babed8;">    next()</span></span>
<span class="line"><span style="color:#babed8;">    return false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  if (childrenPath.some((item) =&gt; to.path.includes(item))) {</span></span>
<span class="line"><span style="color:#babed8;">    next()</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;child&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  // 如果找不到路由跳转到404</span></span>
<span class="line"><span style="color:#babed8;">  next(&quot;/404&quot;)</span></span>
<span class="line"><span style="color:#babed8;">  return false</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>前端和后端大致的一个过程就在这里简单说完了，梳理完了以后，发现自己更清楚了，其实还有很多的问题要去处理，就当做是优化了。</p>`,25),o=[p];function t(c,i,r,b,d,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
