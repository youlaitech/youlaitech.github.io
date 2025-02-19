---
title: 代码提交规范
icon: leaf
dir:
  order: 4
  collapsible: false
  expanded: true
  link: true
category:
  - 开发规范
tag:
  - MySQL
  - 数据库
---

## 代码提交规范

### 提交信息格式
```
<类型>(<范围>): <简明描述>

[详细说明]

[关联事项]
```

#### 核心提交类型
| 类型     | 适用场景                 | 示例                          |
|----------|--------------------------|-------------------------------|
| `feat`   | 新增功能                 | `feat(user): 新增用户禁用功能` |
| `fix`    | 修复缺陷                 | `fix(login): 修复验证码失效问题`|
| `docs`   | 文档变更                 | `docs(router): 更新路由配置说明`|
| `chore`  | 构建/工具变更            | `chore: 升级webpack到v5`       |
| `style`  | 代码样式调整             | `style: 统一按钮组件命名`       |

---

## 代码分支规范

### 分支类型与命名
| 分支类型       | 命名规则                  | 示例                     |
|----------------|--------------------------|--------------------------|
| 主分支         | `main`                   | 永久分支，存放稳定版本    |
| 开发分支       | `develop`                | 日常开发集成分支          |
| 功能分支       | `feature/[ID]-[描述]`    | `feature/JIRA-123-user-auth` |
| 缺陷修复分支   | `hotfix/[ID]-[描述]`     | `hotfix/BUG-456-login-error` |
| 发布分支       | `release/[版本号]`       | `release/v2.3.0`          |

### 分支管理策略
1. **功能开发**  
   - 从 `develop` 拉取 `feature/` 分支
   - 通过 Pull Request 合并到 `develop`

2. **线上问题修复**  
   - 从 `main` 拉取 `hotfix/` 分支
   - 修复后同时合并到 `main` 和 `develop`

3. **版本发布**  
   - 从 `develop` 拉取 `release/` 分支
   - 测试通过后合并到 `main` 并打 Tag

---

## 关键执行要点

### 提交规范
- **标题行**：不超过72字符，动词开头（Add/Fix/Update...）
- **关联事项**：使用 `Closes #123` 关联问题单
- **反例**：避免 `Update code` 等模糊描述

### 分支规范
- **生命周期**：
  - 功能分支存活周期 ≤ 3天
  - 发布分支在版本上线后删除
- **命名示例**：
  ```bash
  # 正例：清晰包含任务上下文
  feature/PROJ-789-add-payment
  
  # 反例：信息缺失
  feature/user-fix
  ```

---

**执行标准**：所有合并必须通过代码评审，禁止强制推送保护分支。建议结合 Git Flow 可视化工具监控分支状态。