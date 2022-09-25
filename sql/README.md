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
INSERT INTO table_name(列1,列2,...) VALUES (值1,值2,...);

insert into users(username, age) values ("李四", 20);
```

## UPDATE

UPDATE 语句用于修改表中的数据

```sql
-- 用UPDATE指定要更新哪个表中的数据
-- 用SET指定列对应的新值
-- 用WHERE指定更新的条件
UPDATE 表名称 SET 列名称 = 新值, 列名称 = 新值 WHERE 列名称 = 某值;

-- 把users表中id为7的密码更改为888888
update users set password = "888888" where id = 7;
```

## DELETE

DELETE 语句用于删除表中的行

```sql
-- 从指定的表中，根据WHERE条件，删除对应的数据行
DELETE FROM 表名称 WHERE 列名称 = 值;

delete from users where id = 4;
```

## WHERE 子句

WHERE 子句用于限定选择的标准，在 SELECT、UPDATE、DELETE 语句中，都可以使用 WHERE 子句来限定选择的标准

```sql
-- 查询语句中的WHERE条件
SELECT 列名称 FROM 表名称  WHERE 列 运算法 值;
-- 不等于符号<>或者!=
select * from user where username <> "李四";

-- 更新语句中的WHERE条件
UPDATE 表名称 SET 列 运算符 新值 WHERE 列 运算法 值;

-- 删除语句中的WHERE条件
DELETE FROM 表名称 WHERE 列 运算符 值;
```

## AND 和 OR 运算符

AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来

-   AND 表示必须同时满足多个条件，相当于 js 中的&&运算符
-   OR 表示只要满足任意一个条件即可，相当于 js 中的||运算符

```sql
SELECT * FROM users WHERE age<10 AND username="小明";

SELECT * FROM users WHERE age<10 OR age>20;
```

## ORDER BY 排序

ORDER BY 语句用于根据指定的列对结果进行排序

ORDER BY 默认按照升序对记录进行排序，如果需要降序对记录进行排序，可以使用 DESC 关键字

```sql
-- 升序
SELECT * FROM users ORDER BY age;
SELECT * FROM users ORDER BY age ASC;
-- 降序
SELECT * FROM users ORDER BY age DESC;

-- 多重排序，先前面，后后面
SELECT * FROM users ORDER BY status DESC, username ASC;
```

## COUNT(\*)函数

COUNT(\*)函数用于返回查询结果的总数据条数

```sql
SELECT COUNT(*) FROM 表名称;

select count(*) from users where age < 10;
```

-   AS 为列设置别名

如果希望给查询出来的列名称设置别名，可以使用 AS 关键字

```sql
SELECT COUNT(*) AS total FROM users WHERE age < 10;

select username as uname, password as upwd from users;
```
