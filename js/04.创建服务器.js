const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const url = req.url;
    console.log("request url: ", url);
    console.log("someone visit our web server");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("hello world, 你好 世界");
});

// 启动服务器
server.listen(80, () => {
    console.log("http server running at http://127.0.0.1");
});
