const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ 手動設定 CORS headers（不使用套件）
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 改為你的前端網址也可
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("✅ Node.js API 正常運行中");
});

app.get("/books", async (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send("資料庫錯誤");
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
