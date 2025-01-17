import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    base: "/",
    dest: "./dist",
    lang: "zh-CN",
    title: "youlai",
    description: '有来官网，覆盖全栈主流技术栈的开源项目',
    theme,
    bundler: viteBundler(),
    plugins: [
        docsearchPlugin({
        }),
    ],
});
