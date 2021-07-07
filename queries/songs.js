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

const getOneSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return song
    } catch (error) {
        return error
    };
};


module.exports = {
    getAllSongs,
    getOneSong,
};