const express = require('express')
const playlists = express.Router()
const songsController = require('./songsController')

const  {getAllPlaylists} = require('../queries/playlists')


playlists.use('/:playlist_id/songs', songsController)


playlists.get('/', async (req, res) => {
    const playlists = await getAllPlaylists()
    res.json({
        success: true,
        payload: playlists
    })
})