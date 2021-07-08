const songs = require("express").Router();
const db = require("../db/config.js");

songs.get("/",(req,res)=>{
    res.json({success: true})
})

module.exports = songs;