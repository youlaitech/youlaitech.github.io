import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  hostname: "https://www.youlai.tech",
  logo: "/logo.png",
  repo: "https://github.com/youlaitech/vue3-element-admin",
  repoLabel: "GitHub",
  repoDisplay: true,
  fullscreen: false,
  navbarLayout: {
    start: ["Brand"],
    end: ["Links", "Search", "Repo", "Outlook"],
  },
  docsDir: "src",
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  displayFooter: true,

  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    include: true,
    mark: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    figure: false,
    imgLazyload: true,
    imgSize: true,
    tabs: true,
    codeTabs: true,
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard","BiliBili","VPBanner"],
    },

    icon: {
      // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
      assets: "fontawesome-with-brands",
    },
  },
  author: {
    name: "有来技术",
    url: "https://gitee.com/youlaiorg",
  },
});
