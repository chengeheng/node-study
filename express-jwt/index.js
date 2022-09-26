const express = require("express");

const app = express();
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

const secretKey = "hello world";

const cors = require("cors");
app.use(cors);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// unless表示不需要权限的接口
// 只要配置成功了express-jwt这个中间件，即可以使用req.auth来获取用户信息

app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));

app.post("/api/login", (req, res) => {
    if (req.body.username != "admin" && req.body.password !== "000000") {
        return res.send({ status: 1, msg: "登陆失败" });
    }

    // 参数1：用户的信息对象
    // 参数2：加密的密钥
    // 参数3：配置对象，可以配置当前token的有效期
    // * 建议不要把密码加密到jwt中
    const tokenStr = jwt.sign({ username: req.body.username }, secretKey, { expiresIn: "30s" });

    res.send({
        status: 200,
        message: "登陆成功！",
        token: tokenStr,
    });
});

app.get("/api/getUserInfo", (req, res) => {
    console.log(req.auth);
    res.send({
        status: 200,
        message: "获取用户信息成功",
        username: req.auth.username,
    });
});
