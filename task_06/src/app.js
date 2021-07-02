const express = require("express")
const app = express()
app.use(express.json())

app.post("/", function (req, res) {
    const mva = req.body.max_velocity_allowed
    const cv = req.body.car_velocity

    if (!req.body.max_velocity_allowed) {
        res.status(400).json({ "message": "Error! max_velocity_allowed is required." })
    }

    if (!req.body.car_velocity) {
        res.status(400).json({ "message": "Error! car_velocity is required." })
    }

    let ve = 0
    let pe = 0
    let tt = false
    if (cv - mva > 0) {
        ve = cv - mva
        pe = ve / mva
        if (pe > 0.1) {
            tt = true
        }
    }
    const response = {
        "traffic_ticket": tt,
        "velocity__exceeded": ve,
        "percentage_exceeded": pe,
    }
    res.status(200).json(response)
})

app.listen(3000)