const Activity = require("../Activities/Activity")

const mongoose = require('mongoose'),
      extend = require('mongoose-schema-extend')

const SubjectiveSchema = Activity.extend({
    expected_answer: String
})

module.exports = mongoose.model('Subjective activity', SubjectiveSchema)