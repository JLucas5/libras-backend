const Module = require("../Models/Module")
const Activity = require('../Models/Activity')

module.exports = {

    async store(req, res){

        const { thumbnail, pdf } = req.files || { thumbnail: null, pdf: null }

        const { name, description, video } = req.body

        const atvModule = await Module.findOne({ name })

        if (atvModule) {
            return res.status(400).json({ error: "Module already exists" })
        }

        const new_module = await Module.create({
            name,
            description,
            video: video ? video : '',
            image: thumbnail ? thumbnail[0].location : '',
            pdf: pdf ? pdf[0].location : ''
        })
        
        return res.json(new_module)
    },

    async delete(req, res){

        const { module_id } = req.params

        const moduleFound = await Module.findById(module_id)

        if(!moduleFound){
            return res.status(400).json({error: "Module does not exist!"})
        }

        await Activity.deleteMany({module: moduleFound})

        await Module.findByIdAndDelete(module_id)

        return res.json({warning: "Module and activities deleted"})

    },

    async show(req, res){

        const { module_id } = req.params

        const moduleFound = await Module.findById(module_id)

        return res.json(moduleFound)
    },

    async edit(req, res){
        const { module_id } = req.params

        const { thumbnail, pdf } = req.files || { thumbnail: null, pdf: null}
        const { name, description, video, old_pdf, old_image } = req.body

        
            console.log(module_id)
        
        const response = await Module.findByIdAndUpdate( module_id, {
            name,
            description,
            video,
            image: thumbnail ? thumbnail[0].location : old_image,
            pdf: pdf ? pdf[0].location : old_pdf

        })
        console.log(response)

        return res.json(response)
    }

    
}