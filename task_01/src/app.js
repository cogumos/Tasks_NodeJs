const express = require("express")
const app = express()
const axios = require("axios")



app.get("/", function (req, res) {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=xtFIzbKacFItYKwRElB8Xn7ra3r9QaUpR6NmWnRf").then
        (function (response) {
            res.json(response.data)

        })
})
app.listen(3000)