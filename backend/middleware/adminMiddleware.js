const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

require("dotenv").config();
const db = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});
const protect1 = async (req, res, next) => {
  const sqla = "SELECT role FROM store_db.admin WHERE role='admin'";
  if (sqla.role === "admin") {
    next();
  } else {
    res.status(401).send({ msg: "not Authorized" });
  }
};
module.exports = protect1;
