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
    const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id);
	return song;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSongs, getSong };
