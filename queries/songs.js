const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    return await db.any("SELECT * FROM song");
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    return await db.one("SELECT * FROM song WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const createASong = async (song) => {
  try {
    return db.any(
      "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
  } catch (error) {}
};

const updateASong = async (id, song) => {
  try {
    return await db.one(
      "UPDATE song SET name= $1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING * ",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
  } catch (error) {
    return error;
  }
};

const deleteASong = async (id) => {
  try {
    return await db.one("DELETE FROM song WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getASong,
  createASong,
  updateASong,
  deleteASong,
};
