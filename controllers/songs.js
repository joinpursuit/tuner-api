const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");
const songs = require("express").Router();


songs.get("/", async (req, res) => {
    const  {order, is_favorite} = req.query;
    const songs = await getAllSongs(order, is_favorite);
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
    const { id } = req.params;
    const song = await getSong(id);
    song ? res.json({ success: true, payload: song }) : res.redirect('/WrongID')
})

songs.post("/", async (req, res) => {
    const newSong = req.body;
    const song = await createSong(newSong);
    song ? res.json({ success: true, payload: song }) : res.json({ success: false, error: "missing data" });
})

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await deleteSong(id);
    song ? res.json({ success: true, payload: song }) : res.json({ success: false, error: "wrong ID" });
})

songs.put("/:id", async (req, res) => {
    const { body, params } = req;
    const { name, artist, album, time, is_favorite } = req.body;
    if (!name || !artist || !album || !time || typeof is_favorite !== 'boolean') {
        res.status(422).json({ error: true, success: false, message: "you are missing some data" })
    } else {
        const result = await updateSong(params.id, body);
        res.json({ success: true, payload: result });

    }
})

module.exports = songs;