import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "zh-CN",
  title: "youlai",
  description: "🚀专注构建高效开发应用解决方案的开源社区",
  theme,
  bundler: viteBundler(),
  plugins: [docsearchPlugin({})],
});
