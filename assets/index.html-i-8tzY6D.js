import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as t,o as s}from"./app-BTChglg9.js";const n={};function l(o,e){return s(),a("div",null,e[0]||(e[0]=[t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>在本地开发环境中，需要配置项目的数据库、Redis、MinIO 等连接信息，以便项目正常运行。</p></div><h2 id="配置-token-有效期" tabindex="-1"><a class="header-anchor" href="#配置-token-有效期"><span>配置 Token 有效期</span></a></h2><p>找到 <code>src/main/resources/application-*.yml</code> 修改 JWT Token 有效期 ，</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="application-dev.yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">security</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  jwt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 访问令牌 有效期(单位：秒)，默认 1 小时，-1 表示永不过期</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    access-token-time-to-live</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3600</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 刷新令牌有效期(单位：秒)，默认 7 天，-1 表示永不过期</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    refresh-token-time-to-live</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">604800</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-mysql" tabindex="-1"><a class="header-anchor" href="#配置-mysql"><span>配置 MySQL</span></a></h2><p>在 <code>application-dev.yml</code> 文件中，将 MySQL 的连接信息替换为本地环境配置，例如数据库地址、用户名和密码。默认端口是 <code>3306</code>，默认用户名和密码是 <code>root/123456</code>，请根据实际情况修改。</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/23/af082081a6c6162818325b10fe526e1f.png" alt="" loading="lazy"></p><hr><h2 id="配置-redis" tabindex="-1"><a class="header-anchor" href="#配置-redis"><span>配置 Redis</span></a></h2><p>在 <code>application-dev.yml</code> 文件中，将 Redis 的地址和密码替换为本地环境配置。如果本地 Redis 没有设置密码，直接删除或注释掉 <code>password</code> 配置，避免连接失败。</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/23/099fd01a612b013f64473bb606da3857.png" alt="" loading="lazy"></p><h2 id="配置-minio-可选" tabindex="-1"><a class="header-anchor" href="#配置-minio-可选"><span>配置 MinIO (可选)</span></a></h2><p>如果项目中使用了文件上传服务，请在 <code>application-dev.yml</code> 文件中修改 MinIO 的连接信息为本地环境配置，包括地址、用户名和密码。例如，默认端口为 <code>9000</code>，默认用户名和密码为 <code>minioadmin/minioadmin</code>，请根据实际情况调整。</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/23/e2b4da98809b4a6ba0d812530827dbc8.png" alt="" loading="lazy"></p><hr><h2 id="配置-xxl-job-可选" tabindex="-1"><a class="header-anchor" href="#配置-xxl-job-可选"><span>配置 Xxl-Job (可选)</span></a></h2><p>如果项目中需要使用 XXL-Job，请在 <code>application-dev.yml</code> 文件中开启配置：</p><p><img src="https://www.youlai.tech/storage/blog/2025/02/23/c37d3ba251714e688caada0483706a1e.png" alt="" loading="lazy"></p>`,18)]))}const r=i(n,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/youlai-boot/2.%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE/","title":"项目配置","lang":"zh-CN","frontmatter":{"title":"项目配置","icon":"screwdriver-wrench","dir":{"collapsible":false,"expanded":true,"order":2,"link":true},"category":["项目配置"],"description":"提示 在本地开发环境中，需要配置项目的数据库、Redis、MinIO 等连接信息，以便项目正常运行。 配置 Token 有效期 找到 src/main/resources/application-*.yml 修改 JWT Token 有效期 ， 配置 MySQL 在 application-dev.yml 文件中，将 MySQL 的连接信息替换为本地环...","head":[["meta",{"property":"og:url","content":"https://www.youlai.tech/youlai-boot/2.%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE/"}],["meta",{"property":"og:site_name","content":"youlai"}],["meta",{"property":"og:title","content":"项目配置"}],["meta",{"property":"og:description","content":"提示 在本地开发环境中，需要配置项目的数据库、Redis、MinIO 等连接信息，以便项目正常运行。 配置 Token 有效期 找到 src/main/resources/application-*.yml 修改 JWT Token 有效期 ， 配置 MySQL 在 application-dev.yml 文件中，将 MySQL 的连接信息替换为本地环..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.youlai.tech/storage/blog/2025/02/23/af082081a6c6162818325b10fe526e1f.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-28T16:19:25.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-28T16:19:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目配置\\",\\"image\\":[\\"https://www.youlai.tech/storage/blog/2025/02/23/af082081a6c6162818325b10fe526e1f.png\\",\\"https://www.youlai.tech/storage/blog/2025/02/23/099fd01a612b013f64473bb606da3857.png\\",\\"https://www.youlai.tech/storage/blog/2025/02/23/e2b4da98809b4a6ba0d812530827dbc8.png\\",\\"https://www.youlai.tech/storage/blog/2025/02/23/c37d3ba251714e688caada0483706a1e.png\\"],\\"dateModified\\":\\"2025-02-28T16:19:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有来技术\\",\\"url\\":\\"https://gitee.com/youlaiorg\\"}]}"]]},"headers":[{"level":2,"title":"配置 Token 有效期","slug":"配置-token-有效期","link":"#配置-token-有效期","children":[]},{"level":2,"title":"配置 MySQL","slug":"配置-mysql","link":"#配置-mysql","children":[]},{"level":2,"title":"配置 Redis","slug":"配置-redis","link":"#配置-redis","children":[]},{"level":2,"title":"配置 MinIO (可选)","slug":"配置-minio-可选","link":"#配置-minio-可选","children":[]},{"level":2,"title":"配置 Xxl-Job (可选)","slug":"配置-xxl-job-可选","link":"#配置-xxl-job-可选","children":[]}],"git":{"createdTime":1740305599000,"updatedTime":1740759565000,"contributors":[{"name":"Ray.Hao","username":"Ray.Hao","email":"1490493387@qq.com","commits":3,"url":"https://github.com/Ray.Hao"}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"youlai-boot/2.项目配置/README.md","localizedDate":"2025年2月23日","autoDesc":true}');export{r as comp,c as data};
