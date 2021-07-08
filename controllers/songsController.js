const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, addSong, deleteSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const song = await getOneSong(id);
        if (song["id"]) {
            res.json(song);
        } else {
            console.log(`Database error: ${song}`);
            throw `There is no bookmark with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({ error: "Resource not found.", message: error });
    }
});

songs.post("/", async (req, res) => {
    try {
        const newSong = await addSong(req.body);
        if (newSong["id"]) {
            res.json(newSong);
        } else {
            console.log(`Database error: ${song}`);
            throw `Error adding ${req.body} to the database.`;
        }
    } catch (error) {
        res.status(404).json({ error: error });
    }
});

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSong = await deleteSong(id);
        if (deletedSong.id) {
            res.json(deletedSong);
        } else {
            throw "Resource not found";
        }
    } catch (error) {
        res.status(404).json({ error: error });
    }
})

module.exports = songs;