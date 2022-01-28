const { response } = require('express');
const express = require('express');
const songsRouter = express.Router();
// const { getAllSongs } = require("../queries/songs")

songsRouter.get('/', async (_, response) => {
    const songs = await getAllSongs();
    console.log("Get /songs");
    response.status(200).json(songs);
})

module.exports = songsRouter;