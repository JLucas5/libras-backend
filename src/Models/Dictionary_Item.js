const mongoose = require('mongoose')

const DictionarySchema = new mongoose.Schema({

    word: String,
    location: String
})

module.exports = mongoose.model('Dictionary', DictionarySchema)