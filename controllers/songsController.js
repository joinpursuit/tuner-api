const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong, ascendingOrder, descendingOrder } = require("../queries/songs.js");
//Index
songs.get("/", async (req, res) => {
    const { order, isFavorite } = req.query;
    try{
        if( !order && !isFavorite ) { ///if there are NO query params Simple get ALL SONGS
            const allSongs = await getAllSongs();
            if(allSongs[0]){
                res.status(200).json(allSongs);
            } else {
                res.status(500).json({error: "had trouble getting all the songs"});
            }
        } else { // if there are query parameters
            switch(order){
                case "asc":
                    const orderedByAsc = await ascendingOrder();
                    if(orderedByAsc[0]){
                        res.status(200).json(orderedByAsc);
                    }else{
                        res.status(500).json({error: "had trouble getting sorted songs ascendingly"});
                    }
                    break;
                case "desc":
                    console.log('descending')
                    const orderedByDesc = await descendingOrder();
                    if(orderedByDesc[0]){
                        res.status(200).json(orderedByDesc);
                    }else{
                        res.status(500).json({error: "had trouble getting sorted songs descendingly"})
                    }
                    break;
                default:
            }
            switch(isFavorite) {
                case "true":
                    console.log("true");
                    break;
                case "false":
                    console.log("false");
                    break;
                default:
            }
        }
    }catch(err){
        console.log("~~songsController.js: get all songs",err);
    }
});

//Show single songg 
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const song = await getSong(id);
        if(song.id){
            res.status(200).json(song);
        }else{
            res.status(500).json({ error: "had trouble getting the song"});
        }
    }catch(err){
        console.log("~~songsController.js: get single song",err);
    }
});

//create single song
songs.post("/", async (req, res) => {
    const { body } = req;
    try{
        const createdSong = await createSong(body);
        if(createdSong.id){
            res.status(200).json(createdSong);
        }else{
            res.status(500).json({ error: 'had trouble creating a song'});
        }
    }catch(err){
        console.log("~~~songsController.js: create song", err);
    }
});

//delete song
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const deletedSong = await deleteSong(id);
        if(deletedSong.id){
            res.status(200).json()
        }else{
            res.status(500).json({ error: 'had trouble deleteing the song'});
        }
    }catch(err){
        console.log("~~~songsController.js: delete song", err);
    }
})

//update song
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try{
        const updatedSong = await updateSong(id, body);
        if(updatedSong.id){
            res.status(200).json(updatedSong);
        }else{
            res.status(500).json({ error: 'had trouble updating the song'});
        }
    }catch(err){
        console.log("~~~songsController.js: update song", err);
    } 
})

module.exports = songs;