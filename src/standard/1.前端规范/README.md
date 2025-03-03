---
title: 前端规范
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



参考：[2021最新阿里代码规范（前端篇）](https://developer.aliyun.com/article/850913)

## 命名规范

### 文件命名
| 方法类型       | 命名规则       | 示例                      |
|----------------|-------------|---------------------------|
| 组件            | PascalCase.vue      | UserProfile.vue	    |
| 其他            |  全部采用小写方式，以中划线分割       | user-profile.ts、user-avartar.svg         |
---

### 方法命名
| 方法类型       | 命名模式        | 示例                      |
|----------------|-------------|---------------------------|
| 数据获取       | fetchXxx       | `fetchUserList`           |
| 事件处理       | handleXxx      | `handleSubmit`        |
| 状态变更       | updateXxx      | `updateLoadingStatus`     |
| 表单验证         | validate    | `validateEmailFormat`     |
| 工具方法         | 动词+名词	  | `formatCurrency`          |
| 初始化操作         |initializeXxx  | `initializeMap`          |
| 数据处理         |processXxx  | `processImageData`          |
| 权限校验         |checkXxxPermission  | `checkEditPermission`          |
---

## 导入顺序规范

```typescript
// 1. 第三方库
import { ElMessage } from 'element-plus';
import { ref, computed } from 'vue';

// 2. 项目工具类
import { getToken } from '@/utils/auth';

// 3. Store模块
import { useUserStore } from '@/stores/user.ts';

// 4. 类型定义
import type { UserProfile } from '@/types/user.d.ts';

// 5. 父级组件
import AppMain from '@/layout/AppMain/index.vue';

// 6. 同级组件
import ProductCard from './ProductCard.vue';
```

---

## CSS 规范

### BEM规范


BEM（Block、Element、Modifier）是一种命名约定，用于描述组件的结构和状态。

```
// Block: 定义功能模块
.form-container {
  // Element: 使用 __ 连接
  &__item {
    padding: 12px;
  }

  // Modifier: 使用 -- 表示状态
  &__item--disabled {
    opacity: 0.5;
  }

  // 子元素继续使用 BEM
  &__label {
    font-weight: bold;
  }
}

```


### 常用元素单词


| 元素类型       | 命名        | 
|----------------|-------------|
| 导航栏       | navbar       | 
| 侧边栏       | sidebar      | 
| 按钮         | btn      |
| 表单         | form    | 
| 容器         | container	  |
| 包装器       | wrapper	  |

