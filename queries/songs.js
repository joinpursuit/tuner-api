const { query } = require('../db/dbConfig.js');
const db = require('../db/dbConfig.js');
const { sortAndFilter } = require("../helpers/queryHandlers.js"); 



const getAllSongs = async (query) => {
try {
const queryString = sortAndFilter(query)
   const allSongs = await db.any('SELECT * FROM song' + (queryString ? ' ' + queryString : ''));
        return allSongs;
} catch(err) {
        return err;
    }
}


const getSong = async (id) => {
    try {
const song = await db.one('SELECT * FROM song WHERE id = $1', id);
        return song;  
} catch(err) {
        return err.received ? err : {err: "No object found with given id"}
    }
}


const createSong = async (songObj) => {
const songArr = Object.values(songObj)
    try {
const song = await db.one(
        "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            songArr);
            return song;
    } catch(err) {
        return err;
    }
}


const deleteSong = async (id)  => {
    try {
    const deletedSong = await db.one("DELETE FROM song WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch(err) {
    return err;
    }
}


const editSong = async (songObj, id) => {
    const songArr = Object.values(songObj)
    try{
        const editedSong = await db.one(
            "UPDATE song SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", songArr.concat(id));
        return editedSong;   
    } catch(err) {
        return err;
    }
}



module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    editSong
}
