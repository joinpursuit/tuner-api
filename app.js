//dependencies
const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// const songsController = require("./controllers/songsController");

// app.use("/songs", songsController);

app.get('/', (_, response) => {
    response.status(200).send("Welcome to our favorite playlist")
});

app.get("*", (_, response) => {
    response.status(404).send("Page not found")
});

module.exports = app;