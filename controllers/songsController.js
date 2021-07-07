const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const song = await getOneSong(id);
        if (song["id"]) {
            res.json(song);
        } else {
            console.log(`Database error: ${song}`);
            throw `There is no bookmark with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({ error: "Resource not found.", message: error });
    }
});
module.exports = songs;