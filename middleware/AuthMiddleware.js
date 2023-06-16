const userSchema = require('../model/UserSchema')
const jwt = require('../utils/TokenProvider')

const auth = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]

        if (token !== '' || token !== undefined || token !== null) {
            const decode_token = await jwt.verifyToken(token)
            // decode 
            // name: 'kenil',
            //     email: 'kenil@gmail.com',
            //         password: 'kenil',
            //             iat: 1686822897

            console.log('decode', decode_token)

            if (decode_token.email === req.body.email && decode_token.password === req.body.password) {

                //authenticate with db
                userSchema.findOne({ email: req.body.email, password: req.body.password }, (err, success) => {
                    if (err) {
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
                    else {
                        res.status(200).json({
                            message: "User Logged In",
                            statusCode: 200,
                            data: success,

                        })
                    }
                })
            }
            else {
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
    }

    else {
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

module.exports = { auth }