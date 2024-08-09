import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/指南/",
  "/开源商城/",
  {
    text: "在线预览",
    children: [
      { text: "mall-admin", link: "https://admin.youlai.tech/" },
      { text: "mall-app", link: "http://app.youlai.tech/" },
      { text: "vue3-element-admin", link: "http://vue3.youlai.tech/" },
    ],
  },


  {
    text: "生态",
    children: [
      {
        text: "前后端分离模板",
        children: [
          { text: "vue3-element-admin", link: "https://gitee.com/youlaiorg/vue3-element-admin" },
          { text: "youlai-boot", link: "https://gitee.com/youlaiorg/youlai-boot" },

        ],
      },
      {
        text: "有来商城",
        children: [
          {
            text: "youlai-mall",
            link: "https://gitee.com/youlaitech/youlai-mall",
          },
          {
            text: "mall-admin",
            link: "https://gitee.com/youlaiorg/mall-admin-web",
          },
          { text: "mall-app", link: "https://gitee.com/youlaiorg/mall-app" },
        ],
      },

      {
        text: "微服务框架",
        children: [
          { text: "youlai-cloud", link: "https://gitee.com/youlaiorg/youlai-cloud" },

        ],
      },
  
    ],
  },
  { text: "💖支持", link: "/支持/README.md" },
  { text: "Gitee", link: "https://gitee.com/youlaiorg" },
  { text: "Github", link: "https://github.com/youlaitech" },
]);
