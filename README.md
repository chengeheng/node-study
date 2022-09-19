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

> \_\_dirname 表示当前文件所处的目录
