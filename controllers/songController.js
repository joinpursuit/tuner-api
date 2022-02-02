const express = require("express");
const songs = express.Router();

const {getAllSongs, getSong, createSong} = require("../queries/songs.js");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]) res.status(200).json(allSongs);
    else res.status(500).json({error: "server error"});
});

songs.get("/:id", async (req, res) => {
    const {id} = req.params;
    const song = await getSong(id);
    if(song.id) res.status(200).json(song);
    else res.status(500).json({error: "Song not found"});
});

songs.post("/", async (req, res) => {
    const {body} = req;
    const createdSong = await createSong(body);
    if(createdSong.id) res.status(200).json(createdSong);
    else res.status(500).json({error: "Song creation error"});
});

module.exports = songs;