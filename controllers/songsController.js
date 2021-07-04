//DEPENDENCIES
const express = require("express");



//CONFIGURATION
const songs = express.Router();
const { getAllsongs } = require("../queries/songs.js");



//ROUTES

//Index Route
songs.get("/", async (req, res) => {
    const allSongs = await getAllsongs();
    res.json({
        success : true,
        payload : allSongs
    })
});




//EXPORTS
module.exports = songs;