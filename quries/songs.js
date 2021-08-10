const db = require("../db/dbConfig");
const capitalize  = require("../Capitalize");
const imageCheck = require("../Imagen");

//READE
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs_dev");
    return allSongs;
  } catch (err) {
    return err;
  }
};

//SHOW
const getSongs = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs_dev WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

//CREATE
const newSongs = async (song) => {
  try {
    if (!song.name) {
      throw `You must specify a value for "name" `;
    }
    const capi = capitalize(song.name);
    const art = capitalize(song.artist);
    const alb = capitalize(song.album);
    const pho = imageCheck(song.photo);
    // const short = articule(song.artist)
    const createSongs = await db.one(
      "INSERT INTO songs_dev (name, artist, album, photo, time, mp3, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [capi, art, alb, pho, song.time, song.mp3, song.is_favorite]
    );
    return createSongs;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteSong = async (id) => {
  try {
    const delet = await db.one("DELETE FROM songs_dev WHERE id=$1 RETURNING *", id);
    return delet;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateSong = async (id, song) => {
  try {
    const update = await db.one(
      "UPDATE songs_dev SET name = $1, artist = $2, album = $3, photo = $4, time = $5, mp3 = $6, is_favorite = $7 WHERE id = $8 RETURNING *",
      [ song.name, song.artist, song.album, song.photo, song.time, song.mp3, song.is_favorite, id]
    );
    return update;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSongs, newSongs, deleteSong, updateSong };
