const db = require("../db/config.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (err) {
    console.log("about to log err");
    console.log(err);
  }
};

const getPlaylist = async (id) => {
  try {
    const playlist = await db.one("SELECT * FROM playlists WHERE id = $1", id);
    return playlist;
  } catch (err) {
    console.log(error);
  }
};

const createPlaylist = async (newPlaylist) => {
  const { playlistName } = newPlaylist;
  try {
    const thePlaylist = await db.one(
      "INSERT INTO playlists (playlistName) VALUES($1) RETURNING *",
      [playlistName]
    );
    return thePlaylist;
  } catch (error) {
    console.log(error);
  }
};

const deletePlaylist = async (id) => {
  try {
    const query = "DELETE FROM playlists WHERE id = $1 RETURNING *";
    const deletedPlaylist = await db.one(query, id);
    return deletedPlaylist;
  } catch (err) {
    return err;
  }
};

const updatePlaylist = async (id, playlist) => {
  try {
    const { playlistName } = playlist;
    const query =
      "UPDATE playlists SET playlistName = $1 WHERE id=$2 RETURNING *";
    const result = await db.one(query, [playlistName, id]);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
