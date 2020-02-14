const LibraryItem = require('../Models/Library_Item')

module.exports = {
    async store(req, res){
        const { originalname, location } = req.file
        const { word } = req.body

        const new_item = await Dictionary.create({
            name,
            location
        })

        return res.json(new_item)
    },

    async show(req, res){

        const itemList = Dictionary.find()

        return res.json(itemList)
    }
}