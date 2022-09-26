const express = require("express");

const app = express();

const session = require("express-session");

app.use(
    session({
        secret: "ghchen",
        resave: false,
        saveUninitialized: true,
    })
);

app.post("/api/login", (req, res) => {
    if (req.body.username != "admin" && req.body.password !== "000000") {
        return res.send({ status: 1, msg: "登陆失败" });
    }

    // 注意：只有成功配置了express-session这个中间件之后，才能通过req点出来session这个属性
    req.session.user = req.body;
    req.session.isLogin = true;
    res.send({ status: 0, msg: "登陆成功" });
});

app.post("/api/username", (req, res) => {
    if (!req.session.isLogin) {
        return res.send({ status: 1, msg: "fail" });
    }

    res.send({ status: 0, msg: "success", username: req.session.user.username });
});

app.post("/api/logout", (req, res) => {
    // 清空session
    req.session.destroy();
    res.send({
        status: 0,
        msg: "退出登陆成功",
    });
});
