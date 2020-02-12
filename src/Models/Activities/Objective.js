const mongoose = require('mongoose')

const ObjectiveSchema = new mongoose.Schema({
    statement: String,
    statement_image: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    },

    alternatives: [
        {
            location: String,
            text: String,
            correct_answer: Boolean
        }
    ]
})

module.exports = mongoose.model('Objective activity', ObjectiveSchema)