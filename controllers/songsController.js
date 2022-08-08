const express = require('express');
const router = express.Router();

const db = require('../db/dbConfig');
const { getAllSongs, getSong, deleteSong, updateSong} = require('../queries/songs');

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

// INDEX
router.get('/songs', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

// SHOW
router.get('/songs/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

// CREATE
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

// UPDATE
router.put( "/songs/:id",
  async (req, res) => {
    try {
      const song = await updateSong(req.params.id, req.body);
      res.json(song);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

//DELETE
router.delete("/songs/:id", async (req, res) => {
  const { id } = req.params;
  const song = await deleteSong(id);
  if (song) {
    if (song.id) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
