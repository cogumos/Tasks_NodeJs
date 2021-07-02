const express = require("express")
const app = express()
const fs = require("fs")


app.get("/", function (req, res) {
    fs.writeFile("arquivo.txt", "Aprendendo NodeJS", (err) => {
        if (err) {
            throw err
        }
    })
    res.status(200).json({
        "message": "File created sucessfully!"
    })
})


app.listen(3000)