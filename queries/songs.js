const db = require('../db/dbConfig');

const getSongs = async () => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (err) {
        return err;
    }
};

module.exports = {
    getSongs,
};