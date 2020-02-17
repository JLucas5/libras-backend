const LibraryItem = require('../Models/Library_Item')

module.exports = {
    async store(req, res){
        const { originalname, location } = req.file ||{originalname: '', location:null}
        const { name, type, video_location } = req.body

        const new_item = await LibraryItem.create({
            name,
            location: video_location || location,
            type
        })

        return res.json(new_item)
    },

    async show(req, res){

        const itemList = LibraryItem.find()

        return res.json(itemList)
    },

    async delete(req, res){

        const { item_id } = req.params

        LibraryItem.findByIdAndDelete(item_id)

        return res.json({status: "Item deleted"})
    }
}