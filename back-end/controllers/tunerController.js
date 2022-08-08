const express = require('express');
const tuners = express.Router();
const {
  getAllSongs,
  getASong,
  createASong,
  deleteASong,
  updateASong,
} = require('../queries/tuners');
const db = require('../db/dbConfig');

tuners.get('/', async (request, response) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    response.json({ success: true, payload: allSongs });
  } else {
    console.error(allSongs);
    response
      .status(500)
      .json({ error: 'Something went wrong retrieving all songs.' });
  }
});

tuners.get('/:id', async (request, response) => {
  const { id } = request.params;
  const song = await getASong(id);
  if (song) {
    response.status(200).json({ success: true, payload: song });
  } else {
    response.status(404).send(`No such song with id of ${id}`);
  }
});

tuners.put('/:id', async (request, response) => {
  try {
    const updateSong = await updateASong(request.params.id, request.body);
    response.json(updateSong);
  } catch (error) {
    response.status(400).json({ error: 'Update song failed.' });
  }
});

tuners.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deletedSong = await deleteASong(id);
  if (deletedSong) {
    response.status(200).json(deletedSong);
  } else {
    console.error(deletedSong);
    response.status(500).json({ error: 'Error, Song could not be deleted.' });
  }
});

tuners.post('/', async (request, response) => {
  try {
    const newSongs = await createASong(request.body);
    response.json(newSongs);
  } catch (error) {
    response.status(400).json({ error: 'Creation of song failed.' });
  }
});
module.exports = tuners;
