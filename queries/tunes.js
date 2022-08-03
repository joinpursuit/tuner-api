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

module.exports = {
  getAllTunes,
  getATune,
};
