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
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(` `)[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get users from token

      db.query(
        "SELECT * FROM store_db.store,store_db.admin WHERE admin_id=?",

        decoded.id,
        function (error, results, fields) {
          if (error) throw error;

          return res.send({
            error: false,
            data: results[0],
            message: "Fetch Successfully.",
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(401).json({ msg: "Not authorized" });
    }
  }
  if (!token) {
    return res.status(401).json({ msg: "NO token, Authorization denied" });
  }
};

module.exports = protect;
