const db = require("../db/dbConfig");
// const AlbumCheck = require("../AlbumImg")

//READE
const getAllAlbums = async (covers) => {
    try {
      const allAlbums = await db.any("SELECT * FROM albums_dev");
      return allAlbums;
    } catch (err) {
      return err;
    }
  };


  module.exports = getAllAlbums;