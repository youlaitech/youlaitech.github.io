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


## 环境准备

安装 JDK 、Maven 和 IntelliJ IDEA 开发工具。参考文档：[环境准备](https://youlai.blog.csdn.net/article/details/145177011)

![](https://www.youlai.tech/storage/blog/2025/02/23/20250223141929.png)



## 下载代码

打开 **IntelliJ IDEA**，依次点击：**File → New → Project from Version Control**

在弹出的窗口中输入项目地址：[https://gitee.com/youlaiorg/youlai-boot.git](https://gitee.com/youlaiorg/youlai-boot.git) ，然后点击 Clone。

![](https://www.youlai.tech/storage/blog/2025/02/23/44a0809db84b410d98473832e937ff6d.png)
 

稍等片刻，等待项目加载完成后，项目结构将如下所示：

![](https://www.youlai.tech/storage/blog/2025/02/23/848577e458ed4885b99152498de04ef8.png)
 

## 配置环境

启动项目前，需要确保开发环境满足以下条件：**已安装并配置 JDK 和 Maven**。

**配置 JDK**

打开项目结构配置面板 **File → Project Structure**（快捷键 **Ctrl + Alt + Shift + S**）打开项目结构配置面板，确保 **SDK** 设置为安装的 **JDK 17**。

![配置 JDK](https://www.youlai.tech/storage/blog/2025/02/23/21557ad6097147a4bce9a308263a1f36.png)
 

**配置 Maven**

打开 IDE 设置面板：**File  → Settings**（快捷键 **Ctrl + Alt + S**），在 **Build, Execution, Deployment → Build Tools → Maven** 中，配置 Maven 使用本地安装的版本。

![配置 Maven](https://www.youlai.tech/storage/blog/2025/02/23/f4fe1d069aa84384aec39734c8c1a03f.png)
 

验证 Maven 配置：打开 **IDEA 终端**，执行以下命令，确保 Maven 使用的是 **JDK 17**。

```bash
mvn -v
```

正确输出示例：

![](https://www.youlai.tech/storage/blog/2025/02/23/36ab420422cd4c3b84a82d047e0e7e70.png)
 

## 修改配置
::: warning
项目默认配置已连接到有来云平台的 MySQL 和 Redis 服务，**可直接启动使用**。
:::

如果需要连接到自己环境中的 MySQL 和 Redis 服务，请确保已安装相应的服务（如果未安装，可以参考以下教程进行安装）：

- MySQL 8 安装
  - [📖Windows 安装 MySQL 8](https://blog.csdn.net/u013737132/article/details/133272887)
  - [📖Linux 安装 MySQL8](https://blog.csdn.net/u013737132/article/details/145654283)

- Redis 安装
  - [📖Windows 安装 Redis](https://blog.csdn.net/u013737132/article/details/133410293)
  - [📖Linux 安装 Redis](https://blog.csdn.net/u013737132/article/details/130439335)



然后在 `src/main/resources` 目录下找到 `application-dev.yml` 文件，修改 MySQL 和 Redis 连接信息和密码。

```yaml 
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/youlai_boot?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai
    username: root
    password: 123456
  redis:
    host: localhost
    port: 6379
    # 如果未设置密码，请注释该行，而不是留空值，否则连接会失败
    password: 123456
```


## 启动项目

打开项目的主启动类 `YouLaiBootApplication`。右键点击 **main 方法**，选择 `Debug YouLaiBootApplication.main()` 启动项目。



![](https://www.youlai.tech/storage/blog/2025/02/23/8dce45787ec9388527ae8297edbaf77d.png)

## 测试启动

项目启动成功后，可通过访问接口文档验证服务是否正常运行：

访问 `Swagger` 接口文档： [http://localhost:8989/swagger-ui.html](http://localhost:8989/swagger-ui.html)

![](https://www.youlai.tech/storage/blog/2025/02/23/6ebb7d3baa304293803271ec3e022422.png)

访问 `Knife4j` 接口文档：[http://localhost:8989/doc.html](http://localhost:8989/doc.html)

![](https://www.youlai.tech/storage/blog/2025/02/23/60bd708ba04a7c45e0a168a6afc44481.png)

