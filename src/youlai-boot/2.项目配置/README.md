---
title: 项目配置
icon: screwdriver-wrench
dir:
  collapsible: false
  expanded: true
  order: 2
  link: true
category:
  - 项目配置
---

:::tip
在本地开发环境中，需要配置项目的数据库、Redis、MinIO 等连接信息，以便项目正常运行。
:::


## 配置 Token 有效期

找到 `src/main/resources/application-*.yml` 修改 JWT Token 有效期 ，  

```yaml {4,6} title="application-dev.yml"
security:
  jwt:
    # 访问令牌 有效期(单位：秒)，默认 1 小时，-1 表示永不过期
    access-token-time-to-live: 3600
    # 刷新令牌有效期(单位：秒)，默认 7 天，-1 表示永不过期
    refresh-token-time-to-live: 604800
```


## 配置 MySQL 

在 `application-dev.yml` 文件中，将 MySQL 的连接信息替换为本地环境配置，例如数据库地址、用户名和密码。默认端口是 `3306`，默认用户名和密码是 `root/123456`，请根据实际情况修改。

![](https://www.youlai.tech/storage/blog/2025/02/23/af082081a6c6162818325b10fe526e1f.png) 

------

## 配置 Redis

在 `application-dev.yml` 文件中，将 Redis 的地址和密码替换为本地环境配置。如果本地 Redis 没有设置密码，直接删除或注释掉 `password` 配置，避免连接失败。

![](https://www.youlai.tech/storage/blog/2025/02/23/099fd01a612b013f64473bb606da3857.png) 

## 配置 MinIO (可选)

如果项目中使用了文件上传服务，请在 `application-dev.yml` 文件中修改 MinIO 的连接信息为本地环境配置，包括地址、用户名和密码。例如，默认端口为 `9000`，默认用户名和密码为 `minioadmin/minioadmin`，请根据实际情况调整。

![](https://www.youlai.tech/storage/blog/2025/02/23/e2b4da98809b4a6ba0d812530827dbc8.png)
 

------

## 配置 Xxl-Job (可选)

如果项目中需要使用 XXL-Job，请在 `application-dev.yml` 文件中开启配置：



![](https://www.youlai.tech/storage/blog/2025/02/23/c37d3ba251714e688caada0483706a1e.png)