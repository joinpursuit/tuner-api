const db = require('../db/dbConfig');

const getAllSongs = async (query) => {
  try {
    // let queries = '';
    // queries += is_favorite + '' ? 'WHERE is_favorite = ${is_favorite}' : '';
    const allSongs = await db.any('SELECT * FROM song');
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one('SELECT * FROM song WHERE id=$1', id);
    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (songObj) => {
  const songArr = Object.values(songObj);
  try {
    const song = await db.one(
      'INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      songArr
    );
    return song;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong };
