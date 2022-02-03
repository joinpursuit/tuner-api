//Dependencies
const express = require('express');
const cors = require('cors')

const app = express();

//Middleware
app.use(cors())
app.use(express.json())

//Controller
const songsController = require('./controllers/songsController')
app.use('/songs', songsController)

//Routes
app.get("/", (_, response) => {
    response.status(200).send('Welcome to Tuner App!')
})

app.get('*', (_, response) => {
    response.status(404).send("this is not the page you are looking for")
})

module.exports = app;