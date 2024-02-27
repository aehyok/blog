import{_ as s,o as n,c as a,b as l}from"./app.54d7eac7.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、 reactive 定义 ts 数组","slug":"_1、-reactive-定义-ts-数组","link":"#_1、-reactive-定义-ts-数组","children":[]},{"level":2,"title":"2、 reactive 定义 ts 数组","slug":"_2、-reactive-定义-ts-数组","link":"#_2、-reactive-定义-ts-数组","children":[]},{"level":2,"title":"3、枚举的使用","slug":"_3、枚举的使用","link":"#_3、枚举的使用","children":[]},{"level":2,"title":"4、继承的使用","slug":"_4、继承的使用","link":"#_4、继承的使用","children":[]},{"level":2,"title":"5、创建一个 key,value 对象","slug":"_5、创建一个-key-value-对象","link":"#_5、创建一个-key-value-对象","children":[]},{"level":2,"title":"6、5 的升级玩法","slug":"_6、5-的升级玩法","link":"#_6、5-的升级玩法","children":[{"level":3,"title":"7、typescript中的枚举操作","slug":"_7、typescript中的枚举操作","link":"#_7、typescript中的枚举操作","children":[]}]}],"relativePath":"javascript/2022-05-20-typescript.md","lastUpdated":1709035351000}'),p={name:"javascript/2022-05-20-typescript.md"},o=l(`<h2 id="_1、-reactive-定义-ts-数组" tabindex="-1">1、 reactive 定义 ts 数组 <a class="header-anchor" href="#_1、-reactive-定义-ts-数组" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
</code></pre><h2 id="_2、-reactive-定义-ts-数组" tabindex="-1">2、 reactive 定义 ts 数组 <a class="header-anchor" href="#_2、-reactive-定义-ts-数组" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
</code></pre><h2 id="_3、枚举的使用" tabindex="-1">3、枚举的使用 <a class="header-anchor" href="#_3、枚举的使用" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
</code></pre><h2 id="_4、继承的使用" tabindex="-1">4、继承的使用 <a class="header-anchor" href="#_4、继承的使用" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript

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
</code></pre><h2 id="_5、创建一个-key-value-对象" tabindex="-1">5、创建一个 key,value 对象 <a class="header-anchor" href="#_5、创建一个-key-value-对象" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
    type keys = &#39;A&#39; | &#39;B&#39; | &#39;C&#39;
    const result: Record&lt;keys, number&gt; = {
        A: 1,
        B: 2,
        C: 3
    }
\`\`\`
</code></pre><h2 id="_6、5-的升级玩法" tabindex="-1">6、5 的升级玩法 <a class="header-anchor" href="#_6、5-的升级玩法" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascirpt

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
</code></pre><h3 id="_7、typescript中的枚举操作" tabindex="-1">7、typescript中的枚举操作 <a class="header-anchor" href="#_7、typescript中的枚举操作" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//1、声明一个枚举类型   最好定义在ts文件中，不要定义在.d.ts文件中，import引入的时候有问题</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">enum</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ColumnType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    static </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">只读文本</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    text</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文本框</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    textarea</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文本域</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    select</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">下拉列表</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    editor</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">富文本</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    number</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">数值框</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传图片</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    video</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传视频</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    date</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">日期</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    daterange </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">日期范围</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//2、获取一个枚举类型值</span></span>
<span class="line"><span style="color:#BABED8;">  ColumnType[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//3、将枚举转换成对象</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> columnList </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> value</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">of</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#BABED8;">(ColumnType)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key-value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">columnList</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="_8、泛型函数和-箭头泛型函数" tabindex="-1">8、泛型函数和 箭头泛型函数 <a class="header-anchor" href="#_8、泛型函数和-箭头泛型函数" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getUser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#BABED8;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">普通的泛型函数</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//但是如果是如下箭头函数将会报错</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getUser&lt;T&gt; </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    console.log(id</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">箭头泛型函数</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 要改成如下代码</span></span>
<span class="line"><span style="color:#F07178;">  const getUser = &lt;T&gt; (id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> string) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    console.log(id</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">箭头泛型函数</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_7、通过type和interface-限制某个字符串变量的具体字符串" tabindex="-1">7、通过type和interface 限制某个字符串变量的具体字符串 <a class="header-anchor" href="#_7、通过type和interface-限制某个字符串变量的具体字符串" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">工资</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">放假</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> eventType</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">发放</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">   </span><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> eventType1</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">工资</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// OK 赋值只能为“工资”或“放假”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IEventType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">工资</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">放假</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> iType1</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">IEventType</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">  iType1</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">工资</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">// OK 赋值只能为“工资”或“放假”</span></span>
<span class="line"><span style="color:#BABED8;">  iType1</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">测试</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"></span></code></pre></div>`,18),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{E as __pageData,d as default};
