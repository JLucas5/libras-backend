const mongoose = require('mongoose')

const ModuleSchema = new mongoose.Schema({
    name: String,
    description: String,
    hidden: Boolean
},

{
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Module', ModuleSchema)