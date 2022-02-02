//import database
const database = require('../db/dbconfig');

//Create
exports.addANewSong = async (newSong) => {
  try {
    const song = await database.one(
      'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        newSong.name,
        newSong.artist,
        newSong.album,
        newSong.time,
        newSong.is_favorite,
      ]
    );
    return song;
  } catch (err) {
    return err;
  }
};

//Read All
exports.getAllSongs = async () => {
  try {
    const allSongs = await database.any('SELECT * FROM songs');
    return allSongs;
  } catch (err) {
    return err;
  }
};

//Read One
exports.getASong = async (id) => {
  try {
    const song = await database.one('SELECT * FROM songs WHERE id = $1', id);
    return song;
  } catch (err) {
    return err;
  }
};

//Update
exports.updateASong = async (updatedSong, id) => {
  const { name, artist, album, time, is_favorite } = updatedSong;
  const song = await database.one(
    'UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite= $5 WHERE id = $6 RETURNING *',
    [name, artist, album, time, is_favorite, id]
  );
  return song;
};

//Delete
exports.deleteASong = async (id) => {
  try {
    const song = await database.one(
      'DELETE FROM songs WHERE id = $1 RETURNING *',
      id
    );
    return song;
  } catch (err) {
    return err;
  }
};
