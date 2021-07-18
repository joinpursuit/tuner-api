const pgp = require("pg-promise")();
require("dotenv").config();

const connection = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

const db = pgp(connection);

module.exports = db;
