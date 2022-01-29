const database = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await await db.any("SELECT * FROM song");
    return songs;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSongs };
