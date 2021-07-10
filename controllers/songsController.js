const express = require("express");
const songs = express.Router();

const { 
    getAllSongs, 
    getSong, 
    createSong 
} = require("../queries/songs");


songs.get("/", async (req, res) => {
    const songs = await getAllSongs()
    console.log("response", songs)
    res.json({success: true, payload: songs})
})


songs.post("/", async (req, res) => {
    const newSong = req.body;
    const result = await createSong(newSong);
    res.json(result);
})

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    res.json({success: true, payload: song});
})

module.exports = songs;