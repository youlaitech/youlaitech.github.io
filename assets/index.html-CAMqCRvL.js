import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as l,b as s,d as t,o as n}from"./app-E4GEUsDy.js";const i={},o=s("p",null,"本教程将指导你如何搭建和启动 vue3-element-admin 后端服务。",-1),r=t(`<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><p>JDK 17、Maven 3.6 +</p><h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动"><span>项目启动</span></a></h2><ol><li><p><strong>数据库初始化</strong></p><p>执行 <a href="sql/mysql8/youlai_boot.sql">youlai_boot.sql</a> 脚本完成数据库创 建、表结构和基础数据的初始化。</p></li><li><p><strong>修改配置</strong></p><p><a href="src/main/resources/application-dev.yml">application-dev.yml</a> 修改 MySQL、Redis 连接配置；</p></li><li><p><strong>启动项目</strong></p><p>执行 <a href="src/main/java/com/youlai/system/SystemApplication.java">SystemApplication.java</a> 的 main 方法完成后端项目启动；</p><p>访问接口文档地址 <a href="http://localhost:8989/doc.html" target="_blank" rel="noopener noreferrer">http://localhost:8989/doc.html</a> 验 证项目启动是否成功。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">corepack <span class="token builtin class-name">enable</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function c(d,p){return n(),a("div",null,[o,l(" more "),r])}const u=e(i,[["render",c],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/2.Java%E5%90%8E%E7%AB%AF/1.%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A8/","title":"项目启动","lang":"zh-CN","frontmatter":{"title":"项目启动","icon":"leaf","dir":{"collapsible":false,"expanded":false,"order":1,"link":true},"category":["Markdown"],"tag":["语法","Markdown"]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"项目启动","slug":"项目启动","link":"#项目启动","children":[]}],"git":{"createdTime":1724863355000,"updatedTime":1724863355000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"前后端模板/2.Java后端/1.项目启动/README.md","localizedDate":"2024年8月28日"}');export{u as comp,v as data};
