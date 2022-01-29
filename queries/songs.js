const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongsQuery = await db.any("SELECT * FROM songs");
    console.log(`this belongs here ${allSongsQuery}`);
    return allSongsQuery;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs };

// const db = require("../db/dbConfig");

// const getAllSongs = async () => {
//   try {
//     const allSongs = await db.any("SELECT * FROM songs");
//     return allSongs;
//   } catch (err) {
//     return err;
//   }
// };

// module.exports = {
//   getAllSongs,
// };
