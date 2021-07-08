//DEPENDENCIES
const db = require("../db/config");

//CONFIGURATION
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
};

//EXPORT
module.exports = { getAllSongs };
