const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        //db.any() is a function that takes a string as a first argument.
        //.any() - means it will accept any return from the database, no rows, one row, or many rows of data.
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch (err) {
        return err
    }
}
module.exports = {
    getAllSongs
};