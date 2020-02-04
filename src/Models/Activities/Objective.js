const Activity = require("../Activities/Activity")

const mongoose = require('mongoose'),
      extend = require('mongoose-schema-extend')

const ObjectiveSchema = Activity.extend({
    options: {
        bsonType: ["array"],
        items : { bsonType: ["string"] },
        minItems: 2,
        maxItems: 5,
        description: "must be a array of string, with min 2 and max 5"
    },
    expected_answer: Number
})

module.exports = mongoose.model('Objective activity', ObjectiveSchema)