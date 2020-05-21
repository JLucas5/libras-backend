const mongoose = require('mongoose')

const DictionarySchema = new mongoose.Schema({
	word: String,
	meaning: String,
	location: String,
	video: String,
})

module.exports = mongoose.model('Dictionary', DictionarySchema)
