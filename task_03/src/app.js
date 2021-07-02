const express = require("express")
const app = express()
app.use(express.json())

app.post("/", function (req, res) {
    if (req.body.sal) {
        const salariob = req.body.sal
        let inss = 0
        let irrf = 0
        if (salariob < 1751.81) {
            inss = salariob * 0.08
        }
        else if (salariob > 1751.81 && salariob <= 2919.72) {
            inss = salariob * 0.09
        }
        else if (salariob > 2919.72 && salariob <= 5839.45) {
            inss = salariob * 0.11
        }
        else {
            inss = 642.33
        }

        if (salariob > 1903.99 && salariob <= 2826.65) {
            irrf = salariob * 0.075
        }
        else if (salariob > 2826.65 && salariob <= 3751.05) {
            irrf = salariob * 0.15
        }
        else if (salariob > 3751.05 && salariob <= 4664.68) {
            irrf = salariob * 0.225
        }
        else if (salariob > 4664.68) {
            irrf = salariob * 0.275
        }
        const response = {
            "salariol": salariob - inss - irrf
        }
        res.status(200).json(response)
    } else {
        res.status(400).json({ "message": "ERRO! Por favor, informar o valor do salário no corpo da requisição" })
    }
})
app.listen(3000)