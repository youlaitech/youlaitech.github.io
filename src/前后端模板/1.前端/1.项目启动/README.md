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

本教程将指导你如何启动
[vue3-element-admin](https://gitee.com/youlaiorg/vue3-element-admin)
项目

<!-- more -->

## 环境准备

| 环境         | 名称版本                          | 下载地址                                       |
| ------------ | :-------------------------------- | ---------------------------------------------- |
| **开发工具** | VSCode                            | [下载](https://code.visualstudio.com/Download) |
| **运行环境** | Node ≥18 (其中 20.6.0 版本不可用) | [下载](http://nodejs.cn/download)              |

## 启动项目

```bash
# 克隆代码
git clone https://gitee.com/youlaiorg/vue3-element-admin.git

# 切换目录
cd vue3-element-admin

# 安装 pnpm
npm install pnpm -g

# 设置镜像源(可忽略)
pnpm config set registry https://registry.npmmirror.com

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```
