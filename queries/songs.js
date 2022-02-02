const db = require("../database/dbconfig");
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
  const newSong = await database.any(
    "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, artist, album, time, is_favorite]
  );

  return newSong;
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
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
    const updatedSong = await db.one(
      "UPDATE songs SET name=$2, artist=$3, album=$4, time=$5, is_favorite=$6 WHERE id=$1 RETURNING *",
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
  addNewSongs,
  deleteSong,
  updateSong,
};
