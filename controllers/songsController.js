const express = require('express')
const songs = express.Router()
const { getAllSongs, getSong, createNewSong } = require('../queries/songs')
log = console.log

// INDEX
songs.get('/', async (req, res) => {
	const allSongs = await getAllSongs()
	res.json(allSongs)
})

// SHOW
songs.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const song = await getSong(id)
		if (song['id']) {
			res.json(song)
		} else {
			throw `No song found at index ${id}`
		}
	} catch (e) {
		res.status(404).send({ error: 'Resource not found', message: e })
	}
})

// CREATE
songs.post('/', async (req, res) => {
	try {
		const song = await createNewSong(req.body)
		if (song['id']) {
			res.json(song)
      console.log(song)
		} else {
			log(`Database: ${song}`)
		}
	} catch (e) {
		res.status(404).json({ error: e })
	}
})

module.exports = songs
