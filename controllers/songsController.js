const express = require('express');
const songsRouter = express.Router();
const { getAllSongs, getOneSong, addNewSong, deletedSong, updateSong } = require("../queries/songs")

songsRouter.get('/', async (_, response) => {
    const songs = await getAllSongs();
    if (songs.length === 0) {
        response.status(500).json({ error: "server error" });
    } else {
        console.log("Get /songs");
        response.status(200).json(songs);
    }
})

songsRouter.get('/:id', async (request, response) => {
    const { id } = request.params;
    const song = await getOneSong(id);

    if (song.id) {
        console.log("Get /:id");
        response.status(200).json(song);
    } else {
        response.redirect("/redirect")
    }
})

songsRouter.post('/', async (request, response) => {
    const newSong = request.body;
    const song = await addNewSong(newSong);

    console.log(newSong)
    console.log("CREATE new song");

    response.status(201).json(song);
})

songsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const song = await deletedSong(id);
    if (song.id) {
        console.log(song);
        console.log("DELETE /:id");
        response.status(200).json(song);
    } else {
        response.redirect("/redirect")
    }
})

songsRouter.put("/:id", async (request, response) => {
    const { id } = request.params;
    const updatedSong = request.body; 

    const song = await updateSong(id, updatedSong)

    if (song.id) {
        console.log("UPDATE /:id");
        console.log(song)
        response.status(200).json(song);

    } else {
        response.redirect("/redirect")
    }
})

module.exports = songsRouter;