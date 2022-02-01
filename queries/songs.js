const db = require("../db/dbConfig");
 const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songslist");
   return allSongs;
  } catch (err) {
    return err.message;
  }
}



module.exports = {
  getAllSongs
};
