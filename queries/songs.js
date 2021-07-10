const db = require("../db/dbConfig");

const getAllSongs = async() => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }

};

const getSongs = async(id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id)
    } catch (error) {
        return error
    }
};

module.exports = { getAllSongs, getSongs };