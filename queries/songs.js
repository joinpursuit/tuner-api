//requests to access data from a database to manipulate it or retrieve it
const songs = require("../controllers/songsController.js");
const db = require("../db/dbConfig.js");
//get all songs
const getAllSongs = async () => {
    try{
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;
    }catch(err){
        return err;
    }
}
//get one song
const getSong = async (id) => {
    try{
        const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id);
        return oneSong;
    } catch(err){
        console.log(`~~~get single song error`, err);
        return err;
    }
}

//create song
const createSong = async (song) => {
    try{
        const newSong = await db.one(
            'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
             [song.name, song.artist, song.album, song.time, song.is_favorite]
        )
        return newSong; 
    }catch(err){
        return console.log(`~~~create song error`, err);
    }
}

const deleteSong = async (id) => {
    try{
        const deletedSong = await db.one(
            'DELETE FROM songs WHERE id=$1 RETURNING *',
            id
        )
        return deletedSong;
    }catch(err){
        return console.log(`~~~delete song error`, err);
    }
}

const updateSong = async (id, song) => {
    try{
        const updatedSong = await db.one(
            'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
            [song.name, song.artist, song.album, song.time, song.is_favorite, id]
        );
        return updatedSong;
    }catch(err){
        return console.log(`~~~update song error`, err);
    }
}

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
}