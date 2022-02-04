// const songs = require("../controllers/SongsController");
const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * from songs");return allSongs;
  } catch (error) {
    return error;
  }
};


const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};


// CREATE
const createSong = async (song) => {
    try {
  const { name, artist, album, is_favorite } = song;
  const newSong = await db.one(
    "INSERT INTO Songs (name, artist, album, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
    [ name, artist, album, is_favorite ]
  );
  return newSong;
    } catch (error) {
        return error;
    }
};


// DELETE from Songs
const deleteSong = async (id) {
    try { 
        const deletedSong = await db.one(
            'DELETE FROM songs WHERE id = $1 RETURNING *', id);
        return deletedSong;
    } catch (error) {
        return error; 
    }
}

// UPDATE
const updateSong = async (id, song) => {
    try {
        const { name, artist, album, is_favorite } = song;
        const changedSong = await db.one('UPDATE songs SET name= $1, artist=$2, album=$3, is_favorite=$4 WHERE id=$5 RETURNING *', [ name, artist, album, is_favorite, id ]);
        return changedSong;
    } catch (error){
        return error
    };
};


module.exports = {
  createSong,
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
