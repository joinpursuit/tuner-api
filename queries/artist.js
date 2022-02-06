const db = require("../db/dbConfig");

// ALL ARTISTS
const getAllArtists = async () => {
  try {
    const allArtist = await db.any("SELECT * FROM artists");
    return allArtist;
  } catch (error) {
    return error;
  }
};

// ONE ARTIST
const getArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
    return oneArtist;
  } catch (error) {
    return error;
  }
};

// CREATE
const createArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artists (name, hometown, arrival_yr, band) VALUES($1, $2, $3, $4) RETURNING *",
      [artist.name, artist.hometown, artist.arrival_yr, artist.band]
    );
    return newArtist;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artists WHERE id = $1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateArtist = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artists SET name=$1, hometown=$2, arrival_yr=$3, band=$4 WHERE id=$5 RETURNING *",
      [artist.name, artist.hometown, artist.arrival_yr, artist.band, id]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

//EXPORT
module.exports = {
  getAllArtists,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
};
