import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/指南/",
/*   { text: "首页", link: "/" },
  {
    text: "指南",
    prefix: "/指南/",
    link: "/指南/快速上手/README.md",
    children: [
      {
        text: "快速上手",
        link: "快速上手/README.md",
      },
      {
        text: "开发规范",
        link: "开发规范/README.md",
      },
    ],
  }, */
  {
    text: "在线预览",
    children: [
      { text: "mall-admin-web", link: "https://admin.youlai.tech/" },
      { text: "mall-app", link: "http://app.youlai.tech/" },
      { text: "vue3-element-admin", link: "http://vue3.youlai.tech/" },
      { text: "knife4j接口文档", link: "https://api.youlai.tech/doc.html" },
    ],
  },
  {
    text: "生态",
    children: [
      {
        text: "有来商城",
        children: [
          {
            text: "youlai-mall",
            link: "https://gitee.com/youlaitech/youlai-mall",
          },
          {
            text: "mall-admin-web",
            link: "https://gitee.com/youlaiorg/mall-admin-web",
          },
          { text: "mall-app", link: "https://gitee.com/youlaiorg/mall-app" },
          { text: "mall-pc", link: "https://gitee.com/youlaiorg/mall-pc" },
        ],
      },
      {
        text: "其他",
        children: [{ text: "vue3-element-admin", link: "/pages/5d571c/" }],
      },
    ],
  },

  { text: "问答", link: "/pages/9cc27d/" },
  {
    text: "技术栈官网",
    children: [
      {
        text: "后端",
        children: [
          { text: "spring", link: "https://spring.io/" },
          { text: "mybatis-plus", link: "https://baomidou.com/" },
          {
            text: "knife4j",
            link: "https://doc.xiaominfo.com/knife4j/documentation/",
          },
        ],
      },
      {
        text: "前端",
        children: [
          {
            text: "element-plus",
            link: "https://element-plus.gitee.io/zh-CN/",
          },
          {
            text: "vue3",
            link: "https://v3.cn.vuejs.org/guide/introduction.html",
          },
          { text: "vite2", link: "https://cn.vitejs.dev/guide" },
        ],
      },
      {
        text: "移动端",
        children: [{ text: "uni-app", link: "https://uniapp.dcloud.io/" }],
      },
    ],
  },

  { text: "💖支持", link: "/pages/1b12ed/" },
  {
    text: "💛友情链接",
    children: [
      {
        text: "博客园主题awescnb",
        link: "https://github.com/cnbloglabs",
      },
    ],
  },
  { text: "Gitee", link: "https://gitee.com/haoxr" },
]);
