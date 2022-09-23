# SQL

## 定义

SQL（Structured Query Language）是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库里面的数据。

三个关键点：

1. SQL 是一门数据库编程语言
2. 使用 SQL 语言编写出来的代码，叫做 SQL 语句
3. SQL 语言只能在关系型数据库中使用（例如 MySQL、Oracle、SQL Server）。非关系型数据库（例如 Mongodb）不支持 SQL 语言

## SELECT

SELECT 语句用来从表中查询数据，执行的结果被存储在一个结果表中（称为结果集）

```sql
-- 从FROM指定的表中，查询所有数据，*表示所有列
SELECT * FROM 表名称

-- 从FROM制定的表中，查询出指定列名称（字段）的数据，多个列用逗号拼接列名称
SELECT 列名称 FROM 表名称
```

> SQL 语句中的关键字对大小写不敏感，SELECT 等效于 select，FROM 等效于 from

## INSERT INTO

INSERT INTO 语句用于向数据表中插入新的数据行

```sql
-- 向指定的表中，插入如下几列数据，列的值通过values一一指定
-- 列和值要一一对应，多个列和多个值之间，使用英文的逗号分隔
INSERT INTO table_name(列1,列2,...) VALUES (值1,值2,...)
```
