const express = require("express");
const songs = express.Router();

const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require("../queries/songs")

songs.get("/", async (req, res) => {
    const songs = await getAllSongs();
    res.json({success: true, payload: songs});
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.json(song)
    } else {
        res.redirect("/404")
    }
})

songs.post("/", async (req, res) => {
    const newSong = req.body;
    const result = await createSong(newSong);
    res.json(result)
})

songs.put("/:id", async (req, res) => {
    const { body, params } = req;
    const { name, category } = body;
    if( !name || !category || !url) {
        res.status(422).json({
            error: true, sucess:  false, message: "incorrect id"
        })
    } else {
        const result = await updateSong(params.id, body)
        res.json(result);
    }
});

songs.delete("/:id", async (req, res) => {
const { id } = req.params;
const deletedSong = await deleteSong(id);
res.json({success: true, payload: deletedSong})
});
module.exports = songs;