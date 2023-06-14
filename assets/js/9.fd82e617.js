(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(t,a,s){"use strict";s.r(a);var e=s(4),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-中间件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-中间件安装"}},[t._v("#")]),t._v(" 1. 中间件安装")]),t._v(" "),a("blockquote",[a("p",[t._v("为了避免数据和线上环境冲突，MySQL 和 Redis 必装，其他不安装可默认使用有来线上环境(🔴必装 ⚪可选)")])]),t._v(" "),a("ul",[a("li",[t._v("🔴 MySQL   "),a("RouterLink",{attrs:{to:"/01.指南/03.项目部署/02.MySQL部署.html"}},[t._v("Linux部署")])],1),t._v(" "),a("li",[t._v("🔴 Redis    "),a("RouterLink",{attrs:{to:"/01.指南/03.项目部署/03.Redis部署.html"}},[t._v("Linux部署")])],1),t._v(" "),a("li",[t._v("⚪ RabbitMQ    "),a("RouterLink",{attrs:{to:"/01.指南/03.项目部署/03.Redis部署.html"}},[t._v("Linux部署")])],1),t._v(" "),a("li",[t._v("⚪ Seata    "),a("RouterLink",{attrs:{to:"/011.中间件/00.seata本地启动.html"}},[t._v("本地启动")]),t._v("   |  "),a("RouterLink",{attrs:{to:"/01.指南/03.项目部署/06.Seata部署.html"}},[t._v("Linux部署")])],1),t._v(" "),a("li",[t._v("⚪ Sentinel   "),a("a",{attrs:{href:""}},[t._v("本地启动")]),t._v("   |  "),a("a",{attrs:{href:""}},[t._v("Linux部署")])]),t._v(" "),a("li",[t._v("⚪ Canal    "),a("a",{attrs:{href:""}},[t._v("本地启动")]),t._v("   |  "),a("a",{attrs:{href:""}},[t._v("Linux部署")])])]),t._v(" "),a("h2",{attrs:{id:"_2-数据库创建和数据初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库创建和数据初始化"}},[t._v("#")]),t._v(" 2. 数据库创建和数据初始化")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("系统数据库")])]),t._v(" "),a("p",[t._v("进入 "),a("code",[t._v("docs/sql")]),t._v(" 目录 ， 根据 MySQL 版本选择对应的脚本；")]),t._v(" "),a("p",[t._v("先执行 "),a("code",[t._v("database.sql")]),t._v(" 完成数据库的创建；")]),t._v(" "),a("p",[t._v("再执行 "),a("code",[t._v("youlai.sql")]),t._v(" 、"),a("code",[t._v("mall_*.sql")]),t._v(" 完成数据表的创建和数据初始化。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Nacos数据库")])]),t._v(" "),a("p",[t._v("创建名为 "),a("code",[t._v("nacos")]),t._v(" 的数据库，执行 "),a("code",[t._v("middleware/nacos/conf/nacos-mysql.sql")]),t._v(" 脚本完成 Nacos 数据库初始化。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Seata数据库")])]),t._v(" "),a("p",[t._v("创建名为 "),a("code",[t._v("seata")]),t._v(" 的数据库，执行 "),a("code",[t._v("docs/seata/seata.sql")]),t._v(" 脚本完成 Seata 数据库初始化。")])])]),t._v(" "),a("h2",{attrs:{id:"_3-naco配置和启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-naco配置和启动"}},[t._v("#")]),t._v(" 3. Naco配置和启动")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Nacos配置持久化至MySQL")])]),t._v(" "),a("blockquote",[a("p",[t._v("Nacos默认使用内嵌的derby数据库，如果需要持久化至MySQL做以下调整即可")])]),t._v(" "),a("p",[t._v("修改项目 "),a("code",[t._v("middleware/nacos/conf/application.properties")]),t._v(" 文件的数据库连接，完整修改示例如下：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.url.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("jdbc:mysql://localhost:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.user.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.password.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("123456")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("导入Nacos配置")])]),t._v(" "),a("p",[t._v("IDEA 打开命令行终端 Terminal，输入 "),a("code",[t._v("cd middleware/nacos/bin")]),t._v(" 切换到 Nacos 的 bin 目录，执行 "),a("code",[t._v("startup -m standalone")]),t._v(" 启动 Nacos 服务；")]),t._v(" "),a("p",[t._v("打开浏览器，地址栏输入 Nacos 控制台的地址 "),a("a",{attrs:{href:"http://localhost:8848/nacos",target:"_blank",rel:"noopener noreferrer"}},[t._v(" http://localhost:8848/nacos"),a("OutboundLink")],1),t._v(" ；")]),t._v(" "),a("p",[t._v("输入用户名/密码：nacos/nacos ；")]),t._v(" "),a("p",[t._v("进入控制台，点击左侧菜单 "),a("code",[t._v("配置管理")]),t._v(" → "),a("code",[t._v("配置列表")]),t._v(" 进入列表页面，点击 "),a("code",[t._v("导入配置")]),t._v(" 选择项目中的 "),a("code",[t._v("docs/nacos/DEFAULT_GROUP.zip")]),t._v(" 文件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("修改Nacos配置")])]),t._v(" "),a("p",[t._v("在 Nacos 控制台配置列表选择共享配置 "),a("code",[t._v("youlai-common.yaml")]),t._v(" 进行编辑，修改 MySQL、Redis、RabbitMQ等中间件信息为您自己本地环境，默认是「有来」线上环境。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("修改Nacos配置中心地址")])]),t._v(" "),a("p",[t._v("批量替换应用的 bootstrap-dev.yml 文件的配置中心地址 "),a("code",[t._v("http://c.youlai.tech:8848")]),t._v(" →"),a("code",[t._v("http://localhost:8848")]),t._v(" ，默认是「有来」线上的配置中心地址。")])])]),t._v(" "),a("h2",{attrs:{id:"_4-微服务启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-微服务启动"}},[t._v("#")]),t._v(" 4. 微服务启动")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("youlai-gateway")]),t._v(" 模块的启动类 GatewayApplication 启动网关；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("youlai-auth")]),t._v(" 模块的启动类 AuthApplication 启动认证中心；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("youlai-admin")]),t._v("  → "),a("code",[t._v("admin-boot")]),t._v(" 模块的启动类 AdminApplication 启动系统服务；")])]),t._v(" "),a("li",[a("p",[t._v("至此完成基础服务的启动，商城服务按需启动，启动方式和 "),a("code",[t._v("youlai-admin")]),t._v(" 一致；")])]),t._v(" "),a("li",[a("p",[t._v("访问接口文档地址测试: "),a("a",{attrs:{href:"http://localhost:9999/doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9999/doc.html"),a("OutboundLink")],1),t._v(" 。")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);