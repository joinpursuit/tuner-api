const express = require("express");
const songs = express.Router();
// import queries
const { getAllSongs, getSong } = require("../queries/songs.js");

// INDEX
// new variable `allSongs` which is an array of songs objects. We have to await for the value to come back from the database.
songs.get("/", async (req, res)=>{
    try {
        const allSongs = await getAllSongs();
        if (allSongs[0]) {
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({ error: "server error" });
        }
    } catch (err) {
        console.log(err);
    }
});

// SHOW
songs.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        res.json({ id }); // testing in postman, it works
        
    } catch (err) {
        console.log(err);
    }
})

module.exports = songs;