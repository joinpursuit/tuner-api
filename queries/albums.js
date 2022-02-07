const db = require("../db/dbConfig");

// ALL ALBUMS
const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};

// ONE ALBUMS
const getAlbum = async (id) => {
  try {
    const oneAlbums = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbums;
  } catch (error) {
    return error;
  }
};

// CREATE
const createAlbum = async (album) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO albums (artist_id, title, year_released, duration, cover, rating, genre) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        album.artist_id,
        album.title,
        album.year_released,
        album.duration,
        album.cover,
        album.rating,
        album.genre,
      ]
    );
    return newArtist;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id = $1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET artist_id=$1, title=$2, year_released=$3, duration=$4, cover=$5, rating=$6, genre=$7 WHERE id=$8 RETURNING *",
      [
        album.artist_id,
        album.title,
        album.year_released,
        album.duration,
        album.cover,
        album.rating,
        album.genre,
        id,
      ]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

const getAlbumArtist = async (id) => {
  try {
    const artistAlbums = await db.any(
      "SELECT * FROM albums WHERE albums.artist_id=$1",
      id
    );
    return artistAlbums;
  } catch (error) {
    return error;
  }
};

//EXPORT
module.exports = {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
  getAlbumArtist,
};
