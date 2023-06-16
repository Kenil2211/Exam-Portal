const userSchema = require('../model/UserSchema')
const jwt = require('../utils/TokenProvider')

//Applied after REQUEST is passed through TOKEN_VALIDATOR

const isAdmin = async (req, res, next) => {

    const token = req.body.token
    
    const decode_token = jwt.verifyToken(token)
    
    decode_token.then((success) => {
        if (success.role == "admin") {
            console.log('admin')
            next()
        }
        else
        {
            res.status(401).json({
                error:"Unauthorized Access Only Admins are allowed ",
            })
        }
    }).catch((err)=>{
        res.status(401).json({
            error:"Unauthorized Access Only Admins are allowed ",
        })
    })
}

module.exports = { isAdmin }