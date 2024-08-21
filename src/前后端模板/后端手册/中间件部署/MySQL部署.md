---
title: MySQL部署
icon: leaf
order: 1
category:
  - 快速上手
  - 项目简介
tag:
  - 项目介绍
---

本教程将指导你如何在 Linux 服务器(CentOS) 部署 MySQL 8。


# 版本声明

| 名称     | 版本     |
| -------- | -------- |
| 系统     | CentOS 8 |
| MySQL    | 8.0.27   |

# 卸载MySQL

如果已安装了MySQL需要先卸载

```shell
rpm -qa | grep -i mysql
```

![youlai-mall mysql](https://i-blog.csdnimg.cn/blog_migrate/dfca2c65cc2d3ae667379daa6905e291.png)

```shell
# 逐一卸载已安装的包
yum remove -y mysql-commutity-conmmon-8.0.27-1.e18.x86_64
# 删除MySQL文件
find / -name mysql -type f -print -exec rm -rf {} \;
...
```

# 安装MySQL8

**1. 安装yum源**

访问 [MySQL官方下载地址](https://dev.mysql.com/downloads/repo/yum)，获取yum源地址

![youlai-mall mysql](https://i-blog.csdnimg.cn/blog_migrate/20035e6793787f424bb645346a97f1d5.gif)
```shell
# 下载yum源，wget后面的地址就是上图获取的yum源地址
wget https://repo.mysql.com//mysql80-community-release-el8-1.noarch.rpm
# 安装yum源
yum -y localinstall mysql80-community-release-el8-1.noarch.rpm
```

**2. 禁用CentOS8自带的MySQL模块**

```shell
yum module disable mysql
```

**3. 安装MySQL服务**

```shell
yum install -y mysql-community-server
```
**4. 启动MySQL**

```bash
systemctl start mysqld
```

**5. 查看MySQL状态**

```shell
systemctl status mysqld
```

**6. 设置MySQL开机自启**

```shell
systemctl enable mysqld
systemctl daemon-reload
```



# 设置密码

**1. 获取临时密码**

```bash
grep 'temporary password' /var/log/mysqld.log
```
![](https://i-blog.csdnimg.cn/blog_migrate/c0be91b78d88720730812754deaa04fe.png)


**2. 登录 MySQL**

```shell
mysql -uroot -pqvysykoyf4=R
```

**3. 修改 MySQL 新密码 123456**

```sql
ALTER USER 'root' @'localhost' IDENTIFIED BY '123456';
```

**4. 密码简单不满足密码策略**
    
如果密码不满足密码策略，可以提高密码复杂度或者降低密码策略设置。

```sql
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
```

查看当前密码策略

```sql
SHOW VARIABLES LIKE 'validate_password%';
```

降低密码策略

```sql
set global validate_password.length=4;
set global validate_password.special_char_count=0;
set global validate_password.policy =LOW;
```
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/70b4843d907d9db48b3f3f9be9f4851d.png#pic_center)

# 开放远程连接

```sql
use mysql;
update user set host = '%' where user ='root';
alter user 'root'@'%' identified by '123456' password expire never;
alter user 'root'@'%' identified with mysql_native_password by '123456';
flush privileges;
```
现在，您的 MySQL 数据库已经安装、配置，并允许远程连接。![youlai-mall mysql](https://i-blog.csdnimg.cn/blog_migrate/7f11b2fb8f2c423708090cb7a8a703fc.png)