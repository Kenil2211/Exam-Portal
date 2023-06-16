const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({

    // role:{
    //     type:String,
    // },
    name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Exams', examSchema)