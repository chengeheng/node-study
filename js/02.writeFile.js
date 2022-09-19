const fs = require("fs");

fs.writeFile("../files/2.txt", "abcd", (err) => {
    if (err) {
        return console.log("写入文件失败：", err);
    }

    console.log("写入文件成功");
});
