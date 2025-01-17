import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/前后端模板/",
  "/基础框架/",
  "/微服务商城/",
  {
    text: "链接",
    children: [
      {
        text: "在线预览",
        children: [
          { text: "vue3-element-admin", link: "http://vue.youlai.tech/" },
          { text: "vue-uniapp-template", link: "https://www.youlai.tech/app" },
          { text: "youlai-mall", link: "https://www.youlai.tech/mall" },],
      },
      {
        text: "源码地址",
        children: [
          { text: "Gitee", link: "https://admin.youlai.tech/" },
          { text: "Github", link: "https://github.com/youlaitech" },
          { text: "GitCode", link: "https://gitcode.com/youlai" },
        ],
      },
    
    ],
  },
  
  { text: "💖支持", link: "/support/README.md" }
]);
