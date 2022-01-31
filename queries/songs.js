const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
       const songs = await db.any('SELECT * FROM songs')
       return songs;
        //db.any query the database, await is waiting for anything after to finish
    } catch(err) {
        return err;
    }
};


module.exports = {
getAllSongs
}