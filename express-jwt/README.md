# JWT 认证机制

JSON Web Token 是目前最流行的跨域认证解决方案。

## 工作原理

-   服务端根据用户信息生成 token 返回给客户端
-   客户端将 token 保存在本地，并在后续请求中通过 Authorization 发送 token 给服务端
-   服务端解析 token 还原成用户的信息对象，并根据用户信息返回特定的响应内容

## 组成部分

1. Header（头部）
2. Payload（有效荷载）
3. Signature（签名）

```
Header.Payload.Signature
```

-   Payload 才是真正的用户信息，是加密后生成的字符串
-   Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性

## 使用方式

```
客户端
Authorization: Bearer <token>

服务端
npm install jsonwebtoken express-jwt
```

-   jsonwebtoken 用于生成 jwt 字符串
-   express-jwt 用于将 jwt 字符串解析还原成 JSON 对象

## 定义 secret 密钥

为了保证 JWT 字符串的安全性，防止 JWT 字符串在网络传输过程中被别人破解，需要专门定义一个用于加密和解密的 secret 密钥：

1. 当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息进行加密，最终得到加密好的 JWT 字符串
2. 当把 JWT 字符串解析还原成 JSON 对象时，需要使用同一个 secret 密钥进行解密

## 获取用户信息

当 express-jwt 这个中间件配置成功之后，即可在那些有权限的接口中使用 req.user（新版是 req.auth）对象来访问从 JWT 字符串中解析出来的用户信息

## 错误捕获

当使用的 token 字符串不合法过期或者不合法的时候，回产生一个解析失败的错误，影响项目的正常运行，可以通过 express 的错误中间件，捕获这个错误并进行相关的处理

```javascript
app.use((err, req, res, next) => {
    // token 解析失败导致的错误
    if (err.name === "UnauthorizedError") {
        return res.send({ status: 401, message: "无效的token" });
    }
    // 其他原因导致的错误
    res.send({ status: 500, message: "未知错误" });
});
```
