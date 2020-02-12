const mongoose = require('mongoose')

const LibrarySchema = new mongoose.Schema({
    name: String,
    description: String,
    hidden: Boolean
}, 

{
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Library', LibrarySchema)