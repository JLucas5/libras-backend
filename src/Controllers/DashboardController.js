const Module = require("../Models/Module")


module.exports = {
        async show(req, res){

        const modules = await Module.find()
        
        modules.sort((a,b) => {
            return a.name.localeCompare(b.name)
        
        });
        
        return res.json(modules)
    },

}