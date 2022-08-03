const express = require('express');

const songs = express.Router();
// const db = require('../db/dbConfig');
const { getAllTunes, getATune } = require('../queries/tunes');

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
songs.post('/new', async (req, res) => {
  const newSong = await db.any(
    'INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      req.body.name,
      req.body.artist,
      req.body.album,
      req.body.time,
      req.body.is_favorite,
    ]
  );
  res.status(200).json({ success: true, payload: newSong });
});

module.exports = songs;
