const songs = require("../controllers/songsController.js")
const db = require("../db/config.js")

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        console.log(error)
    }
};

const getSong = async (id) => {
    try {
        const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id)
        return song
    } catch (error) {
        console.log(error)
    }
};

const createSong = async (newSong) => {
    const{ name, artist, album, time, is_favorite } = newSong
    try { 
        const song = await db.one('INSERT INTO songs(name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [name, artist, album, time, is_favorite]
        )
        return song
    } catch (error) {
        console.log(error);
    }
};

    const destroySong = 


module.exports = { getAllSongs, getSong, createSong }