const express = require("express")
const app = express()
app.use(express.json())

app.post("/", function (req, res) {
    if (!req.body.name) {
        res.status(400).json({ "message": "Error! name is required." })
    }
    if (!req.body.last_name) {
        res.status(400).json({ "message": "Error! last_name is required." })
    }
    if (!req.body.birthday) {
        res.status(400).json({ "message": "Error! birthday is required." })
    }
    if (!req.body.age) {
        res.status(400).json({ "message": "Error! age is required." })
    }
    if (!req.body.department) {
        res.status(400).json({ "message": "Error! department is required." })
    }
    const response = { "last_name": req.body.last_name, "length": Object.keys(req.body).length }
    res.status(200).json(response)
})
app.listen(3000)