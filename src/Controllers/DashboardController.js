const Module = require("../Models/Module")


module.exports = {
        async show(req, res){

        const modules = await Module.find()

        return res.json(modules)
    },

}