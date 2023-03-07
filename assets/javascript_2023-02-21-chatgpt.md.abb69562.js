import{_ as s,o as n,c as a,b as o}from"./app.f94d0fc6.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"api keys","slug":"api-keys","link":"#api-keys","children":[]},{"level":2,"title":"nodejs  demo","slug":"nodejs-demo","link":"#nodejs-demo","children":[]},{"level":2,"title":"go","slug":"go","link":"#go","children":[]},{"level":2,"title":"gpt3.5","slug":"gpt3-5","link":"#gpt3-5","children":[]},{"level":2,"title":"edge dev下载","slug":"edge-dev下载","link":"#edge-dev下载","children":[]},{"level":2,"title":"fq","slug":"fq","link":"#fq","children":[]},{"level":2,"title":"腾讯云 云函数","slug":"腾讯云-云函数","link":"#腾讯云-云函数","children":[]},{"level":2,"title":"openai封装库","slug":"openai封装库","link":"#openai封装库","children":[]},{"level":2,"title":"model list","slug":"model-list","link":"#model-list","children":[]}],"relativePath":"javascript/2023-02-21-chatgpt.md","lastUpdated":1678203048000}'),l={name:"javascript/2023-02-21-chatgpt.md"},p=o(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><ul><li><a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noreferrer">https://platform.openai.com/docs/introduction</a></li></ul><h2 id="api-keys" tabindex="-1">api keys <a class="header-anchor" href="#api-keys" aria-hidden="true">#</a></h2><ul><li><a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer">https://platform.openai.com/account/api-keys</a></li></ul><h2 id="nodejs-demo" tabindex="-1">nodejs demo <a class="header-anchor" href="#nodejs-demo" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/openai/openai-quickstart-node" target="_blank" rel="noreferrer">https://github.com/openai/openai-quickstart-node</a></li></ul><h2 id="go" tabindex="-1">go <a class="header-anchor" href="#go" aria-hidden="true">#</a></h2><ul><li><p><a href="https://github.com/eatmoreapple/openwechat" target="_blank" rel="noreferrer">https://github.com/eatmoreapple/openwechat</a></p></li><li><p><a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noreferrer">https://platform.openai.com/docs/introduction</a></p></li></ul><h2 id="gpt3-5" tabindex="-1">gpt3.5 <a class="header-anchor" href="#gpt3-5" aria-hidden="true">#</a></h2><ul><li><a href="https://platform.openai.com/docs/models/gpt-3-5" target="_blank" rel="noreferrer">https://platform.openai.com/docs/models/gpt-3-5</a></li></ul><h2 id="edge-dev下载" tabindex="-1">edge dev下载 <a class="header-anchor" href="#edge-dev下载" aria-hidden="true">#</a></h2><ul><li><a href="https://www.microsoft.com/zh-cn/edge/download?form=MA13FJ" target="_blank" rel="noreferrer">https://www.microsoft.com/zh-cn/edge/download?form=MA13FJ</a></li></ul><h2 id="fq" tabindex="-1">fq <a class="header-anchor" href="#fq" aria-hidden="true">#</a></h2><ul><li><p>总的 <a href="https://9.234456.xyz/abc.html?t=1677812313354" target="_blank" rel="noreferrer">https://9.234456.xyz/abc.html?t=1677812313354</a></p></li><li><p>一个</p></li><li><p><a href="https://jike191.com/user" target="_blank" rel="noreferrer">https://jike191.com/user</a></p></li><li><p><a href="https://9.234456.xyz/abc.html?t=1677812313354" target="_blank" rel="noreferrer">https://9.234456.xyz/abc.html?t=1677812313354</a></p></li><li><p>一个月的</p><ul><li><a href="https://v3ssy.xyz/#/dashboard" target="_blank" rel="noreferrer">https://v3ssy.xyz/#/dashboard</a></li></ul></li></ul><h2 id="腾讯云-云函数" tabindex="-1">腾讯云 云函数 <a class="header-anchor" href="#腾讯云-云函数" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/Ice-Hazymoon/openai-scf-proxy/issues/2" target="_blank" rel="noreferrer">https://github.com/Ice-Hazymoon/openai-scf-proxy/issues/2</a></li><li><a href="https://ai.okmiku.com/translate" target="_blank" rel="noreferrer">https://ai.okmiku.com/translate</a></li></ul><h2 id="openai封装库" tabindex="-1">openai封装库 <a class="header-anchor" href="#openai封装库" aria-hidden="true">#</a></h2><ul><li>nodejs <a href="https://github.com/transitive-bullshit/chatgpt-api" target="_blank" rel="noreferrer">https://github.com/transitive-bullshit/chatgpt-api</a></li><li>go</li></ul><h2 id="model-list" tabindex="-1">model list <a class="header-anchor" href="#model-list" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;code&quot;: 200,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;message&quot;: &quot;操作成功&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;timestamp&quot;: 1678171526551,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;object&quot;: &quot;list&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649358449,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-49FUp5v084tBB49tC4z8LPH5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669085501,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649359874,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-U6ZwlyAd0LyMk4rcMdz33Yc3&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066355,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;gpt-3.5-turbo-0301&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1677649963,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-ms2DpLH5OCOZpUikJ4sRQNkh&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677691853,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;gpt-3.5-turbo-0301&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-003&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1669599635,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-internal&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-6CAfTW5IbFpnlziQKoDilahq&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677793558,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-003&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage-code-search-code&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-4qRnA3Hj8HIJbgo0cGbcmErn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669085863,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage-code-search-code&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-similarity-babbage-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-48kcCHhfzvnfY84OtJf5m8Cz&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669081947,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-similarity-babbage-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364042,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-MVM5NfoRjXkDve3uQW3YZDDt&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066355,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649357491,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-u0nKN4ub7EVQudgMuvCuvDjc&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1675997661,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie-instruct-beta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364042,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-JlSyMbxXeFm42SDjN0wTD26Y&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669070162,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie-instruct-beta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage-code-search-text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-Lftf8H4ZPDxNxVs0hHPJBUoe&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669085863,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage-code-search-text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-mS20lnPqhebTaFPrcCufyg7m&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669081947,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;gpt-3.5-turbo&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1677610602,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-ZErASyl63fhYUeMMk7QKOHAB&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677691854,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;gpt-3.5-turbo&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-davinci-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649880485,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-8hC5jvDSIXgYe2NPyomfyFJr&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677737839,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-davinci-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-search-babbage-text-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-EC5ASz4NLChtEV1Cwkmrwm57&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669085863,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-search-babbage-text-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-embedding-ada-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1671217299,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-internal&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-ThMneEHcUgdBaIucwREqRj2a&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677075687,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-embedding-ada-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-cushman-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1656081837,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-M6pwNXr8UmY3mqdUEe4VFXdY&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066355,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-cushman-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;whisper-1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1677532384,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-internal&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-MX888R5RhewPTR12HguE4hM2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677691932,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;whisper-1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-search-babbage-code-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-64LWHdlANgak2rHzc3K5Stt0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669085864,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-search-babbage-code-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;audio-transcribe-deprecated&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1674776185,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-internal&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-IPCtO1a9wW5TDxGCIqy0iVfK&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1674776185,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;audio-transcribe-deprecated&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-ada-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364042,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-KN5dRBCEW4az6gwcGXkRkMwK&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669088497,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-ada-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-similarity-ada-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-DdCqkqmORpqxqdg4TkFRAgmw&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092759,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-similarity-ada-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-insert-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649880484,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-V5YQoSyiapAf4km5wisXkNXh&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066354,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-insert-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada-code-search-code&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-wa8tg4Pi9QQNaWdjMTM8dkkx&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669087421,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada-code-search-code&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-LtSIwCEReeDcvGTmM13gv6Fg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092759,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-search-ada-text-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-JBssaJSmbgvJfTkX71y71k2J&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669087421,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-search-ada-text-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-ada-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-1YiiBMYC8it0mpQCBK7t8uSP&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092640,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-ada-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-curie-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364043,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-fGAoEKBH01KNZ3zz81Sro34Q&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066352,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-curie-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-edit-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649809179,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-VzNMGrIRm3HxhEl64gkjZdEh&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066354,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-edit-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-M43LVJQRGxz6ode34ctLrCaG&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066355,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada-code-search-text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172510,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-kFc17wOI4d1FjZEaCqnk4Frg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669087421,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada-code-search-text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-ada-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-kbHvYouDlkD78ehcmMOGdKpK&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092640,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-ada-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-davinci-edit-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649880484,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-WwansDxcKNvZtKugNqJnsvfv&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066354,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-davinci-edit-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-instruct-beta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364042,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-k9kuMYlfd9nvFiJV2ug0NWws&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066356,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-instruct-beta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-similarity-curie-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-6dgTTyXrZE7d53Licw4hYkvd&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669079883,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-similarity-curie-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;code-search-ada-code-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-8soch45iiGvux5Fg1ORjdC4s&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669087421,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;code-search-ada-code-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-b753xmIzAUkluQ1L20eDZLtQ&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092640,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-davinci-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-9McKbsEYSaDshU9M3bp6ejUb&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066353,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-davinci-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-sIbfSwzVpVBtymQgOQSLBpxe&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677273417,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-lYkiTZMmJMWm8jvkPx2duyHE&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066353,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-insert-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649880484,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-3gRQMBOMoccZIURE3ZxboZWA&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066354,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-insert-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172510,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-5qFV9kxCRGKIXpBEP75chmp7&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669084981,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172507,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-8qUMuMAbo4EwedbGamV7e9hq&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669092640,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-curie-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-Iion0NCpsXPNtIkQ0owQLi7V&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677273417,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-curie-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-babbage-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-ao2r26P2Th7nhRFleHwy2gn5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669084981,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-babbage-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649880484,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-kOLsgLs7IgI9PTPI245IRWZH&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1676585871,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci-002&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172508,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-LDsN5wW8eKVuh1OsyciHntE9&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677273417,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie-search-document&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-curie-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-taUGRSku7bQLa24SNIwYPEsi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1677273417,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-curie-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-wSs1hMXDKsrcErlbN8HmzlLE&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669084981,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage-search-query&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-babbage-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649364043,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-a3Ph5FIBbJxsoA4wvx7VYC7R&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1675105935,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-babbage-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-davinci-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-qhSf1j2MJMujcu3t7cHnF1DN&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066353,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-davinci-doc-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-search-babbage-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-Kg70kkFxD93QQqsVe4Zw8vjc&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669084981,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-search-babbage-query-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172510,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-zhWKExSloaQiJgzjVHFmh2wR&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1675106290,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1649359874,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-oPaljeveTjEIDbhDjzFiyf4V&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1675106503,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-similarity-davinci-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172505,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-OvmcfYoq5V9SF9xTYw1Oz6Ue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066356,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-similarity-davinci-001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1651172509,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai-dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;modelperm-lYYgng3LM0Y97HvB5CDc8no2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1669066353,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-similarity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;cushman:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1590625110,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-FAup8P1KqclNlTsunLDRiesT&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1590625111,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;cushman:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;ada:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1607631625,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-9TYofAqUs54vytKYL0IX91rX&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1607631626,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;ada:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;babbage:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1607632611,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-jaLAcmyyNuaVmalCE1BGTGwf&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1607632613,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;babbage:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;curie:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1607632725,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-bt6R8PWbB2SwK5evFo0ZxSs4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1607632727,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;curie:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1607640163,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-99cbfQTYDVeLkTYndX3UMpSr&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1607640164,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci:2020-05-03&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;if-davinci-v2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1610745990,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-58q0TdK2K4kMgL3MoHvGWMlH&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1610746036,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;if-davinci-v2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;if-curie-v2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1610745968,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-fwAseHVq6NGe6Ple6tKfzRSK&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1610746043,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;if-curie-v2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;if-davinci:3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1629420755,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-T53lssiyMWwiuJwhyO9ic53z&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1629421809,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;if-davinci:3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-if:3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1629498070,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-s6ZIAVMwlZwrLGGClTXqSK3Q&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1629498084,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-if:3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;davinci-instruct-beta:2.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1629501914,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-c70U4TBfiOD839xptP5pJzyc&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1629501939,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;davinci-instruct-beta:2.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-ada:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1641949608,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-d2PSnwFG1Yn9of6PvrrhkBcU&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1641949610,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-ada:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-davinci:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1641943966,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-Fj1O3zkKXOQy6AkcfQXRKcWA&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1641944340,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-davinci:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-curie:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1641955047,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-BI9TAT6SCj43JRsUb9CYadsz&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1641955123,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-curie:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;text-babbage:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;object&quot;: &quot;model&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;created&quot;: 1642018370,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;owned_by&quot;: &quot;openai&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;permission&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;snapperm-7oP3WFr9x7qf5xb3eZrVABAH&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;object&quot;: &quot;model_permission&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;created&quot;: 1642018480,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_create_engine&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_sampling&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_logprobs&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_search_indices&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_view&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;allow_fine_tuning&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;organization&quot;: &quot;*&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;group&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;is_blocking&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;root&quot;: &quot;text-babbage:001&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;parent&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20),t=[p];function e(u,c,q,C,A,i){return n(),a("div",null,t)}const D=s(l,[["render",e]]);export{y as __pageData,D as default};
