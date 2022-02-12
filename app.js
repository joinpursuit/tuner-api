const express = require('express');
const cors = require('cors');
// const songsController = require('./controllers/songsController');

const app = express();
const PORT = process.env.PORT || 8008

app.use(cors());
app.use(express.json())

// Home Routes
app.use('/', (req, res) => {
    res.status(200).send('Welcome to Songs');
});

const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT  
module.exports = app;