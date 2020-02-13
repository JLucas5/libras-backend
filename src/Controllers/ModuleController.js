const Module = require("../Models/Module")
const Activity = require('../Models/Activities/Activity')

module.exports = {

    async store(req, res){
        const { name, description } = req.body

        const atvModule = await Module.findOne({ name })

        if (atvModule) {
            return res.status(400).json({ error: "Module already exists" })
        }

        const new_module = await Module.create({
            name,
            description
        })
        
        return res.json(new_module)
    },

    async delete(req, res){
        const { module_id } = req.header

        const module = await Module.findById(module_id)

        if(!module){
            return res.status(400).json({error: "Module does not exist!"})
        }

        Activity.deleteMany({module})

        Module.findByIdAndDelete(module_id)

        return res.json({warning: "Module and activities deleted"})

    }

    
}