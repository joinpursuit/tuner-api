const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getOneSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * from songs WHERE id = $1", id);
    return oneSong;
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (newSong) => {
  try {
    const theSong = await db.one(
      "INSERT INTO songs (name, artist , album, time ,is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [newSong.name, newSong.artist, newSong.album, newSong.time, newSong.is_favorite]
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllSongs, getOneSong, createSong };
