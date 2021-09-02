const db = require("../db/dbConfig");
// const AlbumCheck = require("../AlbumImg")

//READE
const getAllArtist = async () => {
    try {
      const allArtist = await db.any("SELECT * FROM artist_dev");
      return allArtist;
    } catch (err) {
      return err;
    }
  };


  module.exports = getAllArtist;