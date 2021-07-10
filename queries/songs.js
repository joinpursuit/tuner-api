const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs };
