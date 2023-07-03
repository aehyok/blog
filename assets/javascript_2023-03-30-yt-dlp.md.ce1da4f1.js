import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-03-30-yt-dlp.md","lastUpdated":1688379317000}'),p={name:"javascript/2023-03-30-yt-dlp.md"},e=l(`<h2 id="下载视频音频的开源库" tabindex="-1">下载视频音频的开源库 <a class="header-anchor" href="#下载视频音频的开源库" aria-label="Permalink to &quot;下载视频音频的开源库&quot;">​</a></h2><ul><li>开源地址 <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noreferrer">https://github.com/yt-dlp/yt-dlp</a> 根据开源地址中安装对应的版本，window下的话可以设置环境变量，这样全局都可以使用该命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 下载视频文件</span></span>
<span class="line"><span style="color:#A6ACCD;">yt-dlp https://youtu.be/ih9PBGVVOO4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下载视频文件和字幕文件</span></span>
<span class="line"><span style="color:#A6ACCD;">yt-dlp https://youtu.be/ih9PBGVVOO4 --write-subs</span></span></code></pre></div><p><a href="https://zhuanlan.zhihu.com/p/484653709" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/484653709</a><a href="https://zhuanlan.zhihu.com/p/536142120" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/536142120</a></p><h2 id="pdf文档解析" tabindex="-1">pdf文档解析 <a class="header-anchor" href="#pdf文档解析" aria-label="Permalink to &quot;pdf文档解析&quot;">​</a></h2><ul><li><a href="https://github.com/mayooear/gpt4-pdf-chatbot-langchain" target="_blank" rel="noreferrer">https://github.com/mayooear/gpt4-pdf-chatbot-langchain</a></li></ul><h2 id="pdf文档解析-1" tabindex="-1">PDF文档解析 <a class="header-anchor" href="#pdf文档解析-1" aria-label="Permalink to &quot;PDF文档解析&quot;">​</a></h2><ul><li>解析工具 <a href="https://github.com/mayooear/gpt4-pdf-chatbot-langchain" target="_blank" rel="noreferrer">https://github.com/mayooear/gpt4-pdf-chatbot-langchain</a></li><li>解析详解 <a href="https://www.youtube.com/watch?v=ih9PBGVVOO4" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=ih9PBGVVOO4</a></li><li>youtobe视频是老外，而且没有字幕</li><li>点击视频右键复制视频链接地址</li><li>通过上面的方式进行下载视频和音频字幕文件</li><li>再通过GPT-4进行翻译</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">WEBVTT</span></span>
<span class="line"><span style="color:#A6ACCD;">种类：字幕</span></span>
<span class="line"><span style="color:#A6ACCD;">语言：英国英语</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:00:03.000 --&gt; 00:00:09.976</span></span>
<span class="line"><span style="color:#A6ACCD;">嘿，我是Chat With Data的Mayo，在今天的视频中，</span></span>
<span class="line"><span style="color:#A6ACCD;">我将谈论如何与一个长PDF进行对话。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:00:10.000 --&gt; 00:00:18.000</span></span>
<span class="line"><span style="color:#A6ACCD;">所以这里我们有一个56页的法律文件。这实际上是一个大型</span></span>
<span class="line"><span style="color:#A6ACCD;">美国最高法院案件的法律案例。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:00:21.000 --&gt; 00:00:29.000</span></span>
<span class="line"><span style="color:#A6ACCD;">你可以看到我们有很多页面，这对于大多数PDF文档来说都是典型的。而且你还可以</span></span>
<span class="line"><span style="color:#A6ACCD;">看到这种让人讨厌的文字，甚至无法正确复制出来。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:00:35.000 --&gt; 00:00:43.000</span></span>
<span class="line"><span style="color:#A6ACCD;">所以我们希望最后能够与这个</span></span>
<span class="line"><span style="color:#A6ACCD;">文件进行对话。所以我们可以说，这个法律案件是关于什么的，然后按回车键？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:00:49.000 --&gt; 00:00:57.000</span></span>
<span class="line"><span style="color:#A6ACCD;">希望我们能得到回应。这个法律案件是关于学生Frederick的。有趣的是，现在我们</span></span>
<span class="line"><span style="color:#A6ACCD;">还有引用回PDF的来源，以及您可以查看的PDF的部分。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:01:03.000 --&gt; 00:01:10.933</span></span>
<span class="line"><span style="color:#A6ACCD;">所以也许你从回应中不明白某些东西。</span></span>
<span class="line"><span style="color:#A6ACCD;">所以你可以问，什么是合格豁免？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:01:13.000 --&gt; 00:01:21.000</span></span>
<span class="line"><span style="color:#A6ACCD;">看看回来什么。所以这是一种来回交流的互动，</span></span>
<span class="line"><span style="color:#A6ACCD;">我们使用Lang chain和GBT4来获得回应。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:01:27.000 --&gt; 00:01:35.000</span></span>
<span class="line"><span style="color:#A6ACCD;">这正是我们在寻找的&lt;肯定&gt;。有趣。酷。</span></span>
<span class="line"><span style="color:#A6ACCD;">让我们检查一下0.2实际链接。那相当酷，对吧？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:01:46.000 --&gt; 00:01:53.200</span></span>
<span class="line"><span style="color:#A6ACCD;">所以你可以得到参考资料，还可以在文档中找到</span></span>
<span class="line"><span style="color:#A6ACCD;">来源。酷。那么我们如何做到这一点？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:01:56.000 --&gt; 00:02:04.000</span></span>
<span class="line"><span style="color:#A6ACCD;">这是如何工作的？好吧，让我们跳进图表开始吧。</span></span>
<span class="line"><span style="color:#A6ACCD;">这是使用Lang chain和GPT-4的PDF聊天架构。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:02:10.000 --&gt; 00:02:18.000</span></span>
<span class="line"><span style="color:#A6ACCD;">现在，当我展示代码或者你想从</span></span>
<span class="line"><span style="color:#A6ACCD;">代码库复制时，只要记住，你可以换用旧模型。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:02:21.000 --&gt; 00:02:29.000</span></span>
<span class="line"><span style="color:#A6ACCD;">你不必使用GT 4，我只是幸运。并有幸获得</span></span>
<span class="line"><span style="color:#A6ACCD;">API访问权限。所以我们有PDF文档，将其转换为文本，对吧？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:02:37.000 --&gt; 00:02:45.000</span></span>
<span class="line"><span style="color:#A6ACCD;">然后我们将文本拆分成块，因为上下文窗口的问题。记住，如果你曾经使用过acha CBT，如果你尝试将整个PDF文档粘贴进去或者尝试复制文本并粘贴进去，你可能会注意到它提示这个尺寸太大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:03.000 --&gt; 00:03:11.000</span></span>
<span class="line"><span style="color:#A6ACCD;">所以我们使用Lang chain将其拆分为块来克服这个问题，</span></span>
<span class="line"><span style="color:#A6ACCD;">每个块将是文本的一定数量的字符。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:13.000 --&gt; 00:03:19.976</span></span>
<span class="line"><span style="color:#A6ACCD;">可能是1000个字符，2000个，具体情况而定。</span></span>
<span class="line"><span style="color:#A6ACCD;">所以我们有这些块，然后我们创建这些嵌入。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:20.000 --&gt; 00:03:28.000</span></span>
<span class="line"><span style="color:#A6ACCD;">嵌入只是文本的数字表示。我们将其</span></span>
<span class="line"><span style="color:#A6ACCD;">存储在某个地方，好吧？所以你可以把这看作是一个摄取阶段，对吧？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:32.000 --&gt; 00:03:40.000</span></span>
<span class="line"><span style="color:#A6ACCD;">稍后我们在代码中讲解时会谈到这一点。但这个摄取阶段将获取</span></span>
<span class="line"><span style="color:#A6ACCD;">文档，将其转换为文本，拆分，然后将其转换为要存储在向量池中的数字。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:49.000 --&gt; 00:03:56.200</span></span>
<span class="line"><span style="color:#A6ACCD;">在这种情况下，我们使用的是pine curtain。所以我会</span></span>
<span class="line"><span style="color:#A6ACCD;">稍后再谈。所以这是第一阶段。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:03:57.000 --&gt; 00:04:04.333</span></span>
<span class="line"><span style="color:#A6ACCD;">现在第二阶段是从前端，用户提出一个</span></span>
<span class="line"><span style="color:#A6ACCD;">问题。所以也许他们会说，我如何创建一个帐户？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:04:06.000 --&gt; 00:04:14.000</span></span>
<span class="line"><span style="color:#A6ACCD;">你在这里做的就是将PDF文档变成你公司的支持</span></span>
<span class="line"><span style="color:#A6ACCD;">文件，对吧？所以用户说，我如何创建一个帐户？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:04:20.000 --&gt; 00:04:28.000</span></span>
<span class="line"><span style="color:#A6ACCD;">你将其与聊天记录结合起来，就像在这种情况下，你将其发送到大型</span></span>
<span class="line"><span style="color:#A6ACCD;">语言模型。所以GT 3.504，然后你说，嘿，创建一个独立的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:04:35.000 --&gt; 00:04:41.976</span></span>
<span class="line"><span style="color:#A6ACCD;">根据聊天记录和新问题，创建一个独立</span></span>
<span class="line"><span style="color:#A6ACCD;">问题。将此独立问题转换为嵌入。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:04:42.000 --&gt; 00:04:50.000</span></span>
<span class="line"><span style="color:#A6ACCD;">所以嵌入看起来像这样，对吧？如果我只是做一个快速的草图，你会得到像0.1、0.2这样的东西，每个</span></span>
<span class="line"><span style="color:#A6ACCD;">向量，你知道，你会得到1,536个这样的东西，在open eye 4的情况下来表示文本，这个独立问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:13.000 --&gt; 00:05:20.533</span></span>
<span class="line"><span style="color:#A6ACCD;">然后所有这些向量都被带到向量</span></span>
<span class="line"><span style="color:#A6ACCD;">存储。所以它说，嘿，好吧，这是我拥有的数字。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:21.000 --&gt; 00:05:29.000</span></span>
<span class="line"><span style="color:#A6ACCD;">然后它会比较这些数字与我们之前存储的向量池中的数字，找到</span></span>
<span class="line"><span style="color:#A6ACCD;">最相似的向量。基本上，它会找到与用户问题最相关的文档块。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:30.000 --&gt; 00:05:38.000</span></span>
<span class="line"><span style="color:#A6ACCD;">找到最相关的块后，我们将这个块与用户的问题一起发送回</span></span>
<span class="line"><span style="color:#A6ACCD;">大型语言模型（例如GPT-4），让它生成一个回答。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:39.000 --&gt; 00:05:47.000</span></span>
<span class="line"><span style="color:#A6ACCD;">最后，当我们得到一个回答时，我们将其发送回前端，供用户查看。</span></span>
<span class="line"><span style="color:#A6ACCD;">这样，用户就可以与PDF文档进行交互式对话。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:48.000 --&gt; 00:05:56.000</span></span>
<span class="line"><span style="color:#A6ACCD;">所以，这就是使用Lang chain和GPT-4与长PDF进行对话的整个过程。</span></span>
<span class="line"><span style="color:#A6ACCD;">这种方法可以帮助用户更轻松地从复杂文档中获取信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:05:57.000 --&gt; 00:06:05.000</span></span>
<span class="line"><span style="color:#A6ACCD;">总之，我们首先将PDF文档转换为文本，将文本拆分成块，并将其转换为嵌入。</span></span>
<span class="line"><span style="color:#A6ACCD;">然后，当用户提出问题时，我们将问题与嵌入相结合，找到与问题最相关的文档块。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">00:06:06.000 --&gt; 00:06:14.000</span></span>
<span class="line"><span style="color:#A6ACCD;">最后，我们将找到的块与用户的问题一起发送给语言模型，生成一个回答，</span></span>
<span class="line"><span style="color:#A6ACCD;">并将回答发送回前端供用户查看。这就是整个过程。</span></span>
<span class="line"><span style="color:#A6ACCD;">在本视频中，我们已经讲解了如何使用Lang chain和GPT-4与长PDF进行交互式对话的整个过程。这种方法为用户提供了一种方便的方式，可以更轻松地从复杂数字文档中提取所需信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">现在我们已经了解了整个流程，接下来我们可以深入探讨各个组件，如何实现这些功能以及如何将这个过程应用到实际项目中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例如，你可以关注如何优化向量存储和搜索，以便在大型文档集合中更高效地找到相关文档块。此外，你还可以研究如何优化模型的性能，以更准确地回答用户的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">此外，你还可以探索如何将这种技术应用于其他类型的文档，例如Word文档、电子邮件或网页。这样一来，你就可以构建更加强大和灵活的知识检索系统，以满足各种各样的需求。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">最后，不要忘记关注用户体验。为了让用户充分利用这种技术，你需要确保前端界面简洁、直观，让用户能够轻松地提问和查看答案。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">总之，通过学习本视频的内容，你已经迈出了探索自然语言处理和人工智能在知识检索领域应用的重要一步。希望你能继续深入学习，将这些技术应用到实际项目中，为用户带来更便捷的信息获取体验。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当然！让我们进一步探讨一些与此相关的话题和技术，以便你能更好地了解如何扩展和优化与长PDF进行交互式对话的方法。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">自定义模型：尽管GPT-4在处理各种问题和领域时表现出色，但你可以尝试针对特定领域或类型的文档训练自定义模型。这样可以提高模型在特定上下文中的准确性和性能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">实时更新：如果你的文档集合经常更新，你需要考虑实时更新向量存储和模型。这样，当新文档添加到集合中时，用户可以立即获取到最新的信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">多语言支持：考虑将此方法扩展到其他语言，以便为不同语言的用户提供支持。你可以使用像OpenAI的GPT系列一样的多语言模型，或者为每种语言训练独立的模型。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">可视化工具：为了帮助用户更好地理解和分析文档内容，可以考虑开发可视化工具。例如，为用户提供关键词提取、主题建模或情感分析等功能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">权限管理和安全性：确保你的系统遵循适当的权限管理和安全性规定。例如，你需要确保仅向授权用户提供敏感或受限制的文档内容。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">用户反馈和改进：收集用户反馈以优化模型性能和用户体验。你可以通过跟踪用户满意度、提问频率和答案准确性等指标来度量系统性能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">通过深入研究这些话题和技术，你将能够构建更加强大、高效和用户友好的与长PDF进行交互式对话的系统。祝你学习愉快，不断提高！</span></span></code></pre></div>`,9),o=[e];function c(t,C,A,r,i,y){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{h as __pageData,g as default};
