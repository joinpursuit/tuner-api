const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    return await db.any("SELECT * FROM song");
  } catch (error) {
    return error;
  }
};

const getASong = async (id) => {
  try {
    return await db.one("SELECT * FROM song WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getASong,
};
