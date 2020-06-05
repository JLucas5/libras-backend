const mongoose = require('mongoose')

const AboutUsSchema = new mongoose.Schema({
	title: String,
	text: String,
	link: String,
	priority: Number,
})

module.exports = mongoose.model('AboutUs', AboutUsSchema)
