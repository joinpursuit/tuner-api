const db = require("../db/config");

const fetchPlaylists = async () => {
  try {
    const playlists = await db.any(`SELECT * FROM playlists`);
    return { success: true, payload: playlists };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

const getPlaylist = async (id) => {
  try {
    const playlist = await db.one(`SELECT * FROM playlists WHERE id = $1`, id);
    return { success: true, payload: playlist };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const newPlaylistForSongs = async (playlist) => {
  const { title } = playlist;
  try {
    const created = await db.one(
      `INSERT INTO playlists (title) VALUES ($1) RETURNING *`,
      [title]
    );
    return { success: true, payload: created };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};
const updatePlaylist = async (id, playlist) => {
  try {
    const { title } = playlist;
    const query = "UPDATE playlists SET title=$1 WHERE id = $1 RETURNING *";
    const result = await db.one(query, [title]);
    return { success: true, payload: result };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};
module.exports = { fetchPlaylists, getPlaylist, newPlaylistForSongs, updatePlaylist};
