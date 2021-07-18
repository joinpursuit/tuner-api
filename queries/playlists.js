const db = require("../db/config.js");

const getAllPlaylists = () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (err) {
    console.log(err);
  }
};

const getPlaylist = async (id) => {
  try {
    const playlist = awaitdb.one('SELECT * FROM playlists WHERE id = $1', id)
    return playlist

  } catch (err) {
    console.log(error);
  }
};

export default {getAllPlaylists, getPlaylist};
