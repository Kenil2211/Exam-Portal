const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT= process.env.PORT || 3001
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoute = require('./routes/UserRoute')
const examRoute = require('./routes/ExamRoutes')


const baseUrl = '/api/v1/';
app.use(baseUrl +'auth/',userRoute)
app.use(baseUrl+'user/',userRoute)
app.use(baseUrl+'option/',examRoute)
app.use(baseUrl+'question/',examRoute)
app.use(baseUrl+'exam/',examRoute)


//CONNECT WITH DATABASE
mongoose.connect("mongodb://127.0.0.1/Exam-Portal",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected");
    }
})

app.listen(PORT,()=>{
    console.log("server started "+PORT)
})