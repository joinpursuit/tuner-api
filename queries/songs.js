const db = require("../db/dbConfig");
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songslist");
    return allSongs;
  } catch (err) {
    return err.message;
  }
};

const getASong = async (id) => {
  try {
    const aSongQuery = await db.one("SELECT * FROM songslist WHERE id=$1", id);
    return aSongQuery;
  } catch (error) {
    console.log(error);
    return error;
  }
};


const createSong = async (song) => {
  console.log(song)
  const { name, artist, album, time, is_favorite } = song;
  const newSong = await db.one(
    "INSERT INTO songslist(name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, artist, album, time, is_favorite]
  );
  return newSong;
};


const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one("DELETE FROM songslist WHERE id=$1 RETURNING *", id)
  return deletedSong;
} catch (error) {
  return error;
  }
};


const updateSong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await db.one(
      "UPDATE songslist SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};



module.exports = {
  getAllSongs,
  getASong,
  createSong,
  deleteSong,
  updateSong
};
