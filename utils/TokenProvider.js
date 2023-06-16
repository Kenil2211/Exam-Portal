const jwt= require('jsonwebtoken')
const secret=process.env.SECRET||"secret"


async function token(data)
{   
    return jwt.sign(data,secret)
}


async function verifyToken(token)
{
    return jwt.verify(token,secret)
}

module.exports={token,verifyToken}

