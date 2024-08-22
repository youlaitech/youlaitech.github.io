import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,f as a}from"./app-DGuHS-Wy.js";const l={},i=a(`<h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置"><span>系统配置</span></a></h2><div class="language-base line-numbers-mode" data-ext="base" data-title="base"><pre class="language-base"><code><span class="line">配置文件:src---&gt;settings.js</span>
<span class="line">  title: pkg.name, // 系统的标题</span>
<span class="line">  version: pkg.version, // 系统的版本号</span>
<span class="line">  showSettings: true, // 是否显示设置面板</span>
<span class="line">  tagsView: true, // 是否启用标签视图</span>
<span class="line">  fixedHeader: true, // 是否固定头部</span>
<span class="line">  sidebarLogo: true, // 是否显示侧边栏的 logo</span>
<span class="line">  layout: LayoutEnum.LEFT, // 布局方式，LEFT 表示侧边栏在左边</span>
<span class="line">  theme: mediaQueryList.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT, // 根据媒体查询设置主题色，DARK 或 LIGHT</span>
<span class="line">  size: SizeEnum.DEFAULT, // 界面元素的大小，DEFAULT 表示默认大小</span>
<span class="line">  language: LanguageEnum.ZH_CN, // 界面语言，ZH_CN 表示简体中文</span>
<span class="line">  themeColor: &quot;#409EFF&quot;, // 主题颜色的 HEX 值</span>
<span class="line">  watermarkEnabled: false, // 是否启用水印</span>
<span class="line">  watermarkContent: pkg.name, // 水印内容，通常是应用的名称</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口配置" tabindex="-1"><a class="header-anchor" href="#接口配置"><span>接口配置</span></a></h2><div class="language-base line-numbers-mode" data-ext="base" data-title="base"><pre class="language-base"><code><span class="line">配置文件:.env.development</span>
<span class="line"># 应用端口</span>
<span class="line">VITE_APP_PORT = 3000</span>
<span class="line"># 代理前缀</span>
<span class="line">VITE_APP_BASE_API = &#39;/dev-api&#39;</span>
<span class="line"># 线上接口地址</span>
<span class="line"># VITE_APP_API_URL = http://vapi.youlai.tech</span>
<span class="line"># 开发接口地址</span>
<span class="line">VITE_APP_API_URL = http://localhost:8989</span>
<span class="line"># 是否启用 Mock 服务</span>
<span class="line">VITE_MOCK_DEV_SERVER = false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置"><span>代理配置</span></a></h2><div class="language-base line-numbers-mode" data-ext="base" data-title="base"><pre class="language-base"><code><span class="line">配置文件:vite.config.ts</span>
<span class="line">  proxy: {</span>
<span class="line">        /** 代理前缀为 /dev-api 的请求  */</span>
<span class="line">        [env.VITE_APP_BASE_API]: {</span>
<span class="line">          changeOrigin: true,</span>
<span class="line">          // 接口地址 例如：http://vapi.youlai.tech</span>
<span class="line">          target: env.VITE_APP_API_URL,</span>
<span class="line">          rewrite: (path) =&gt;</span>
<span class="line">            path.replace(new RegExp(&quot;^&quot; + env.VITE_APP_BASE_API), &quot;&quot;),</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动导入配置" tabindex="-1"><a class="header-anchor" href="#自动导入配置"><span>自动导入配置</span></a></h2><div class="language-base line-numbers-mode" data-ext="base" data-title="base"><pre class="language-base"><code><span class="line">配置文件:vite.config.ts</span>
<span class="line">  AutoImport({</span>
<span class="line">        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等</span>
<span class="line">        imports: [&quot;vue&quot;, &quot;@vueuse/core&quot;, &quot;pinia&quot;, &quot;vue-router&quot;, &quot;vue-i18n&quot;],</span>
<span class="line">        resolvers: [</span>
<span class="line">          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)</span>
<span class="line">          ElementPlusResolver(),</span>
<span class="line">          // 自动导入图标组件</span>
<span class="line">          IconsResolver({}),</span>
<span class="line">        ],</span>
<span class="line">        eslintrc: {</span>
<span class="line">          // 是否自动生成 eslint 规则，建议生成之后设置 false</span>
<span class="line">          enabled: false,</span>
<span class="line">          // 指定自动导入函数 eslint 规则的文件</span>
<span class="line">          filepath: &quot;./.eslintrc-auto-import.json&quot;,</span>
<span class="line">          globalsPropValue: true,</span>
<span class="line">        },</span>
<span class="line">        // 是否在 vue 模板中自动导入</span>
<span class="line">        vueTemplate: true,</span>
<span class="line">        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)</span>
<span class="line">        dts: false,</span>
<span class="line">        // dts: &quot;src/types/auto-imports.d.ts&quot;,</span>
<span class="line">      }),</span>
<span class="line">      Components({</span>
<span class="line">        resolvers: [</span>
<span class="line">          // 自动导入 Element Plus 组件</span>
<span class="line">          ElementPlusResolver(),</span>
<span class="line">          // 自动注册图标组件</span>
<span class="line">          IconsResolver({</span>
<span class="line">            // element-plus图标库，其他图标库 https://icon-sets.iconify.design/</span>
<span class="line">            enabledCollections: [&quot;ep&quot;],</span>
<span class="line">          }),</span>
<span class="line">        ],</span>
<span class="line">        // 指定自定义组件位置(默认:src/components)</span>
<span class="line">        dirs: [&quot;src/components&quot;, &quot;src/**/components&quot;],</span>
<span class="line">        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)</span>
<span class="line">        dts: false,</span>
<span class="line">        // dts: &quot;src/types/components.d.ts&quot;,</span>
<span class="line">      }),</span>
<span class="line">      Icons({</span>
<span class="line">        // 自动安装图标库</span>
<span class="line">        autoInstall: true,</span>
<span class="line">      }),</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[i];function d(p,v){return e(),n("div",null,c)}const u=s(l,[["render",d],["__file","项目配置.html.vue"]]),m=JSON.parse('{"path":"/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%A8%A1%E6%9D%BF/%E5%89%8D%E7%AB%AF%E6%89%8B%E5%86%8C/%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.html","title":"项目配置","lang":"zh-CN","frontmatter":{"title":"项目配置","icon":"leaf","order":2,"category":["快速上手","项目简介"],"tag":["项目介绍"]},"headers":[{"level":2,"title":"系统配置","slug":"系统配置","link":"#系统配置","children":[]},{"level":2,"title":"接口配置","slug":"接口配置","link":"#接口配置","children":[]},{"level":2,"title":"代理配置","slug":"代理配置","link":"#代理配置","children":[]},{"level":2,"title":"自动导入配置","slug":"自动导入配置","link":"#自动导入配置","children":[]}],"git":{"createdTime":1722873337000,"updatedTime":1723521038000,"contributors":[{"name":"ray","email":"1490493387@qq.com","commits":1},{"name":"zc","email":"2256222053@qq.com","commits":1}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"前后端模板/前端手册/项目配置.md","localizedDate":"2024年8月5日"}');export{u as comp,m as data};
