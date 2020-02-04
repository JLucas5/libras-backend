const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    statement: String,
    statement_image_location: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    }
}, 

{   collection : 'activities', 
    discriminatorKey : '_type',
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Activity', ActivitySchema)