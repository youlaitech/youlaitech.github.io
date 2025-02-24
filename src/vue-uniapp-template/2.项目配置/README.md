---
title: 项目配置
icon: screwdriver-wrench
dir:
  collapsible: false
  expanded: false
  order: 2
  link: true
category:
  - 项目配置
---

::: tip
本文档介绍如何配置项目 [vue-uniapp-template](https://gitee.com/youlaiorg/vue-uniapp-template)，包括关闭自动类型声明、配置环境变量和设置 ESLint。
:::

## 关闭自动类型声明

为了避免多人协同开发时重复生成类型声明文件，默认情况下自动类型声明功能是关闭的。如果需要开启，可以在 `vue.config.ts` 文件中将 `enabled` 设置为 `true`：

```ts {5} title="src/router/index.ts"
AutoImport({
  imports: ["vue", "uni-app"],
  dts: "src/types/auto-imports.d.ts", // 自动生成的类型声明文件
  eslintrc: {
    enabled: true,  // 开启自动类型声明
  },
}),
```

## 配置环境变量

在项目根目录下创建 `.env` 文件，并添加以下内容：

```plaintext
VUE_APP_API_BASE_URL=https://api.example.com
VUE_APP_TITLE=Vue Uniapp Template
```

在代码中可以通过 `process.env.VUE_APP_API_BASE_URL` 和 `process.env.VUE_APP_TITLE` 访问这些变量。

## 设置 ESLint

ESLint 是一个用于识别和报告 JavaScript 代码中问题的工具。你可以按照以下步骤设置 ESLint：

1. 安装 ESLint 及其相关插件：

```bash
pnpm add eslint eslint-plugin-vue @vue/eslint-config-typescript --save-dev
```

2. 在项目根目录下创建 `.eslintrc.js` 文件，并添加以下内容：

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
```

3. 在 `package.json` 中添加以下脚本：

```json
"scripts": {
  "lint": "eslint --ext .js,.ts,.vue src"
}
```

运行 `pnpm run lint` 来检查代码中的问题。
