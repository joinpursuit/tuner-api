const express = require('express');
const songs = express.Router({mergeParams: true});

const {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
} = require('../queries/songs.js')

const {
    RecordNotAddedError,
    ValidationError,
    customErrorHandler
} = require('../helper.js')

const validateSong = (req, res, next) => {
    try {
        const { name, artist, album, time, is_favorite } = req.body
        let isSong = true;
        let errorMsg = `Song request not formatted correctly: `;
        if (typeof name !== 'string') {
            isSong = false;
            errorMsg += `name is not a string.`
        }
        else if (typeof artist !== 'string') {
            isSong = false;
            errorMsg += `artist is not a string.`
        }
        else if (typeof album !== 'string') {   
            isSong = false;
            errorMsg += `album is not a string.`
        }
        else if (typeof time !== 'number') {
            isSong = false;
            errorMsg += `time is not a number.`
        }
        else if (typeof is_favorite !== 'boolean') {
            isSong = false;
            errorMsg += `is_favorite is not a boolean.`
        }
        if (!isSong) {
            throw new ValidationError(errorMsg)
        }
    } catch (error) {
        next(error)
    }
}

songs.get('/', async (req, res) => {
    const songs = await getAllSongs();
    res.json(songs);
});

songs.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const song = await getSong();
        if (song.id) {
            res.json(song)
        }
        else {
            console.log(`Database error: ${id}`);
            throw `There are no songs with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({
            error: `Resource not found.`,
            message: error
        })
    }
});

songs.post('/', validateSong, async (req, res) => {
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

songs.delete('/:id', async (req, res) => {
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

songs.put('/:id', validateSong, async (req, res) => {
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

songs.use(customErrorHandler);

module.exports = songs;

    




