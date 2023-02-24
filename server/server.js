import express from "express"

// create application object
const app = express()

//home route
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

// Server Listener
app.listen(3004, () => console.log("listening on 3004"))
