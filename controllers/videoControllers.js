const express = require("express");
const videos = express.Router();
const AllVideos = require("../quries/videos");

videos.get("/", async (req, res)=>{
    const allVideos = await AllVideos();
    res.json(allVideos);
})


module.exports = videos;