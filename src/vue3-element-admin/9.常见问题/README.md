---
title: 常见问题
icon: clipboard-question
dir:
  order: 9
  collapsible: false
  link: true
category:
  - FAQ
---

## 页面白屏，刷新后显示

1. F12 打开控制台，查看是否有报错信息。
2. 视图组件是否只有一个根元素，其中注释也会被识别为一个根元素，具体参考[#I99V1S](https://gitee.com/youlaiorg/vue3-element-admin/issues/I99V1S)

## 项目启动浏览器访问空白

请升级浏览器尝试，低版本浏览器内核可能不支持某些新的 JavaScript 语法，比如可选链操作符 ?.。

## 项目组件、函数和引用爆红

重启 VSCode 尝试