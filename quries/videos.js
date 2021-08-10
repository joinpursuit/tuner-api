const db = require("../db/dbConfig");
// const capitalize = require("../Capitalize");

const AllVideos = async () => {
  try {
    const Videos = await db.any("SELECT * FROM video_dev");
    return Videos;
  } catch (err) {
    return err;
  }
};

module.exports = AllVideos;
