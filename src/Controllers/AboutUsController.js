const AboutUs = require('../Models/About_Us')

module.exports = {
	async createAboutUs(req, res) {
		const { text, link, title } = req.body

		const { id } = req.params

		await AboutUs.create({
			text: text,
			link: link,
			title: title,
		})

		return res.status(200).json({ res: 'Sobre nós criado' })
	},

	async updateAboutUs(req, res) {
		const { text, link, title } = req.body

		const { id } = req.params

		await AboutUs.findByIdAndUpdate(id, {
			text: text,
			link: link,
			title: title,
		})

		return res.status(200).json({ res: 'Sobre nós atualizado' })
	},

	async getAboutUs(req, res) {
		const { aboutUs } = req.params

		const response = await AboutUs.find()

		return res.status(200).json(response)
	},

	async findAboutUs(req, res) {
		const { id } = req.params

		const response = await AboutUs.findById(id)

		return res.status(200).json(response)
	},

	async deleteAboutUs(req, res) {
		const { id } = req.params

		const response = await AboutUs.findByIdAndDelete(id)

		return res.status(200).json({ response: 'Sobre nós deletado' })
	},
}
