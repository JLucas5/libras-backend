const Module = require("../Models/Module")
const Activity = require('../Models/Activities/Activity')


module.exports = {
        async show(req, res){

        const modules = await Module.find()

        return res.json(modules)
    },

}