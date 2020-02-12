const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: String,
    location: String,
    library: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Library"
    }
}, 

{
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Item', ItemSchema)