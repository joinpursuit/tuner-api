const songs = require("../controllers/songsController.js");
const db = require("../db/config.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
};

const getAscSongs = async () => {
  try {
    const ascSongs = await db.any("SELECT * FROM songs ORDER BY name ASC");
    return ascSongs;
  } catch (error) {
    console.log(error);
  }
};

const getDescSongs = async () => {
  try {
    const descSongs = await db.any("SELECT * FROM songs ORDER BY name DESC");
    return descSongs;
  } catch (error) {
    console.log(error);
  }
};

const getisFavoriteSongs = async () => {
  try {
    const isFavoriteSongs = await db.any("SELECT * FROM songs WHERE is_favorite = TRUE");
    return isFavoriteSongs;
  } catch (error) {
    console.log(error);
  }
};

const getisNotFavoriteSongs = async () => {
  try {
    const isNotFavoriteSongs = await db.any("SELECT * FROM songs WHERE is_favorite = FALSE");
    return isNotFavoriteSongs;
  } catch (error) {
    console.log(error);
  }
};


const getSong = async (id) => {
  try {
    const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id);
    return song;
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (newSong) => {
  const { name, artist, album, time, is_favorite } = newSong;
  try {
    const theSong = await db.one(
      "INSERT INTO songs(name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

const deleteSong = async (id) => {
  try {
    const query = "DELETE FROM songs WHERE id=$1 RETURNING *"
    const deletedSong = await db.one(query, id)
    return deletedSong
  } catch (error) {
    console.log(error)
  }
}

const updateSong = async (id, song) => {
  try {
    const { name, artist, album, time, is_favorite} = song
    const query = "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *"
    const updatedSong = await db.one(query, [name, artist, album, time, is_favorite, id])
    return updatedSong
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllSongs, getAscSongs, getDescSongs, getisFavoriteSongs, getisNotFavoriteSongs, getSong, createSong, deleteSong, updateSong };
