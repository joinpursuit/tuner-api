const db = require("../db/dbConfig");

// ALL Playlist
const getAllPlaylistsDetail = async () => {
  try {
    const allPLaylists = await db.any("SELECT * FROM playlistsongs");
    return allPLaylists;
  } catch (error) {
    return error;
  }
};

// ONE ARTIST
const getPlaylistDetail = async (id) => {
  try {
    const onePlaylist = await db.one(
      "SELECT * FROM playlistsongs WHERE id=$1",
      id
    );
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

// CREATE
const createPlaylistDetail = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlistsongs (song_id, playlist_id) VALUES($1, $2) RETURNING *",
      [playlist.song_id, playlist.playlist_id]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletePlaylistDetail = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlistsongs WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatePlaylistDetail = async (id, playlist) => {
  try {
    const updatedPlaylists = await db.one(
      "UPDATE playlistsongs SET song_id=$1, playlist_id=$2 WHERE id=$3 RETURNING *",
      [playlist.song_id, playlist.playlist_id, id]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

//EXPORT
module.exports = {
  getAllPlaylistsDetail,
  getPlaylistDetail,
  createPlaylistDetail,
  deletePlaylistDetail,
  updatePlaylistDetail,
};
