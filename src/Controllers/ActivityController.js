const ObjectiveActv = require("../Models/Activities/Objective")
const SubjectiveActv = require("../Models/Activities/Subjective")
const Activity = require('../Models/Activities/Activity')

const Module = require("../Models/Module")

module.exports = {

    async create(req, res){
        
        const { originalname = '', location = '' } = req.file ||  {originalname: '', location: ''}
        const { statement, question_type, expected_answer } = req.body
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
                    expected_answer,
                    module
                }
            )
            return res.json(activity)
        }

        return res.status(400).json({ error: "Wrong question type, must be 'sub' or 'obj'." })
    },

    async update(req, res) {
        const { originalname, location } = req.file || { originalname: "", location: ""}
        const { text = "", correct_answer = false} = req.body
        const { activity_id } = req.params

        const activity = await Activity.findById(activity_id)

        if(!activity){
            res.status(400).json({ error: "Activity does not exist" })
        }

        if(activity.__t === "ObjectiveActivity"){

            const updated_actv = await ObjectiveActv.findByIdAndUpdate(activity_id,  { "$push": { "alternatives": { text, location, correct_answer }}}, {new: true})

            return res.json(updated_actv)
        }

        return res.status(400).json({ error: "Wrong activity type" })

    },

    async delete(req, res) {
        const { activity_id } = req.headers

        let activity = await Activity.findById(activity_id)

        if(activity){
            Activity.findByIdAndDelete(activity_id)
            return res.json("Activity deleted!")            
        }

        return res.status(400).json({ error: "Activity does not exist." })
    }

}