const Module = require("../Models/Module")

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
    }
}