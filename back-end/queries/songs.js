const db = require("../db/dbConfig.js");

const getAllsongs = async ()=>{
    try{
        const allsongs = await db.any("SELECT * FROM songs;");
        return allsongs;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllsongs
};