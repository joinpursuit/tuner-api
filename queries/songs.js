const db = require('../db/dbConfig.js');

const getAllSongs = async () => {
try {
    const allSongs = await db.any('SELECT * FROM song');
    return allSongs;
} catch(error) {
    return error;
    }
}


module.exports = {
    getAllSongs
}
