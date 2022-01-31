//requests to access data from a database to manipulate it or retrieve it
const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try{
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllSongs
}