const express = require('express');
const songs = express.Router();
const { getSongs, getOneSong } = require('../queries/songs');

songs.get('/', async (req, res) => {
    const allSongs = await getSongs();
    res.json(allSongs);
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const song = await getOneSong(id);

        if (song['id']) {
            res.json(song);
        } else {
            throw `Database error: ${bookmark}`
        };

    } catch (err) {
        res.status(404).json({
            error: 'Not Found.',
            messge: err
        });
    }
});

songs.post('/', async (req, res) => {
    try {
        const song = await newSong(req.body);

        if (song['id']) {
            res.json(song);
        } else {
            console.long(`Database error: ${song}`);
            throw `Error adding ${req.body} to the database.`;
        };

    } catch (err) {
        res.status(404).json({
            error: err
        });
    };
});

// songs.put();

// songs.delete();

module.exports = songs;