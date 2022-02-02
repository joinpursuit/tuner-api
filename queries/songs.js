const database = require("../db/dbConfig");

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
    const song = await database.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

const addNewSong = async (newSong) => {
  try {
    const song = await database.any(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        newSong.name,
        newSong.artist,
        newSong.album,
        newSong.time,
        newSong.is_favorite,
      ]
    );
    return song;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const song = await database.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return song;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await database.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  addNewSong,
  getSong,
  deleteSong,
  updateSong,
};
