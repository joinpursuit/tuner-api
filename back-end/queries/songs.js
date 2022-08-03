//import the db object
const db = require("../db/dbConfig");

//return all songs
const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};

//return a single song
const getOneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id = $1", id);
    console.log(song);
    return song;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getOneSong };
