const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    statement: String,
    statement_image: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    }
})



module.exports = mongoose.model('Activity', ActivitySchema)