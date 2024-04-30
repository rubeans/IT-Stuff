const Item = require('../models/item')

//get Items
exports.show_items = (req, res) => {
    retriveItems().catch(e => { console.error(e) })
    async function retriveItems() {
        try {
            const docs = await Item.find({}).exec()
            res.render('item', { title: "Items Page", docs: docs })
            // console.log(getDocs)
        } catch (e) {
            console.error(e)
        }
    }
}
