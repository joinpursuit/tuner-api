const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM song WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getASong,
};
