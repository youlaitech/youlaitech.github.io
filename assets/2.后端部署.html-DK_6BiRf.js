import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as e,d as i,o as l}from"./app-D6ZMcbP3.js";const t={},c=e("p",null,"本教程将指导你如何部署 vue3-element-admin 项目。",-1),p=i(`<h2 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署"><span>项目部署</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 项目打包</span></span>
<span class="line"><span class="token function">pnpm</span> run build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 上传文件至远程服务器</span></span>
<span class="line">将本地打包生成的 dist 目录下的所有文件拷贝至服务器的 /usr/share/nginx/html 目录。</span>
<span class="line"></span>
<span class="line"><span class="token comment"># nginx.cofig 配置</span></span>
<span class="line">server <span class="token punctuation">{</span></span>
<span class="line">	listen     <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">	server_name  localhost<span class="token punctuation">;</span></span>
<span class="line">	location / <span class="token punctuation">{</span></span>
<span class="line">			root /usr/share/nginx/html<span class="token punctuation">;</span></span>
<span class="line">			index index.html index.htm<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment"># 反向代理配置</span></span>
<span class="line">	location /prod-api/ <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment"># vapi.youlai.tech 替换后端API地址，注意保留后面的斜杠 /</span></span>
<span class="line">            proxy_pass http://vapi.youlai.tech/<span class="token punctuation">;</span> </span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(d,r){return l(),s("div",null,[c,a(" more "),p])}const v=n(t,[["render",o],["__file","2.后端部署.html.vue"]]),h=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/4.%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2/2.%E5%90%8E%E7%AB%AF%E9%83%A8%E7%BD%B2.html","title":"后端部署","lang":"zh-CN","frontmatter":{"title":"后端部署","icon":"leaf","order":2,"category":["快速上手","项目简介"],"tag":["项目介绍"]},"headers":[{"level":2,"title":"项目部署","slug":"项目部署","link":"#项目部署","children":[]}],"git":{"createdTime":1722817005000,"updatedTime":1724804555000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"前后端模板/4.项目部署/2.后端部署.md","localizedDate":"2024年8月5日"}');export{v as comp,h as data};
