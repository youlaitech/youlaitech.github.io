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

在开始之前，请确保你的开发环境满足以下要求：

1. **Node.js 环境**
   ```bash
   # 检查 Node.js 版本（需要 >= 18.x）
   node --version
   ```

2. **MongoDB 数据库**
   - 安装 MongoDB（>= 7.x）
   - 启动 MongoDB 服务
   ```bash
   # macOS 使用 brew 安装
   brew install mongodb-community
   brew services start mongodb-community
   ```

3. **Redis 服务**
   - 安装 Redis（>= 7.x）
   - 启动 Redis 服务
   ```bash
   # macOS 使用 brew 安装
   brew install redis
   brew services start redis
   ```

4. **pnpm 包管理器**
   ```bash
   # 全局安装 pnpm
   npm install -g pnpm
   ```

## 快速开始

### 1. 克隆项目
```bash
git clone https://gitee.com/youlaiorg/youlai-nest.git
cd youlai-nest
```

### 2. 安装依赖
```bash
pnpm install
```

### 3. 配置环境变量

1. 复制环境变量模板文件
```bash
cp .env.example .env
```

2. 修改 `.env` 文件中的配置：
```env
# MongoDB配置
MONGODB_URI=mongodb://localhost:27017/youlai

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT配置
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# 阿里云OSS配置（如需使用文件上传功能）
OSS_REGION=oss-cn-hangzhou
OSS_ACCESS_KEY_ID=your-access-key
OSS_ACCESS_KEY_SECRET=your-secret-key
OSS_BUCKET=your-bucket
```

### 4. 初始化数据库

1. 导入初始数据（在 mongodb 目录下）
```bash
mongorestore -d youlai ./mongodb/
```


### 5. 启动项目

开发模式
```bash
pnpm run start:dev
```

生产模式
```bash
# 构建项目
pnpm run build

# 启动服务
pnpm run start:prod
```

### 6. 访问服务

- 接口文档：http://localhost:8989/apiDoc
- 默认管理员账号：admin
- 默认密码：123456 