const express = require('express');
const router = express.Router();

const {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
} = require('../queries/songs.js')

router.get('/', async (req, res) => {
    const songs = await getAllSongs();
    res.json(songs);
});

router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const song = await getSong();
        if (song.id) {
            res.json(song)
        }
        else {
            console.log(`Database error: ${id}`);
            throw `Theres is no songs with id: ${id}`
        }
    } catch (error) {
        resizeTo.status(404).json({
            error: `Resourve not found.`,
            message: error
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const song = await createSong(req.body);
        if (song) {
            res.json(song);
        }
        else {
            const err = `Record not added to database: ${JSON.stringify(req.body)}`;
            throw new RecordNotAddedError(err);
        }
    }
    catch (error) {
        return next(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const song = await deleteSong(id);
        if (song) {
            res.json(song.id);
        }
        else {
            const err = `Record not deleted from database: ${id}`;
            throw new RecordNotDeletedError(err);
        }
    }
    catch (error) {
        return next(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const song = await updateSong(req.body);
        if (song.id) {
            res.json(song);
        }
        else {
            const err = `Record not added to database: ${JSON.stringify(err)}`
        }
    } catch (error) {
        throw new RecordNotAddedError(error);
    }
});

module.exports = router;

    




