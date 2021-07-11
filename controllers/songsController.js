const express = require("express");
const songs = express.Router();
const {
    getAllSongs,
    getSong,
    addSong,
    deleteSong,
    updateSong,
} = require("../queries/songs");

//index
songs.get("/", async(req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

//show
songs.get("/:id", async(req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    res.json(song);
});

//create
songs.post("/", async(req, res) => {
    try {
        const newSong = req.body;
        const result = await addSong(newSong);
        res.json(result);
    } catch (error) {
        return error;
    }
});

//delete
songs.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
});

//update
songs.put(":id", async(req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
});

module.exports = songs;