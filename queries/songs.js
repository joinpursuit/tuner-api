const db = require("../db/dbConfig");

//index
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

//show
const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

//create
const addSong = async (song) => {
  const { name, album, time, is_favorite } = song;
  try {
    const newSong = await db.one(
      "INSERT INTO songs ( name, album, time, is_favorite ) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one("DELETE FROM songs WHERE id = $1", id);
    return deletedSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, addSong, deleteSong };
