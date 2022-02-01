import express from "express"
import cors from "cors"

const app = express()

app.get("/", (request, response) => {
    response.send("Welcome")
})

export default app