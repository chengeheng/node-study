# node-study

根据 bilibili 课程学习 nodejs

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## NodeJs 特点

-   事件驱动
-   非阻塞 IO 模型（异步）
-   轻量和高效

## NodeJs 中的 JavaScript 运行环境

<table>
    <tr>
        <th colspan="4">NodeJS运行环境</th>
    </tr>
    <tr>
        <td rowspan="3">V8引擎</td>
        <td colspan="3" style="text-align: center;">内置API</td>
    </tr>
    <tr>
        <td >fs</td>
        <td >path</td>
        <td >http</td>
    </tr>
    <tr>
        <td >JS内置对象</td>
        <td >querystring</td>
        <td >etc...</td>
    </tr>
</table>

> NodeJs 中无法调用 DOM 和 BOM 等 API

## 学习路径

JavaScript 基本语法 + NodeJs 内置 API 模块（fs、path、http 等）+第三方 API 模块（express、mysql 等）

## fs 文件系统模块

1. fs.readFile 读取文件内容
2. fs.writeFile 写入文件

    - writeFile 只能创建文件，不能创建路径；
    - writeFile 新内容会覆盖旧的内容

> \_\_dirname 表示当前文件所处的目录

## path 路径模块

1. path.join 方法，将多个路径片段拼接成一个完成的路径字符串
2. path.basename 方法，用来从路径字符串中将文件名解析出来
3. path.extname 方法，获取文件的扩展名

## http 模块

http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。

```javascript
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {});

// 启动服务器
server.listen(80, () => {
    console.log("http server running at http://127.0.0.1");
});
```

-   req 请求对象
-   res 响应对象

## NodeJs 中的模块化

### 分类

-   内置模块：fs、path、http
-   自定义模块：用户创建的每个 js 文件
-   第三方模块

### 加载模块

使用 require 方法加载其他模块时，会执行被加载模块中的代码

### 模块作用域

和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域

在每个.js 自定义模块中都有一个 module 对象，它里面存储了当前模块有关的信息，可以使用 module.exports 将模块内的成员共享出去

### CommonJS

-   在每个模块内部，module 变量代表当前模块
-   module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口
-   加载某个模块，其实是加载该模块的 module.exports 属性，require()方法用于加载模块
