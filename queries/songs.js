const database = require("../database/dbConfig");

// this function queries our db for us, which can take a while so we want to wait for it to finish.
const getAllSongs = async () => {
  try {
    const songs = await database.any("SELECT * FROM anime");
    return songs;
  } catch (err) {
    return err;
  }
};

// dont worry about this code, itll come up next week

const addNewSong = async (newSong) => {
  try {
    const songs = await database.any(
      "INSERT INTO anime (name, release) VALUES ($1, $2) RETURNING *",
      [newAnime.name, newAnime.release]
    );
    return songs;
  } catch (error) {
    return error;
  }
};

// here we are exporting our functions to use in our controllers
module.exports = {
  getAllSongs,
  addNewAnime,
};
