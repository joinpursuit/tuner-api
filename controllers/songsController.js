import express from "express"
import getAllSongs, {getSong, createSong} from "../query/songs.js"
const songs = express.Router()


songs.get('/', async (request, response) => {
    console.log("GET /songs")
    const songs = await getAllSongs()
    response.status(200).json(songs)
})

songs.get('/:id', async (request, response) => {
    console.log("GET /:id")
    const {id} = request.params
    const song = await getSong(id)
    response.status(200).json(song)
})

songs.post('/', async (request, response) => {
    console.log("POST /song")
    const song = await createSong(request.body)
    response.status(200).json(song)
})




export default songs