const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (err) {
    return err;
  }
};

const getOneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (err) {
    return err;
  }
};

const addNewSong = async (newSong) => {
  const { name, artist, album, time, is_favorite } = newSong;

  try {
    const song = await db.one(
      `INSERT INTO 
         songs(name, artist, album, time, is_favorite)
         VALUES($1, $2, $3, $4, $5)
         RETURNING *`,
      [name, artist, album, time, is_favorite]
    );
    return song;
  } catch (err) {
    return err;
  }
};

//Delete
const deletedSong = async (id) => {
  try {
    const song = await db.one(`DELETE FROM songs WHERE id=$1 RETURNING *`, id);
    return song;
  } catch (err) {
    return err;
  }
};

//Update
const updateSong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;

  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  addNewSong,
  deletedSong,
  updateSong,
};
