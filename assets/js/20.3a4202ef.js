(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{358:function(a,t,s){"use strict";s.r(t);var n=s(4),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"部署声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署声明"}},[a._v("#")]),a._v(" 部署声明")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("名称")]),a._v(" "),t("th",[a._v("版本")]),a._v(" "),t("th",[a._v("IP")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("MinIO")]),a._v(" "),t("td",[a._v("8.3.7")]),a._v(" "),t("td",[a._v("192.168.10.100")])])])]),a._v(" "),t("h2",{attrs:{id:"官方链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方链接"}},[a._v("#")]),a._v(" 官方链接")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("名称")]),a._v(" "),t("th",[a._v("地址")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("官方文档")]),a._v(" "),t("td",[t("a",{attrs:{href:"http://docs.minio.org.cn/docs/master/minio-docker-quickstart-guide",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://docs.minio.org.cn/docs/master/minio-docker-quickstart-guide"),t("OutboundLink")],1)])])])]),a._v(" "),t("p",[t("strong",[a._v("官方部署教程")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://oss.youlai.tech/blog/1649338162818-2942706c-485f-4bc6-a7c2-f9c37dc0ec03.png",alt:"youlai minio"}})]),a._v(" "),t("h2",{attrs:{id:"minio部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minio部署"}},[a._v("#")]),a._v(" MinIO部署")]),a._v(" "),t("p",[t("strong",[a._v("1. 拉取镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull quay.io/minio/minio\n")])])]),t("p",[t("strong",[a._v("2. 创建挂载目录")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /mnt/minio/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("data,config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("strong",[a._v("3. 创建和启动容器")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v(":9001 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" minio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mnt/minio/data:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mnt/minio/config:/root/.minio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MINIO_ROOT_USER=minioadmin"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MINIO_ROOT_PASSWORD=minioadmin"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  quay.io/minio/minio server /data --console-address "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('":9001"')]),a._v("\n")])])]),t("ul",[t("li",[a._v('-e "MINIO_ROOT_USER=minioadmin" ： MinIO控制台用户名')]),a._v(" "),t("li",[a._v('-e "MINIO_ROOT_PASSWORD=minioadmin" ：MinIO控制台密码')])]),a._v(" "),t("p",[t("strong",[a._v("4. 访问MinIO控制台")])]),a._v(" "),t("p",[a._v("控制台地址： "),t("a",{attrs:{href:"http://192.168.10.100:9001",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://192.168.10.100:9001"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("用户名/密码： minioadmin/minioadmin")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://oss.youlai.tech/blog/20220522145239.png",alt:"youlai-mall minio"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);