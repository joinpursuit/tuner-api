const db = require('../database/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any('SELECT * FROM songs_info');
        return allSongs
    } catch (e) {
        return e
    }
};
const getSong = async (id) => {
    try {
      const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id)
      return oneSong
    } catch (e) {
      return e
    }
  };


module.exports = {getAllSongs, getSong}
