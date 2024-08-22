---
title: 本地Mock
icon: leaf
order: 5
category:
  - 快速上手
  - 项目简介
tag:
  - 项目介绍
---
## 实现原理
项目集成[vite-plugin-mock-dev-server](https://vite-plugin-mock-dev-server.netlify.app/guide/usage)
## 使用方法
1. 打开mock服务
   ```bash
   配置文件:.env.development
   VITE_MOCK_DEV_SERVER = true
   ```
2. 在`mock`文件夹下创建`*.mock.ts`文件
3. 在`*.mock.ts`文件中编写mock数据
## 示例代码(登录)
```
import { defineMock } from "./base";
export default defineMock([
  {
    url: "auth/login",
    method: ["POST"],
    body: {
      code: "00000",
      data: {
        accessToken:
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2YWJkNTlkOTAxNzQwZDliYmI3ZjczODBhZDkyNzNhIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZGVwdElkIjoxLCJkYXRhU2NvcGUiOjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNjkxMTAzMzgyfQ.P4cuIfmPepl3HuguhMS7NXn5a7IUPpsLbmtA_rHOhHk",
        tokenType: "Bearer",
        refreshToken: null,
        expires: null,
      },
      msg: "一切ok",
    },
  },
]);
```
[参考源码](https://gitee.com/youlaiorg/vue3-element-admin/blob/master/mock/auth.mock.ts)
