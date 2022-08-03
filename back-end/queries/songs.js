//import the db object
const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs };
