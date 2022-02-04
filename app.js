const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors())
app.use(express.json())

const songsController = require('./controllers/songsController');
app.use('/songs', songsController);

app.get('/', (request, response) => {
    response.status(200).send('Welcome to our playlist!!')
});

app.get('*', (request, response) => {
    response.status(404).send("this is not the page you are looking for")
})

module.exports = app;