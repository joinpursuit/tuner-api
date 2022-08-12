const express = require('express');

const songs = express.Router();
const db = require('../db/db/dbConfig.js');

const {
	allSongs,
	singleSong,
	createSong,
	deleteSong,
	updateSong,
} = require('../queries/songs.js');

const {
	checkName,
	checkBoolean,
	checkParams,
} = require('../validation/validation.js');

//   indexing

songs.get('/', async (req, res) => {
	const all = await allSongs();
	if (all) {
		res.json(all);
	} else {
		res.status(404).send('Aint no songs!');
	}
});

//   single song
songs.get('/:id', async (req, res) => {
	const { id } = req.params;
	const single = await singleSong(id);
	if (single) {
		res.json(single);
	} else {
		res.status(404).send('What song?!');
	}
});

// creating a song
songs.post('/new', checkName, checkBoolean, checkParams, async (req, res) => {
	const create = await createSong(req.body);
	if (create) {
		res.json(create);
	} else {
		res.status(404).send('CREATION FAILED!');
	}
});

// deleting a song
songs.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deleteSong(id);
	if (deleting) {
		res.json(deleting);
	} else {
		res.status(404).send('DELETING FAILED!');
	}
});

// updating song
songs.put('/:id', checkName, checkBoolean, checkParams, async (req, res) => {
	const updating = await updateSong(req.body);
	if (updating) {
		res.json(create);
	} else {
		res.status(404).send('UPDATE FAILED!');
	}
});

module.exports = songs;
