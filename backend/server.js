const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const session = require("express-session");

require("dotenv").config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

const db = mysql.createPool({
  host: "localhost",
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");

  next();
});

app.use("/", require("./routes/UserRoutes"));
app.use(
  session({
    secret: "ABCDE",
    resave: false,
    saveUninitialized: true,
  })
);

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successfully:" + connection.threadId);
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.listen(port, () => console.log(`server started on port ${port}...`));
