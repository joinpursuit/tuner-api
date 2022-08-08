const db = require('../db/dbConfig');

const getAllSongs = async () => {
  try {
    const songs = await db.any('SELECT * FROM songs');
    return songs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one('SELECT * FROM songs WHERE id=$1', id);
    return song;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const oneSong = await db.one(
      'DELETE FROM songs WHERE id=$1 RETURNING *',
      id
    );
    return oneSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (
  id,
  { name, artist, album, time, is_favorite}
) => {
  try {
    const updateSong = await db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *',
      [name, artist, album, time, is_favorite, id]
    );
    return updateSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  deleteSong,
  updateSong
};
