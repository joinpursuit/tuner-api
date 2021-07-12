const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const songs = await db.all("SELECT * FROM songs");
    return songs;
  } catch (e) {
    return e;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one(`SELECT * FROM songs WHERE id = [id]`, { id });
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    if (!song.name) {
      throw 'You must specify a value for "name"';
    }
    const newSong = await db.one(
      `INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1,$2,$3,$4) RETURNING *`,
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};
