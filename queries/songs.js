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
      [
        newSong.name,
        newSong.artist,
        newSong.album,
        newSong.time,
        newSong.is_favorite,
      ]
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

const deleteSong = async (id) => {
  try {
    const theSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

const updateSong = async (id, updatedSong) => {
  const {name , artist , album , time , is_favorite} = updatedSong
  try {
    const theSong = await db.one(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [name , artist , album , time , is_favorite, id]
    );
    return theSong;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
};
