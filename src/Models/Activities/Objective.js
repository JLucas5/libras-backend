const mongoose = require('mongoose')
const Activity = require('../Activities/Activity')

const ObjectiveSchema = Activity.discriminator('ObjectiveActivity',

new mongoose.Schema({

    alternatives: [
        {
            location: String,
            text: String,
            correct_answer: Boolean
        }
    ]
}))

module.exports = mongoose.model('ObjectiveActivity')