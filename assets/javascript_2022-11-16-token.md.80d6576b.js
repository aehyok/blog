import{_ as s,o as n,c as a,a as l}from"./app.4e2aadac.js";const u=JSON.parse('{"title":"1\u3001\u524D\u8A00","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u524D\u8A00","slug":"_1\u3001\u524D\u8A00"},{"level":2,"title":"\u540E\u7AEF","slug":"\u540E\u7AEF"},{"level":2,"title":"\u524D\u7AEF","slug":"\u524D\u7AEF"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"javascript/2022-11-16-token.md","lastUpdated":1672712388000}'),p={name:"javascript/2022-11-16-token.md"},e=l(`<p><em><strong>\u672C\u6587\u6B63\u5728\u53C2\u52A0<a href="https://juejin.cn/post/7162096952883019783" title="https://juejin.cn/post/7162096952883019783" target="_blank" rel="noopener noreferrer">\u300C\u91D1\u77F3\u8BA1\u5212 . \u74DC\u52066\u4E07\u73B0\u91D1\u5927\u5956\u300D</a></strong></em></p><h2 id="_1\u3001\u524D\u8A00" tabindex="-1">1\u3001\u524D\u8A00 <a class="header-anchor" href="#_1\u3001\u524D\u8A00" aria-hidden="true">#</a></h2><p>Token \u53EF\u4EE5\u8BF4\u662F\u4E00\u4E2A\u4EE4\u724C\uFF0C\u524D\u7AEF\u5728\u8BBF\u95EE\u670D\u52A1\u7AEF\u63A5\u53E3\u65F6\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u670D\u52A1\u7AEF\u4F1A\u4E3A\u5176\u7B7E\u53D1\u4E00\u4E2A\u4EE4\u724C\uFF0C\u4E4B\u540E\uFF0C\u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u643A\u5E26\u4EE4\u724C\u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u7AEF\u53EA\u9700\u8981\u9A8C\u8BC1\u4EE4\u724C\u7684\u6709\u6548\u6027\u5373\u53EF\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6699cdeb1a884ebabbe68ace26eef8b4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u6211\u627E\u4E86\u4E00\u4E2A\u516C\u53F8\u6B63\u5728\u5F00\u53D1\u9879\u76EE\u4E2D\u7684token\u8FDB\u884C\u89E3\u6790\u67E5\u770B\u3002\u4E3B\u8981\u7ED3\u6784\u5982\u4E0A\u56FE\u6240\u793A\u3002\u89E3\u5BC6\u4EE5\u540E\u6700\u91CD\u8981\u7684\u4FE1\u606F\u4FBF\u662Fuid\uFF0C\u6216\u8005\u8BF4\u662F\u7528\u6237\u5728\u540E\u7AEF\u4E2D\u7684\u552F\u4E00\u7684\u7528\u6237id\uFF0C\u90A3\u4E48\u901A\u8FC7uid\u4FBF\u53EF\u4EE5\u67E5\u8BE2\u5230\u76F8\u5173\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2acb3aa1387c44f684fe2a77317461d3~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="\u540E\u7AEF" tabindex="-1">\u540E\u7AEF <a class="header-anchor" href="#\u540E\u7AEF" aria-hidden="true">#</a></h2><p>\u767B\u5F55\u63A5\u53E3\uFF0C\u901A\u8FC7\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u6216\u8005\u624B\u673A\u53F7\u9A8C\u8BC1\u7801\u7684\u65B9\u5F0F\u901A\u8FC7\u9A8C\u8BC1</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public async Task&lt;dynamic&gt; Login([FromServices] IAuthService authService, [FromBody] FormLoginRequest loginModel)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return await authService.login(loginModel);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // authoService.login\u4E2D\u7684\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u662F\u5426\u5339\u914D\uFF0C\u5339\u914D\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5C06token\u5199\u5165redis,\u5E76\u8BBE\u7F6E\u8D85\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E4B\u524D\u4E1A\u52A1\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u76F4\u63A5\u4ECEredis\u4E2D\u83B7\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u6709\u8D85\u671F\uFF0C\u8FD4\u56DE\u7ED9\u524D\u7AEF\u4E00\u4E2A\u6807\u8BC6</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u540E\u7AEF\u670D\u52A1\u9996\u5148\u4F1A\u5168\u5C40\u6CE8\u518C\u73AF\u7ED5AOP\uFF0C\u6BCF\u6B21\u524D\u7AEF\u6709\u8BF7\u6C42\u5230\u8FBE\u540E\u7AEF\u7684\u65F6\u5019\u90FD\u4F1A\u5BF9token\u5148\u8FDB\u884C\u5904\u7406</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  AllowAnonymousAttribute allowAnonymousAttribute = descriptor.MethodInfo.GetCustomAttribute&lt;AllowAnonymousAttribute&gt;(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u53EF\u4E0D\u9A8C\u8BC1token</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (allowAnonymousAttribute != null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">      await next(); </span></span>
<span class="line"><span style="color:#A6ACCD;">      return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u83B7\u53D6\u8BF7\u6C42\u5934\u4E2D\u7684Authorization</span></span>
<span class="line"><span style="color:#A6ACCD;">  string token = context.HttpContext.Request.Headers[&quot;Authorization&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u76F8\u5F53\u4E8E\u5BF9\u524D\u7AEF\u4F20\u9012\u7684token\u8FDB\u884C\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">  string tokenKey = &quot;sso.&quot; + Utils.MD5(token);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // redis\u83B7\u53D6\uFF0C\u770B\u770B\u662F\u5426\u6709\u6548\uFF0C\u76F4\u63A5\u53D6\u51FA\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  string loginUserJson = await RedisHelper.GetAsync(tokenKey);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!loginUserJson.IsNullOrWhiteSpace()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    RedisSSOVerifyResult resultInfo = JsonSerializer.Deserialize&lt;RedisSSOVerifyResult&gt;(loginUserJson);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(resultInfo.ExpiresAt &gt; DateTime.now()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      loginUser = resultInfo.LoginUser;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      RedisHelper.RemoveAsync(tokenKey); // \u65E0\u6548\u4E86 \u4ECEredis\u4E2D\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new ValidException(&quot;Token\u8BA4\u8BC1\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;, -2);  // \u8FD9\u91CC\u7528-2\u8DDF\u524D\u7AEF\u505A\u597D\u7EA6\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new ValidException(&quot;Token\u8BA4\u8BC1\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;, -2);  // \u8FD9\u91CC\u7528-2\u8DDF\u524D\u7AEF\u505A\u597D\u7EA6\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5927\u81F4\u7684\u4E00\u4E2Atoken\u8BA4\u8BC1\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF0C\u5B9E\u9645\u9879\u76EE\u4E2D\u76F8\u5BF9\u6765\u8BF4\u8FD8\u662F\u6BD4\u8F83\u590D\u6742\u7684\uFF0C\u8FD9\u662F\u6211\u4ECE\u516C\u53F8\u9879\u76EE\u4E2D\u6263\u53D6\u51FA\u6765\u7684\u3002\u8FD8\u6709\u5F88\u591A\u4EE3\u7801\u6CA1\u6709\u5217\u51FA\u6765\uFF0C\u8981\u4E0D\u7136\u4F1A\u663E\u5F97\u6BD4\u8F83\u81C3\u80BF\uFF0C\u800C\u4E14\u4E3B\u8981\u903B\u8F91\u4E0D\u5BB9\u6613\u67E5\u770B\u3002</p><h2 id="\u524D\u7AEF" tabindex="-1">\u524D\u7AEF <a class="header-anchor" href="#\u524D\u7AEF" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u767B\u5F55\u9875\u9762\uFF0C\u8F93\u5165\u767B\u5F55\u540D\u548C\u5BC6\u7801\uFF0C\u6216\u8005\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801\uFF0C\u83B7\u53D6\u5230token,\u73B0\u5C06token\u5B58\u50A8\u5230localStorage\u4E2D\uFF0C\u518D\u901A\u8FC7token\u83B7\u53D6\u5176\u4ED6\u4E1A\u52A1\u63A5\u53E3\u7684\u6570\u636E\u3002 \u901A\u5E38\u53EF\u80FD\u9996\u5148\u901A\u8FC7token\u83B7\u53D6\u4E2A\u4EBA\u4FE1\u606F\u6216\u8005\u4E00\u4E9B\u6743\u9650\u6570\u636E\uFF08\u8FD9\u91CC\u53EA\u662F\u63D0\u4E00\u4E0B\uFF09\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  const adminLogin = async () =&gt; {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u8FD9\u91CC\u767B\u5F55\u5B8C\uFF0C\u76F4\u63A5\u901A\u8FC7token\u6765\u83B7\u53D6\u5F53\u524D\u767B\u5F55\u7528\u6237\u7684\u4E2A\u4EBA\u4FE1\u606F\u4EE5\u53CA\u540E\u53F0\u52FE\u9009\u7684\u83DC\u5355\u6743\u9650\uFF0C\u540E\u7AEF\u5206\u522B\u901A\u8FC7\u4E24\u4E2A\u63A5\u53E3\u8FDB\u884C\u7684\u6570\u636E\u8FD4\u56DE\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    async fetchMenu({ commit }) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u662Faxios\u9488\u5BF9\u6BCF\u6B21\u7684\u8BF7\u6C42\u6DFB\u52A0\u8BF7\u6C42\u5934</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">instance.interceptors.request.use(</span></span>
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
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u662F\u9488\u5BF9\u540E\u7AEF\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u7684\u5224\u65AD\u5904\u7406\uFF0C\u5176\u4E2D\u6709\u4E00\u4E2A-2\u7684\u7279\u6B8A\u5224\u65AD\uFF0C\u8FD9\u91CC\u662F\u8DDF\u540E\u7AEF\u8FD4\u56DE\u4E00\u8D77\u7EA6\u5B9A\u7684code</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">  (response) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // token</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (response.data.code === -2) {   </span></span>
<span class="line"><span style="color:#A6ACCD;">      // token\u5931\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">      ElMessage({</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &quot;\u8EAB\u4EFD\u8BA4\u8BC1\u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;,</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    /// ..... \u5176\u4ED6\u7684\u903B\u8F91\u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return response.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u901A\u8FC7-2\u8FDB\u884C\u5224\u65AD \uFF0C\u7136\u540E\u6E05\u9664\u6389\u7F13\u5B58\u6570\u636E\uFF0C\u90A3\u4E48\u5728vue-router\u8DEF\u7531\u4E2D\u4F1A\u8FDB\u884C\u5224\u65AD\u5904\u7406</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, _from, next) =&gt; {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u627E\u4E0D\u5230\u8DEF\u7531\u8DF3\u8F6C\u5230404</span></span>
<span class="line"><span style="color:#A6ACCD;">  next(&quot;/404&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return false</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u524D\u7AEF\u548C\u540E\u7AEF\u5927\u81F4\u7684\u4E00\u4E2A\u8FC7\u7A0B\u5C31\u5728\u8FD9\u91CC\u7B80\u5355\u8BF4\u5B8C\u4E86\uFF0C\u68B3\u7406\u5B8C\u4E86\u4EE5\u540E\uFF0C\u53D1\u73B0\u81EA\u5DF1\u66F4\u6E05\u695A\u4E86\uFF0C\u5176\u5B9E\u8FD8\u6709\u5F88\u591A\u7684\u95EE\u9898\u8981\u53BB\u5904\u7406\uFF0C\u5C31\u5F53\u505A\u662F\u4F18\u5316\u4E86\u3002</p>`,25),o=[e];function t(c,r,i,A,C,y){return n(),a("div",null,o)}var d=s(p,[["render",t]]);export{u as __pageData,d as default};
