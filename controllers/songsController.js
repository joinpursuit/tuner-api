const express = require("express");

const songs = express.Router()
const {getAllSongs} = require('../queries/songs')

songs.get('/', async (request, response) =>{
const songs = await getAllSongs();
response.send(songs)
})


module.exports=songs



