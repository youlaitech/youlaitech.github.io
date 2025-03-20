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
### 接口命名


| 操作类型       | HTTP方法 | 推荐动词         | 示例路径                |
|---------------|----------|------------------|-------------------------|
| 获取单个       | GET      | get              | /users/{id}             |
| 获取列表       | GET      | list             | /users                  |
| 分页查询       | GET      | search           | /users/search           |
| 创建资源(add)  | POST     | create           | /users                  |
| 全量更新(edit) | PUT      | update           | /users/{id}             |
| 局部更新       | PATCH    | partialUpdate    | /users/{id}/email       |
| 删除资源       | DELETE   | delete           | /users/{id}             |
| 关联添加       | POST     | attach           | /teams/{id}/members     |
| 批量操作       | POST     | batch[Action]    | /products/batch-delete  |



### 对象命名
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


### 按钮权限标识命名

| 权限标识                  | 模块   | 资源   | 操作            | 适用场景                | 示例按钮文案       |
|---------------------------|--------|--------|-----------------|-------------------------|--------------------|
| `sys:user:query`          | sys    | user   | query           | 数据查询/过滤           | 搜索用户、查看列表 |
| `sys:user:add`            | sys    | user   | add             | 新增数据                | 新建用户、添加账号 |
| `sys:user:edit`           | sys    | user   | edit            | 修改已有数据            | 编辑资料、修改权限 |
| `sys:user:delete`         | sys    | user   | delete          | 删除数据                | 删除用户、移除账号 |
| `sys:user:import`         | sys    | user   | import          | 批量数据导入            | 导入用户、批量新增 |
| `sys:user:export`         | sys    | user   | export          | 数据导出为文件          | 导出Excel、下载报表|
| `sys:user:reset-password` | sys    | user   | reset-password  | 密码重置操作            | 重置密码、强制修改 |

---

## 注释规范

### 类注释标准
```java
/**
 * 用户控制层
 * 
 * @author Ray.Hao
 * @since 2.9.0
 * 
 * 2.9.1 - 2023-08-01 增加删除保护机制
 * 2.9.0 - 2023-07-15 初始版本
 */
```


| 要素            | 规范要求                                                                 |
|-----------------|--------------------------------------------------------------------------|
| **类描述**      | 首行简明描述类职责，使用`[业务模块]+[层级类型]`结构（如：订单服务层）       |
| **@author**     | 必须标注，多人维护时分行标注（例：`@author Ray.Hao @author Han.Helena`） |
| **@since**      | 必须标注，格式为`主版本.次版本.修订号`（如Spring式版本号）                 |
| **空行规则**    | 类描述与标签之间必须空一行                                                |

---

