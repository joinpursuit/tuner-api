const express = require('express');
const songs = express.Router();
const { validSong, formatSong } = require('../helpers/errors');

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  editSong,
} = require('../queries/songs');

//get all songs route
songs.get('/', async (req, res) => {
  const { query } = req;
  console.log(query);
  const allSongs = await getAllSongs(query);
  res.status(200).send(allSongs);
});

//show all songs route
songs.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const song = await getSong(id);
    res.status(200).json(song);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//Create a new song route
songs.post('/', validSong, async (req, res) => {
  try {
    const newPost = formatSong(req.body);
    const newResult = await createSong(newPost);
    res.status(200).json(newResult);
  } catch (error) {
    console.log(error);
  }
});

//Delete a song
songs.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//Edit a song
songs.put('/:id', async (req, res) => {
  try {
    const newPost = formatSong(req.body);
    const { id } = req.params;
    const editedSong = await editSong(newPost, id);
    res.status(200).json(editedSong);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = songs;
