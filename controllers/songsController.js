const { response } = require('express');
const express = require('express');
const songsRouter = express.Router();
const { getAllSongs, getOneSong, addNewSong } = require("../queries/songs")

songsRouter.get('/', async (_, response) => {
    const songs = await getAllSongs();
    console.log("Get /songs");
    response.status(200).json(songs);
})

songsRouter.get('/:index', async (request, response) => {
    const { index } = request.params;
    const song = await getOneSong(index);

    console.log("Get /:index");
    response.status(200).json(song);
})

songsRouter.post('/new', async (request, response) => {
    const newSong = request.body;
    const song = await addNewSong(newSong);

    console.log(newSong)
    console.log("CREATE new song");

    response.status(201).json(song);
})

module.exports = songsRouter;