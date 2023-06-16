const jwt = require('../utils/TokenProvider')



const tokenValidator = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        if(token!==null || token!==undefined)
        {
            req.body.token = token
            next()
        }else{
            res.status(401).json({
                statusCode: 401,
                error: {
                    message: "User Not Authorized",
                    fields: [
                        {
                            type: "Invalid Credentials"
                        }
                    ]
                },
            }) 
        }
    }
    else {
        res.status(401).json({
            statusCode: 401,
            error: {
                message: "User Not Authorized",
                fields: [
                    {
                        type: "Invalid Credentials"
                    }
                ]
            },
        })
    }
}

module.exports={tokenValidator}