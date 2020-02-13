const mongoose = require('mongoose')
const Activity = require("../Activities/Activity")

const SubjectiveSchema = Activity.discriminator('SubjectiveActivity', new mongoose.Schema({

    expected_answer: String

}))

module.exports = mongoose.model('SubjectiveActivity')