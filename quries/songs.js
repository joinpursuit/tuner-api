const db = require("../db/dbConfig");

const getAllSongs = async ()=>{
    try{
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    }catch (err) {
        return err;
    }
}
const getSongs = async (id)=>{
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (error) {
        return error
    }
}
const newSongs = async (song)=>{
    try {
        const createSongs = await db.one(
        "INSERT INTO songs (name, artist, album, time, url, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
        [song.name, song.artist, song.album, song.time, song.url, song.is_favorite])
        return createSongs
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongs, getSongs, newSongs };