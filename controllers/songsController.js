const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
	const allSongs = await getAllSongs();
	res.json({ success: true, payload: allSongs });
});

songs.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const song = await getSong(id);
		if (song["id"]) {
			res.json({ success: true, payload: song });
		} else {
			res.redirect("/404");
		}
	} catch (err) {
		return err;
	}
});

songs.post("/", async (req, res) => {
	const newSong = req.body;
	const result = await createSong(newSong);
	res.json({ success: true, payload: result });
});

module.exports = songs;
