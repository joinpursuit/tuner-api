const express = require('express');
const songs = express.Router();
const { validSong } = require('../helpers/errors');

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
  res.status(200).json(allSongs);
});

//show all songs route
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  song.result ? res.redirect('/err') : res.status(200).json(song);
});

//Create a new song route
songs.post('/', async (req, res) => {
  const newPost = req.body;
  // if news post isn't valid, return error and end function
  if (!validSong(newPost)) {
    return res.status(200).json({ error: 'Invalid song object' });
  }
  const newResult = await createSong(newPost);
  res.status(200).json(newResult);
});

//Delete a song
songs.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  deletedSong.result ? res.redirect('/err') : res.status(200).json(deletedSong);
});

//Edit a song
songs.put('/:id', async (req, res) => {
  const newPost = validSong(req.body);
  const { id } = req.params;
  if (!newPost) {
    return res.status(200).json({ error: 'Please input a song name' });
  }
  const editedSong = await editSong(newPost, id);
  editedSong.result ? res.redirect('/err') : res.status(200).json(editedSong);
});

module.exports = songs;
