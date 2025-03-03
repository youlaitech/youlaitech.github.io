---
title: 项目部署
icon: laptop
dir:
  collapsible: false
  expanded: false
  order: 5
  link: true
category:
  - 项目部署
---

::: tip 介绍
本文档介绍如何部署项目到服务器，包括使用 Docker 部署、Nginx 配置和域名解析。
:::


## 安装虚拟机

如果没有云服务器，可在本地安装虚拟机，参考：[VMware 搭建 Linux 虚拟机环境 (CentOS 7.9)](https://juejin.cn/post/7250009145915719740)。

安装并启动 FinalShell: [下载地址](https://www.hostbuf.com/t/988.html)。新建连接，连接到已安装的虚拟机。

![](https://www.youlai.tech/storage/blog/2025/03/04/a31e078da800416a84e2c2bd553f5161.png)
 

## 安装  Docker

参考文档：[Linux (CentOS) 安装 Docker 和 Docker Compose](https://youlai.blog.csdn.net/article/details/145055134)。

## 安装中间件

### 上传脚本

将项目的 `docker` 和 `sql` 目录复制到服务器的 `/opt` 目录下：

![](https://www.youlai.tech/storage/blog/2025/03/03/06fa7ef6e59b7e94bb6686bd43fa8dfc.png)

授予执行权限

```bash
sudo chmod +x /opt/docker/docker-compose.yml
```

### 启动服务

切换到 `/opt/docker` 目录，执行以下命令启动容器：

```bash
cd  /opt/docker
# 启动服务
docker-compose up -d
```

等待片刻，容器启动完成后如下：

![](https://www.youlai.tech/storage/blog/2025/03/03/f190d127754a4df3b9b3dc4502c41926.png)

### 验证安装

启动脚本会自动创建数据库：

![](https://www.youlai.tech/storage/blog/2025/03/03/44101f0dea0e41fc966c1b25639b41e0.png)


**Redis**

Redis 启动正常：

![](https://www.youlai.tech/storage/blog/2025/03/03/7950c46fc64673d53aee557863fffacb.png)

**MinIO**

打开浏览器访问 http://192.168.179.21:9090（根据实际 IP 修改），使用默认用户名密码 `minioadmin/minioadmin` 登录。

![](https://www.youlai.tech/storage/blog/2025/03/03/273db25a3af94d58a55e0e4f0f928917.png)


**XXL-JOB**

打开浏览器访问 [http://192.168.179.21:8080/xxl-job-admin](http://192.168.179.21:8080/xxl-job-admin)（根据实际 IP 修改），输入默认用户名密码 `admin/123456` 登录。

![](https://www.youlai.tech/storage/blog/2025/03/03/185deab98c9833594ec54c1e1fa16976.png)


## 部署应用

### 安装插件

在 IDEA 菜单栏选择 `File → Settings → Plugins`，搜索 `Docker` 插件并安装，安装后重启 IDEA。

![](https://www.youlai.tech/storage/blog/2025/03/03/2575958d5efb439b82a5d740114e67f1.png)


### 配置服务器

在 IDEA 菜单栏选择 `File → Settings → Build, Execution, Deployment → Docker`，添加远程服务器的连接信息：

![](https://www.youlai.tech/storage/blog/2025/03/03/24e20a48ff154900afc7e658759a4721.png)

连接成功后，显示 `Connection successful`：

![](https://www.youlai.tech/storage/blog/2025/03/03/f6bab3e89b0ca47f37c67adc128a5e14.png)

![](https://www.youlai.tech/storage/blog/2025/03/03/d1abd933a86181c2c3c3724916c25c80.png)

### 部署配置

在 IDEA 顶部菜单选择 `Edit Configurations` 打开配置界面：

![](https://www.youlai.tech/storage/blog/2025/03/03/9e6e1c38114a4fa8b5db011152b5f07e.png)

选择 `Dockerfile`，设置部署相关参数：


![](https://www.youlai.tech/storage/blog/2025/03/03/2e4d17400b024b81bc3bb735fb3a5d21.png)


![](https://www.youlai.tech/storage/blog/2025/03/03/31e4df3184094ced99d6d0faa8d0d50d.png)

### 一键部署

配置完成后，选择对应配置点击启动，将自动完成编译、打包、镜像构建、镜像推送和容器启动。

![](https://www.youlai.tech/storage/blog/2025/03/03/168fa25b20c64591ba3ee964bc078707.png)


![](https://www.youlai.tech/storage/blog/2025/03/03/75ad67d046574e6aa5a404b24a340e35.png)


启动成功后如下：

![](https://www.youlai.tech/storage/blog/2025/03/03/8200edd6d3874937a057bd7a64908842.png)

浏览器访问  [http://192.168.179.21:8989/doc.html]( http://192.168.179.21:8989/doc.html)（根据实际 IP 修改）查看接口文档，验证部署是否成功。

![](https://www.youlai.tech/storage/blog/2025/03/03/00aa9901cf5757095b9132dae3bc062f.png)
