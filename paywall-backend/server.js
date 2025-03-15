require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
});
app.post("/verify-code", (req, res) => {
  const { code } = req.body;
  db.query("SELECT * FROM code WHERE code = ?", [code], (err, results) => {
    if (err) {
      console.error("Database Query Error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }
    if (results.length > 0) return res.json({ success: true });
    return res.status(401).json({ success: false });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
