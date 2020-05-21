const Dictionary = require('../Models/Dictionary_Item')

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

module.exports = {
	async store(req, res) {
		const { originalname, location } = req.file || {
			originalname: '',
			location: null,
		}
		const { word, video, meaning } = req.body

		const new_item = await Dictionary.create({
			word,
			location,
			video,
			meaning,
		}).then()
		return res.json(new_item)
	},

	async show(req, res) {
		const itemList = await Dictionary.find()

		itemList.sort((a, b) => {
			return a.word.localeCompare(b.word)
		})

		return res.json(itemList)
	},

	async delete(req, res) {
		const { id } = req.params

		await Dictionary.findByIdAndDelete(id)

		return res.json({ status: 'Item deleted' })
	},

	async edit(req, res) {
		const { originalname, location } = req.file || {
			originalname: '',
			location: null,
		}
		const { word, old_image, video, meaning } = req.body
		const { id } = req.params

		const updated_item = await Dictionary.findByIdAndUpdate(id, {
			word,
			location: location ? location : old_image,
			video,
			meaning,
		})

		return res.json(updated_item)
	},

	async find(req, res) {
		const { id } = req.params

		const item = await Dictionary.findById(id)

		return res.json(item)
	},
}
