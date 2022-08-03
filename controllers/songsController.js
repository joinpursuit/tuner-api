const express = require('express');
const router = express.Router();

const db = require('../db/dbConfig');
const { getAllSongs, getSong } = require('../queries/songs');

// router.use('/songs/:id', (req, res, next) => {
//   if (!transactions[req.params.id]) {
//     res.status(404).redirect('/error');
//   } else {
//     next();
//   }
// });

router.get('/', (req, res) => {
  res.send({ success: true });
});

router.get('/songs', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

router.get('/songs/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

router.post('/songs/new', async (req, res) => {
  const newSong = req.body;
  const newSongs = await db.any(
    'INSERT INTO songs (id, name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [
      newSong.id,
      newSong.name,
      newSong.artist,
      newSong.album,
      newSong.time,
      newSong.is_favorite
    ]
  );
  res.status(200).json(newSongs);
});

// router.put('/songs/:id', (req, res) => {
//   songs[req.params.id] = req.body;
//   res.json(songs[req.params.id]);
// });

// router.delete('/songs/:id', (req, res) => {
//   songs.splice(req.params.id, 1);
//   res.send(songs);
// });

module.exports = router;
