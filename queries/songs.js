const database = require("../database/dbconfig");

const getAllSongs = async () => {
  try {
    const songs = await database.any("SELECT * FROM songs");

    return songs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);

    return song;
  } catch (error) {
    return error;
  }
};

const addNewSongs = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  const newSongs = await database.any(
    "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, artist, album, time, is_favorite]
  );

  return newSongs;
};

module.exports = {
  getSong,
  getAllSongs,
  addNewSongs,
};
