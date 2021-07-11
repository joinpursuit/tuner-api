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

const createSong = async () => {
    try {
        
    } catch (error) {
        
    }
};

module.exports = { getAllSongs, getSong, createSong }