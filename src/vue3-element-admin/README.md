---
title: 前端
icon: palette
index: false
dir:
  order: 1
  collapsible: false
  expanded: true
---

## 项目介绍

vue3-element-admin 是基于 Vue3 + Vite5+ TypeScript5 + Element-Plus +
Pinia 等主流技术栈构建的免费开源的中后台管理的前端模板（配套 Java 后端
源码）。

**在线预览：** [https://vue3.youlai.tech/](https://vue3.youlai.tech/)
::: tip

- 如果你对 vue3-element-admin 框架完全陌生，请从我们的
  [快速上手](../get-started/README.md) 开始。

- 如果你熟悉上述内容，请[从这里开始](./intro/intro.md)。

:::

## 项目特色

- **简洁易用**：基于
  [vue-element-admin](https://gitee.com/panjiachen/vue-element-admin)
  升级的 Vue3 版本，无过渡封装 ，易上手。

- **数据交互**：同时支持本地 `Mock` 和线上接口，配套
  [Java 后端源码](https://gitee.com/youlaiorg/youlai-boot)和[在线接口文档](https://www.apifox.cn/apidoc/shared-195e783f-4d85-4235-a038-eec696de4ea5)。

- **权限管理**：用户、角色、菜单、字典、部门等完善的权限系统功能。

- **基础设施**：动态路由、按钮权限、国际化、代码规范、Git 提交规范、常
  用组件封装。

- **持续更新**：项目持续开源更新，实时更新工具和依赖。

## 寻求帮助

如果你在使用过程中遇到了 bug，可以
[提一个 issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues)。
如果你遇到了使用问题，可以
[开一个讨论](https://github.com/orgs/vuepress-theme-hope/discussions)
或者 [加入 QQ 群](https://jq.qq.com/?_wv=1027&k=rATJyxGK) 进行反馈。

## 项目目录

```bash
|---- licenses                 # 许可相关文件
|---- mock                     # 模拟数据或服务，用于测试和开发
|---- public                   # 公共资源文件，通常包括静态资源，如图片、字体等
|---- src                      # 源代码目录
        |-- api                # API接口文件，定义与后端交互的逻辑
        |-- assets             # 资产文件，如图片和字体
        |-- components         # Vue组件，封装了应用的可复用UI元素
        |-- directive          # 自定义指令，用于增强Vue的功能
        |-- enums              # 枚举类型定义
        |-- lang               # 语言相关文件，通常包含翻译和国际化设置
        |-- layout             # 布局组件，定义应用的整体结构
        |-- plugins            # 插件，扩展应用的功能
        |-- router             # 路由配置文件，定义页面导航
        |-- store              # 状态管理文件，使用Pinia来管理应用状态
        |-- styles             # 样式文件，包括CSS、SCSS等
        |-- types              # TypeScript类型定义
        |-- utils              # 工具函数，提供通用的辅助功能
        |-- views              # 视图组件，定义应用的页面内容
        |-- App.vue            # 应用的根组件
        |-- main.ts            # 应用的入口文件
        |-- settings.ts        # 应用的配置设置
|---- .env.development         # 开发环境配置
|---- .env.production          # 生产环境配置
|---- .eslintignore            # ESLint忽略的文件和目录
|---- .eslintrc-auto-import.json # 自动导入的ESLint配置
|---- .eslintrc.cjs            # ESLint配置文件
|---- .gitignore               # Git忽略的文件和目录
|---- .prettierignore          # Prettier忽略的文件和目录
|---- .prettierrc.cjs          # Prettier配置文件
|---- .stylelintignore         # Stylelint忽略的文件和目录
|---- .stylelintrc.cjs         # Stylelint配置文件
|---- CHANGELOG.md             # 更新日志，记录版本变更和更新内容
|---- commitlint.config.cjs    # Commitlint配置文件，控制提交信息的格式
|---- index.html               # 应用的HTML模板文件
|---- LICENSE                  # 软件许可协议
|---- package.json             # 项目依赖和脚本配置文件
|---- pnpm-lock.yaml           # pnpm锁定的依赖版本信息
|---- README.en-US.md          # 英文版README文档
|---- README.md                # 项目的主README文档
|---- tsconfig.json            # TypeScript配置文件
|---- uno.config.ts            # UnoCSS配置文件
|---- vite.config.ts           # Vite构建工具配置文件

```
