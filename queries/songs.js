const db = require("../db/dbConfig.js");

const getAllSongs = async (order, favorite) => {
    try {
        let dbQuery = "SELECT * FROM songs";
        favorite = favorite?.toUpperCase();
        if (favorite === "TRUE" || favorite === "FALSE") {
            dbQuery += ` WHERE is_favorite = ${favorite}`;
        }
        order = order?.toUpperCase();
        if (order === "ASC" || order === "DESC") {
            dbQuery += ` ORDER BY name ${order}`;
        }

        return await db.any(dbQuery);
    } catch (err) {
        return err;
    }
};

const getSong = async (id) => {
    try {
        return await db.one("SELECT * FROM songs WHERE id=$1", id);
    } catch (err) {
        return err;
    }
};

const createSong = async (song) => {
    try {
        return await db.one(
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        );
    } catch (err) {
        return err;
    }
};

const updateSong = async (id, song) => {
    try {
        return await db.one(
            "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite, id]
        );
    } catch (err) {
        return err;
    }
};

const deleteSong = async (id) => {
    try {
        return await db.one(
            "DELETE FROM songs WHERE id = $1 RETURNING *", id
        );
    } catch (err) {
        return err;
    }
};

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong
};
