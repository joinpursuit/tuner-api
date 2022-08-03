//pgp allows us to connect to the database
const pgp = require("pg-promise")();

//set up the envrionment variables
require("dotenv").config();

//connection object
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;
