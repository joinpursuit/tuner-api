const express = require("express");
const songsController = require("./songsController")
const playlists = express.Router();
const { getAllPlaylists } = require("../queries/playlist")

playlists.use("/:playlist_id/songs", songsController);

playlists.get("/", async(req, res) => {
    const playlists = await getAllPlaylists();
    console.log("RESPONSE!!!", playlists);
    res.json(playlists)
});

module.exports = playlists;