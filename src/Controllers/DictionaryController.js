const Dictionary = require('../Models/Dictionary_Item')

module.exports = {
    async store(req, res){
        const { originalname, location } = req.file || {originalname: '', location: null}
        const { word } = req.body

        const new_item = await Dictionary.create({
            word,
            location
        })

        return res.json(new_item)
    },

    async show(req, res){

        const itemList = await Dictionary.find()
        console.log(itemList)

        return res.json(itemList)
    },

    async delete(req, res){

        const { item_id } = req.params

        Dictionary.findByIdAndDelete(item_id)

        return res.json({status: "Item deleted"})
    }
}