const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
	try {
		const allSongs = await db.any("SELECT * FROM songs");
		return allSongs;
	} catch (err) {
		return err;
	}
};

const getSong = async (id) => {
	try {
		const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id);
		return song;
	} catch (err) {
		return err;
	}
};

const createSong = async (newSong) => {
	const { name, artist, album, time, is_favorite } = newSong;
	try {
		const theSong = await db.one(
			"INSERT INTO songs(name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[name, artist, album, time, is_favorite]
		);
		return theSong;
	} catch (err) {
		return err;
	}
};

const deleteSong = async (id) => {
	try {
		const query = "DELETE FROM songs WHERE id = $1 RETURNING *";
		const deletedSong = await db.one(query, id);
		return deletedSong;
	} catch (err) {
		return err;
	}
};

const updateSong = async (id, song) => {
	try {
		const { name, artist, album, time, is_favorite } = song;
		const query =
			"UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE ID = $6 RETURNING *";
		const result = await db.one(query, [
			name,
			artist,
			album,
			time,
			is_favorite,
			id,
		]);
		return result;
	} catch (err) {
		return err;
	}
};

module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };
