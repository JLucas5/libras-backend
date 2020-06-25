const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
	{
		name: String,
		location: String,
		type: {
			type: String,
			enum: ["video", "music", "book"],
		},
		source: String,
	},

	{
		toJSON: {
			virtuals: true,
		},
	}
)

module.exports = mongoose.model("Item", ItemSchema)
