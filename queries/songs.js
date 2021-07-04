//DEPENDENCIES
const db = require("../db/dbConfig.js");



//QUERIES

//Select All Query
const getAllsongs = async () => {
    try{
        const allSongs = await db.any(`SELECT * FROM songs`);
        return allSongs;
    }catch(err){
        return err
    }
};



//EXPORTS
module.exports = {
    getAllsongs
}