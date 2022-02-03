import pg from 'pg-promise'; 
import dotenv from "dotenv"

const pgp = pg()
dotenv.config()

const connect = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

const db = pgp(connect);

export default db;