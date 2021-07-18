const express = require('express')
const playlists = express.Router()
const songsController = require('./songsController')

const  {getAllPlaylists} = require('../queries/playlists')


playlists.use('/:playlist_id/songs', songsController)


playlists.get('/', async (req, res) => {
    console.log("hi")
    const playlists = await getAllPlaylists()
    console.log('another one')
    res.json({
        success: true,
        payload: playlists
    })
})

module.exports = playlists