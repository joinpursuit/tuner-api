const express = require("express");
const songs = express.Router();
const {
	getAllSongs,
	getSong,
	createSong,
	deleteSong,
} = require("../queries/songs.js");

// for all the songs ...
songs.get("/", async (req, res) => {
	try {
		const allSongs = await getAllSongs();
		if (allSongs[0]) {
			res.status(200).json(allSongs);
		} else {
			res.status(500).json({
				error: "server error",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

// gettign a particular song gepending on the id ..
songs.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const songs = await getSong(id);
		if (songs.id) {
			res.status(200).json(songs);
		} else {
			res.status(500).json({ error: "Song Not Found" });
		}
	} catch (err) {
		console.log(err);
	}
});

// Creating a new song ..

songs.post("/", async (req, res) => {
	const { body } = req;
	try {
		const oneSong = await createSong(body);
		if (oneSong.id) {
			res.status(200).json(songs);
		} else {
			res.status(500).json({ error: "Song Creating Error" });
		}
	} catch (err) {
		console.log(err);
	}
});

// deleting the song
songs.put("/:id", async (req, res) => {
	const { id } = req.params;

	const deletedSong = await deleteSong(id);
	if (deletedSong.id) {
		res.status(200).json(deletedSong);
	} else {
		res.status(404).json({ error: "Song not found" });
	}
});

module.exports = songs;
