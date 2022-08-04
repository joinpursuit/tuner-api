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
    res.json({ success: true, payload: allSongs });
  } else {
    res.status(404).json({ succes: false, message: 'Something went wrong' });
  }
});

//Individual
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const indySong = await getATune(id);
  if (indySong) {
    res.status(200).json({ success: true, payload: indySong });
  } else {
    res.status(404).send(`No such song with id of ${id}`);
  }
});

//create
songs.post('/', async (req, res) => {
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

module.exports = songs;
