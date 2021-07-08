const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

//show
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

//create
const newSong = async (song ) => {
  try {
    const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite]);
    return newSong;
  } catch (err) {
    return err;
  }
};


//delete
const deleteSong = async (id) => {
try {
const deletedSong = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *', id);
return deletedSong
} catch (err) {
  return err;
}
};

//update 
const updateSong = async (id, song ) => {
  try {
    const updatedSong = await db.one("UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 where id=$6 RETURNING *",  
    [
      song.name,
      song.artist,
      song.album,
      song.time,
      song.is_favorite,
      id
    ]);
    return updatedSong;
  }catch (err){
    return err;
  }
}


module.exports = {
  getAllSongs,
  getSong,
  newSong,
  deleteSong,
  updateSong,
};

