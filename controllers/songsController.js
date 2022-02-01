const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs.js");

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

module.exports = songs;
