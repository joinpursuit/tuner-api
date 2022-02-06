const db = require("../db/dbConfig");

// ALL Playlist
const getAllPlaylists = async () => {
  try {
    const allPLaylists = await db.any("SELECT * FROM playlists");
    return allPLaylists;
  } catch (error) {
    return error;
  }
};

// ONE ARTIST
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

// CREATE
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (title, description, picture) VALUES($1, $2, $3) RETURNING *",
      [playlist.title, playlist.description, playlist.picture]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylists = await db.one(
      "UPDATE playlists SET name=$1, hometown=$2, arrival_yr=$3, band=$4 WHERE id=$5 RETURNING *",
      [playlist.name, playlist.hometown, playlist.arrival_yr, playlist.band, id]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

//EXPORT
module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
