const { getAllSongs, getSong, createSong } = require("../queries/songs");
const songs = require("express").Router();


songs.get("/", async (req, res) => {
    const songs = await getAllSongs();
    console.log("GET RESPONSE: ", songs)
    res.json({ success: true, payload: songs })
})

//const db = require("../db/config.js");
// songs.get("/", async (req, res) => {
//     try {
//         const allSongs = await db.any("SELECT * FROM songs");
//         res.json({success: true, payload: allSongs});
//     } catch (error) {
//         console.log("****ERROR**** ",error);
//     }
// });

songs.get("/:id", async (req, res) => {
    const {id} = req.params;
    const song = await getSong(id);
    song ? res.json({success: true, payload: song}) : res.redirect('/WrongID')
})

songs.post("/", async (req,res)=>{
    const newSong = req.body;
    const song = await createSong(newSong);
    
    song ? res.json({success: true, payload: song}) : res.redirect('/missingData')
})

module.exports = songs;