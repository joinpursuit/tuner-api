const database = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await database.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    const s = await database.one("SELECT * FROM songs WHERE id=$1", id);
    return s;
  } catch (error) {
    return error;
  }
};

const addASong = async (song) => {
  try {
    const add = await database.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return add;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id,song) => {
  try {
    const update = await database.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return update
  } catch (error) {
    return error;
  }
};


const deleteSong = async (id) => {
  try {
    const del = await database.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return del;
  } catch (error) {
    return error;
  }
};

//Passing as an object
module.exports = {
  getAllSongs,
  getASong,
  addASong,
  deleteSong,
  updateSong
};
