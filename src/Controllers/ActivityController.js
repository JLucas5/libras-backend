const ObjectiveActv = require("../Models/Activities/Objective")
const SubjectiveActv = require("../Models/Activities/Subjective")
const Module = require("../Models/Module")

module.exports = {

    async create(req, res){
        
        const { originalname, location } = req.file || {location: "", originalname: ""}
        const { statement, question_type } = req.body
        const { module_id } = req.headers
        
        const module = await Module.findById(module_id)
        
        if (!module) {
            return res.status(400).json({ error: "Module does not exist" })
        }
        
        if(question_type === "obj"){
            const activity = await ObjectiveActv.create({
                    statement: statement.trim(),
                    statement_image: location,
                    module
                }
            )
            return res.json(activity)
        }
        
        if( question_type ==="sub" ){
            const activity = await SubjectiveActv.create({
                    statement: statement.trim(),
                    statement_image: location,
                    module
                }
            )
            return res.json(activity)
        }

        return res.status(400).json({ error: "Wrong question type, must be 'sub' or 'obj'." })
    }
}