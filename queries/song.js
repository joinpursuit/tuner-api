const db = require('../db/dbConfig.js');

const getAllSongs = async () => {
    try {
        const songs = await db.any('SELECT * FROM songs')
        return songs
    } catch(err) {
        return err;
    }
};




module.exports = {
    getAllSongs,
    // AddNewAnime

}