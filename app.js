const express = require('express');
const cors = require('cors');
const tunerController = require('./controllers/tunerController');


const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Tuner!');
})

app.use('/songs', tunerController)

app.get("*", (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;