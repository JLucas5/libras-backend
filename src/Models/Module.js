const mongoose = require('mongoose')

const ModuleSchema = new mongoose.Schema({
    name: String,
    description: String,
    video: String,
    pdf: String, 
    image: String
},

{
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Module', ModuleSchema) 