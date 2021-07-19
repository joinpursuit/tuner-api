const db = require("../db/dbConfig");

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
    const oneSong = await db.one("SELECT * FROM songs where id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
};
