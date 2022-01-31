//requests to access data from a database to manipulate it or retrieve it
const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try{
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;
    }catch(err){
        return err;
    }
}

module.exports = {
    getAllSongs
}