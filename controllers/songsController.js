const express = require("express");
const songs = express.Router({
    mergeParams: true
});
const {
    getAllSongs,
    getSong,
    addSong,
    deleteSong,
    updateSong,
} = require("../queries/songs");

//index
songs.get("/", async(req, res) => {
        const songs = await getAllSongs(req.params.playlist_id);
        res.json(songs)
    })
    // songs.get("/", async(req, res) => {
    //     const allSongs = await getAllSongs();
    //     res.json(allSongs);
    // });

//show
songs.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const song = await getSong(id);
        if (song.id) {
            res.json(song);
        } else {
            //   console.log(`Database error: ${song}`);
            throw `There is no song with id: ${id}`;
        }
    } catch (error) {
        res.status(404).json({ error: "Resource not found.", message: error });
    }
});

//create
songs.post("/", async(req, res) => {
    try {
        const song = req.body;
        const newSong = await addSong(song);
        res.json(newSong);
    } catch (error) {
        return error;
    }
});

//update
songs.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { name, album, time, is_favorite } = body;
    if (!name || !album || !time || is_favorite) {
        res.status(422).json({
            error: true,
            success: false,
            message: "whatever",
        });
    } else {
        const updatedSong = await updateSong(id, body);
        res.status(200).json(updatedSong);
    }
});

//delete
songs.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
});

module.exports = songs;