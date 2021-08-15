const db = require("../db/dbConfig");

//READE
const getAllLyrics = async () => {
    try {
      const allLyrics = await db.any("SELECT * FROM lyric_dev");
      return allLyrics;
    } catch (err) {
      return err;
    }
  };


  module.exports = getAllLyrics;