const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs
  } catch (error) {
    return error;
  }
};

// ONE Song
const getSong = async () => {
  try {
    const oneSong = await db.one("SELECT * FROM song WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};


module.exports = { getAllSongs };