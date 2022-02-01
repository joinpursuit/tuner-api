const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
	try {
		const getAllSongs = await db.any("SELECT * FROM songs");
		return getAllSongs;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllSongs,
};
