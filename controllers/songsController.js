const express = require("express");
const songs = express.Router();

const { getAllSongs, getSong, createSong } = require("../queries/songs")

songs.get("/", async (req, res) => {
    const songs = await getAllSongs();
    res.json({success: true, payload: songs});
});

module.exports = songs;