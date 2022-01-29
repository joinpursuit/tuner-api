const pgp = require("pg-promise")();
require("dotenv").config();

// connection object
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

// open the connection. `cn` is short for `connection`
const db = pgp(cn);

module.exports = db;