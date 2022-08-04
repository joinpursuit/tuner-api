const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    const tune = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return tune;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const newSongs = await db.any(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSongs;
  } catch (error) {
    return error;
  }
};

const deleteASong = async (id) => {
  try {
    const tune = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
    return tune;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateASong = async (id, { name, artist, album, time, is_favorite }) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllSongs,
  getASong,
  createSong,
  deleteASong,
  updateASong,
};
