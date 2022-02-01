// imports pg promist
const pgp = require("pg-promise")();
// gives access to env file
require("dotenv").config();

// access and cennect env
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATBASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;
