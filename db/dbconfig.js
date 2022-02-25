// Import PG promise and immediately invoke, and also configure dotenv
const pgp = require('pg-promise')();
require('dotenv').config();

// Create a configuration object and assign it the values provided in the env file for the database configuration
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

// We are instantiating our database using pg-promise passing in our configuration as an argument
const database = pgp(cn);
module.exports = database;
