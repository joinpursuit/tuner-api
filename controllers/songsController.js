const express = require('express');
const songs = express.Router();
const { getAllSongs } = require('../queries/songs');
// const favSongs = require('../models/song')


// here we use the function we wrote inside of our queries. 
// we have to await it because we dont want this file to move 
// on to the next lines of code without this one finishing,
//  even though we are already using await in the queries file

songs.get('/', async (request, response) => {
    console.log('songs');
    const songs = await getAllSongs();
    // console.log(songs)
    response.status(200).json(songs)
});


// song.post('/songs', async (request, response) => {
//     const newSongs = request.body
//     console.log(newSongs)
//     const music = await getAllSongs(newSongs)
//     response.status(200).json(music)
// })
// song.get('/:index', (request, response) => {
//     const { index } = request.params;
//     favSongs[request.params.index]
//     console.log(songs)
//     response.status(200).json(songs)
// });

// song.post('/', async (request, response) => {
//     const newSongs = request.body
//     favSongs.push(newSongs);
//     response.status(200).json(favSongs)
// })

module.exports = songs;