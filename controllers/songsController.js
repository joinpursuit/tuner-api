//DEPENDENCIES
const express = require("express");



//CONFIGURATION
const songs = express.Router();
const { 
    getAllSongs, 
    getSong, 
    newSong, 
    deleteSong, 
    updateSong } = require("../queries/songs.js");





//ROUTES

// ASCENDING OR DESCENDING ORDER
// songs.get("/?" , async (req, res) => {
//     if(req.query.order.toLowerCase() === 'asc'){
//         res.send(req.query.order.toLowerCase())
//     }else if (req.query.order.toLowerCase() === 'desc'){
//         res.send(req.query.order.toLowerCase())
//     }else{
//         const allSongs = await getAllSongs();
//         res.json({
//             success : true,
//             payload : allSongs
//         })
//     }
// })



// Index Route
songs.get("/", async (req, res) => {
    const { order, is_favorite } = req.query;
    const allSongs = await getAllSongs({order, is_favorite});
    res.json({
        success : true,
        payload : allSongs
    })
});




//Create Route
songs.post("/", async (req, res) => {
    const song = await newSong(req.body);
    res.json({
        success: true,
        payload: song
    })
})



//Show Route
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    
    try{
        if(song['id']){
        res.json({
            success: true,
            payload: song
        });
        }else{
            throw `There is no song with id: ${id}`;
        }
    }catch(error){
        res.status(404).json({
            success : false,
            error : `Resource not found`,
            message : error
        })
    }
    
    
    // if(song.received === 0){
    //     res.status(404).json({error : "not found"});
    // }else{
        // res.json({
        //     success: true,
        //     payload: song
        // });
    // }
});





//Delete Route
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json({
        success: true,
        payload: deletedSong
    });
})



//Update Route
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json({
        success: true,
        payload: updatedSong
    });
})






//EXPORTS
module.exports = songs;