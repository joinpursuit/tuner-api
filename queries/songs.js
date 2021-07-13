const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

// CREATE
const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    if (!name) {
      throw 'You must specify a value for "name"';
    }
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (e) {
    return e;
  }
};

// DELETE
const deleteSong = async (id) => {
  try {
    const query = "DELETE FROM songs WHERE id = $1 RETURNING *";
    const deletedSong = await db.one(query, id);
    return deletedSong;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
};
