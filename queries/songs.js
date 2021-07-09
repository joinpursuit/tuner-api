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

const deleteSong = async (id) => {
  try {
    const deleted = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deleted;
  } catch (err) {
    return err;
  }
};

const updateSong = async (id, song) => {
  try {
    const updated = await db.one(
      "UPDATE songs SET title=$1, artist=$2, album=$3, song_length=$4, is_favorite=$5 where id=$6 RETURNING *",
      [
        song.title,
        song.artist,
        song.album,
        song.song_length,
        song.is_favorite,
        id,
      ]
    );
    return updated;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
