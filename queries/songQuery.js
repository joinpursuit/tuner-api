const database = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await await database.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSongs };
