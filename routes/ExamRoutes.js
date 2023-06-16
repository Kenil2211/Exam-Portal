const express = require('express')
const router = express.Router()

const examController = require('../controller/ExamController')
const adminValidator = require('../middleware/AdminValidator')
const tokenValidator = require('../middleware/TokenValidator')

//Exam Routes
router.post('/create',tokenValidator.tokenValidator,adminValidator.isAdmin,examController.createExam)



//Question Routes
router.post('/question', tokenValidator.tokenValidator,adminValidator.isAdmin,examController.addQuestion)


//Option Routes
router.post('/newoption', examController.addOption)


module.exports = router