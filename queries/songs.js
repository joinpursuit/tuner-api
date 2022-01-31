const database = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await database.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};

const addNewSong = async (newSong) => {
  try {
    const songs = await database.any(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        newSong.name,
        newSong.artist,
        newSong.album,
        newSong.time,
        newSong.is_favorite,
      ]
    );
    return songs;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllSongs,
  addNewSong,
};
