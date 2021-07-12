const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Tuner!');
})

app.get('/songs', (req, res) => {
    //list of all songs in the database
}