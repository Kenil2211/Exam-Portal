const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Options', optionSchema)