import{_ as s,c as n,o as p,ag as l}from"./chunks/framework.mJdS8VI0.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-11-19.-自主填报配置sql.md","filePath":"article/code/2024-11-19.-自主填报配置sql.md","lastUpdated":1752632542000}'),e={name:"article/code/2024-11-19.-自主填报配置sql.md"};function i(o,a,t,d,c,u){return p(),n("div",null,a[0]||(a[0]=[l(`<h2 id="自主填报配置sql算法注意事项" tabindex="-1">自主填报配置sql算法注意事项 <a class="header-anchor" href="#自主填报配置sql算法注意事项" aria-label="Permalink to &quot;自主填报配置sql算法注意事项&quot;">​</a></h2><ul><li>sql中可以使用的几个字段 <ul><li>userid</li><li>regionid</li><li>taskid</li><li>populationid</li></ul></li></ul><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><ul><li>如下 id，是业务表的guid字段， taskid是业务表的关联taskid，其他字段则是业务表的字段 select UUID() id, @taskid taskid from User u where u=@userid</li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><p>要发布自主填报之后才可以写sql</p></li><li><p>保证必须有数据的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT UUID() id, @taskid taskid, p.\`Name\` c1,CONCAT(hn.\`Name\`, h.HouseNumber) as c2,vp.Contact c3,p.IdCard c4  FROM  \`User\` u </span></span>
<span class="line"><span>LEFT JOIN Population p on p.Id = u.PopulationId</span></span>
<span class="line"><span>LEFT JOIN VillagePopulation vp on vp.PopulationId = u.PopulationId</span></span>
<span class="line"><span>LEFT JOIN VillageHouseholdPopulation hp on hp.PopulationId = u.PopulationId</span></span>
<span class="line"><span>LEFT JOIN VillageHousehold h on h.Id = hp.VillageHouseholdId</span></span>
<span class="line"><span>LEFT JOIN VillageHouseName hn on hn.Id = h.HouseNameId</span></span>
<span class="line"><span>WHERE u.Id = @userid</span></span></code></pre></div></li><li><p>后面的查询sql可能没有数据的话，就要通过left join进行关联查询来保证有数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT </span></span>
<span class="line"><span>    base.id,</span></span>
<span class="line"><span>    base.taskid,</span></span>
<span class="line"><span>    temp.c1,</span></span>
<span class="line"><span>    temp.c2,</span></span>
<span class="line"><span>    temp.c3,</span></span>
<span class="line"><span>    temp.c4</span></span>
<span class="line"><span>from  (</span></span>
<span class="line"><span>    SELECT </span></span>
<span class="line"><span>        UUID() as id,</span></span>
<span class="line"><span>        @taskid as taskid</span></span>
<span class="line"><span>) AS base</span></span>
<span class="line"><span>LEFT JOIN (</span></span>
<span class="line"><span>    SELECT </span></span>
<span class="line"><span>        p.\`Name\` as c1,</span></span>
<span class="line"><span>        CONCAT(hn.\`Name\`, h.HouseNumber) as c2,</span></span>
<span class="line"><span>        vp.Contact as c3,</span></span>
<span class="line"><span>        p.IdCard as c4</span></span>
<span class="line"><span>    FROM \`User\` u  </span></span>
<span class="line"><span>    LEFT JOIN Population p on p.Id = u.PopulationId </span></span>
<span class="line"><span>    LEFT JOIN VillagePopulation vp on vp.PopulationId = u.PopulationId </span></span>
<span class="line"><span>    LEFT JOIN VillageHouseholdPopulation hp on hp.PopulationId = u.PopulationId </span></span>
<span class="line"><span>    LEFT JOIN VillageHousehold h on h.Id = hp.VillageHouseholdId </span></span>
<span class="line"><span>    LEFT JOIN VillageHouseName hn on hn.Id = h.HouseNameId </span></span>
<span class="line"><span>    WHERE u.Id = @userid</span></span>
<span class="line"><span>) AS temp ON 1=1</span></span></code></pre></div></li></ul><h2 id="自主填报-视图获取人信息" tabindex="-1">自主填报 视图获取人信息 <a class="header-anchor" href="#自主填报-视图获取人信息" aria-label="Permalink to &quot;自主填报 视图获取人信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT v.\`Name\`, v.IdCard, v.Contact, v.HouseName, v.HouseNumber FROM \`User\` u</span></span>
<span class="line"><span>LEFT JOIN VillageHouseholdPopulationView v on v.PopulationId = u.PopulationId</span></span>
<span class="line"><span>WHERE u.Id = 1676431146113699840</span></span></code></pre></div>`,8)]))}const I=s(e,[["render",i]]);export{r as __pageData,I as default};
