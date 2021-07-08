// DEPENDENCIES
const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

// SHOW
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

// CREATE
const createSong = async (song) => {
  try {
    if (
      !song.name ||
      !song.artist ||
      !song.album ||
      !song.time ||
      !song.is_favorite
    ) {
      throw "You must specify a value";
    }
    if (
      typeof song.name !== "string" ||
      typeof song.artist !== "string" ||
      typeof song.album !== "string" ||
      typeof song.time !== "string" ||
      typeof song.is_favorite !== "boolean"
    ) {
      throw "You must specify a string or boolean";
    }
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite],
    );
    return newSong;
  } catch (err) {
    return err;
  }
};

// DELETE
const deleteSong = async (id) => {
  try {
    const deleted = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id,
    );
    return deleted;
  } catch (err) {
    return err;
  }
};

// UPDATE
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
        song.id,
      ],
    );
    return updatedSong;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
