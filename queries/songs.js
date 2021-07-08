const songs = require("../controllers/songsController");
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

const addSong = async (song) => {
    try {
        if (!song.name) {
            throw 'You must specify a value for "name"'
        }
        const newSong = await db.one("INSERT INTO songs (name, artist, time, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
            [song.name, song.artist, song.time, song.is_favorite]);
        return newSong;
    } catch (error) {
        return error
    };
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error
    };
};

const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
            [
                song.name, song.artist, song.album, song.time, song.is_favorite, id
            ]
        );
        return updatedSong;
    } catch (error) {
        return error
    };
};

module.exports = {
    getAllSongs,
    getOneSong,
    addSong,
    deleteSong,
    updateSong,
};