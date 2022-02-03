//requests to access data from a database to manipulate it or retrieve it
const songs = require("../controllers/songsController.js");
const db = require("../db/dbConfig.js");

//get all songs
const getAllSongs = async () => {
    try{
        const allSongs = await db.any("SELECT * FROM songs");
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

// B O N U S
// /songs?order=asc it will organize the songs alphabetically
// /songs?order=desc it will organize the songs in reverse alphabetical order
// /songs?is_favorite=true it will only show the songs where the value of is_favorite is true
// /songs?is_favorite=false it will only show the songs where the value of is_favorite is false

const ascendingOrder = async () => {
    try{
        const ascendingOrdered = await db.any('SELECT * FROM songs ORDER BY name ASC');
        return ascendingOrdered;
    }catch(err){
        return console.log(`~~~ascending order song error`, err);
    }
}

const descendingOrder = async () => {
    try{
        const descendingOrdered = await db.any('SELECT * FROM songs ORDER BY name DESC');
        return descendingOrdered;
    }catch(err){
        return console.log(`~~~descending order song error`, err);
    }
}

const favoriteOrderTrue = async () => {
    try{
        const allFavoriteIsTrue = await db.any('SELECT * FROM songs WHERE is_favorite=TRUE');
        return allFavoriteIsTrue;
    }catch(err){
        return console.log(`~~~favorite is true song error`, err);
    }
}

const favoriteOrderFalse = async () => {
    try{
        const allFavoriteIsFalse = await db.any('SELECT * FROM songs WHERE is_favorite=FALSE');
        return allFavoriteIsFalse;
    }catch(err){
        return console.log(`~~~favorite is FALSE song error`, err);
    }
}

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong,
    ascendingOrder,
    descendingOrder,
    favoriteOrderTrue,
    favoriteOrderFalse
}