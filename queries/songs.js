//DEPENDENCIES
const db = require("../db/dbConfig.js");



//QUERIES

//Select All Query
const getAllSongs = async ({order, is_favorite}) => {
    try{
        if(order && is_favorite !== undefined){
            const allSongs = await db.any(`SELECT * FROM songs WHERE is_favorite = $1 ORDER BY name ${order.toUpperCase()}`, is_favorite);
            return allSongs;
        }else if(order){
            const allSongs = await db.any(`SELECT name FROM songs ORDER BY name ${order.toUpperCase()}`);
            return allSongs;
        }else if(is_favorite !== undefined){
            const allSongs = await db.any(`SELECT * FROM songs WHERE is_favorite = $1`, is_favorite);
            return allSongs;
        }else{
            const allSongs = await db.any(`SELECT * FROM songs`);
            return allSongs;
        }
    }catch(err){
        return err
    }
};


//SELECT ONE
const getSong = async (id) => {
    try{
        const oneSong = await db.one(`SELECT * FROM songs WHERE id=$1`, id);
        return oneSong;
    }catch(err){
        return err;
    }
}



//CREATE 
const newSong = async (song) => {
    try{
        const newSong = await db.one(`INSERT INTO songs (name, artist, album, time,  is_favorite)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`, [song.name, song.artist, song.album, song.time,  song.is_favorite]);

        return newSong;
    }catch(err){
        return err;
    }
};



//DELETE
const deleteSong = async (id) => {
    try{
        const deletedSong = await db.one(`DELETE FROM songs WHERE id = $1 RETURNING *`, id);
        return deletedSong;
    }catch(err){
        return err;
    }
}


//UPDATE
const updateSong = async (id, song) => {
    try{
        const updatedSong = await db.one(`UPDATE songs SET name=$1, artist=$2, album=$3, time=$4,
        is_favorite=$5 WHERE id=$6 RETURNING *`, [song.name, song.artist, song.album, song.time,  song.is_favorite, id]);
        return updatedSong;
    }catch(err){
        return err;
    }
}



//EXPORTS
module.exports = {
    getAllSongs,
    getSong,
    newSong,
    deleteSong,
    updateSong
}