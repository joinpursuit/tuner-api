const express = require('express');
const songsRoute = express.Router();
const { getAllSongs, 
        getSongById, 
        postAndGet,
        deleteAndGet,
        updateAndGet } = require('../queries/songQuery');

songsRoute.get('/', async (request, response) => {
    const allSongs = await getAllSongs();
    
    allSongs.length !== 0
    ? response.status(200).json(allSongs)
    : response.status(404).json({ error: `error fetching data` });
});

songsRoute.get('/:id', async (request, response) => {
    const theSong = await getSongById(request.params.id);
    
    theSong.id
    ? response.status(200).json(theSong)
    : response.status(404).json({ error: `data at id: ${request.params.id} not found` });
});

songsRoute.post('/', async (request, response) => {
    const postedSong = await postAndGet(request.body);
    
    postedSong.id
    ? response.status(201).json(postedSong)
    : response.status(404).json({ error: `wasn't able to post the content` });
});

songsRoute.delete('/:id', async (request, response) => {
    const deletedSong = await deleteAndGet(request.params.id);
    
    deletedSong.id
    ? response.status(200).json(deletedSong)
    : response.status(404).json({ error: `data at id: ${id} does not exist` });
});

songsRoute.put('/:id', async (request, response) => {
    const updatedSong = await updateAndGet(request.params.id, request.body);

    updatedSong.id
    ? response.status(200).json(updatedSong)
    : response.status(404).json({ error: `we're sorry we couldn't update the data` });
});

module.exports = songsRoute;