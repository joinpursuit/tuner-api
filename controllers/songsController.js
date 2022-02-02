const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs.js");

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

module.exports = songs;
