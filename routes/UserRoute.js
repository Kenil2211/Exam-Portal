const express=require('express')
const userController = require('../controller/UserController')
const auth = require('../middleware/AuthMiddleware')
const schemaValidator = require('../middleware/UserSchemaValidator')
const router = express.Router()

router.post('/register',schemaValidator.validator,userController.registerUser)
router.post('/login',auth.auth)


module.exports=router