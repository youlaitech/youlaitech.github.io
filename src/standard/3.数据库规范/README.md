---
title: 数据库规范
icon: leaf
dir:
  order: 3
  collapsible: false
  expanded: true
  link: true
category:
  - 开发规范
tag:
  - MySQL
  - 数据库
---



## 表设计规范
### 字段定义原则
| 字段类型   | 使用场景                          | 示例               |
|------------|-----------------------------------|--------------------|
| `BIGINT`   | 主键ID、数值型外键                | `user_id BIGINT`   |
| `DATETIME` | 精确到秒的时间记录                | `created_time`     |
| `VARCHAR`  | 可变长度字符串（需指定长度）      | `mobile(11)`       |
| `DECIMAL`  | 金额、精确数值                    | `amount DECIMAL(10,2)` |

### 必备字段
```sql
CREATE TABLE product (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
    create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    is_deleted TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '删除标记(0:正常 1:删除)',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';
```

---

## 索引规范
### 索引创建原则
| 场景                      | 索引策略                          | 示例 SQL                          |
|---------------------------|-----------------------------------|-----------------------------------|
| 高频等值查询              | 单列普通索引                      | `ADD INDEX idx_status (status)`  |
| 联合条件查询              | 多列联合索引                      | `ADD INDEX idx_cid_status (category_id, status)` |
| 唯一性约束                | 唯一索引                          | `ADD UNIQUE uk_mobile (mobile)`  |

### 2.2 索引避坑指南
```sql
-- 反例：在枚举值少的字段建索引
ALTER TABLE user ADD INDEX idx_gender (gender); -- gender只有0/1两种值

-- 正例：使用前缀索引优化长字符串
ALTER TABLE product ADD INDEX idx_name (name(20)); -- name字段平均长度超过50时
```

---

## SQL 编写规范
### 查询优化
```sql
-- 反例：使用函数导致索引失效
SELECT * FROM order WHERE YEAR(create_time) = 2023;

-- 正例：范围查询利用索引
SELECT * FROM order 
WHERE create_time >= '2023-01-01 00:00:00' 
  AND create_time < '2024-01-01 00:00:00';
```

### 事务控制
```sql
-- 显式事务示例
START TRANSACTION;

UPDATE account SET balance = balance - 100 WHERE user_id = 1;
UPDATE account SET balance = balance + 100 WHERE user_id = 2;

COMMIT;
```

---

## 安全规范
### SQL 注入防护
```java
// 反例：拼接SQL
String sql = "SELECT * FROM user WHERE name = '" + name + "'";

// 正例：使用预编译
PreparedStatement ps = conn.prepareStatement("SELECT * FROM user WHERE name = ?");
ps.setString(1, name);
```

### 敏感数据存储
```sql
-- 密码字段加密存储
ALTER TABLE user 
ADD COLUMN password_hash VARCHAR(64) NOT NULL COMMENT 'SHA256加密后的密码';
```