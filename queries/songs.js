const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM song");
    return songs;
  } catch (err) {
    return err;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM song WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const createdSong = await db.one(
      "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return createdSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM song WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const updatedSong = await db.one
    ("UPDATE song SET name=$2, artist=$3, album=$4, time=$5, is_favorite=$6 WHERE id=$1 RETURNING *",
      [id, name, artist, album, time, is_favorite]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
};
