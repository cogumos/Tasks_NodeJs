const express = require("express")
const app = express()
const axios = require("axios")


app.get("/", function (req, res) {
  const dataAtual = new Date();
  axios.get("https://api.hgbrasil.com/weather?woeid=455880").then(function (resp) {
    const temp = resp.data.results.temp


    const response = {
      "Day": dataAtual.getDate(),
      "Month": dataAtual.getMonth() + 1,
      "Year": dataAtual.getFullYear(),
      "Hours": dataAtual.getHours(),
      "Minutes": dataAtual.getMinutes(),
      "Seconds": dataAtual.getSeconds(),
      "Temperature": (temp * 9 / 5) + 32,
    }
    res.json(response)
  })
})
app.listen(3000)



