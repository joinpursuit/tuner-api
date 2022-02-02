const { request, response } = require('express');
const express = require('express');
const songs = express.Router();
const { getAllSongs, addNewSongs, getSong, deleteSong, updateSong } = require('../queries/songs');
// const favSongs = require('../models/song')


// here we use the function we wrote inside of our queries. 
// we have to await it because we dont want this file to move 
// on to the next lines of code without this one finishing,
//  even though we are already using await in the queries file
songs.get('/', async (request, response) => {
    const songs = await getAllSongs();
    // console.log(songs)
    response.status(200).json(songs);
});

songs.post('/', async (request, response) => {
    const newSongs = await addNewSongs(request.body);
    response.status(200).json(newSongs);
})
songs.get('/:index', async (request, response) => { 
    const {index} = request.params; 
    const song = await getSong(index);
    response.status(200).json(song);
})
songs.delete('/:id', async (request, response) => {
const {id} = request.params;
const song = await deleteSong(id);
response.status(200).json(song);    
})

songs.put('/:id', async (request, response) => {
    const {id} = request.params;
    const song = await deleteSong(id);
    response.status(200).json(song);    
    })

    songs.put(':/id', async (request, response) => {
    const {id} = request.params;
    const song = await updateSong(request.body, id);
    response.status(200).json(song);
    })



module.exports = songs;