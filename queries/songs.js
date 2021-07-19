const db = require("../db/dbConfig");

//index
const getAllSongs = async(playlistId) => {
    try {
        const allSongs = await db.any("SELECT * FROM songs WHERE playlist_id = $1",
            playlistId);
        return allSongs;
    } catch (error) {
        return error;
    }
};

//songs index
// const getAllSongs = async() => {
//         try {
//             const allSongs = await db.any(`SELECT * FROM songs`);
//             return allSongs;
//         } catch (error) {
//             console.log(error)
//         }
//     }
//show
const getSong = async(id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return song;
    } catch (error) {
        return error;
    }
};

//update
const updateSong = async(id, body) => {
    const { name, album, time, is_favorite } = body;
    try {
        const updatedSong = await db.one(
            "UPDATE songs SET name=$1, album=$2, time=$3, is_favorite=$4 where id=$5 RETURNING *", [name, album, time, is_favorite, id]
        );
        return updatedSong;
    } catch (err) {
        return err;
    }
};

//create
const addSong = async(song) => {
    const { name, album, time, is_favorite } = song;
    try {
        const newSong = await db.one(
            "INSERT INTO songs ( name, album, time, is_favorite ) VALUES ($1, $2, $3, $4) RETURNING *", [name, album, time, is_favorite]
        );
        return newSong;
    } catch (error) {
        return error;
    }
};

//delete
const deleteSong = async(id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllSongs, getSong, addSong, deleteSong, updateSong };