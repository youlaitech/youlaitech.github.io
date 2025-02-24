import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as t,o as s}from"./app-CGOpEhDM.js";const n={};function l(d,e){return s(),a("div",null,e[0]||(e[0]=[t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>本文档介绍如何启动项目 <a href="https://gitee.com/youlaiorg/vue-uniapp-template" target="_blank" rel="noopener noreferrer">vue-uniapp-template</a>。</p></div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node"><span>安装 Node</span></a></h3><blockquote><p><code>Node.js</code> 是运行 JavaScript 代码的环境，也是 <code>npm</code> 包管理器的依赖。</p></blockquote><p>打开 <a href="https://nodejs.org/zh-cn/download/prebuilt-installer" target="_blank" rel="noopener noreferrer">Node.js 官方下载页面</a>，根据你的操作系统选择合适的版本进行下载，<strong>推荐安装 LTS 版本</strong>，这是长期支持版本，适合开发环境，比如这里选择 <code>v20.18.0(LTS)</code> 版本。</p><p><img src="https://i-blog.csdnimg.cn/direct/50053bf23e6344098f6c09d839c8981f.png" alt="" loading="lazy"></p><p>下载之后，双击安装包根据提示安装，通过以下命令检查是否成功安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://i-blog.csdnimg.cn/direct/c0a3901ca8274491b35ddd17c2db1d78.png" alt="" loading="lazy"></p><h3 id="安装-vscode" tabindex="-1"><a class="header-anchor" href="#安装-vscode"><span>安装 VSCode</span></a></h3><blockquote><p><code>VSCode</code> 是一款非常流行的代码编辑器，特别适合前端开发。</p></blockquote><p>访问 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code 官方网站</a>，根据你的操作系统下载相应版本的 <code>VSCode</code>，下载完成后，双击安装程序并按照提示完成安装。</p><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目"><span>启动项目</span></a></h2><h3 id="拉取代码" tabindex="-1"><a class="header-anchor" href="#拉取代码"><span>拉取代码</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://gitee.com/youlaiorg/vue-uniapp-template.git</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vue-uniapp-template</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="h5端" tabindex="-1"><a class="header-anchor" href="#h5端"><span>H5端</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev:h5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小程序端" tabindex="-1"><a class="header-anchor" href="#小程序端"><span>小程序端</span></a></h3><p>在 HBuilder X 中，点击 <code>运行</code>→<code>运行到小程序模拟器</code>→<code>微信开发者工具</code>。</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/24/df85a41c46bd41d18a67400867cdd50e.png" alt="" loading="lazy"></p><p>项目编译完成后，微信开发者工具会自动启动并呈现页面。</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/24/9c2ceb3651a446178a8b9fc6a34188b1.png" alt="" loading="lazy"></p>`,22)]))}const p=i(n,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/vue-uniapp-template/1.%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A8/","title":"项目启动","lang":"zh-CN","frontmatter":{"title":"项目启动","icon":"play","dir":{"collapsible":false,"expanded":false,"order":1,"link":true},"category":["项目启动"],"description":"提示 本文档介绍如何启动项目 vue-uniapp-template。 环境准备 安装 Node Node.js 是运行 JavaScript 代码的环境，也是 npm 包管理器的依赖。 打开 Node.js 官方下载页面，根据你的操作系统选择合适的版本进行下载，推荐安装 LTS 版本，这是长期支持版本，适合开发环境，比如这里选择 v20.18.0(L...","head":[["meta",{"property":"og:url","content":"https://www.youlai.tech/vue-uniapp-template/1.%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A8/"}],["meta",{"property":"og:site_name","content":"youlai"}],["meta",{"property":"og:title","content":"项目启动"}],["meta",{"property":"og:description","content":"提示 本文档介绍如何启动项目 vue-uniapp-template。 环境准备 安装 Node Node.js 是运行 JavaScript 代码的环境，也是 npm 包管理器的依赖。 打开 Node.js 官方下载页面，根据你的操作系统选择合适的版本进行下载，推荐安装 LTS 版本，这是长期支持版本，适合开发环境，比如这里选择 v20.18.0(L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i-blog.csdnimg.cn/direct/50053bf23e6344098f6c09d839c8981f.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T16:39:18.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-24T16:39:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目启动\\",\\"image\\":[\\"https://i-blog.csdnimg.cn/direct/50053bf23e6344098f6c09d839c8981f.png\\",\\"https://i-blog.csdnimg.cn/direct/c0a3901ca8274491b35ddd17c2db1d78.png\\",\\"https://www.youlai.tech/storage/blog/2025/02/24/df85a41c46bd41d18a67400867cdd50e.png\\",\\"https://www.youlai.tech/storage/blog/2025/02/24/9c2ceb3651a446178a8b9fc6a34188b1.png\\"],\\"dateModified\\":\\"2025-02-24T16:39:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有来技术\\",\\"url\\":\\"https://gitee.com/youlaiorg\\"}]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"安装 Node","slug":"安装-node","link":"#安装-node","children":[]},{"level":3,"title":"安装 VSCode","slug":"安装-vscode","link":"#安装-vscode","children":[]}]},{"level":2,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[{"level":3,"title":"拉取代码","slug":"拉取代码","link":"#拉取代码","children":[]},{"level":3,"title":"H5端","slug":"h5端","link":"#h5端","children":[]},{"level":3,"title":"小程序端","slug":"小程序端","link":"#小程序端","children":[]}]}],"git":{"createdTime":1740356690000,"updatedTime":1740415158000,"contributors":[{"name":"Ray.Hao","username":"Ray.Hao","email":"1490493387@qq.com","commits":2,"url":"https://github.com/Ray.Hao"}]},"readingTime":{"minutes":1.11,"words":332},"filePathRelative":"vue-uniapp-template/1.项目启动/README.md","localizedDate":"2025年2月24日","autoDesc":true}');export{p as comp,c as data};
