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

// create a new song list .
const createSong = async (song) => {
	try {
		const newSong = await db.one(
			"INSERT INTO songs (name , artist , album , time , is_favorite) VALUES ($1, $2 ,  $3 , $4 , $5) RETURNING *",
			[song.name, song.artist, song.album, song.time, song.is_favorite]
		);
		return newSong;
	} catch (err) {
		return err;
	}
};

// delete method

const deleteSong = async (id) => {
	try {
		const dSong = await db.one(
			"DELETE FROM songs WHERE id = $1 RETURNING *",
			id
		);
		return dSong;
	} catch (err) {
		return err;
	}
};

// creating a update method

const updateSong = async (id, song) => {
	try {
		const updatedSong = await db.one(
			"UPDATE songs SET name=$1, artist=$2, album=$3, time=$4 , is_favorite=$5 WHERE id=$6 RETURNING *",
			[song.name, song.artist, song.album, song.time, song.is_favorite, id]
		);
		return updatedSong;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllSongs,
	getSong,
	createSong,
	deleteSong,
	updateSong,
};
