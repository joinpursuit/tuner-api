const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

const songsController = require('./controllers/songsController')

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our Music database!')
});

app.use('/songs', songsController)






module.exports = app;