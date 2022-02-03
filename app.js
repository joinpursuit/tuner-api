import express from "express"
import cors from "cors"
import songsController from "./controllers/songsController.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/songs', songsController)

app.get("/", (request, response) => {
    response.send("Welcome to Tuner")
})

app.get("*", (request, response) => {
    response.send("Error")
})

export default app