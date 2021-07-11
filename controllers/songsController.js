const express = require("express");
const songs = express.Router();

const { getAllSongs, getSong, createSong } = require("../queries/songs")

songs.get("/", async (req, res) => {
    const songs = await getAllSongs();
    res.json({success: true, payload: songs});
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.json(song)
    } else {
        res.redirect("/404")
    }
})

module.exports = songs;