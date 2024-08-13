import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,f as e}from"./app-C1kw8Era.js";const p={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token operator">|</span>---- licenses                 <span class="token comment"># 许可相关文件</span></span>
<span class="line"><span class="token operator">|</span>---- mock                     <span class="token comment"># 模拟数据或服务，用于测试和开发</span></span>
<span class="line"><span class="token operator">|</span>---- public                   <span class="token comment"># 公共资源文件，通常包括静态资源，如图片、字体等</span></span>
<span class="line"><span class="token operator">|</span>---- src                      <span class="token comment"># 源代码目录</span></span>
<span class="line">        <span class="token operator">|</span>-- api                <span class="token comment"># API接口文件，定义与后端交互的逻辑</span></span>
<span class="line">        <span class="token operator">|</span>-- assets             <span class="token comment"># 资产文件，如图片和字体</span></span>
<span class="line">        <span class="token operator">|</span>-- components         <span class="token comment"># Vue组件，封装了应用的可复用UI元素</span></span>
<span class="line">        <span class="token operator">|</span>-- directive          <span class="token comment"># 自定义指令，用于增强Vue的功能</span></span>
<span class="line">        <span class="token operator">|</span>-- enums              <span class="token comment"># 枚举类型定义</span></span>
<span class="line">        <span class="token operator">|</span>-- lang               <span class="token comment"># 语言相关文件，通常包含翻译和国际化设置</span></span>
<span class="line">        <span class="token operator">|</span>-- layout             <span class="token comment"># 布局组件，定义应用的整体结构</span></span>
<span class="line">        <span class="token operator">|</span>-- plugins            <span class="token comment"># 插件，扩展应用的功能</span></span>
<span class="line">        <span class="token operator">|</span>-- router             <span class="token comment"># 路由配置文件，定义页面导航</span></span>
<span class="line">        <span class="token operator">|</span>-- store              <span class="token comment"># 状态管理文件，使用Pinia来管理应用状态</span></span>
<span class="line">        <span class="token operator">|</span>-- styles             <span class="token comment"># 样式文件，包括CSS、SCSS等</span></span>
<span class="line">        <span class="token operator">|</span>-- types              <span class="token comment"># TypeScript类型定义</span></span>
<span class="line">        <span class="token operator">|</span>-- utils              <span class="token comment"># 工具函数，提供通用的辅助功能</span></span>
<span class="line">        <span class="token operator">|</span>-- views              <span class="token comment"># 视图组件，定义应用的页面内容</span></span>
<span class="line">        <span class="token operator">|</span>-- App.vue            <span class="token comment"># 应用的根组件</span></span>
<span class="line">        <span class="token operator">|</span>-- main.ts            <span class="token comment"># 应用的入口文件</span></span>
<span class="line">        <span class="token operator">|</span>-- settings.ts        <span class="token comment"># 应用的配置设置</span></span>
<span class="line"><span class="token operator">|</span>---- .env.development         <span class="token comment"># 开发环境配置</span></span>
<span class="line"><span class="token operator">|</span>---- .env.production          <span class="token comment"># 生产环境配置</span></span>
<span class="line"><span class="token operator">|</span>---- .eslintignore            <span class="token comment"># ESLint忽略的文件和目录</span></span>
<span class="line"><span class="token operator">|</span>---- .eslintrc-auto-import.json <span class="token comment"># 自动导入的ESLint配置</span></span>
<span class="line"><span class="token operator">|</span>---- .eslintrc.cjs            <span class="token comment"># ESLint配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- .gitignore               <span class="token comment"># Git忽略的文件和目录</span></span>
<span class="line"><span class="token operator">|</span>---- .prettierignore          <span class="token comment"># Prettier忽略的文件和目录</span></span>
<span class="line"><span class="token operator">|</span>---- .prettierrc.cjs          <span class="token comment"># Prettier配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- .stylelintignore         <span class="token comment"># Stylelint忽略的文件和目录</span></span>
<span class="line"><span class="token operator">|</span>---- .stylelintrc.cjs         <span class="token comment"># Stylelint配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- CHANGELOG.md             <span class="token comment"># 更新日志，记录版本变更和更新内容</span></span>
<span class="line"><span class="token operator">|</span>---- commitlint.config.cjs    <span class="token comment"># Commitlint配置文件，控制提交信息的格式</span></span>
<span class="line"><span class="token operator">|</span>---- index.html               <span class="token comment"># 应用的HTML模板文件</span></span>
<span class="line"><span class="token operator">|</span>---- LICENSE                  <span class="token comment"># 软件许可协议</span></span>
<span class="line"><span class="token operator">|</span>---- package.json             <span class="token comment"># 项目依赖和脚本配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- pnpm-lock.yaml           <span class="token comment"># pnpm锁定的依赖版本信息</span></span>
<span class="line"><span class="token operator">|</span>---- README.en-US.md          <span class="token comment"># 英文版README文档</span></span>
<span class="line"><span class="token operator">|</span>---- README.md                <span class="token comment"># 项目的主README文档</span></span>
<span class="line"><span class="token operator">|</span>---- tsconfig.json            <span class="token comment"># TypeScript配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- uno.config.ts            <span class="token comment"># UnoCSS配置文件</span></span>
<span class="line"><span class="token operator">|</span>---- vite.config.ts           <span class="token comment"># Vite构建工具配置文件</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[l];function c(t,i){return a(),n("div",null,o)}const d=s(p,[["render",c],["__file","项目目录.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C/%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.html","title":"项目目录","lang":"zh-CN","frontmatter":{"title":"项目目录","icon":"leaf","order":1,"category":["快速上手","项目简介"],"tag":["项目介绍"]},"headers":[],"git":{"createdTime":1722817005000,"updatedTime":1723521038000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1},{"name":"zc","email":"2256222053@qq.com","commits":1}]},"readingTime":{"minutes":1.56,"words":469},"filePathRelative":"前后端模板/前端手册/项目目录.md","localizedDate":"2024年8月5日"}');export{d as comp,v as data};
