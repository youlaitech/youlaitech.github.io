import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,d}from"./app-Bwx0Y7RC.js";const s={},r=d(`<h1 id="java-规范" tabindex="-1"><a class="header-anchor" href="#java-规范"><span>Java 规范</span></a></h1><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h2><h3 id="包名" tabindex="-1"><a class="header-anchor" href="#包名"><span>包名</span></a></h3><ul><li>统一使用单数形式，全小写</li></ul><h3 id="类名" tabindex="-1"><a class="header-anchor" href="#类名"><span>类名</span></a></h3><ul><li>驼峰命名+首字母大写</li></ul><h3 id="实体类名" tabindex="-1"><a class="header-anchor" href="#实体类名"><span>实体类名</span></a></h3><table><thead><tr><th>名称</th><th>规则</th></tr></thead><tbody><tr><td>entity</td><td>映射数据库实体，和数据表字段完全一致</td></tr><tr><td>query</td><td>查询传参(查询参数大于5个建议封装query对象)</td></tr><tr><td>form</td><td>前端表单数据传参</td></tr><tr><td>dto</td><td>RPC调用传参</td></tr><tr><td>vo</td><td>返回前端显示</td></tr></tbody></table><p><strong>dto、vo实体类名带后缀且全大写</strong></p><ul><li><p>正例：UserDTO、UserVO</p></li><li><p>反例：UserDto、UserVo</p></li></ul><h3 id="动态排序字段" tabindex="-1"><a class="header-anchor" href="#动态排序字段"><span>动态排序字段</span></a></h3><table><thead><tr><th>名称</th><th>字段名</th><th>值</th></tr></thead><tbody><tr><td>排序字段名</td><td>sortField</td><td>数据库对应列名</td></tr><tr><td>排序规则</td><td>sortRule</td><td>asc:升序;desc:降序</td></tr></tbody></table><h3 id="分页参数" tabindex="-1"><a class="header-anchor" href="#分页参数"><span>分页参数</span></a></h3><table><thead><tr><th>名称</th><th>字段名</th><th>默认值</th></tr></thead><tbody><tr><td>排序字段名</td><td>pageNum</td><td>1</td></tr><tr><td>排序规则</td><td>pageSize</td><td>10</td></tr></tbody></table><h3 id="方法命名" tabindex="-1"><a class="header-anchor" href="#方法命名"><span>方法命名</span></a></h3><blockquote><p>以下命名涵盖了Controller、Service和Mapper层</p></blockquote><table><thead><tr><th>作用域</th><th>示例</th></tr></thead><tbody><tr><td>列表查询</td><td>listUsers</td></tr><tr><td>分页查询</td><td>listUserPages</td></tr><tr><td>单个查询</td><td>getUser/getUserDetail/getUserInfo ...</td></tr><tr><td>新增</td><td>saveUser/insertUser/addUser</td></tr><tr><td>修改</td><td>updateUser</td></tr><tr><td>删除</td><td>deleteUser</td></tr></tbody></table><h3 id="泛型通配符" tabindex="-1"><a class="header-anchor" href="#泛型通配符"><span>泛型通配符</span></a></h3><table><thead><tr><th>名称</th><th>规则</th></tr></thead><tbody><tr><td>E</td><td>Element (在集合中使用，因为集合中存放的是元素)</td></tr><tr><td>T</td><td>Type（Java类）</td></tr><tr><td>K</td><td>Key（键）</td></tr><tr><td>V</td><td>Value（值）</td></tr><tr><td>N</td><td>Number（数值类型）</td></tr><tr><td>？</td><td>不确定的Java类型</td></tr><tr><td>S、U、V</td><td>2nd、3rd、4th types</td></tr></tbody></table><h2 id="方法规范" tabindex="-1"><a class="header-anchor" href="#方法规范"><span>方法规范</span></a></h2><h3 id="禁止service跨域调用mapper" tabindex="-1"><a class="header-anchor" href="#禁止service跨域调用mapper"><span>禁止Service跨域调用Mapper</span></a></h3><ul><li>正例：UserService 直接调用 UserMapper</li><li>反例：UserService 直接调用 DeptMapper</li></ul><h3 id="方法体行数" tabindex="-1"><a class="header-anchor" href="#方法体行数"><span>方法体行数</span></a></h3><p>单个方法体不建议超过50行或一屏，超过建议封装</p><h1 id="api-规范" tabindex="-1"><a class="header-anchor" href="#api-规范"><span>API 规范</span></a></h1><h2 id="restful风格" tabindex="-1"><a class="header-anchor" href="#restful风格"><span>RESTful风格</span></a></h2><p>在RESTful架构中，每个URL代表一种资源，所以不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的&quot;集合&quot;，所以API中的名词也应该使用复数。</p><p><strong>最佳案例</strong></p><table><thead><tr><th>请求名称</th><th>请求方法</th><th>请求路径</th></tr></thead><tbody><tr><td>获取所有用户信息</td><td>GET</td><td>/api/v1/users</td></tr><tr><td>获取标识为1用户信息</td><td>GET</td><td>/api/v1/users/1</td></tr><tr><td>删除标识为1用户信息</td><td>DELETE</td><td>/api/v1/users/1</td></tr><tr><td>新增用户</td><td>POST</td><td>/api/v1/users</td></tr><tr><td>修改标识为1用户信息</td><td>PUT</td><td>/api/v1/users/1</td></tr><tr><td>修改标识为1用户部分信息</td><td>Patch</td><td>/api/v1/users/1</td></tr><tr><td>获取当前登录用户信息</td><td>GET</td><td>/api/v1/users/me</td></tr></tbody></table><h2 id="错误码规范" tabindex="-1"><a class="header-anchor" href="#错误码规范"><span>错误码规范</span></a></h2><p><a href="https://developer.aliyun.com/topic/java2020?utm_content=g_1000113416" target="_blank" rel="noopener noreferrer">Java开发手册【泰山版】</a></p><h1 id="git-规范" tabindex="-1"><a class="header-anchor" href="#git-规范"><span>Git 规范</span></a></h1><h2 id="commit-message的格式规范" tabindex="-1"><a class="header-anchor" href="#commit-message的格式规范"><span>Commit message的格式规范</span></a></h2><blockquote><p>IDEA 安装 Git Commit Template 插件</p></blockquote><ul><li>feat 增加新功能</li><li>fix 修复BUG</li><li>docs 文档/注释</li><li>style 代码风格改变但不影响运行结果(代码格式化、空格和空行调整等)</li><li>refactor 代码重构</li><li>test 测试</li><li>chore 依赖更新/配置更新</li><li>ci 持续集成</li></ul><h2 id="开发分支规范" tabindex="-1"><a class="header-anchor" href="#开发分支规范"><span>开发分支规范</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">[master] &gt; git checkout develop</span>
<span class="line"></span>
<span class="line">[develop] &gt; git add .</span>
<span class="line">[develop] &gt; git commit -m docs(README.md):分支修改项目说明文档</span>
<span class="line">[develop] &gt; git push origin develop</span>
<span class="line">[develop] &gt; git checkout master</span>
<span class="line"></span>
<span class="line">[master] &gt; git merge develop</span>
<span class="line">[master] &gt; git add .</span>
<span class="line">[master] &gt; git commit -m sync:主干同步分支</span>
<span class="line">[master] &gt; git push origin master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[r];function i(n,h){return a(),e("div",null,l)}const o=t(s,[["render",i],["__file","开发规范.html.vue"]]),m=JSON.parse('{"path":"/%E5%8D%95%E4%BD%93%E5%95%86%E5%9F%8E/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%89%8B%E5%86%8C/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html","title":"开发规范","lang":"zh-CN","frontmatter":{"title":"开发规范","icon":"leaf","order":2,"category":["快速上手","项目简介"],"tag":["项目介绍"]},"headers":[{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[{"level":3,"title":"包名","slug":"包名","link":"#包名","children":[]},{"level":3,"title":"类名","slug":"类名","link":"#类名","children":[]},{"level":3,"title":"实体类名","slug":"实体类名","link":"#实体类名","children":[]},{"level":3,"title":"动态排序字段","slug":"动态排序字段","link":"#动态排序字段","children":[]},{"level":3,"title":"分页参数","slug":"分页参数","link":"#分页参数","children":[]},{"level":3,"title":"方法命名","slug":"方法命名","link":"#方法命名","children":[]},{"level":3,"title":"泛型通配符","slug":"泛型通配符","link":"#泛型通配符","children":[]}]},{"level":2,"title":"方法规范","slug":"方法规范","link":"#方法规范","children":[{"level":3,"title":"禁止Service跨域调用Mapper","slug":"禁止service跨域调用mapper","link":"#禁止service跨域调用mapper","children":[]},{"level":3,"title":"方法体行数","slug":"方法体行数","link":"#方法体行数","children":[]}]},{"level":2,"title":"RESTful风格","slug":"restful风格","link":"#restful风格","children":[]},{"level":2,"title":"错误码规范","slug":"错误码规范","link":"#错误码规范","children":[]},{"level":2,"title":"Commit message的格式规范","slug":"commit-message的格式规范","link":"#commit-message的格式规范","children":[]},{"level":2,"title":"开发分支规范","slug":"开发分支规范","link":"#开发分支规范","children":[]}],"git":{"createdTime":1722531545000,"updatedTime":1723472108000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":3}]},"readingTime":{"minutes":2.35,"words":705},"filePathRelative":"单体商城/移动端手册/开发规范.md","localizedDate":"2024年8月1日"}');export{o as comp,m as data};
