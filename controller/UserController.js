const userSchema = require('../model/UserSchema')
const jwt = require('../utils/TokenProvider')


exports.registerUser = async(req, res) => {

    const user = new userSchema(req.body)
    const userToken = await jwt.token(req.body)
    console.log("token for ",req.body.email," is ==> ",userToken)

    user.save((err, success) => {
        if (err) {
            if (err.keyPattern?.email == 1) {
                res.status(500).json({
                    statusCode: 500,
                    error: {
                        message:"Error in registering user",
                        fields:[
                            {
                                name:'email',
                                error:"Email already Exists"
                            }
                        ]
                    },
                })
            }else{

                res.status(500).json({
                    message: "Error in registering user",
                    error: err
                })
            }
        }
        else {
            res.status(201).json({
                statusCode: 201,
                data: {
                    user:success,
                    token:userToken
                },
            })
        }
    })


}

exports.getUserProfile = async(req,res)=>{

    console.log('user token',req.body)
    
    const userToken = await req.body.token
    if(userToken!==undefined)
    {
        const decode_token= await jwt.verifyToken(userToken)
        res.status(200).json({
            statusCode: 201,
            data:decode_token
        })
    }else{
        res.status(401).json({
            statusCode: 401,
            error: {
                message: "Error in Logging In user",
                fields: [
                    {
                        type: "Invalid Credentials"
                    }
                ]
            },
        }) 
    }

    
}