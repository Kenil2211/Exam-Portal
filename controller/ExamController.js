const optionSchema = require('../model/OptionSchema')
const questionSchema = require('../model/QuestionSchema')
const examSchema = require('../model/ExamSchema')

// Exam Controller
async function addExam(exam) {
    try {
        const addedExam = await new examSchema(exam).save()

        return addedExam;

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            error: error,
            message: "Error in adding exam"
        })
    }

}

exports.createExam = async (req, res) => {
    try {
        console.log('req body', req.body)
        delete req.body.token;

        const examStatus = await addExam(req.body)

        console.log("exam status", examStatus)

        res.status(201).json({
            data: examStatus,
            statusCode: 201
        })

    }
    catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in adding exam"
        })
    }
}

// Question Controller
exports.addQuestion = async (req, res) => {

    const question = new questionSchema(req.body)

    const save_question = question.save()

    await save_question.then((success) => {
        res.status(201).json({
            data: success,
            statusCode: 201
        })
    }).catch((err) => {

        res.status(500).json({
            message: "Error in adding new Question",
            error: err
        })
    })
}

// Options Controller

exports.addOption = async (req, res) => {

    const option = new optionSchema(req.body)

    const saved = option.save()

    await saved.then((success) => {

        res.status(201).json({
            message: "Option Added successfully",
            data: success
        })

    }).catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "Error in saving Option",
            error: err
        })
    })
}
