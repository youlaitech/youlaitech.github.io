---
title: 项目配置
icon: screwdriver-wrench
dir:
  order: 2
  collapsible: false
  link: true
category:
  - 配置
---

## 修改项目名称

要更改项目名称，需要更新两个文件：`index.html` 和 `package.json`。

- **更新 `index.html`**

在 `src/index.html` 文件中，找到 `<title>` 标签，并将其内容替换为新的项目名称。

- **更新 `package.json`**

在 `package.json` 文件中，找到 `name` 字段，并将其值替换为新的项目名称。

## 开启 Mock

在开发环境中，可以使用 Mock 数据模拟后端接口，方便前端开发和调试。

本项目已集成 vite-plugin-mock-dev-server。默认连接线上接口，如需开启 Mock 服务，只需修改配置文件：

在 .env.development 文件中，将 VITE_MOCK_DEV_SERVER 设置为 true：

```bash
VITE_MOCK_DEV_SERVER=true
```
