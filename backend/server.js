const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "xpressmeal",
});

app.get("/restaurants", (req, res) => {
  const sql = "SELECT * FROM restaurants";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/restaurantMenu", (req, res) => {
  const sql = "SELECT * FROM dish";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/restaurantData", (req, res) => {
  const sql = "SELECT * FROM restaurants WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO accounts (`account_number`,`firstname`,`lastname`,`email`) VALUES (?)";
  const values = [
    req.body.accountNumber,
    req.body.firstname,
    req.body.lastname,
    req.body.email,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE accounts SET `account_number` = ?, `firstname` = ?, `lastname` = ?, `email` = ? WHERE id = ?";
  const values = [
    req.body.accountNumber,
    req.body.firstname,
    req.body.lastname,
    req.body.email,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.delete("/accounts/:id", (req, res) => {
  const sql = "DELETE FROM accounts WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening!");
});
