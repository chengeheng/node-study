// 导入fs 模块
const fs = require("fs");

fs.readFile("../README.md", "utf-8", (err, dataStr) => {
    console.log(err);
    // 读取失败
    if (err) {
        console.error("读取文件失败：", err.message);
    }
    console.log("--------");
    console.log("读取文件成功：", dataStr);
});
