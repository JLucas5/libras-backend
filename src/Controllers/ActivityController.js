const ObjectiveActv = require("../Models/Activities/Objective")
const SubjectiveActv = require("../Models/Activities/Subjective")
const Module = require("../Models/Module")

module.exports = {

    async create(req, res){
        
        const { originalname, location } = req.file || { originalname: "", location: "" } 
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
    },

    async update(req, res) {
        const { originalname, location } = req.file || { originalname: "", location: ""}
        const { text = "", correct_answer = false, expected_answer, activity_type } = req.body
        const { activity_id } = req.headers

        let activity = await ObjectiveActv.findById(activity_id)
            activity = await SubjectiveActv.findById(activity_id)

        if(!activity){
            res.status(400).json({ error: "Activity does not exist" })
        }

        if(activity_type = "obj"){

            let updated_actv = await ObjectiveActv.findOneAndUpdate({_id: activity_id},  { "$push": { "alternatives": { text, location, correct_answer }}}, {new: true})

            return res.json(updated_actv)
        }

        if(activity_type = "obj"){

            let updated_actv = await ObjectiveActv.findOneAndUpdate({_id: activity_id}, {expected_answer}, {new: true})

            return res.json(updated_actv)
        }

        return res.status(400).json({ error: "Wrong activity type, must be 'sub' or 'obj'. " })

    }
}