// DEPENDENCIES
const express = require("express")
const cors = require("cors")
const songsController = require("./controllers/songsController.js")

// CONFIGURATION
const app = express()


// MIDDLEWARE
app.use(cors())
app.use(express.json())


// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Tuner API")
})

app.use("/songs", songsController)

app.get("*", (req, res) => {
    res.status(404).send("Could not find page")
})


// EXPORTS
module.exports = app