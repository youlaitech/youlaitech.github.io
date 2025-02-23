---
title: 项目启动
icon: play
dir:
  order: 1
  collapsible: false
  link: true
category:
  - 项目启动
---


## 环境准备

| 名称      | 下载地址       |
 | --------- | -------- |
 | VSCode     | [下载](https://code.visualstudio.com/Download) |
 | Node ≥18 (其中 20.6.0 版本不可用) | [下载](http://nodejs.cn/download)  
 
 
## 下载代码

VSCode 导入 Git 项目，输入项目地址：`https://gitee.com/youlaiorg/vue3-element-admin.git` ，然后点击 Clone。

            
## 启动项目

```bash

# 安装 pnpm
npm install pnpm -g

# 设置镜像源(可忽略)
pnpm config set registry https://registry.npmmirror.com

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```
