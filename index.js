var express = require("express");
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
const port = 1755
const {movieRouter} = require("./routers")
const {categoryRouter} = require("./routers")

app.use(bodyParser())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Ini Homepage")
})

app.use("/movies", movieRouter)
app.use("/category", categoryRouter)

app.listen(port, console.log("Listening in port " + port))