const express = require('express');
const songs = express.Router();
const { 
    getAllSongs, 
    getOneSong,
    newSong,
    updateSong,
    deleteSong
} = require('../queries/songs');

songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const song = await getOneSong(id);
    
        if (song['id']) {
            res.json(song);
        } else {
            console.log(`Database error: ${song}`)
            throw `There is no song with id: ${id}`
        };

    } catch (err) {
        res.status(404).json({
            error: 'Not Found.',
            message: err
        });
    };
});

songs.post('/', async (req, res) => {
    try {
        const song = await newSong(req.body);

        if (song['id']) {
            res.json(song);
        } else {
            console.log(`Database error: ${song}`);
            throw `Error adding ${req.body} to the database.`;
        };

    } catch (err) {
        res.status(404).json({
            error: err
        });
    };
});

songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const updatedSong = await updateSong(id, req.body);
        res.status(200).json(updatedSong);
    } catch (err) {
        res.status(404).json({
            message: `${id} does not exist`,
            error: err
        });
    };
});

songs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedSong = await deleteSong(id);
        res.status(200).json(deletedSong);
    } catch (err) {
        res.status(404).json({
            message: 'Not found',
            error: err
        });
    };
});

module.exports = songs;