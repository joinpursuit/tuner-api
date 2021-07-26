const express = require("express")
const playlistsController = require ("./controllers/playlistsController")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

// routes

app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
})
app.use("/playlists", playlistsController)

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found")
})

module.exports = app;