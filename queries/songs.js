const db = require('../db/dbConfig');
const { sortAndFilter } = require('../helpers/queryHandlers');

const getAllSongs = async (query) => {
  try {
    const queryString = sortAndFilter(query);
    const allSongs = await db.any(
      'SELECT * FROM songs' + (queryString ? ' ' + queryString : '')
    );
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one('SELECT * FROM songs WHERE id=$1', id);
    return song;
  } catch (error) {
    throw error;
  }
};

const createSong = async (songObj) => {
  const songArr = Object.values(songObj);
  try {
    const song = await db.one(
      'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      songArr
    );
    return song;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      'DELETE FROM songs WHERE id=$1 RETURNING *',
      id
    );
    return deletedSong;
  } catch (error) {
    throw error;
  }
};

const editSong = async (songObj, id) => {
  const songArr = Object.values(songObj);
  try {
    const editedSong = await db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      songArr.concat(id)
    );
    return editedSong;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllSongs, getSong, createSong, deleteSong, editSong };
