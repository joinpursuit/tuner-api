const express = require('express');
const songs = express.Router();
const { getAllSongs } = require('../queries/songs')

//INDEX
songs.get('/', async (_, res) => {
    const songs = await getAllSongs();
    console.log(songs)
    if(songs.length === 0){
        res.status(500).json({error: 'server error'})
    }
    res.status(200).json(songs)
});