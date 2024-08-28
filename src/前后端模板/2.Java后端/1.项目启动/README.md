---
title: 项目启动
icon: leaf
dir:
  collapsible: false
  expanded: false
  order: 1
  link: true
category:
  - Markdown
tag:
  - 语法
  - Markdown
---

本教程将指导你如何搭建和启动 vue3-element-admin 后端服务。

<!-- more -->

## 环境准备

JDK 17、Maven 3.6 +

## 项目启动

1. **数据库初始化**

   执行 [youlai_boot.sql](sql/mysql8/youlai_boot.sql) 脚本完成数据库创
   建、表结构和基础数据的初始化。

2. **修改配置**

   [application-dev.yml](src/main/resources/application-dev.yml) 修改
   MySQL、Redis 连接配置；

3. **启动项目**

   执行
   [SystemApplication.java](src/main/java/com/youlai/system/SystemApplication.java)
   的 main 方法完成后端项目启动；

   访问接口文档地址
   [http://localhost:8989/doc.html](http://localhost:8989/doc.html) 验
   证项目启动是否成功。

```bash
corepack enable
```
