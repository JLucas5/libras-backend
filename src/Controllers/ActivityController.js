const Activity = require('../Models/Activity')
const Alternative = require('../Models/Alternative')

const Module = require('../Models/Module')

module.exports = {
	async create(req, res) {
		const { question_type, module_id } = req.body

		const module_ = await Module.findById(module_id)
		if (!module_) {
			return res.status(400).json({ error: 'Module does not exist' })
		}

		const activity = await Activity.create({
			module: module_,
			type: question_type,
		})
		return res.json(activity)
	},

	async addAlternative(req, res) {
		const { originalname, location } = req.file || {
			originalname: '',
			location: '',
		}
		const { text = '', video = '', correct_answer = false } = req.body
		const { activity_id } = req.params

		const activity = await Activity.findById(activity_id)

		if (!activity) {
			res.status(400).json({ error: 'Activity does not exist' })
		}

		const new_activity = await Alternative.create({
			location,
			text,
			video,
			correct_answer,
			activity,
		})

		return res.json(new_activity)
	},

	async findAlternatives(req, res) {
		const { activity_id } = req.params

		const activity = await Activity.findById(activity_id)

		const alternatives = await Alternative.find({ activity })

		return res.json(alternatives)
	},

	async deleteAlternative(req, res) {
		const { alternative_id } = req.params

		await Alternative.findByIdAndDelete(alternative_id)

		return res.json({ warning: 'Alternative deleted' })
	},

	async updateAlternative(req, res) {
		const { originalname, location } = req.file || {
			originalname: '',
			location: null,
		}
		const { correct_answer, text, video } = req.body

		const { alternative_id } = req.params

		const alternative = await Alternative.findById(alternative_id)

		if (!alternative) {
			res.status(400).json({ error: 'Alternative does not exist' })
		}

		const response = await Alternative.findByIdAndUpdate(alternative_id, {
			location,
			text,
			video,
			correct_answer,
		})

		return res.json(response)
	},

	async update(req, res) {
		const { thumbnail, pdf } = req.files || { thumbnail: null, pdf: null }
		const { video, statement, expected_answer } = req.body
		const { activity_id } = req.params

		const activity = await Activity.findById(activity_id)

		if (!activity) {
			res.status(400).json({ error: 'Activity does not exist' })
		}

		const updated_actv = await Activity.findByIdAndUpdate(activity_id, {
			video,
			statement,
			statement_image: thumbnail
				? thumbnail[0].location
				: activity.statement_image,
			pdf: pdf ? pdf[0].location : activity.pdf,
			expected_answer,
		})

		return res.json(updated_actv)
	},

	async delete(req, res) {
		const { activity_id } = req.params

		let activity = await Activity.findById(activity_id)

		if (activity) {
			await Alternative.deleteMany({ activity })

			await Activity.findByIdAndDelete(activity_id)

			return res.json('Activity deleted!')
		}

		return res.status(400).json({ error: 'Activity does not exist.' })
	},

	async all(req, res) {
		const { module_id } = req.params

		const module_ = await Module.findById(module_id)

		const activities = await Activity.find({ module: module_ })

		return res.json(activities)
	},

	async find(req, res) {
		const { activity_id } = req.params

		const activity = await Activity.findById(activity_id)

		return res.json(activity)
	},
}
