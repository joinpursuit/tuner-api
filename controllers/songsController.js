const express = require("express");
const songs = express.Router();

//Index
songs.get("/", (req, res) => {
    res.status(202).json( {message: "All good!"} );
})

module.exports = songs;

