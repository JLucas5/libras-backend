const mongoose = require('mongoose')

const AboutUsSchema = new mongoose.Schema({
	text: String,
})

module.exports = mongoose.model('AboutUs', AboutUsSchema)
