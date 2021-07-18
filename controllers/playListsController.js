const express = require("express");
const playlists = express.Router();
const { getAllPlaylists } = require("../queries/playListsQueries")
const songs = require( "./songsController")

playlists.use("/:playlist_id/songs",songs);

playlists.get('/', async (req,res)=>{
    const allPlaylists = await getAllPlaylists()
    res.json({ success: true, payload: allPlaylists })
})
playlists.get('/:playlist_id' )



module.exports = playlists;