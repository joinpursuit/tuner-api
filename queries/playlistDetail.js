const db = require("../db/dbConfig");

// ALL PLAYLIST
const getAllPlaylistsDetail = async () => {
  try {
    const allPLaylists = await db.any(
      "SELECT p.*, art.name AS artist, songs.title, alb.title AS album FROM playlistsongs AS p JOIN artists AS art ON p.artist_id = art.id JOIN songs ON p.song_id = songs.id JOIN albums AS alb ON p.album_id = alb.id;"
    );
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
      "INSERT INTO playlistsongs (song_id, artist_id, album_id, playlist_id) VALUES($1, $2, $3, $4) RETURNING *",
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
      "UPDATE playlistsongs SET song_id=$1, artist_id=$2, album_id=$3, playlist_id=$4 WHERE id=$5 RETURNING *",
      [
        playlist.song_id,
        playlist.artist_id,
        playlist.album_id,
        playlist.playlist_id,
        id,
      ]
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
