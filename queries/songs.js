const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allsongs = await db.any("SELECT * FROM songs");
        return allsongs;
    } catch (error) {
      return error;
    }
};

module.exports = { getAllSongs };