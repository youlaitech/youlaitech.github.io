---
title: 项目启动
icon: play
dir:
  order: 2
  collapsible: false
  link: true
category:
  - 项目启动
tag:
  - vue
  - element-plus
---


```info 简介
以下是快速启动 [youlai-boot 项目](https://gitee.com/youlaiorg/youlai-boot.git) 的完整步骤，从克隆项目到运行服务，帮助您快速上手。
```


## 克隆代码

打开 **IntelliJ IDEA**，依次点击：**File → New → Project from Version Control**

在弹出的窗口中输入项目地址：[https://gitee.com/youlaiorg/youlai-boot.git](https://gitee.com/youlaiorg/youlai-boot.git) ，然后点击 Clone。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/44a0809db84b410d98473832e937ff6d.png)
 

稍等片刻，等待项目加载完成后，项目结构将如下所示：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/848577e458ed4885b99152498de04ef8.png)
 

## 配置环境

启动项目前，需要确保开发环境满足以下条件：**已安装并配置 JDK 和 Maven**。

**配置 JDK**

打开项目结构配置面板 **File → Project Structure**（快捷键 **Ctrl + Alt + Shift + S**）打开项目结构配置面板，确保 **SDK** 设置为安装的 **JDK 17**。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/21557ad6097147a4bce9a308263a1f36.png)
 

**配置 Maven**

打开 IDE 设置面板：**File  → Settings**（快捷键 **Ctrl + Alt + S**），在 **Build, Execution, Deployment → Build Tools → Maven** 中，配置 Maven 使用本地安装的版本。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f4fe1d069aa84384aec39734c8c1a03f.png)
 

验证 Maven 配置：打开 **IDEA 终端**，执行以下命令，确保 Maven 使用的是 **JDK 17**。

```bash
mvn -v
```

正确输出示例：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/36ab420422cd4c3b84a82d047e0e7e70.png)
 



## 启动项目

打开项目的主启动类 `YouLaiBootApplication`。右键点击 **main 方法**，选择 `Debug YouLaiBootApplication.main()` 启动项目。

![](https://i-blog.csdnimg.cn/img_convert/8dce45787ec9388527ae8297edbaf77d.png)

## 测试启动

项目启动成功后，可通过访问接口文档验证服务是否正常运行：

访问 Knife4j 接口文档：http://localhost:8989/doc.html

![](https://i-blog.csdnimg.cn/img_convert/60bd708ba04a7c45e0a168a6afc44481.png)

访问 Swagger 接口文档： [http://localhost:8989/swagger-ui.html](http://localhost:8989/swagger-ui.html)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6ebb7d3baa304293803271ec3e022422.png)