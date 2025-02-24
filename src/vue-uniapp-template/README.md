---
title: 移动端框架
icon: palette
dir:
  order: 1
  collapsible: false
  expanded: true
  link: true
---


<div align="center">
   <img alt="vue-uniapp-template" width="100" height="100" src="/assets/image/youlai-logo.jpg">
   <h3>vue-uniapp-template</h3>
</div>

## 项目简介

[vue-uniapp-template](https://gitee.com/youlaiorg/vue-uniapp-template) 基于 Uni-App、Vue3 和 TypeScript 构建的灵活跨平台移动端模板，使用 VSCode 和 CLI 高效开发模式。


![](https://www.youlai.tech/storage/blog/vue-uniapp-template.jpg)

## 安装步骤

1. 克隆项目代码：
   ```bash
   git clone https://gitee.com/youlaiorg/vue-uniapp-template.git
   ```
2. 进入项目目录：
   ```bash
   cd vue-uniapp-template
   ```
3. 安装依赖：
   ```bash
   npm install
   ```
4. 运行项目：
   ```bash
   npm run dev
   ```

## 功能特性

- **跨平台支持**：一次开发，多端运行（iOS、Android、H5、小程序）。
- **Vue3**：采用最新的 Vue3 版本，享受更好的性能和开发体验。
- **TypeScript**：使用 TypeScript 提供更好的类型检查和代码提示。
- **组件化**：高复用性的组件设计，提高开发效率。
- **丰富的插件**：集成多种常用插件，开箱即用。

## 使用说明

1. **项目结构**：
   ```
   ├── src
   │   ├── assets      # 静态资源
   │   ├── components  # 公共组件
   │   ├── pages       # 页面文件
   │   ├── store       # Vuex 状态管理
   │   ├── utils       # 工具函数
   │   └── App.vue     # 入口文件
   ├── static          # 静态文件
   ├── main.ts         # 主入口文件
   └── ...
   ```

2. **开发规范**：
   - 代码风格遵循 ESLint 规范。
   - 提交信息遵循 Commitizen 规范。

3. **常用命令**：
   - `npm run dev`：运行开发环境。
   - `npm run build`：打包项目。
   - `npm run lint`：代码检查。