const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ 建議補強的首頁路由
app.get("/", (req, res) => {
  res.send("✅ Node.js API 正常運行中");
});

// 範例路由：取得書籍列表
app.get("/books", async (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send("資料庫錯誤");
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
