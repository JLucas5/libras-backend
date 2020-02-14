const mongoose = require('mongoose')

const DictionarySchema = new mongoose.Schema({
    word: String,
    location: String
},

{
    toJSON: {
        virtuals: true,
    }
})

module.exports = mongoose.model('Dictionary', DictionarySchema)