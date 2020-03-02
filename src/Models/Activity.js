const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    statement: String,
    statement_image: String,
    video: String,
    type: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    },

    expected_answer: String
})



module.exports = mongoose.model('Activity', ActivitySchema)