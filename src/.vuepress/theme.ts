import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
    author: {
        name: '有来技术',
        url: 'https://gitee.com/youlaiorg'
    },
    logo: "/logo.png",
    repo: "https://gitee.com/youlaiorg",
    docsDir: "src",
    navbarLayout: {
        start: ["Brand"],
        end: ["Search","Links",'Outlook']
      },
    // 导航栏
    navbar,
    // 侧边栏
    sidebar,
    displayFooter: true,
    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,
    // 在这里配置主题提供的插件
    plugins: {
        components: {
            components: ["Badge", "VPCard"],
        },
        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            plantuml: true,
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
            tabs: true,
            tasklist: true,
            vPre: true,
          
        },

    },
});
