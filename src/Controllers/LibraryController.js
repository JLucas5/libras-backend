const LibraryItem = require('../Models/Library_Item')

module.exports = {
    async store(req, res){
        const { originalname, location } = req.file
        const { name, type } = req.body

        const new_item = await LibraryItem.create({
            name,
            location,
            type
        })

        return res.json(new_item)
    },

    async show(req, res){
        
        const { type } = req.params

        const itemList = LibraryItem.find({type})

        return res.json(itemList)
    },

    async delete(req, res){

        const { item_id } = req.params

        LibraryItem.findByIdAndDelete(item_id)

        return res.json({status: "Item deleted"})
    }
}