const express = require('express')
const playlists = express.Router()
const songsController = require('./songsController')

const  {getAllPlaylists, getPlaylist, createPlaylist} = require('../queries/playlists')


playlists.use('/:playlist_id/songs', songsController)


playlists.get('/', async (req, res) => {
    const playlists = await getAllPlaylists()
    res.json({
        success: true,
        payload: playlists
    })
})

playlists.get('/:id', async (req, res) => {
    const {id} = req.params
    const playlist = await getPlaylist(id)
    res.json({success: true, payload: playlist})
})

playlists.post("/", async (req, res) => {
    const newPlaylist = req.body;
    const result = await createPlaylist(newPlaylist);
    res.json(result);
});

module.exports = playlists