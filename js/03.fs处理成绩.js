const fs = require("fs");

fs.readFile("../files/成绩.txt", "utf-8", (err, dataStr) => {
    if (err) {
        return console.log("读取文件失败", err);
    }
    // 处理成绩数据
    const arr = dataStr.split(" ");

    const arrNew = arr.map((i) => {
        return i.replace("=", "：");
    });

    const newStr = arrNew.join("\r\n");

    fs.writeFile("../files/成绩-ok.txt", newStr, (err) => {
        if (err) {
            return console.log("写入文件失败", err);
        }
        console.log("写入文件成功");
    });
});
