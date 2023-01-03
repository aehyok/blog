import{_ as s,o as a,c as n,a as e}from"./app.4e2aadac.js";const y=JSON.parse('{"title":"\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5","slug":"\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5"},{"level":2,"title":"rabbitmq port 15672\u7AEF\u53E3\u65E0\u6CD5\u8BBF\u95EE","slug":"rabbitmq-port-15672\u7AEF\u53E3\u65E0\u6CD5\u8BBF\u95EE"},{"level":2,"title":"linux \u9632\u706B\u5899\u6700\u5F3A\u4F7F\u7528\u6307\u5357","slug":"linux-\u9632\u706B\u5899\u6700\u5F3A\u4F7F\u7528\u6307\u5357"},{"level":2,"title":".net core \u4E0B\u4F7F\u7528\u6D88\u606F\u961F\u5217","slug":"net-core-\u4E0B\u4F7F\u7528\u6D88\u606F\u961F\u5217"}],"relativePath":"javascript/2022-12-12-rabbitmq.md","lastUpdated":1672714362000}'),l={name:"javascript/2022-12-12-rabbitmq.md"},p=e(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker search rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -itd --rm --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 15672\u8FDB\u5165rabbitmq\u6570\u636E\u7BA1\u7406\u540E\u53F0\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 5672\u662F\u901A\u8FC7\u4EE3\u7801\u63A5\u53E3\u8BBF\u95EE\u961F\u5217\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BBF\u4E3B\u673A\u5668\u5B89\u88C5\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /etc/rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" tabindex="-1">\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5 <a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u6240\u6709\u7AEF\u53E3\u5360\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntulp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntulp |grep 3306</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770B\u67D0\u4E2A\u5E94\u7528\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef | grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u627E\u5230\u67D0\u4E2A\u7AEF\u53E3\u540E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbitmq-port-15672\u7AEF\u53E3\u65E0\u6CD5\u8BBF\u95EE" tabindex="-1">rabbitmq port 15672\u7AEF\u53E3\u65E0\u6CD5\u8BBF\u95EE <a class="header-anchor" href="#rabbitmq-port-15672\u7AEF\u53E3\u65E0\u6CD5\u8BBF\u95EE" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/web18334137065/article/details/126327427" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/web18334137065/article/details/126327427</a></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker exec -it rabbitmq bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FDB\u5165\u5BB9\u5668\u542F\u7528\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="linux-\u9632\u706B\u5899\u6700\u5F3A\u4F7F\u7528\u6307\u5357" tabindex="-1">linux \u9632\u706B\u5899\u6700\u5F3A\u4F7F\u7528\u6307\u5357 <a class="header-anchor" href="#linux-\u9632\u706B\u5899\u6700\u5F3A\u4F7F\u7528\u6307\u5357" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/wufaqidong1/article/details/126612203" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/wufaqidong1/article/details/126612203</a></li></ul><h2 id="net-core-\u4E0B\u4F7F\u7528\u6D88\u606F\u961F\u5217" tabindex="-1">.net core \u4E0B\u4F7F\u7528\u6D88\u606F\u961F\u5217 <a class="header-anchor" href="#net-core-\u4E0B\u4F7F\u7528\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/qq_38284923/article/details/119675498" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_38284923/article/details/119675498</a></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pkill docker </span></span>
<span class="line"><span style="color:#A6ACCD;">iptables -t nat -F </span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig docker0 down </span></span>
<span class="line"><span style="color:#A6ACCD;">brctl delbr docker0 </span></span>
<span class="line"><span style="color:#A6ACCD;">docker -d </span></span>
<span class="line"><span style="color:#A6ACCD;">service docker restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),t=[p];function r(c,o,i,A,d,C){return a(),n("div",null,t)}var D=s(l,[["render",r]]);export{y as __pageData,D as default};
