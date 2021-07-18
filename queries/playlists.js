const db = require("../db/config.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;

  } catch (err) {
    console.log('about to log err')
    console.log(err);
  }
};

const getPlaylist = async (id) => {
  try {
    const playlist = await db.one('SELECT * FROM playlists WHERE id = $1', id)
    return playlist

  } catch (err) {
    console.log(error);
  }
};

const createPlaylist = async (newPlaylist) => {
	const { playlistName } = newPlaylist 
    try {
        const thePlaylist = await db.one(
			"INSERT INTO playlists (playlistName) VALUES($1) RETURNING *",
			[playlistName]
		);
		return thePlaylist
    } catch (error) {
		console.log(error)
	}
};

module.exports = {getAllPlaylists, getPlaylist, createPlaylist};
