const Category = require('../models/category')
const Item = require('../models/item')
const asyncHandler = require("express-async-handler");

//show all Categories
exports.show_category = asyncHandler(async (req, res) => {
    const docs = await Category.find({}).exec()
    res.render('category', { title: "Categories Page", docs: docs })
    // console.log(docs)
})

// show one Category
exports.category_detail = asyncHandler(async (req, res) => {
    const doc = await Category.findById(req.params.id).exec()
    const items = await Item.find({}).populate('category').exec()
    // console.log(doc)
    res.render('category_detail', { title: doc.name, description: doc.description, items: items })
})