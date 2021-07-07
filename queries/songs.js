const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

const createSong = async (song) => {
  try {
    if (!song.title) {
      throw 'You must specify a value for "title"';
    } else {
      const newSong = await db.one(
        "INSERT INTO songs (title, artist, album, song_length, is_favorite) VALUES( $1, $2, $3, $4, $5) RETURNING *",
        [
          song.title,
          song.artist,
          song.album,
          song.song_length,
          song.is_favorite,
        ]
      );
      return newSong;
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
};
