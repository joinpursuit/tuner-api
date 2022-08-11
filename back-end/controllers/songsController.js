const express = require('express')
const songs = express.Router()
// const db = require('../db/dbConfig')
const {
  getAllSongs,
  getAnSong,
  createSong,
  deleteSong,
  updateSong,
} = require('../queries/song')
const {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
} = require('../Validation/validation')

//index
songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs()

  if (allSongs) {
    res.status(200).json(allSongs)
  } else {
    res.status(404).json('Something went wrong')
  }
})

//indiviual
songs.get('/:id', async (req, res) => {
  const { id } = req.params
  const song = await getAnSong(id)
  if (song) {
    res.status(200).json(song)
  } else {
    res.send(`No such song with id of ${id}`)
  }
})

//create
songs.post(
  '/new',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSongs = await createSong(req.body)
    if (createSong) {
      res.json(newSongs)
    } else {
      res.status(400).json('No song found')
    }
  }
)

//update
songs.put(
  '/:id',
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
  async (req, res) => {
    const { id } = req.params
    const updatedAnSong = await updateSong(id, req.body)

    if (updatedAnSong.id) {
      res.status(200).json(updatedAnSong)
    } else {
      res.status(400).json('Song not found')
    }
  }
)

//delete
songs.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deletedSong = await deleteSong(id)
  if (deletedSong.id) {
    res.status(200).json(deletedSong)
  } else {
    res.status(404).json('Song not found')
  }
})

module.exports = songs
