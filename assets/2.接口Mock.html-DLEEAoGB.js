import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,d as a}from"./app-0WuRN7hV.js";const l={},i=a(`<h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理</span></a></h2><p>项目集成<a href="https://vite-plugin-mock-dev-server.netlify.app/guide/usage" target="_blank" rel="noopener noreferrer">vite-plugin-mock-dev-server</a></p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><ol><li>打开mock服务<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">配置文件:.env.development</span>
<span class="line">VITE_MOCK_DEV_SERVER <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>在<code>mock</code>文件夹下创建<code>*.mock.ts</code>文件</li><li>在<code>*.mock.ts</code>文件中编写mock数据</li></ol><h2 id="示例代码-登录" tabindex="-1"><a class="header-anchor" href="#示例代码-登录"><span>示例代码(登录)</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">import { defineMock } from &quot;./base&quot;;</span>
<span class="line">export default defineMock([</span>
<span class="line">  {</span>
<span class="line">    url: &quot;auth/login&quot;,</span>
<span class="line">    method: [&quot;POST&quot;],</span>
<span class="line">    body: {</span>
<span class="line">      code: &quot;00000&quot;,</span>
<span class="line">      data: {</span>
<span class="line">        accessToken:</span>
<span class="line">          &quot;eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2YWJkNTlkOTAxNzQwZDliYmI3ZjczODBhZDkyNzNhIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZGVwdElkIjoxLCJkYXRhU2NvcGUiOjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNjkxMTAzMzgyfQ.P4cuIfmPepl3HuguhMS7NXn5a7IUPpsLbmtA_rHOhHk&quot;,</span>
<span class="line">        tokenType: &quot;Bearer&quot;,</span>
<span class="line">        refreshToken: null,</span>
<span class="line">        expires: null,</span>
<span class="line">      },</span>
<span class="line">      msg: &quot;一切ok&quot;,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://gitee.com/youlaiorg/vue3-element-admin/blob/master/mock/auth.mock.ts" target="_blank" rel="noopener noreferrer">参考源码</a></p>`,7),c=[i];function t(d,o){return s(),n("div",null,c)}const m=e(l,[["render",t],["__file","2.接口Mock.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/1.%E5%89%8D%E7%AB%AF/4.%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/2.%E6%8E%A5%E5%8F%A3Mock.html","title":"集成Mock","lang":"zh-CN","frontmatter":{"title":"集成Mock","icon":"leaf","order":1,"category":["快速上手","项目简介"],"tag":["项目介绍"]},"headers":[{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"示例代码(登录)","slug":"示例代码-登录","link":"#示例代码-登录","children":[]}],"git":{"createdTime":1722817005000,"updatedTime":1724863355000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"前后端模板/1.前端/4.开发指南/2.接口Mock.md","localizedDate":"2024年8月5日"}');export{m as comp,u as data};
