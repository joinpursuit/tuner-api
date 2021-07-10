const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
	try {
		const allSongs = await db.any("SELECT * FROM songs");
		return allSongs;
	} catch (err) {
		return err;
	}
};

const getSong = async () => {
	try {
	} catch (err) {
		return err;
	}
};

const getSong = async;
module.exports = { getAllSongs, getSong };
