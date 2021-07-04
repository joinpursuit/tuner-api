//DEPENDENCIES
const pgp = require("pg-promise")();



//CONFIGURATION
require("dotenv").config();




//CONNECTION OBJECT
const cn = {
    host:process.env.PG_HOST,
    port:process.env.PG_PORT,
    database:process.env.PG_DATABASE,
    user:process.env.PG_USER
}



//PASSING CONNECTION OBJECT TO PG_PROMISE
const db = pgp(cn);



//EXPORTS
module.exports = db;