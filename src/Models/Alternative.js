const mongoose = require('mongoose')

const AlternativeSchema = new mongoose.Schema({
	location: String,
	text: String,
	video: String,
	activity: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Activity',
	},
})

module.exports = mongoose.model('Alternative', AlternativeSchema)
