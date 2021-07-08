const pgp = require("pg-promise")();
require("dotenv").config();
const connectionObj = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    user: process.env.PG_USER
};
module.exports = pgp(connectionObj);
