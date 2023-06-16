const mongoose=require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({

    eid:{
        type:Schema.Types.ObjectId,
        ref:'Exams'
    },

    question:{
        type:String,
        required:true
    },
    options:[
        {
            type:Schema.Types.ObjectId,
            required:true,
            ref:'Options'
        }
    ],
    correctOption:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Options'
    }
})

module.exports= mongoose.model('Questions',questionSchema)