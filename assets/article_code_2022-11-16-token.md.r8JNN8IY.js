import{_ as s,c as a,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-11-16-token.md","filePath":"article/code/2022-11-16-token.md","lastUpdated":1752575946000}'),l={name:"article/code/2022-11-16-token.md"};function t(i,n,o,c,r,u){return p(),a("div",null,n[0]||(n[0]=[e(`<p><em><strong>本文正在参加<a href="https://juejin.cn/post/7162096952883019783" title="https://juejin.cn/post/7162096952883019783" target="_blank" rel="noreferrer">「金石计划 . 瓜分6万现金大奖」</a></strong></em></p><h2 id="_1、前言" tabindex="-1">1、前言 <a class="header-anchor" href="#_1、前言" aria-label="Permalink to &quot;1、前言&quot;">​</a></h2><p>Token 可以说是一个令牌，前端在访问服务端接口时，验证通过后服务端会为其签发一个令牌，之后，客户端就可以携带令牌访问服务器，服务端只需要验证令牌的有效性即可。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6699cdeb1a884ebabbe68ace26eef8b4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>我找了一个公司正在开发项目中的token进行解析查看。主要结构如上图所示。解密以后最重要的信息便是uid，或者说是用户在后端中的唯一的用户id，那么通过uid便可以查询到相关的身份认证信息。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2acb3aa1387c44f684fe2a77317461d3~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-label="Permalink to &quot;后端&quot;">​</a></h2><p>登录接口，通过用户名和密码，或者手机号验证码的方式通过验证</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public async Task&lt;dynamic&gt; Login([FromServices] IAuthService authService, [FromBody] FormLoginRequest loginModel)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  return await authService.login(loginModel);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // authoService.login中的逻辑</span></span>
<span class="line"><span>  // 判断是否匹配，匹配成功</span></span>
<span class="line"><span>  // 将token写入redis,并设置超期时间</span></span>
<span class="line"><span>  // 之前业务接口调用时，直接从redis中获取</span></span>
<span class="line"><span>  // 如果有超期，返回给前端一个标识</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>后端服务首先会全局注册环绕AOP，每次前端有请求到达后端的时候都会对token先进行处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  AllowAnonymousAttribute allowAnonymousAttribute = descriptor.MethodInfo.GetCustomAttribute&lt;AllowAnonymousAttribute&gt;(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 判断可不验证token</span></span>
<span class="line"><span>  if (allowAnonymousAttribute != null)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      await next(); </span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //获取请求头中的Authorization</span></span>
<span class="line"><span>  string token = context.HttpContext.Request.Headers[&quot;Authorization&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 相当于对前端传递的token进行转换</span></span>
<span class="line"><span>  string tokenKey = &quot;sso.&quot; + Utils.MD5(token);</span></span>
<span class="line"><span>  // redis获取，看看是否有效，直接取出返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  string loginUserJson = await RedisHelper.GetAsync(tokenKey);</span></span>
<span class="line"><span>  if (!loginUserJson.IsNullOrWhiteSpace()) {</span></span>
<span class="line"><span>    RedisSSOVerifyResult resultInfo = JsonSerializer.Deserialize&lt;RedisSSOVerifyResult&gt;(loginUserJson);</span></span>
<span class="line"><span>    if(resultInfo.ExpiresAt &gt; DateTime.now()) {</span></span>
<span class="line"><span>      loginUser = resultInfo.LoginUser;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>      RedisHelper.RemoveAsync(tokenKey); // 无效了 从redis中移除</span></span>
<span class="line"><span>      throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    throw new ValidException(&quot;Token认证过期，请重新登录&quot;, -2);  // 这里用-2跟前端做好约定</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>大致的一个token认证过程是这样的，实际项目中相对来说还是比较复杂的，这是我从公司项目中扣取出来的。还有很多代码没有列出来，要不然会显得比较臃肿，而且主要逻辑不容易查看。</p><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><p>通过登录页面，输入登录名和密码，或者手机号和验证码，获取到token,现将token存储到localStorage中，再通过token获取其他业务接口的数据。 通常可能首先通过token获取个人信息或者一些权限数据（这里只是提一下）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  const adminLogin = async () =&gt; {</span></span>
<span class="line"><span>      //   state.loading = true</span></span>
<span class="line"><span>      const res = await loginByMobile({</span></span>
<span class="line"><span>        mobile: state.loginForm.phone,</span></span>
<span class="line"><span>        captchaValue: state.loginForm.verificationCode,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      state.loading = false;</span></span>
<span class="line"><span>      if (res?.code === 200) {</span></span>
<span class="line"><span>        localStorage.setItem(</span></span>
<span class="line"><span>          &quot;token&quot;,</span></span>
<span class="line"><span>          JSON.stringify({</span></span>
<span class="line"><span>            ...res.data,</span></span>
<span class="line"><span>            account: state.loginForm.phone,</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        store.dispatch(&quot;fetchMenu&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    };</span></span></code></pre></div><p>我这里登录完，直接通过token来获取当前登录用户的个人信息以及后台勾选的菜单权限，后端分别通过两个接口进行的数据返回。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    async fetchMenu({ commit }) {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        const information = await getMyInformation()</span></span>
<span class="line"><span>        if (information?.code === 200) {</span></span>
<span class="line"><span>          console.log(information, &#39;information&#39;)</span></span>
<span class="line"><span>          commit(&quot;setMyInformation&quot; , information.data)</span></span>
<span class="line"><span>          const res = await getMyMenu()</span></span>
<span class="line"><span>          if(res?.code === 200) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            commit(&quot;changeMenuList&quot;,res.data)</span></span>
<span class="line"><span>            window.location.href = &quot;/&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      } catch (error) {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p>这里是axios针对每次的请求添加请求头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>instance.interceptors.request.use(</span></span>
<span class="line"><span>  (request) =&gt; {</span></span>
<span class="line"><span>    const token = localStorage.token</span></span>
<span class="line"><span>      ? JSON.parse(localStorage.token)</span></span>
<span class="line"><span>      : {};</span></span>
<span class="line"><span>    request.headers = {</span></span>
<span class="line"><span>      &quot;Authorization&quot;: token.authorization || &#39;&#39;,</span></span>
<span class="line"><span>      &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded&quot;,</span></span>
<span class="line"><span>      &quot;Content-Type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    return request;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; Promise.reject(error)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>这里是针对后端接口返回数据的判断处理，其中有一个-2的特殊判断，这里是跟后端返回一起约定的code</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>instance.interceptors.response.use(</span></span>
<span class="line"><span>  (response) =&gt; {</span></span>
<span class="line"><span>    // token</span></span>
<span class="line"><span>    if (response.data.code === -2) {   </span></span>
<span class="line"><span>      // token失效</span></span>
<span class="line"><span>      ElMessage({</span></span>
<span class="line"><span>        message: &quot;身份认证无效，请重新登录&quot;,</span></span>
<span class="line"><span>        type: &quot;warning&quot;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      // localStorage.clear();</span></span>
<span class="line"><span>      clear()</span></span>
<span class="line"><span>      window.location.href = &quot;/&quot;;</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (response.data.code !== 200) {</span></span>
<span class="line"><span>      return Promise.reject(new Error(response.data.message));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /// ..... 其他的逻辑判断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return response.data;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面通过-2进行判断 ，然后清除掉缓存数据，那么在vue-router路由中会进行判断处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>router.beforeEach((to, _from, next) =&gt; {</span></span>
<span class="line"><span>  NProgress.start()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (to.path === &#39;/login&#39; || to.path === &#39;/init-password&#39; ||  to.path === &#39;/login-cellphone&#39;) {</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (!localStorage.getItem(&#39;token&#39;)) {</span></span>
<span class="line"><span>    next(&#39;/login&#39;)</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (to.name) {</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (childrenPath.some((item) =&gt; to.path.includes(item))) {</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>    console.log(&#39;child&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 如果找不到路由跳转到404</span></span>
<span class="line"><span>  next(&quot;/404&quot;)</span></span>
<span class="line"><span>  return false</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>前端和后端大致的一个过程就在这里简单说完了，梳理完了以后，发现自己更清楚了，其实还有很多的问题要去处理，就当做是优化了。</p>`,25)]))}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
