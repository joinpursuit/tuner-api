const express = require("express");
const { getAllSongs, getSong, newSong } = require("../queries/songs");
const songs = express.Router();


songs.get("/", async (req, res) => {
 const allSongs = await getAllSongs()
 res.json(allSongs)
});

songs.get("/:id", async (req,res) => {
    const { id } = req.params
    try {
        const song = await getSong(id)
        if (song["id"]){
            res.json(song)
        } else {
            throw song
        }
    } catch (e){
        res.redirect("/404")
    }
})

songs.post("/", async (req, res) => {
    const song = await newSong(req.body)
    res.json(song)
})
module.exports = songs;