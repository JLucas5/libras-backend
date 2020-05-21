const AboutUs = require('../Models/About_Us')

module.exports = {
	async updateAboutUs(req, res) {
		const { text } = req.body

		const { id } = req.params

		await AboutUs.findByIdAndUpdate(id, { text: text })

		return res.status(200).json({ res: 'Sobre nós atualizado' })
	},

	async getAboutUs(req, res) {
		const { aboutUs } = req.params

		const answer = await AboutUs.find()
		return res.status(200).json(answer[0])
	},
}
