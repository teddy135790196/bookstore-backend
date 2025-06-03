const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ 加這行解決 CORS 問題
app.use(express.json());

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
  console.log(`Server is running on port ${PORT}`);
});
