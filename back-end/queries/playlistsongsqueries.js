const db = require("../db/dbConfig");

// GET ALL
const getAllPlaylistSongs = async (playlists_id) => {
  console.log(playlists_id);
  try {
    const allSongs = await db.any(
      `SELECT
      songs.artist,
      songs.name,
      songs.album,
      playlists_songs.id
    FROM songs
    JOIN playlists_songs
      ON songs.id = playlists_songs.songs_id
    JOIN playlists
      ON playlists.id =  playlists_songs.playlists_id
    WHERE playlists_songs.playlists_id = ${playlists_id}`
    );
    return allSongs;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const addSong = async (playlists_id, { songs_id }) => {
  try {
    const newPlaylistSong = await db.one(
      "INSERT INTO playlists_songs (playlists_id, songs_id) VALUES($1, $2) RETURNING *",
      [playlists_id, songs_id]
    );
    return newPlaylistSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deletePlaylistItem = async ({ song_id }) => {
  try {
    const itemDelete = await db.one(
      "DELETE FROM playlists_songs WHERE id=$1 RETURNING *",
      song_id
    );
    return itemDelete;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllPlaylistSongs,
  addSong,
  deletePlaylistItem,
  //   createReview,
  //   deleteReview,
  //   getReview,
  //   updateReview,
};
