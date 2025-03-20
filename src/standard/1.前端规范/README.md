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
| **方法类别**          | **命名规则**                 | **示例**                                 | **适用场景**                             | **最佳实践**                                                                 |
|-----------------------|----------------------------|----------------------------------------|----------------------------------------|----------------------------------------------------------------------------|
| **DOM事件处理**        | `handle[元素][动作]`          | `handleSubmitClick`                   | 按钮点击/表单提交                        | 保留原生事件参数：`(e: MouseEvent)`                                         |
| **自定义事件处理**      | `handle[组件][事件]`          | `handleUserSearch`                     | 子组件触发的搜索事件                      | 使用`@on-event-name`格式定义自定义事件                                       |
| **数据获取**           | `fetch[资源]Data`            | `fetchUserList`                        | API数据请求                             | 配合`loading`状态：`const userListLoading = ref(false)`                     |
| **数据提交**           | `submit[表单类型]`           | `submitLoginForm`                      | 表单提交操作                            | 使用`async/await`处理异步                                                   |
| **状态更新**           | `update[状态名]` / `set[状态名]` | `setDarkMode`                          | 切换夜间模式                            | 复杂更新应包含业务逻辑：`updatePagination()`                                |
| **验证方法**           | `validate[字段名]`           | `validateEmailFormat`                  | 表单字段校验                            | 返回布尔值或错误消息                                                        |
| **组件暴露方法**       | `[动作] + 名词`              | `resetForm`                            | 通过`defineExpose`暴露的方法              | 使用动词开头：`refreshData`                                                 |
| **异步操作**           | `[动作]Async`                | `uploadFileAsync`                      | 文件上传等异步任务                       | 始终包含错误处理逻辑                                                        |
| **工具方法**           | `[功能描述]`                 | `formatCurrency`                       | 通用工具函数                            | 使用纯函数实现，添加完整类型注解                                            |
| **副作用操作**         | `handle[效果][动作]`          | `handleRouteChange`                    | 路由变化监听                            | 在`onMounted`/`onUnmounted`中管理生命周期                                    |
| **状态切换**           | `toggle[状态]`               | `toggleSidebar`                        | 显示/隐藏切换操作                       | 使用布尔值控制状态变化                                                       |
| **批量操作**           | `batch[动作]`                | `batchDeleteItems`                     | 多选删除操作                            | 操作前进行二次确认                                                          |
| **数据处理**           | `process[数据类型]`           | `processCSVData`                       | CSV文件解析                             | 返回处理后的标准数据结构                                                     |
| **缓存操作**           | `cache[资源]`                | `cacheUserProfile`                     | 本地存储管理                            | 设置有效期限，配合序列化操作                                                 |
| **权限校验**           | `check[权限类型]`             | `checkAdminAccess`                     | 路由守卫/功能权限控制                    | 返回
---

## 导入顺序规范

```
+ 1. 框架核心
+ 2. 类型定义
+ 3. 状态管理
+ 4. API服务
+ 5. UI组件
+ 6. 工具模块
+ 7. 静态资源

```

- **最佳实践**

```typescript
// 框架核心
import { defineOptions } from "vue";

// 组合式API
import { ref, reactive } from "vue";

// 类型定义（集中前置）
import type { UserForm, UserPageQuery, UserPageVO } from "@/api/system/user";

// Store (状态管理)
import { useDictStore } from "@/store";

// API 服务 (按模块分组)
import UserAPI from "@/api/system/user";
import DeptAPI from "@/api/system/dept";
import RoleAPI from "@/api/system/role";

// 子组件 (按父子关系)
import DeptTree from "./components/DeptTree.vue";
import UserImport from "./components/UserImport.vue";

// 组件元数据 (优先声明)
defineOptions({
  name: "User",
  inheritAttrs: false,
});

// Store 实例化 (紧接声明)
const dictStore = useDictStore();

// DOM 引用 (前置声明)
const queryFormRef = ref<InstanceType<typeof ElForm>>();
const userFormRef = ref<InstanceType<typeof ElForm>>();

// 查询相关状态
const queryParams = reactive<UserPageQuery>({
  pageNum: 1,
  pageSize: 10,
});

// 分页数据
const pageData = ref<UserPageVO[]>([]);
const total = ref(0);
const loading = ref(false);

// 对话框状态
const dialog = reactive({
  visible: false,
  title: "新增用户",
});

// 表单数据 (带初始化)
const formData = reactive<UserForm>({
  status: 1,
});

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

