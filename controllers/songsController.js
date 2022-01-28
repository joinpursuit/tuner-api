const express = require("express");
const songs = express.Router();

// INDEX
songs.get("/", async (req, res)=>{
    res.json({ status: "ok" });
})

module.exports = songs;