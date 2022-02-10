const db = require("../db/dbConfig");
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songslist");
    return allSongs;
  } catch (err) {
    return err.message;
  }
};

const getASong = async (id) => {
  try {
    const aSongQuery = await db.one("SELECT * FROM songslist WHERE artistId=$1", id);
    return aSongQuery;
  } catch (error) {
    console.log(error);
    return error;
  }
};


const createSong = async (song) => {

  const { artistname, genre, nationality, dateofbirth, activefrom } = song;
  const newSong = await db.one(
    "INSERT INTO songslist( artistname, genre, nationality, dateofbirth, activefrom ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [artistname, genre, nationality, dateofbirth, activefrom ]
  );
  return newSong;
};


const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one("DELETE FROM songslist WHERE artistid=$1 RETURNING *", id)
  return deletedSong;
} catch (error) {
  return error;
  }
};


const updateSong = async (id, song) => {
  const { artistname, genre, nationality, dateofbirth, activefrom } = song;
  try {
    const updatedSong = await db.one(
      "UPDATE songslist SET artistname=$1, genre=$2, nationality=$3, dateofbirth=$4, activefrom=$5 WHERE artistid=$6 RETURNING *",
      [artistname, genre, nationality, dateofbirth, activefrom, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};



module.exports = {
  getAllSongs,
  getASong,
  createSong,
  deleteSong,
  updateSong
};
