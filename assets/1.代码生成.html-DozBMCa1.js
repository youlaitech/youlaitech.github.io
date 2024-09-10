import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,b as e,d as t,o as p}from"./app-BWs6c9AS.js";const o="/assets/image/generator_edit_config.png",l={},c=e("p",null,"本教程将指导你如何使用代码生成。",-1),i=t('<h2 id="代码生成" tabindex="-1"><a class="header-anchor" href="#代码生成"><span>代码生成</span></a></h2><h3 id="_1-代码生成器" tabindex="-1"><a class="header-anchor" href="#_1-代码生成器"><span>1. 代码生成器</span></a></h3><p>代码生成器是系统自带的，可以生成前后端代码，包括：控制器、服务、实体类 、前端页面、前端路由、菜单、按钮、表单、列表、查询条件等。</p><h3 id="_2-代码生成器使用" tabindex="-1"><a class="header-anchor" href="#_2-代码生成器使用"><span>2. 代码生成器使用</span></a></h3><ol><li>导入要生成的表,下面是例子表</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>sys_device<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span></span>\n<span class="line">  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token identifier"><span class="token punctuation">`</span>type_code<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;类型&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;修改时间&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span></span>\n<span class="line"><span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;设备信息表&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编辑配置 <img src="'+o+'" alt="图片" loading="lazy"></li><li>预览代码</li><li>生成代码</li><li>运行代码 <ol><li>后端代码运行</li><li>前端代码运行</li></ol></li><li>后续变更</li><li>常见问题</li></ol>',7);function r(k,d){return p(),n("div",null,[c,a(" more "),i])}const _=s(l,[["render",r],["__file","1.代码生成.html.vue"]]),E=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/2.Java%E5%90%8E%E7%AB%AF/2.%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97/1.%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90.html","title":"代码生成","lang":"zh-CN","frontmatter":{"title":"代码生成","icon":"leaf","order":1,"category":["快速上手"],"tag":["项目介绍"]},"headers":[{"level":2,"title":"代码生成","slug":"代码生成","link":"#代码生成","children":[{"level":3,"title":"1. 代码生成器","slug":"_1-代码生成器","link":"#_1-代码生成器","children":[]},{"level":3,"title":"2. 代码生成器使用","slug":"_2-代码生成器使用","link":"#_2-代码生成器使用","children":[]}]}],"git":{"createdTime":1722817005000,"updatedTime":1725938900000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1},{"name":"胡少翔","email":"971366405@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":226},"filePathRelative":"前后端模板/2.Java后端/2.操作指南/1.代码生成.md","localizedDate":"2024年8月5日"}');export{_ as comp,E as data};
