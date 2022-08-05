//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const songs = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation

const {
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
} = require('../validations/checkSongs');

const {
  getAllSongs,
  getASong,
  createNewSongs,
  updateSong,
  deleteSong,
} = require('../queries/songs');

//any() coming from the pg promise, first argument is sql command,
//.any will take anything the sql command return
//Index
songs.get('/', async (req, res) => {
  const { order, is_favorite } = req.query;
  const allSongs='';
  try {
     allSongs = await getAllSongs(order,is_favorite);
     console.log('in controllers',allSongs);
    //  if (allSongs) {
    res.status(200).json({ success: true, payload: allSongs });
  // } 
    //else {
  } catch {
    console.error(allSongs);
    res.status(404).json({ success: false, message: 'Something went wrong' });
  }
});

//Show
songs.get('/:id', async (req, res) => {
  console.log('in rhe route')
  const { id } = req.params;
  try {
    const song = await getASong(id);
    // if (song) {
    res.status(200).json({ success: true, payload: song });
    // } else{
  } catch {
    res.status(404).send(`No song found with id of ${id}`);
  }
});

//CREATE
songs.post(
  '/new',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSong = req.body;
    console.log(newSong);
    try {
      const song = await createNewSongs(newSong);
      res.status(200).json({ success: true, payload: song });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }
);

//DELETE
songs.delete('/:id', async (req, res) => {
  console.log('Delete /:id');
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } else {
    console.error(deletedSong);
    res.status(500).json({ error: 'server error' });
  }
});

//update
songs.put(
  '/:id',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    console.log(req.body);
    const editSong = {
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      time: req.body.time,
      is_favorite: req.body.is_favorite,
    };
    try {
      const song = await updateSong(editSong, id);

      res.status(200).json({ success: true, payload: song });
    } catch (error) {
      res.status(404).send(`Cannot update the song`);
    }
  }
);

module.exports = songs;
