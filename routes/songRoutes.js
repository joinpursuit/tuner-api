//Dependencies
const express = require('express');
// const songController = require(`${__dirname}/../controllers/songController`);
const songController = require('../controllers/songController');

//Configuration
const songs = express.Router();
songs.route('/').get(songController.getSongs).post(songController.addNewSong);

songs
  .route('/:id')
  .get(songController.getSong)
  .put(songController.updateSong)
  .delete(songController.deleteSong);

module.exports = songs;
