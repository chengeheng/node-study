const express = require("express");

const app = express();

// 挂载路由
app.get("/user/:id/:username", (req, res) => {
    console.log(req.query);
    console.log(req.params);
    res.send({ name: "cgh", age: "18", gender: "男" });
});

app.listen(80, () => {
    console.log("express server running at http://127.0.0.1");
});
