const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongsQuery = await db.any("SELECT * FROM songs");
    return allSongsQuery;
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    const aSongQuery = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return aSongQuery;
  } catch (error) {
    return error;
  }
};

const addASong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  const query =
    "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const addedSong = await db.one(query, [
    name,
    artist,
    album,
    time,
    is_favorite,
  ]);
  return addedSong;
};

const deleteASong = async (id) => {
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
    const changedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return changedSong;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAllSongs, getASong, addASong, deleteASong, updateSong };
