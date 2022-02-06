const db = require("../db/dbConfig.js");

const getAllSongs = async (order, is_favorite)=>{
    try{
        
        if(!order && !is_favorite){
            const allSongs = await db.any("SELECT * FROM songs");
            return allSongs;
        }
         else if(order === "asc"){
            const ascSongs = await db.any("SELECT * FROM songs ORDER BY name");
            return ascSongs;
        } else if(order == "desc"){
            const descSongs = await db.any("SELECT * FROM songs ORDER BY name DESC");
            return descSongs;
        }  else if(is_favorite === "false"){
            const notfavSongs = await db.any("SELECT * FROM songs WHERE is_favorite=FALSE");
            return notfavSongs;
        } else if (is_favorite === "true"){
            const favSongs = await db.any("SELECT * FROM songs WHERE is_favorite=TRUE");
            return favSongs
        } else {
            console.log("No quieries found")
            return ({error: "no quieries found"})
            
        }
        
    }catch(err){
        return err;
    }
};
const getSong = async (id)=>{
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch(err) {
        return err;
    }
}
const createSong = async (song)=>{
    try{
        const newSong = await db.one(
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [song.name, song.artist,song.album, song.time, song.is_favorite]
        )
        return newSong;
    }catch(err){
        return err;
    }
}
const deleteSong = async (id)=>{
    try{
        const deletedSong = await db.one(
            "DELETE FROM songs WHERE id = $1 RETURNING *",
            id
        )
        return deletedSong;
    }catch(err){
        return err; 
    }
}
const updateSong = async (id, song)=>{
    try{
        const updatedSong = await db.one(
            "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
            [song.name, song.artist,song.album, song.time, song.is_favorite, id]
        );
      
        return updatedSong;
    }catch(err){
        return err;
    }
};

module.exports ={
    getAllSongs,
    getSong,
    createSong, 
    deleteSong,
    updateSong,
};