//DEPENDENCIES
const express = require("express")
const songs = express.Router()

// INDEX
songs.get("/", (req, res) => {
    res.json({
        status: "ok"
    })
})

// EXPORTS
module.exports = songs