const db = require("../db/config");

const fetchALLSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id= $1", id);
    return song;
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs(name, artist, album, time, is_favorite)VALUES ($1, $2, $3) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favosite]
    );
    return newSong;
  } catch (error) {
    console(error);
  }
};

module.exports = { fetchALLSongs, getSong, createSong };
