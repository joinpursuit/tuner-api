const db = require("../db/dbConfig.js")


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    } catch (error) {
        return error
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (e) {
        return e
    }
}

const createSong = async (song) => {
    try {
        if (!song.name) {
            throw "You must specify a value for name"
        } else {
            const newSong = await db.one(
                "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [song.name, song.artist, song.album, song.time, song.is_favorite]
            )
            return newSong
        }
    } catch (e) {
        console.log(`Error in queries: ${e}`)
        return e
    }
}

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
        return deletedSong
    } catch (e) {
        console.log(`Error in queries`)
        return e
    }
}


module.exports = { getAllSongs, getSong, createSong, deleteSong }