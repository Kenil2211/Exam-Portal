const userSchema = require('../model/UserSchema')

/*VAlidations to be done are:
    1. all not null
*/

// error: {
//     message:"Error in registering user",
//     fields:[
//         {
//             name:'email',
//             error:"Email already Exists"
//         }
//     ]
// },

const validator = (req,res,next)=>{

    console.log('req body',req?.body)
    var fields=[]
    var flag=0;
    var error={};

    if(req.body.name  === null ||req.body.name ==='')
    {
        
        fields.push({
            name:"name",
            error:"Required"
        })
    }
    if(req.body.email ===null||req.body.email ==='')
    {
        fields.push({
            name:"email",
            error:"Required"
        })
    }
    if(req.body.password ===null||req.body.password ==='')
    {
        fields.push({
            name:"password",
            error:"Required"
        })
    }
    
    if(fields&&fields.length>0)
    {
        res.status(500).json({
            error:{
                message:"Error in registering user",
                fields:fields
            },
            statusCode:500
        })
    }
    else{
        next()
    }
    
}

module.exports = {validator}