const express = require('express');
const song = express.Router();

const { getAllSongs } = require('../queries/songs');

const favSongs = require('../models/song')

song.get('/', async (request, response) => {
    const songs = await getAllSongs();
    console.log(songs)
    response.status(200).json(songs)
});

song.post('/new', async (request, response) => {
    const newSongs = request.body
    favSongs.push(newSongs);
    response.status(200).json(favSongs)
})

module.exports = song;