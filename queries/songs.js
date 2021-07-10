const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (err) {
      return err;
    }
};

const getOneSong = async (id) =>{
    try {
        const oneSong = await db.one("SELECT * from songs WHERE id = $1", id)
        return oneSong;
    } catch (error) {
        console.log(error)
    }
}

const createSong = async () =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getAllSongs, getOneSong};