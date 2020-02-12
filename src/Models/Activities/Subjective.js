const mongoose = require('mongoose')

const SubjectiveSchema = new mongoose.Schema({
    statement: String,
    statement_image: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    },
    expected_answer: String
})

module.exports = mongoose.model('Subjective activity', SubjectiveSchema)