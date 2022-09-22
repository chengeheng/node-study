# Express

## 简介

Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

## 托管静态资源

express.static()

```javascript
app.use(express.static("public"));
app.use("/public", express.static("pubilc"));

// http://localhost:3000/images/bg.jpg;
```

> express 在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的目录名不会出现在 URL 中。

## nodemon

在编写 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐

使用 nodemon 启动项目，则可以监听文件的改变，自动重启项目。

## 路由

在 express 中，路由只的是客户端的请求与服务器处理函数之间的映射关系。

-   请求的类型
-   请求的 URL 地址
-   处理函数

```javascript
app.METHOD(PATH, HANDLER);
```

### 模块化路由

1. 创建路由模块对应的.js 文件
2. 调用 express.Router()函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 module.exports 向外共享路由对象
5. 使用 app.use()函数注册路由模块

添加统一的访问前缀

```javascript
app.use("/api", router);
```

## 中间件

中间件特指业务流程的中间处理环节。

```javascript
app.use((req, res, next) => {
    next();
});
```

中间件的形参列表中，必须包含 next 参数，而路由处理函数中只包含 req 和 res。

```javascript
// 局部生效的中间件
const mw1 = (req, res, next) => {
    console.log("调用了局部生效的中间件");
    next();
};

// 创建路由
app.get("/", mw1, (req, res) => {
    res.send("");
});
```

错误级别的中间件有四个形参，用来捕获整个项目的异常错误，从而防止程序的崩溃。

错误级别的中间件，必须注册在所有的路由之后。

内置中间件：

-   express.static
-   express.json
-   express.urlencoded
