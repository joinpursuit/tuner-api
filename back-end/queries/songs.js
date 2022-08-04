//import the db object
const db = require("../db/dbConfig");

//return all songs
const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//return a single song
const getOneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id = $1", id);
    return song;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//post a new song
const postNewSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;

  try {
    const newSong = await db.any(
      "INSERT INTO songs (name,artist,album,time,is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//delete a song
const deleteSong = async (id) => {
  try {
    const deletedSong = db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
    return deletedSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//update the song
const updateTheSong = async (song, id) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4 ,is_favorite=$5 where id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  postNewSong,
  deleteSong,
  updateTheSong,
};
