const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    passwordRep: String
})

const RegisterModel = mongoose.model("turing-final", RegisterSchema)
module.exports = RegisterModel