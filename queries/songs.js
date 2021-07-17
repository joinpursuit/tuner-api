const db = require("../db/config.js")
console.log("--- inside queries/songs.js ---")

const getAllSongs = async (order, is_favorite) => {

    let query = "SELECT * FROM songs"

    if (is_favorite === 'true') {
        query += " WHERE is_favorite = true"
    } else if (is_favorite === 'false') {
        query += " WHERE is_favorite = false"
    }
    
    if (order === 'asc') {
        query += " ORDER BY name asc"
    } else if (order === 'desc') {
        query += " ORDER BY name desc"
    }

    try {
        const allSongs = await db.any(query)
        console.log("running query:", query)
        return allSongs;
    } catch (error) {
        console.log(error)
    }
}

const getSong = async (id) => {
    try {
        const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id)
        return song;
    } catch (error) {
        console.log(error)
    }
}

const createSong = async (newSong) => {
    const { name, artist, album, time, is_favorite } = newSong;
    if (!name || !artist || !album || !time || typeof is_favorite !== 'boolean') {
        return undefined;
    }
    try {
        const insertedSong = await db.one(
            "INSERT INTO songs(name,artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, artist, album, time, is_favorite])
        return insertedSong;
    } catch (error) {
        console.log(error)
    }
}

const deleteSong = async (id) => {
    try {
        const song = await db.one(`DELETE FROM songs WHERE id = $1 RETURNING *`, id)
        return song;
    } catch (error) {
        console.log(error)
    }
}

const updateSong = async (id, song) => {
    try {
        const { name, artist, album, time, is_favorite } = song
        const query = "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *";
        const updatedSong = await db.one(query, [name, artist, album, time, is_favorite, id])
        return updatedSong;
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong }