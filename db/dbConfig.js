//require it and create an instance of it
const pgp = require("pg-promise")();
require("dotenv").config()

//pass object with necessary info in order to connect the server to our database
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

//OPEN CONNECTION
const db = pgp(cn);

module.exports = db