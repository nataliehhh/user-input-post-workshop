import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", function (req, res) {
    response.json("You are looking at the root route")
})

app.post("/messages", function (request, response) {
    const newMessage = request.body
    console.log(newMessage)
    response.json(newMessage)
})

app.listen(8080, function () {
    console.log("App is running")
})