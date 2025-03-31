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

请确保安装以下组件并满足版本要求：

### 安装 Node（≥ v18.x）

**作用**：JavaScript 运行环境 + npm 包管理器  
**安装步骤**：
1. 访问 [Node.js 官方下载页](https://nodejs.org/zh-cn/download/prebuilt-installer)
2. **选择 LTS 版本**（推荐 v20.18.0+）  
   ![Node.js下载页面](https://i-blog.csdnimg.cn/direct/50053bf23e6344098f6c09d839c8981f.png)
3. 双击安装包完成安装
4. 验证安装（命令行执行）：  
   ```bash
   node -v
   ```
   ![版本验证结果](https://i-blog.csdnimg.cn/direct/c0a3901ca8274491b35ddd17c2db1d78.png)


### 安装 VSCode

**作用**：代码编辑器  
**安装步骤**：
1. 访问 [VSCode 官网](https://code.visualstudio.com/)
2. 根据系统下载安装包（Windows/macOS/Linux）
3. 双击安装包按提示完成安装

### 安装 MongoDB（≥ v7.0） 

**作用**：NoSQL 数据库  
**安装参考**： [Docker 部署 MongoDB ](https://blog.csdn.net/u013737132/article/details/144065439) 

### 安装 Redis

**作用**：缓存数据库  
**安装方案**：
- 🔧 [Windows 安装 Redis](https://blog.csdn.net/u013737132/article/details/133410293)
- 🐳 [Docker 安装 Redis](https://blog.csdn.net/u013737132/article/details/130439335)  


## 初始化数据库

### 方法一：命令行导入

MongoDB 脚本放在项目的根目录 mongodb 下 ，复制到指定目录下(./mongodb/ ), 然后执行以下命令还原数据库：

```bash
mongorestore -d youlai_nest ./mongodb/
```
### 方法二：Navicat 可视化导入

#### 下载工具包

1. 访问 [MongoDB Tools下载页](https://www.mongodb.com/try/download/database-tools)
2. 选择Windows系统的ZIP压缩包  
   ![](https://www.youlai.tech/storage/blog/image-20250312155531271.png)
3. 将下载的ZIP文件解压到**电脑任意位置**，示例路径：D:\mongodb-tools）  
  ![](https://www.youlai.tech/storage/blog/2025/03/30/20250330163850.png)

#### 创建数据库
1. 打开Navicat，连接到MongoDB数据库
2. 右键点击连接，选择「新建数据库」  
3. 输入数据库名称 `youlai_nest`，点击「确定」
  
#### 配置还原工具
1. 右键新建的数据库选择「MongoRestore」  
   ![](https://www.youlai.tech/storage/blog/image-20250317102456684.png)
2. 点击文件夹图标，选择解压目录中的 `mongorestore.exe`  
   （示例路径：D:\mongodb-tools\bin\mongorestore.exe）
 ![](https://www.youlai.tech/storage/blog/image-20250317102706054.png)
#### 导入数据文件
1. 选择项目中的脚本目录（项目根目录/mongodb）
2. 点击「开始」执行导入操作  
   ![](https://www.youlai.tech/storage/blog/image-20250317102831303.png)
   ![](https://www.youlai.tech/storage/blog/2025/03/30/20250330182831.png)
3. 验证导入结果
   ![](https://www.youlai.tech/storage/blog/2025/03/31/20250331235034.png)


## 项目启动

### 1. 获取代码
```bash
git clone https://gitee.com/youlaiorg/youlai-nest.git
cd youlai-nest
```

### 2. 安装依赖
```bash
# 安装 pnpm（若已安装可跳过）
npm install -g pnpm

# 配置国内镜像加速（可选）
pnpm config set registry https://registry.npmmirror.com

# 安装项目依赖
pnpm install
```

### 3. 启动服务
```bash
pnpm run start:dev
```

### 4. 接口验证
访问以下地址测试服务：  
[http://localhost:9090/apiDoc](http://localhost:9090/apiDoc)  

