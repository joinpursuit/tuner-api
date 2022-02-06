const db = require("../db/dbConfig");

// ALL SONGS
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// ONE SONG
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// await db.one("SELECT * FROM songs WHERE id=$[id]", {
//   id: id,
// });

// CREATE
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (title, time, is_favorite, yt_id, artist_id, album_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        song.title,
        song.time,
        song.is_favorite,
        song.yt_id,
        song.artist_id,
        song.album_id,
      ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateSongs = async (id, song) => {
  try {
    const updatedSongs = await db.one(
      "UPDATE songs SET title=$1, time=$2, is_favorite=$3, yt_id=$4, artist_id=$5, album_id=$6 WHERE id=$7 RETURNING *",
      [
        song.title,
        song.time,
        song.is_favorite,
        song.yt_id,
        song.artist_id,
        song.album_id,
        id,
      ]
    );
    return updatedSongs;
  } catch (error) {
    return error;
  }
};

//EXPORT
module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSongs,
};
