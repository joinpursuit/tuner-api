const express = require('express');
const { getAllSongs, addNewSongs, getSong, deleteSong, updateSong } = require('../queries/song');
const songs = express.Router();

// const favSongs = require('../models/songs');

songs.get('/', async (req, res) => {
    const songs = await getAllSongs();
    console.log(songs)
    res.status(200).json(songs)
});

songs.get("/", async (req, res) => {
    const getAllSongs = await getAllSongs();
    if (getAllSongs[0]) {
      res.status(200).json(getAllSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
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