const db = require("../db/dbConfig.js");

// for all the songs ...

const getAllSongs = async () => {
	try {
		const getAllSongs = await db.any("SELECT * FROM songs");
		return getAllSongs;
	} catch (err) {
		return err;
	}
};

// gettign a particular song gepending on the id ..
const getSong = async (id) => {
	try {
		const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
		return oneSong;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllSongs,
	getSong,
};
