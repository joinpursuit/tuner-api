const express = require("express");
const songs = express.Router({
    mergeParams: true
});
const checkTypes = require("./helper/checkTypes")
const { getAllSongs, getSong, createSong, deleteSong,updateSong } = require("../queries/songsQueries")

songs.get("/", async (req, res) => {
 
    console.log(req.params)
   
    const allSongs = await getAllSongs(req.params.playlist_id)
    res.json(allSongs)
});


songs.post("/", async (req, res) => {
    const { playlist_id } = req.params
    const created = await createSong(req.body, playlist_id);
    res.json(created);
});
songs.get("/:id", async (req, res) => {


//     const { id } = req.params
//     const song = await getSong(id)
//     try {
//         if (song["id"]) {
//             res.json({ success: true, payload:song })
//         } else {
//             console.log(`Database error: ${song}`);
//             throw `There is no song with id: ${id}`;
//         }
//     } catch (e) {
//         res.redirect('/404');
//     }
res.json(await getSong(req.params.id));
})
songs.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    res.json({ success: true, payload: deletedSong })
})
songs.put("/:id", async (req, res) => {
    const { id } = req.params
    const {body} = req
    console.log(body)
    if (checkTypes(body)) {
        const updatedSong = await updateSong(id, body);
        res.json(updatedSong);
    } else {
        res.status(422).json({ 
            error: true, success: false, message: 'Wrong Input' 
        });;
    }
});

module.exports = songs;