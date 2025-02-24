---
title: 项目启动
icon: play
dir:
  collapsible: false
  expanded: false
  order: 1
  link: true
category:
  - 项目启动
---

::: tip
本文档介绍如何启动项目 [vue-uniapp-template](https://gitee.com/youlaiorg/vue-uniapp-template)。
:::

## 环境准本

### 安装 Node

> `Node.js` 是运行 JavaScript 代码的环境，也是 `npm` 包管理器的依赖。

打开 [Node.js 官方下载页面](https://nodejs.org/zh-cn/download/prebuilt-installer)，根据你的操作系统选择合适的版本进行下载，**推荐安装 LTS 版本**，这是长期支持版本，适合开发环境，比如这里选择 `v20.18.0(LTS) ` 版本。

 ![](https://i-blog.csdnimg.cn/direct/50053bf23e6344098f6c09d839c8981f.png)


下载之后，双击安装包根据提示安装，通过以下命令检查是否成功安装：

```bash
node -v
```

![](https://i-blog.csdnimg.cn/direct/c0a3901ca8274491b35ddd17c2db1d78.png)



### 安装 VSCode

>`VSCode` 是一款非常流行的代码编辑器，特别适合前端开发。

访问 [Visual Studio Code 官方网站](https://code.visualstudio.com/) ,根据你的操作系统下载相应版本的 `VSCode` ,下载完成后，双击安装程序并按照提示完成安装。



## 启动项目

### h5端

```bash
# 安装依赖
pnpm install

# 启动项目
pnpm run dev:h5
```

### 小程序端


在 HBuilder X 中，点击 `运行`→`运行到小程序模拟器`→`微信开发者工具`。

![](https://www.youlai.tech/storage/blog/2025/02/24/df85a41c46bd41d18a67400867cdd50e.png)


项目编译完成后，微信开发者工具会自动启动并呈现页面。

![](https://www.youlai.tech/storage/blog/2025/02/24/9c2ceb3651a446178a8b9fc6a34188b1.png)

