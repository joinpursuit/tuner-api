// Dependencies
const db = require('../db/dbConfig');

const getAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs');
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

const createNewSong = async (song) => {
  try {
    const newSong = await db.one('INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *', 
    [song.name, song.artist, song.album, song.time, song.is_favorite]);
    return newSong
  } catch (e) {
    return e;
  }
}


module.exports = {
  getAllSongs,
  getSong,
  createNewSong,
};