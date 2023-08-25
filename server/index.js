const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require('./models/Register')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/turing-final")

app.post('/turing-final', (req, res) => {
    RegisterModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running");
})