const db = require('../db/dbConfig');

const orderBy = async (order) => {
  let orderedSongs;
  order = order.toLowerCase();
  console.log('inorder', order);
  if (order === 'asc') {
    orderedSongs = await db.any('SELECT * FROM songs ORDER BY "id" ASC');
  } else if (order === 'desc') {
    orderedSongs = await db.any('SELECT * FROM songs ORDER BY "id" DESC');
  }
  console.log('in orderBy', orderedSongs);
  return orderedSongs;
};

const check_is_favorite = async (favorite) => {
  console.log('in favorite,favorite');
  let isFavOrNot;
  if (favorite === 'false') {
    isFavOrNot = await db.any('SELECT * FROM songs WHERE is_favorite=false');
  } else {
    isFavOrNot = await db.any('SELECT * FROM songs WHERE is_favorite=true');
  }
  console.log('infavorite', isFavOrNot);
  return isFavOrNot;
};

const getAllSongs = async (order, is_favorite) => {
  let allSongs;

  try {
    if (order) {
      console.log('checkingfor orderby');
      return orderBy(order);
    } else if (is_favorite) {
      console.log('checking for isfavorite');
      allSongs = check_is_favorite(is_favorite);
    } else {
      console.log('no queries basic route');
      allSongs = await db.any('SELECT * FROM songs');
    }
    return allSongs;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getASong = async (id) => {
  try {
    const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

const createNewSongs = async ({
  name,
  artist,
  album,
  time,
  is_favorite,
  ...otherStuff
}) => {
  console.log(otherStuff);
  try {
    const newSong = await db.one(
      'INSERT INTO songs(name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (err) {
    return err;
  }
};

const deleteSong = async (id) => {
  try {
    const song = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *', id);
    return song;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateSong = async ({ name, artist, album, time, is_favorite }, id) => {
  try {
    const song = await db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      [name, artist, album, time, is_favorite, id]
    );
    return song;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getASong,
  createNewSongs,
  deleteSong,
  updateSong,
};
