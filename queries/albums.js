const db = require("../db/dbConfig");

//gets all Albums
const getAllAlbums = async () => {
  try {
    const albums = await db.any("SELECT * FROM albums");
    return albums;
  } catch (err) {
    return err;
  }
};

const getArtistAlbums = async (id) => {
  try {
    const Albums = await db.any("SELECT * FROM Albums WHERE artistid = $1", id);

    return Albums;
  } catch (error) {
    return error;
  }
};

//gets a specific album by id
const getAlbum = async (id) => {
  try {
    const review = await db.one("SELECT * FROM Albums WHERE artistId = $1", id);
    return review;
  } catch (err) {
    return err;
  }
};

//creates new review
const newAlbum = async (album) => {
  try {
    const Albums = await db.any(
      "INSERT INTO Albums (AlbumId, AlbumName, ReleaseDate, artistId) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        album.AlbumId,
        album.AlbumName,
        album.ReleaseDate,
        album.artistId
      ]
    );
    return Albums;
  } catch (err) {
    return err;
  }
};

// updates a specific review
const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE Albums SET AlbumId=$1, AlbumName=$2, ReleaseDate=$3 WHERE artistId=$4 RETURNING *",
      [
        album.AlbumId,
        album.AlbumName,
        album.ReleaseDate,
        id
      ]
    );
    return updatedAlbum;
  } catch (err) {
    return err;
  }
};

//deletes a specific
const deleteAlbum = async (id) => {
  try {
    const album = await db.one(
      "DELETE FROM Albums WHERE artistId=$1 RETURNING *",
      id
    );
    return album;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllAlbums,
  getAlbum,
  newAlbum,
  updateAlbum,
  deleteAlbum,
  getArtistAlbums,
};
