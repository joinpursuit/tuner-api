const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllSongs,
};
