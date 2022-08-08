const db = require('../db/dbConfig');

const getAllSongs = async () => {
  try {
    const song = await db.any('SELECT * FROM tuner');
    return song;
  } catch (error) {
    return error;
  }
};
const getASong = async (id) => {
  try {
    const song = await db.one('SELECT * FROM tuner WHERE id=$1', id);
    return song;
  } catch (error) {
    return error;
  }
};
const createASong = async ({ name, artist, album, time, is_favorite }) => {
  try {
    const newSong = await db.one(
      'INSERT INTO tuner (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [name, artist, album, time, is_favorite],
    );
    return new newSong();
  } catch (error) {
    return error;
  }
};

const deleteASong = async (id) => {
  try {
    const songToDelete = await db.one(
      'DELETE FROM tuner WHERE id=$1 RETURNING *',
      id,
    );
    return songToDelete;
  } catch (error) {
    return error;
  }
};
const updateASong = async (id, { name, artist, album, time, is_favorite }) => {
  try {
    const songToUpdate = await db.one(
      'UPDATE tuner SET name=$1, artist=$2, album=$3, time=$4,is_favorite=$5 where id=$6 RETURNING *',
      [name, artist, album, time, is_favorite, id],
    );
    return songToUpdate;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllSongs,
  getASong,
  createASong,
  updateASong,
  deleteASong,
};
