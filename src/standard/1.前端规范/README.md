---
title: 项目介绍
icon: palette
index: false
dir:
  order: 1
  collapsible: false
  expanded: true
  link: true
category:
  - 开发规范
tag:
  - 前端规范
---


## 前端规范手册

### 组件和方法命名

在 Vue 项目中，组件和方法的命名应遵循以下规则：

1. **组件命名**：
   - 使用 PascalCase（大驼峰命名法），例如：`MyComponent`。
   - 组件文件名应与组件名一致，例如：`MyComponent.vue`。

2. **方法命名**：
   - 使用 camelCase（小驼峰命名法），例如：`fetchData`。
   - 方法名应简洁明了，描述其功能。


### 导入顺序

在导入模块时，应遵循以下顺序：

1. **第三方库**：
   - 例如：`import Vue from 'vue';`

2. **全局样式或配置**：
   - 例如：`import '@/styles/global.css';`

3. **工具函数或帮助方法**：
   - 例如：`import { formatDate } from '@/utils/date';`

4. **组件**：
   - 例如：`import MyComponent from '@/components/MyComponent.vue';`

5. **本地文件**：
   - 例如：`import data from './data.json';`

### CSS 命名规范

在编写 CSS 时，应遵循以下命名规范：

1. **BEM 命名法**：
   - BEM（Block Element Modifier）是一种命名约定，旨在提高代码的可读性和可维护性。
   - 例如：`.block__element--modifier`。

2. **类名应简洁明了**：
   - 类名应描述其作用，避免使用无意义的名称。
   - 例如：`.header`、`.button-primary`。

3. **避免使用 ID 选择器**：
   - 尽量避免使用 ID 选择器，因为其优先级较高，可能会导致样式覆盖问题。

4. **使用变量和混合**：
   - 在预处理器（如 Sass 或 Less）中使用变量和混合，以提高样式的可维护性。
   - 例如：
     ```scss
     $primary-color: #3498db;

     .button {
       background-color: $primary-color;
     }
     ```

通过遵循以上规范，可以提高代码的可读性和可维护性，确保项目的一致性和可扩展性。

