const express = require('express');
const songs = express.Router();

songs.get('/', (req, res) => {
    res.json({Success: 'good'})
})

module.exports = songs;