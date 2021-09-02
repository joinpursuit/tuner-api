const db = require("../db/dbConfig");
// const AlbumCheck = require("../AlbumImg")

//READE
const getAllGenre = async () => {
    try {
      const allGenre = await db.any("SELECT * FROM genre_dev");
      return allGenre;
    } catch (err) {
      return err;
    }
  };


  module.exports = getAllGenre;