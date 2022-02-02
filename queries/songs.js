// bring connection to database
const { errors } = require("spex");
const db = require("../db/dbConfig.js");

/* Getting ALL songs */
// function that will have a SQL query. Async to wait for the response from the database before we try to return a value.
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
};

/* Getting ONE song */
const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
}

/* CREATE */
const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (name, album, time, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
            [song.name, song.album, song.time, song.is_favorite]
        );
        return newSong;
    } catch (error) {
        return error;
    }
}

// DELETE
const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one(
            "DELETE FROM songs WHERE id=$1 RETURNING *",
            id
        );
        return deletedSong;
    } catch (error) {
        return error;
    }
}

// UPDATE

// returning an object because we are going to return more than one function
module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
};