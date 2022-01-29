const database = require("../database/dbconfig");

const getAllSongs = async () => {
  try {
    const songs = await database.any("SELECT * FROM songs;");
    return songs;
  } catch (err) {
    return err;
  }
};

const addNewSongs = async (newSongs) => {
  try {
    const songs = await database.any("INSERT INTO songs");
    return songs;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  addNewSongs,
};
