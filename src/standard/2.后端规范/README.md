---
title: Java 后端开发规范
icon: leaf
dir:
  order: 2
  collapsible: false
  expanded: true
  link: true
category:
  - 开发规范
tag:
  - Java
  - 后端
---

参考：[嵩山版《Java开发手册》](https://developer.aliyun.com/topic/java20)

## 代码分层规范
### 包结构设计
```bash
com.company.project
├── common        # 通用组件
    └── exception     # 自定义异常    ·
├── config        # 配置类
├── controller    # API入口
├── enums         # 枚举
├── service       # 业务逻辑
│   ├── impl      # 实现类
├── mapper        # 数据访问层
├── model         # 数据模型
│   ├── entity    # 持久化实体
│   ├── dto       # 传输对象
│   ├── query     # 查询对象
│   ├── form      # 表单对象
│   └── vo        # 视图对象
└── utils         # 工具类
```


## 命名规范
### 类/接口命名
| 类型          | 模式                | 示例               |
|---------------|---------------------|--------------------|
| REST 控制器   | `XxxController`     | `UserController`   |
| 业务服务接口  | `XxxService`        | `OrderService`     |
| 业务服务实现  | `XxxServiceImpl`    | `OrderServiceImpl` |
| 数据传输对象  | `XxxDTO`            | `LoginDTO`         |
| 视图展示对象  | `XxxVO`             | `UserDetailVO`     |

### 方法命名
| 场景                  | 动词选择                | 示例                     |
|-----------------------|-------------------------|--------------------------|
| 单个对象查询          | `getXxx`                | `getUserById`            |
| 集合查询              | `listXxxs`              | `listUsers`       |
| 分页查询              | `getXxxPage`            | `getUserPage`   |
| 创建操作              | `createXxx`             | `createUser`            |
| 更新操作              | `updateXxx`             | `updateUser`       |

---

## 注释规范
###  Swagger 接口文档
```java
@Operation(summary = "用户登录", description = "通过手机号+密码进行身份认证")
@PostMapping("/login")
public Result<UserVO> login(
    @Parameter(description = "登录表单", required = true) 
    @RequestBody LoginForm form) {
    // ...
}
```

### 复杂逻辑注释
```java
// 使用三斜线注释标记待优化点
/// TODO: 2023-10-01 缓存穿透风险，需增加空值缓存
public UserVO getUserById(Long userId) {
    // ...
}
```

---

## 异常处理规范
###   自定义异常体系
```java
// 业务异常基类
public class BusinessException extends RuntimeException {
    private final ErrorCode errorCode;
    
    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}

// 细分异常类型
public class OrderNotFoundException extends BusinessException {
    public OrderNotFoundException() {
        super(ErrorCode.ORDER_NOT_FOUND);
    }
}
```

###  全局异常处理
```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(BusinessException.class)
    public Result<Void> handleBusinessException(BusinessException e) {
        return Result.fail(e.getErrorCode());
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Result<Void> handleValidationException(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getAllErrors().get(0).getDefaultMessage();
        return Result.fail(ErrorCode.PARAM_ERROR.getCode(), message);
    }
}
```
