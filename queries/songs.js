const db = require("../db/dbConfig.js");

const getAllSongs = async ()=>{
    try{
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
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



module.exports ={
    getAllSongs,
    getSong
};