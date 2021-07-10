const db = require('../database/dbConfig.js');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any('SELECT * FROM songs_info');
        return allSongs
    } catch (e) {
        return e
    }
};


module.exports = {getAllSongs}
