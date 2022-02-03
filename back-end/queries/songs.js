const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try{
        const allSongs = await db.any("SELECT * FROM songs;");
            return allSongs;
        } catch(err){
            return err;
    }
}

const getSongs = async (id) => {
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
            return oneSong;
        } catch(err){
            return err;
    }
}

const createSong = async(song) => {
    try{
        const newSong = await db.one(
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        )
            return newSong;
        } catch(err){
            return err;
    }
}

const deleteSong = async(id) => {
    try{
        const deletedSong = await db.one(
            "DELETE FROM songs WHERE ID = $1 RETURNING *",
            id
        );
            return deletedSong;
        } catch(err){
            return err;
    }
}

const updateSongs = async(id, song) => {
    try{
        const updatedSongs = await db.one(
            "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5, WHERE id=$6 RETURNING *"
            [song.name, song.artist, song.album, song.time, song.is_favorite]
            );
            return updatedSongs;
    } catch(err){
        return err;
    }
}



module.exports = {
    getAllSongs,
    getSongs,
    createSong,
    deleteSong,
    updateSongs
};