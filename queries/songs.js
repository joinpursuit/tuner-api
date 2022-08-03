const db = require("../db/dbConfig");

const checkIfSongExists = async (songID) => {
  try {
    const song = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", songID);
    return song;
  } catch (err) {
    return err;
  }
};

const getAllSongs = async () => {
  try {
    const song = await db.any("SELECT * FROM songs");
    return song;
  } catch (err) {
    return err;
  }
};

const getOneSong = async (songID) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", songID);
    return song;
  } catch (err) {
    return err;
  }
};

const postNewSong = async (newSong) => {
  try {
    const song = await db.one(
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
  } catch (err) {
    return err;
  }
};

module.exports = {
  checkIfSongExists,
  getAllSongs,
  getOneSong,
  postNewSong,
};
