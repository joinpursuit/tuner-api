const express = require("express");
const songs = express.Router();
const {
	getAllSongs,
	getSong,
	createSong,
	deleteSong,
	updateSong,
} = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
	const allSongs = await getAllSongs();
	res.json({ success: true, payload: allSongs });
});

// SHOW
songs.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const song = await getSong(id);
		console.log(song);
		if (song.id === id) {
			res.json({ success: true, payload: song });
		} else {
			res.redirect("/404");
		}
	} catch (err) {
		return err;
	}
});

// CREATE
songs.post("/", async (req, res) => {
	const newSong = req.body;
	const result = await createSong(newSong);
	res.json({ success: true, payload: result });
});

// DELETE
songs.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const deletedSong = await deleteSong(id);
	res.json({ success: true, payload: deletedSong });
});

// UPDATE
songs.put("/:id", async (req, res) => {
	const { body, params } = req;
	const { name, artist, album, time, is_favorite } = body;

	if (!name || !album || !artist || !time) {
		res.status(422).json({
			error: true,
			success: false,
			message: "Please fill in all fields.",
		});
	} else {
		const result = await updateSong(params.id, body);
		res.json(result);
	}
});

module.exports = songs;
