const pgp = require("pg-promise")();
const dotenv = require("dotenv");
dotenv.config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;

// const pgp = require("pg-promise")();
// require("dotenv").config();

// const con = {
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
//   user: process.env.PG_USER,
// };

// const db = pgp(con);

// module.exports = db;
