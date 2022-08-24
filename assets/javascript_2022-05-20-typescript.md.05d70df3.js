import{_ as s,o as n,c as a,a as l}from"./app.930700d9.js";const A=JSON.parse('{"title":"1\u3001 reactive \u5B9A\u4E49 ts \u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001 reactive \u5B9A\u4E49 ts \u6570\u7EC4","slug":"_1\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4"},{"level":2,"title":"2\u3001 reactive \u5B9A\u4E49 ts \u6570\u7EC4","slug":"_2\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4"},{"level":2,"title":"3\u3001\u679A\u4E3E\u7684\u4F7F\u7528","slug":"_3\u3001\u679A\u4E3E\u7684\u4F7F\u7528"},{"level":2,"title":"4\u3001\u7EE7\u627F\u7684\u4F7F\u7528","slug":"_4\u3001\u7EE7\u627F\u7684\u4F7F\u7528"},{"level":2,"title":"5\u3001\u521B\u5EFA\u4E00\u4E2A key,value \u5BF9\u8C61","slug":"_5\u3001\u521B\u5EFA\u4E00\u4E2A-key-value-\u5BF9\u8C61"},{"level":2,"title":"6\u30015 \u7684\u5347\u7EA7\u73A9\u6CD5","slug":"_6\u30015-\u7684\u5347\u7EA7\u73A9\u6CD5"},{"level":3,"title":"7\u3001typescript\u4E2D\u7684\u679A\u4E3E\u64CD\u4F5C","slug":"_7\u3001typescript\u4E2D\u7684\u679A\u4E3E\u64CD\u4F5C"}],"relativePath":"javascript/2022-05-20-typescript.md","lastUpdated":1661385209000}'),p={name:"javascript/2022-05-20-typescript.md"},o=l(`<h2 id="_1\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4" tabindex="-1">1\u3001 reactive \u5B9A\u4E49 ts \u6570\u7EC4 <a class="header-anchor" href="#_1\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
            item: &#39;\u521B\u5EFA\u6237\u7801&#39;,
            count: 1000,
            times: 1,
            remark: &#39;\u6237\u7801\u9ED8\u8BA4\u5206\u503C&#39;,
            status: 0,
        },
    ])
\`\`\`
</code></pre><h2 id="_2\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4" tabindex="-1">2\u3001 reactive \u5B9A\u4E49 ts \u6570\u7EC4 <a class="header-anchor" href="#_2\u3001-reactive-\u5B9A\u4E49-ts-\u6570\u7EC4" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
            item: &#39;\u521B\u5EFA\u6237\u7801&#39;,
            count: 1000,
            times: 1,
            remark: &#39;\u6237\u7801\u9ED8\u8BA4\u5206\u503C&#39;,
            status: 0,
        },
    ])

    //\u4F7F\u7528\u7684\u65F6\u5019\u8981\u52A0\u4E0Alist.value
\`\`\`
</code></pre><h2 id="_3\u3001\u679A\u4E3E\u7684\u4F7F\u7528" tabindex="-1">3\u3001\u679A\u4E3E\u7684\u4F7F\u7528 <a class="header-anchor" href="#_3\u3001\u679A\u4E3E\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
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
</code></pre><h2 id="_4\u3001\u7EE7\u627F\u7684\u4F7F\u7528" tabindex="-1">4\u3001\u7EE7\u627F\u7684\u4F7F\u7528 <a class="header-anchor" href="#_4\u3001\u7EE7\u627F\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript

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
</code></pre><h2 id="_5\u3001\u521B\u5EFA\u4E00\u4E2A-key-value-\u5BF9\u8C61" tabindex="-1">5\u3001\u521B\u5EFA\u4E00\u4E2A key,value \u5BF9\u8C61 <a class="header-anchor" href="#_5\u3001\u521B\u5EFA\u4E00\u4E2A-key-value-\u5BF9\u8C61" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascript
    type keys = &#39;A&#39; | &#39;B&#39; | &#39;C&#39;
    const result: Record&lt;keys, number&gt; = {
        A: 1,
        B: 2,
        C: 3
    }
\`\`\`
</code></pre><h2 id="_6\u30015-\u7684\u5347\u7EA7\u73A9\u6CD5" tabindex="-1">6\u30015 \u7684\u5347\u7EA7\u73A9\u6CD5 <a class="header-anchor" href="#_6\u30015-\u7684\u5347\u7EA7\u73A9\u6CD5" aria-hidden="true">#</a></h2><pre><code>\`\`\`javascirpt

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
</code></pre><h3 id="_7\u3001typescript\u4E2D\u7684\u679A\u4E3E\u64CD\u4F5C" tabindex="-1">7\u3001typescript\u4E2D\u7684\u679A\u4E3E\u64CD\u4F5C <a class="header-anchor" href="#_7\u3001typescript\u4E2D\u7684\u679A\u4E3E\u64CD\u4F5C" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//1\u3001\u58F0\u660E\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B   \u6700\u597D\u5B9A\u4E49\u5728ts\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u8981\u5B9A\u4E49\u5728.d.ts\u6587\u4EF6\u4E2D\uFF0Cimport\u5F15\u5165\u7684\u65F6\u5019\u6709\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    static </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u53EA\u8BFB\u6587\u672C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    text</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6587\u672C\u6846</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    textarea</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6587\u672C\u57DF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    select</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0B\u62C9\u5217\u8868</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    editor</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5BCC\u6587\u672C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    number</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6570\u503C\u6846</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0A\u4F20\u56FE\u7247</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    video</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0A\u4F20\u89C6\u9891</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    date</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u65E5\u671F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    daterange </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u65E5\u671F\u8303\u56F4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//2\u3001\u83B7\u53D6\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  ColumnType[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//3\u3001\u5C06\u679A\u4E3E\u8F6C\u6362\u6210\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(ColumnType)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key-value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">columnList</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="_8\u3001\u6CDB\u578B\u51FD\u6570\u548C-\u7BAD\u5934\u6CDB\u578B\u51FD\u6570" tabindex="-1">8\u3001\u6CDB\u578B\u51FD\u6570\u548C \u7BAD\u5934\u6CDB\u578B\u51FD\u6570 <a class="header-anchor" href="#_8\u3001\u6CDB\u578B\u51FD\u6570\u548C-\u7BAD\u5934\u6CDB\u578B\u51FD\u6570" aria-hidden="true">#</a></h4><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getUser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u666E\u901A\u7684\u6CDB\u578B\u51FD\u6570</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u4F46\u662F\u5982\u679C\u662F\u5982\u4E0B\u7BAD\u5934\u51FD\u6570\u5C06\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getUser&lt;T&gt; </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">\u7BAD\u5934\u6CDB\u578B\u51FD\u6570</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u8981\u6539\u6210\u5982\u4E0B\u4EE3\u7801</span></span>
<span class="line"><span style="color:#F07178;">  const getUser = &lt;T&gt; (id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">\u7BAD\u5934\u6CDB\u578B\u51FD\u6570</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_7\u3001\u901A\u8FC7type\u548Cinterface-\u9650\u5236\u67D0\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF\u7684\u5177\u4F53\u5B57\u7B26\u4E32" tabindex="-1">7\u3001\u901A\u8FC7type\u548Cinterface \u9650\u5236\u67D0\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF\u7684\u5177\u4F53\u5B57\u7B26\u4E32 <a class="header-anchor" href="#_7\u3001\u901A\u8FC7type\u548Cinterface-\u9650\u5236\u67D0\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF\u7684\u5177\u4F53\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h4><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5DE5\u8D44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u653E\u5047</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> eventType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u53D1\u653E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> eventType1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5DE5\u8D44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// OK \u8D4B\u503C\u53EA\u80FD\u4E3A\u201C\u5DE5\u8D44\u201D\u6216\u201C\u653E\u5047\u201D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IEventType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5DE5\u8D44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u653E\u5047</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> iType1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IEventType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  iType1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5DE5\u8D44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// OK \u8D4B\u503C\u53EA\u80FD\u4E3A\u201C\u5DE5\u8D44\u201D\u6216\u201C\u653E\u5047\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;">  iType1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6D4B\u8BD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519</span></span>
<span class="line"></span></code></pre></div>`,18),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
