import{_ as s,o as a,c as n,N as l}from"./chunks/framework.294d0221.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-05-15-guifan.md","lastUpdated":1680511975000}'),p={name:"javascript/2022-05-15-guifan.md"},e=l(`<h2 id="前端开发规范" tabindex="-1">前端开发规范 <a class="header-anchor" href="#前端开发规范" aria-label="Permalink to &quot;前端开发规范&quot;">​</a></h2><h4 id="_1、驼峰式命名法介绍" tabindex="-1">1、驼峰式命名法介绍 <a class="header-anchor" href="#_1、驼峰式命名法介绍" aria-label="Permalink to &quot;1、驼峰式命名法介绍&quot;">​</a></h4><ul><li>Pascal Case 大驼峰式命名法：首字母大写。eg：RequestScanQrcode、UserInfo、GetQueryString</li><li>Camel Case 小驼峰式命名法：首字母小写。eg：requestScanQrcode、userInfo、getQueryString</li></ul><h4 id="_2、命名规范" tabindex="-1">2、命名规范 <a class="header-anchor" href="#_2、命名规范" aria-label="Permalink to &quot;2、命名规范&quot;">​</a></h4><ul><li><p>项目命名</p><p>全部采用小写方式,项目包含多个单词时，单词之间建议使用半角的连词线 ( - ) 进行分隔。 例：dvs-sunlight-tech</p></li><li><p>目录命名</p><p>1、参考项目命名。 例：popup-message 2、有复数结构时，要采用复数命名法。例：scripts，styles，images，views，components，utils 等</p></li><li><p>JS 和 VUE 文件命名</p><p>1、参考项目命名。例：column-tree、investigate 等 2、注意：components 中的组件名称使用大驼峰命名方式，在 template 模板中引用组件时全部采用小写中间使用（-）进行分隔。</p></li><li><p>CSS、SCSS 文件命名</p><p>参考项目命名。例：variable.scss、element-theme.scss 等</p></li></ul><h4 id="_3、css、scss-规范" tabindex="-1">3、CSS、SCSS 规范 <a class="header-anchor" href="#_3、css、scss-规范" aria-label="Permalink to &quot;3、CSS、SCSS 规范&quot;">​</a></h4><ul><li><p>缩进（个人用的 tab，也可以直接使用空格）</p><p>使用 tab 缩进（2 个空格）</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">chart </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">%;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">f2f2f2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>分号</p><p>每个声明后都加分号</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">chart </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">%;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">background</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> #</span><span style="color:#A6ACCD;">f2f2f2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>命名</p><ul><li>类名使用小写字母，单词之间建议使用半角的连词线 ( - ) 进行分隔。例：village-list</li><li>id 采用小驼峰式命名。例：villageDialog</li><li>scss 中的变量、函数、混合、placeholder 采用小驼峰式命名</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* class */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">village</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    #villageDialog </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 变量 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">$themeColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #</span><span style="color:#F78C6C;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li></ul><h4 id="_4、javascript-规范" tabindex="-1">4、JavaScript 规范 <a class="header-anchor" href="#_4、javascript-规范" aria-label="Permalink to &quot;4、JavaScript 规范&quot;">​</a></h4><ul><li><p>缩进</p><p>使用 Tab 缩进（两个空格）</p></li><li><p>分号</p><p>每个声明结束都要加分号</p></li><li><p>命名</p><ul><li>标准变量采用小驼峰式命名</li><li>常量全大写，用下划线连接</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      pickerOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 小驼峰式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MAX_COUNT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 常量全大写</span></span>
<span class="line"></span></code></pre></div></li><li><p>注释</p><ul><li><p>单行注释 注释单独一行的情况下，注释的//后面要跟一个空格 注释如果和代码同一行，代码分号结束后，要跟一个空格，注释的//后也要跟一个空格</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 调用函数</span></span>
<span class="line"><span style="color:#82AAFF;">select</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> maxCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 这是一个变量</span></span>
<span class="line"></span></code></pre></div></li><li><p>多行注释 多行注释使用下面这种形式：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 代码注释1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 代码注释2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>多行注释建议在以下几种情况使用：</p><ul><li>难于理解的代码段</li><li>可能存在错误的代码段</li><li>业务逻辑强相关的代码</li></ul></li></ul></li></ul><h4 id="_5、git-commit-时提交的描述性信息" tabindex="-1">5、git commit 时提交的描述性信息 <a class="header-anchor" href="#_5、git-commit-时提交的描述性信息" aria-label="Permalink to &quot;5、git commit 时提交的描述性信息&quot;">​</a></h4><pre><code>\`\`\`javascript
// &#39;feat: 新增村情概况页面布局&#39;
// &#39;fix: 修复村情概况接口报错的异常&#39;
// &#39;docs: 修改接口字段备注&#39;
// &#39;style: 村情概况代码对齐&#39;
// &#39;refactor: 村情概况富文本展示代码重写&#39;
// &#39;chore: 添加element-plus ui库依赖包&#39;
// &#39;css: 修改村情概况样式&#39;
    feat: 新特性
    fix: 修改问题
    refactor: 代码重构
    docs: 文档修改
    css: 布局样式调整
    style: 代码格式修改, 注意不是 css 修改
    chore: 其他修改, 比如构建流程, 依赖管理、版本好修正.
\`\`\`
</code></pre><h4 id="_6、git-提交的用户名和邮箱设置" tabindex="-1">6、git 提交的用户名和邮箱设置 <a class="header-anchor" href="#_6、git-提交的用户名和邮箱设置" aria-label="Permalink to &quot;6、git 提交的用户名和邮箱设置&quot;">​</a></h4><pre><code>\`\`\`javascript
    git config --global user.name &quot;刘启明&quot;
    git config --global user.email &quot;455043818@qq.com&quot;
\`\`\`
</code></pre><h4 id="_6、vetur-开启-eslint、prettier-设置" tabindex="-1">6、vetur 开启；eslint、prettier 设置 <a class="header-anchor" href="#_6、vetur-开启-eslint、prettier-设置" aria-label="Permalink to &quot;6、vetur 开启；eslint、prettier 设置&quot;">​</a></h4>`,14),o=[e];function t(c,i,r,y,F,D){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
