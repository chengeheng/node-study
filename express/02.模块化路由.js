const express = require("express");
const router = require("./03.router");

const app = express();

// 挂载路由
app.use(router);

app.listen(80, () => {
    console.log("express server running at http://127.0.0.1");
});
