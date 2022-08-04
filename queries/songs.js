const db = require('../db/dbConfig');

const getAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs');
    return allSongs;
  } catch (error) {
    return error;
  }
};


const getASong = async (id) => {
  try {
    const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

const createNewSongs = async ({ 
  name,
  artist, 
  album,
  time, 
  is_favorite,
  ...otherStuff }) => {
    console.log(otherStuff)
  try {
    const newSong = await db.one(
      'INSERT INTO songs(name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (err) {
    return err;
  }
};

const deleteSong = async (id) => {
  try {
    const song = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *', id);
    return song;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateSong = async ({ name, artist, album, time, is_favorite }, id) => {
  try {
    const song = await db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      [name, artist, album, time, is_favorite, id]
    );
    return song;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getASong,
  createNewSongs,
  deleteSong,
  updateSong,
};
