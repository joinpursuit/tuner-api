const songs = require("../controllers/songsController.js");
const db = require("../db/config.js");

const getAllSongsFromPlaylist = async (playlistId) => {
  try {
    const allSongs = await db.any(
      "SELECT * FROM songs WHERE playlist_id = $1",
      playlistId
    );
    return allSongs;
  } catch (error) {
    console.log(error);
  }
};

const getAscSongs = async (playlistId) => {
  try {
    const ascSongs = await db.any(
      "SELECT * FROM songs ORDER BY name ASC WHERE playlist_id = $1",
      playlistId
    );
    return ascSongs;
  } catch (error) {
    console.log(error);
  }
};

const getDescSongs = async (playlistId) => {
  try {
    const descSongs = await db.any(
      "SELECT * FROM songs ORDER BY name DESC WHERE playlist_id = $1",
      playlistId
    );
    return descSongs;
  } catch (error) {
    console.log(error);
  }
};

const getisFavoriteSongs = async (playlistId) => {
  try {
    const isFavoriteSongs = await db.any(
      "SELECT * FROM songs WHERE playlist_id = $1 AND is_favorite = TRUE",
      playlistId
    );
    return isFavoriteSongs;
  } catch (error) {
    console.log(error);
  }
};

const getisNotFavoriteSongs = async (playlistId) => {
  try {
    const isNotFavoriteSongs = await db.any(
      "SELECT * FROM songs WHERE playlist_id = $1 AND is_favorite = FALSE",
      playlistId
    );
    return isNotFavoriteSongs;
  } catch (error) {
    console.log(error);
  }
};

const getSong = async (playlist_id, id) => {
  try {
    const song = await db.one(
      `SELECT * FROM songs WHERE playlist_id=$1 AND id = $2`,
      [playlist_id, id]
    );
    return song;
  } catch (error) {
    console.log(error);
  }
};

const createSongforPlaylist = async (newSong, playlistId) => {
  const { name, playlist, artist, album, time, is_favorite } = newSong;
  try {
    const theSong = await db.one(
      "INSERT INTO songs(name, playlist, artist, album, time, is_favorite, playlist_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, playlist, artist, album, time, is_favorite, playlistId]
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

const deleteSong = async (playlistId, id) => {
  try {
    const query =
      "DELETE FROM songs WHERE playlist_id=$1 AND id=$2 RETURNING *";
    const deletedSong = await db.one(query, [playlistId, id]);
    return deletedSong;
  } catch (error) {
    console.log(error);
  }
};

const updateSong = async (playlistId, id, song) => {
  try {
    const { name, playlist, artist, album, time, is_favorite } = song;
    const query =
      "UPDATE songs SET name=$1, playlist=$2, artist=$3, album=$4, time=$5, is_favorite=$6 WHERE playlist_id=$7 AND id=$8 RETURNING *";
    const updatedSong = await db.one(query, [
      name,
      playlist,
      artist,
      album,
      time,
      is_favorite,
      playlistId,
      id,
    ]);
    return updatedSong;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSongsFromPlaylist,
  getAscSongs,
  getDescSongs,
  getisFavoriteSongs,
  getisNotFavoriteSongs,
  getSong,
  createSongforPlaylist,
  deleteSong,
  updateSong,
};
