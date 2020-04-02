const LibraryItem = require('../Models/Library_Item')

module.exports = {
    async store(req, res){
        const { originalname, location } = req.file ||{originalname: '', location:null}
        const { name, type, file_location } = req.body

        const new_item = await LibraryItem.create({
            name,
            location: file_location || location,
            type
        })

        return res.json(new_item)
    },

    async show(req, res){

        const { type } = req.params

        const itemList = await LibraryItem.find({ "type": type })

        itemList.sort((a,b) => {
            return a.name.localeCompare(b.name)
        })

        return res.json(itemList)
        
    },    

        async find(req, res){

        const { id } = req.params

        const item = await LibraryItem.findById(id)

        return res.json(item)
        
    },
    
    async edit(req, res){

        const { originalname, location } = req.file || {originalname: '', location: null}
        const { name, link } = req.body
        const { id } = req.params

        const updated_item = await LibraryItem.findByIdAndUpdate(id, {
            name,
            location: location ? location : link
        })

        return res.json(updated_item)
    },

    async delete(req, res){

        const { id } = req.params

        await LibraryItem.findByIdAndDelete(id)

        return res.json({status: "Item deleted"})
    }
}