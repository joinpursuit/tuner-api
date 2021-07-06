const express = require('express');
const songs = express.Router();
const { getSongs } = require('../queries/songs');

songs.get('/', async (req, res) => {
    const allSongs = await getSongs();
    res.json(allSongs);
});

// songs.get('/:id', async (req, res) => {

// });

// songs.post();

// songs.put();

// songs.delete();

module.exports = songs;