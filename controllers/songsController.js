//DEPENDENCIES
const express = require("express")
const songs = express.Router()
const { getAllSongs } = require("../queries/songs")

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs()
    res.json(allSongs)
})
// EXPORTS
module.exports = songs