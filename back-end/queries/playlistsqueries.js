const db = require("../db/dbConfig");

const getAllPlaylists = async () => {
  try {
    const playlist = await db.any("SELECT * FROM playlists");
    return playlist;
  } catch (error) {
    return error;
  }
};

const getOnePlaylist = async (id) => {
  try {
    const playlist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return playlist;
  } catch (error) {
    return error;
  }
};

const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.any(
      "INSERT INTO playlists (name, creator) VALUES ($1, $2) RETURNING *",
      [playlist.name, playlist.creator]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const playlist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return playlist;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
};
