const db = require('../db/dbConfig');

const getAllTunes = async () => {
  try {
    const songs = await db.any('SELECT * FROM song');
    return songs;
  } catch (error) {
    return error;
  }
};

const getATune = async (id) => {
  try {
    const song = await db.one('SELECT * FROM song WHERE id=$1', id);
    return song;
  } catch (error) {
    // console.log(error);
    return `Error! No song with ID of ${id}`;
  }
};

const createTune = async (tune) => {
  try {
    const newTune = await db.one(
      'INSERT INTO song (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [tune.name, tune.artist, tune.album, tune.time, tune.is_favorite]
    );
    return newTune;
  } catch (error) {
    return error;
  }
};

const updateTune = async (id, tune) => {
  try {
    const newTune = await db.one(
      'UPDATE song SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *',
      [tune.name, tune.artist, tune.album, tune.time, tune.is_favorite, id]
    );
    return newTune;
  } catch (error) {
    return error;
  }
};

const deleteTune = async (id) =>{

}

module.exports = {
  getAllTunes,
  getATune,
  createTune,
  updateTune,
  deleteTune
};
