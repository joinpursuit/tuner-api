const db = require("../db/dbConfig.js");

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
    const song = await db.one("SELECT * FROM songs where id=$1", id)
    return song 
  } catch(err){
    return err
  }
}

const newSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (err) {
    return err;
  }
};
module.exports = {
  getAllSongs,
  getSong,
  newSong
};
