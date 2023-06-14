(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{365:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-创建seata数据库和表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建seata数据库和表结构"}},[a._v("#")]),a._v(" 1. 创建Seata数据库和表结构")]),a._v(" "),t("p",[a._v("创建名为 "),t("code",[a._v("seata")]),a._v(" 的数据库，执行项目中 "),t("code",[a._v("docs/seata/seata.sql")]),a._v(" 脚本文件完成 Seata 数据库初始化。("),t("a",{attrs:{href:"https://github.com/seata/seata/blob/develop/script/server/db/mysql.sql",target:"_blank",rel:"noopener noreferrer"}},[a._v("seata.sql 在线地址"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("h2",{attrs:{id:"_2-修改seata配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改seata配置文件"}},[a._v("#")]),a._v(" 2. 修改Seata配置文件")]),a._v(" "),t("p",[a._v("进入 "),t("code",[a._v("nacos配置管理->配置列表->public->seataServer.properties->编辑")]),a._v("\n修改数据库连接为自己的数据库")]),a._v(" "),t("ul",[t("li",[a._v("信息示例如下：")])]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 事务分组配置格式：service.vgroupMapping.[事务分组] = TC集群名称")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("service.vgroupMapping.mall_tx_group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("default")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 事务持久化模式")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("db")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.db.dbType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mysql")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.db.driverClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("com.mysql.cj.jdbc.Driver")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.db.url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("jdbc:mysql://localhost:3306/seata?useUnicode=true&rewriteBatchedStatements=true&serverTimezone=UTC")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.db.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("seata")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("store.db.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("seata")]),a._v("\n")])])]),t("ul",[t("li",[a._v("mall_tx_group 是商城事务分组，default是TC的集群名称。"),t("a",{attrs:{href:"http://seata.io/zh-cn/docs/user/transaction-group.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("事务分组详情点击查看"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"_3-本地启动seata-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地启动seata-server"}},[a._v("#")]),a._v(" 3. 本地启动seata-server")]),a._v(" "),t("p",[a._v("IDEA 打开命令行终端 Terminal，输入 "),t("code",[a._v("cd middleware/seata/bin")]),a._v(" 切换到 Seata 的 bin 目录，执行 seata-server.bat 启动 seata-server 服务。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/05/03/PUWYmCHqnI5uwDz.png",alt:"20220503154226"}})]),a._v(" "),t("p",[a._v("完成启动之后,在Nacos服务列表可以看到seata-server服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/zhangchuan11/images/202304161602510.png",alt:"image-20230416160251878"}})]),a._v(" "),t("p",[a._v("至此本地启动 seata-server 完成。")]),a._v(" "),t("h2",{attrs:{id:"_4-使用本地seata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用本地seata"}},[a._v("#")]),a._v(" 4. 使用本地seata")]),a._v(" "),t("p",[a._v("在 Nacos 控制台配置列表选择共享配置 "),t("code",[a._v("youlai-common.yaml")]),a._v(" 进行编辑，修改seata地址")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/zhangchuan11/images/202304161607359.png",alt:"image-20230416160733873"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);