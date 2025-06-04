const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.connect(err => {
  if (err) {
    console.error("資料庫連線失敗", err);
  } else {
    console.log("資料庫連線成功");
  }
});

module.exports = db; 
