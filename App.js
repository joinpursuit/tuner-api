const express = require('express');
const cors = require('cors')
const songsController = require('./controllers/songsController')

const app = express();
app.use(cors());
app.use(express.json());


app.use('/songs', songsController)

app.get('/', (_, response) =>{
    response.send('Welcome to Tuner')
})

app.get('*', (_, response) =>{
    response.status(404).send({error:'Page not found!'})
})


module.exports= app