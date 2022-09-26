const mysql = require("mysql");

const db = mysql.createConnection({
    host: "172.28.4.47",
    user: "root",
    port: "3306",
    password: "123456",
    database: "my_db_01",
});

// 查询数据
// db.query("select 1", (err, res) => {
//     if (err) {
//         console.log("err", err);
//     }
//     console.log(res);
// });

// db.query("select * from users", (err, res) => {
//     if (err) {
//         console.log("err", err);
//     }
//     console.log(res);
// });

// db.query("select username from users where id = 2", (err, res) => {
//     if (err) {
//         console.log("err", err);
//         return;
//     }
//     console.log(res);
//     return;
// });

// 插入数据
// const user = { username: "小红", age: 20, gender: "女" };
// db.query("insert into users set ?", user, (err, res) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }

//     console.log(res.affectedRows);
//     return;
// });

// 更新数据
// db.query("update users set age=22 where username ='小红' ", (err, res) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     return console.log(res);
// });

// ! 报错，待后续查原因
// const newuser = { username: "小红", age: 23, id: 4 };
// db.query("udpate users set ? where id = ?", [newuser, newuser.id], (err, res) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     return console.log(res);
// });

// 删除数据
// * 通常是逻辑删除，而不是真正删除数据
db.query("delete from users where id=?", 3, (err, res) => {
    if (err) {
        return console.log(err.message);
    }
    return console.log(res);
});
