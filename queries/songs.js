const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    return songs;
  } catch (e) {
    return e;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one(`SELECT * FROM songs WHERE id = [id]`, { id });
    return oneSong
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    if (!song.name) {
      throw 'You must specify a value for "name"';
    }
    const newSong = await db.one(
      `INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1,$2,$3,$4) RETURNING *`,
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    return await db.one(`DELETE FROM songs WHERE id = $1 RETURNING *`, { id });
  } catch (error) {
    return error;
  }
}

const updateSong = async (id, song) => {
    try {
        return await db.one(`UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *`,
            [song.name, song.artist, song.album, song.time, song.is_favorite, id]);
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
};

