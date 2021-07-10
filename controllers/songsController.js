const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

//index
songs.get("/", async(req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

//show
songs.get("/:id", async(req, res) => {
    const { id } = req.params;
    const song = await getSong(id)
    res.json(song)
})

module.exports = songs;