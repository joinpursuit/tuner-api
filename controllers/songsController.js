const express = require("express");
const songs = express.Router();
// import queries
const { getAllSongs, getSong, createSong } = require("../queries/songs.js");

// INDEX
// new variable `allSongs` which is an array of songs objects. We have to await for the value to come back from the database.
songs.get("/", async (req, res)=>{
    try {
        const allSongs = await getAllSongs();
        if (allSongs[0]) {
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({ error: "server error" });
        }
    } catch (err) {
        console.log(err);
    }
});

// SHOW
songs.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const song = await getSong(id);
        if (song.id) {
            res.status(200).json(song);
        } else {
            res.status(404).json({ error: "Song not found!" })
        }
    } catch (err) {
        console.log(err);
    }
})

// CREATE
songs.post("/", async (req, res)=>{
    try {
        const song = await createSong(req.body);
        res.status(200).json(song);
    } catch (error) {
        res.status(400).json({ error: "Song was not created!" })
    }
})

module.exports = songs;