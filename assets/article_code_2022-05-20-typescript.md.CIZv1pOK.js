import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.ELrfyV9R.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2022-05-20-typescript.md","filePath":"article/code/2022-05-20-typescript.md","lastUpdated":1762425022000}'),e={name:"article/code/2022-05-20-typescript.md"};function l(h,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="_1、-reactive-定义-ts-数组" tabindex="-1">1、 reactive 定义 ts 数组 <a class="header-anchor" href="#_1、-reactive-定义-ts-数组" aria-label="Permalink to &quot;1、 reactive 定义 ts 数组&quot;">​</a></h2><pre><code>\`\`\`javascript
    export interface TableModel {
        id?: number
        item?: string
        count?: number
        times?: number
        remark?: string
        status?: number
    }

    const list = reactive&lt;TableModel[]&gt;([
        {
            id: 1,
            item: &#39;创建户码&#39;,
            count: 1000,
            times: 1,
            remark: &#39;户码默认分值&#39;,
            status: 0,
        },
    ])
\`\`\`
</code></pre><h2 id="_2、-reactive-定义-ts-数组" tabindex="-1">2、 reactive 定义 ts 数组 <a class="header-anchor" href="#_2、-reactive-定义-ts-数组" aria-label="Permalink to &quot;2、 reactive 定义 ts 数组&quot;">​</a></h2><pre><code>\`\`\`javascript
    export interface TableModel {
        id?: number
        item?: string
        count?: number
        times?: number
        remark?: string
        status?: number
    }

    const list = ref&lt;TableModel[]&gt;([
        {
            id: 1,
            item: &#39;创建户码&#39;,
            count: 1000,
            times: 1,
            remark: &#39;户码默认分值&#39;,
            status: 0,
        },
    ])

    //使用的时候要加上list.value
\`\`\`
</code></pre><h2 id="_3、枚举的使用" tabindex="-1">3、枚举的使用 <a class="header-anchor" href="#_3、枚举的使用" aria-label="Permalink to &quot;3、枚举的使用&quot;">​</a></h2><pre><code>\`\`\`javascript
    export enum ToolbarTypeEnum {
        ZOOM_IN = &#39;zoomIn&#39;,
        ZOOM_OUT = &#39;zoomOut&#39;,
        RESET_ZOOM = &#39;resetZoom&#39;,

        UNDO = &#39;undo&#39;,
        REDO = &#39;redo&#39;,

        SNAPSHOT = &#39;snapshot&#39;,
        VIEW_DATA = &#39;viewData&#39;,
    }

    export interface ToolbarConfig {
        type?: string | ToolbarTypeEnum;
        tooltip?: string | boolean;
        icon?: string;
        disabled?: boolean;
        separate?: boolean;
    }
\`\`\`
</code></pre><h2 id="_4、继承的使用" tabindex="-1">4、继承的使用 <a class="header-anchor" href="#_4、继承的使用" aria-label="Permalink to &quot;4、继承的使用&quot;">​</a></h2><pre><code>\`\`\`javascript

    export declare type Point = {
        x: number;
        y: number;
        [key: string]: unknown;
    };
    export declare type TextConfig = {
        value: string;
    } &amp; Point;

    export declare type NodeConfig = {
        id?: string;
        type: string;
        x: number;
        y: number;
        text?: TextConfig | string;
        properties?: Record&lt;string, unknown&gt;;
    };
\`\`\`
</code></pre><h2 id="_5、创建一个-key-value-对象" tabindex="-1">5、创建一个 key,value 对象 <a class="header-anchor" href="#_5、创建一个-key-value-对象" aria-label="Permalink to &quot;5、创建一个 key,value 对象&quot;">​</a></h2><pre><code>\`\`\`javascript
    type keys = &#39;A&#39; | &#39;B&#39; | &#39;C&#39;
    const result: Record&lt;keys, number&gt; = {
        A: 1,
        B: 2,
        C: 3
    }
\`\`\`
</code></pre><h2 id="_6、5-的升级玩法" tabindex="-1">6、5 的升级玩法 <a class="header-anchor" href="#_6、5-的升级玩法" aria-label="Permalink to &quot;6、5 的升级玩法&quot;">​</a></h2><pre><code>\`\`\`javascirpt

    interface PageInfo {
        title: string;
    }

    type Page = &quot;home&quot; | &quot;about&quot; | &quot;contact&quot;;

    const nav: Record&lt;Page, PageInfo&gt; = {
        about: { title: &quot;about&quot; },
        contact: { title: &quot;contact&quot; },
        home: { title: &quot;home&quot; },
    };

\`\`\`
</code></pre><h3 id="_7、typescript中的枚举操作" tabindex="-1">7、typescript中的枚举操作 <a class="header-anchor" href="#_7、typescript中的枚举操作" aria-label="Permalink to &quot;7、typescript中的枚举操作&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //1、声明一个枚举类型   最好定义在ts文件中，不要定义在.d.ts文件中，import引入的时候有问题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ColumnType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;只读文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;文本框&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    textarea</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;文本域&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;下拉列表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    editor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;富文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;数值框&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    image</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;上传图片&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    video</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上传视频&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;日期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    daterange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;日期范围&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //2、获取一个枚举类型值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ColumnType[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;static&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //3、将枚举转换成对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> columnList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ColumnType)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, value, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key-value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    columnList[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h4 id="_8、泛型函数和-箭头泛型函数" tabindex="-1">8、泛型函数和 箭头泛型函数 <a class="header-anchor" href="#_8、泛型函数和-箭头泛型函数" aria-label="Permalink to &quot;8、泛型函数和 箭头泛型函数&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;普通的泛型函数&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //但是如果是如下箭头函数将会报错</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;T&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.log(id, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;箭头泛型函数&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 要改成如下代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const getUser = &lt;T&gt; (id: string) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.log(id, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;箭头泛型函数&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h4 id="_7、通过type和interface-限制某个字符串变量的具体字符串" tabindex="-1">7、通过type和interface 限制某个字符串变量的具体字符串 <a class="header-anchor" href="#_7、通过type和interface-限制某个字符串变量的具体字符串" aria-label="Permalink to &quot;7、通过type和interface 限制某个字符串变量的具体字符串&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;工资&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;放假&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eventType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发放&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 报错</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eventType1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;工资&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // OK 赋值只能为“工资”或“放假”</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEventType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;工资&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;放假&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> iType1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEventType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  iType1.name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;工资&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // OK 赋值只能为“工资”或“放假”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  iType1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;测试&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 报错</span></span></code></pre></div>`,18)]))}const y=i(e,[["render",l]]);export{g as __pageData,y as default};
