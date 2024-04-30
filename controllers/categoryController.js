const Category = require('../models/category')

//get Categories
exports.show_category = (req, res) => {
    retriveCategories().catch(e => { console.error(e) })
    async function retriveCategories() {
        try {
            const docs = await Category.find({}).exec()
            res.render('category', { title: "Categories Page", docs: docs })
            // console.log(getDocs)
        } catch (e) {
            console.error(e)
        }
    }
}