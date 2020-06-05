const mongoose = require('mongoose')

const AboutUsSchema = new mongoose.Schema({
	title: String,
	text: String,
	link: String,
})

module.exports = mongoose.model('AboutUs', AboutUsSchema)
