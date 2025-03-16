---
title: 项目配置
icon: config
dir:
  collapsible: false
  expanded: false
  order: 2
  link: true
category:
  - 项目配置
---

# 项目配置说明

本文档介绍 youlai-nest 项目的配置方式和相关参数说明。

## 配置文件

youlai-nest 使用多种配置文件管理不同环境的配置：

- `.env`: 默认环境配置
- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置
- `.env.test`: 测试环境配置

## 核心配置参数

### 基础配置

## 环境变量配置

youlai-nest 使用 `.env` 文件进行环境配置，主要配置项包括：

### MongoDB 配置

```env
# MongoDB连接URI
MONGODB_URI=mongodb://localhost:27017/youlai
```

### Redis 配置

```env
# Redis主机地址
REDIS_HOST=localhost
# Redis端口
REDIS_PORT=6379
# Redis密码（如果有）
REDIS_PASSWORD=
```

### JWT 配置

```env
# JWT密钥
JWT_SECRET=your-secret-key
# JWT过期时间
JWT_EXPIRES_IN=7d
```

### 阿里云 OSS 配置

```env
# OSS区域
OSS_REGION=oss-cn-hangzhou
# OSS访问密钥ID
OSS_ACCESS_KEY_ID=your-access-key
# OSS访问密钥密码
OSS_ACCESS_KEY_SECRET=your-secret-key
# OSS存储桶名称
OSS_BUCKET=your-bucket
```

## 应用配置

通过 NestJS 的 `ConfigModule` 访问配置：

```typescript
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // 其他模块...
  ],
})
export class AppModule {}
```

在服务中使用配置：

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    // 获取配置值
    const mongoUri = this.configService.get<string>('MONGODB_URI');
  }
}
```

## Swagger API 文档配置

在 `main.ts` 中配置 Swagger：

```typescript
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger文档配置
  const config = new DocumentBuilder()
    .setTitle('有来后台管理系统API')
    .setDescription('基于NestJS的后台管理系统API文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDoc', app, document);
  
  await app.listen(8989);
}
bootstrap();
```

## 跨域配置

在 `main.ts` 中启用跨域：

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 启用CORS
  app.enableCors();
  
  await app.listen(8989);
}
bootstrap();
```

## 全局管道配置

添加全局验证管道：

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 添加全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  
  await app.listen(8989);
}
bootstrap();
```

## 全局前缀配置

配置API全局前缀：

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 设置全局前缀
  app.setGlobalPrefix('api');
  
  await app.listen(8989);
}
bootstrap();
``` 