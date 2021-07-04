//DEPENDENCIES
const express = require("express");



//CONFIGURATION
const songs = express.Router();



//ROUTES

//Index Route
songs.get("/", async (req, res) => {
    res.json({
        success : true,
        status : "OK"
    })
});




//EXPORTS
module.exports = songs;