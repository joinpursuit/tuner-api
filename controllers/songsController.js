const express = require("express")
const songs = require("express").Router();

songs.get("/", (req, res) => {
    res.send("Songs response")
})

module.exports = songs