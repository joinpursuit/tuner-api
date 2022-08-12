const express = require('express');

const songs = express.Router();
const db = require('../db/dbConfig');
const {
  getAllTunes,
  getATune,
  createTune,
  updateTune,
  deleteTune,
} = require('../queries/tunes');

//Index

songs.get('/', async (req, res) => {
  const allSongs = await getAllTunes();
  if (allSongs) {
    res.json(allSongs);
  } else {
    res.status(404).send('Something went wrong');
  }
});

//Individual
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const indySong = await getATune(id);
  if (indySong) {
    res.status(200).json(indySong);
  } else {
    res.status(404).send(`No song with id of ${id}`);
  }
});

//create
songs.post('/new', async (req, res) => {
  const newSong = await createTune(req.body);
  // console.log(newSong);
  res.status(200).json(newSong);
});

//update

songs.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTune = await updateTune(id, req.body);
    res.json(updatedTune);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//delete

songs.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteTune(id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    console.log(error.message || error);
    res.status(500).json({ error: 'deletion error' });
  }
});

module.exports = songs;
