const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};
const oneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, oneSong };
