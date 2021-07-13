//DEPENDENCIES
const express = require("express");
const checkTypes = require("../helpers/checkTypes");
const { getAllSongs, getSong, createSong } = require("../queries/songs");

//CONFIGURATION
const songs = express.Router();

//ROUTES
songs.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json({ success: true, payload: songs });
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params
    const song = await getSong(id)
    if (song["id"]) {
        res.json({success: true, payload: song})
    } else {
        res.redirect("/404")
    }
})

songs.post("/", async (req, res) => {
    const song = req.body;
    if (checkTypes(song)) {
        const result = await createSong(song);
        res.json(result);
    } else {
        res.redirect("/404")
    }
})

//EXPORT
module.exports = songs;
