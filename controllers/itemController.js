const Item = require('../models/item')
const Category = require('../models/category')
const asyncHandler = require("express-async-handler");

//show all Items
exports.show_items = asyncHandler(async (req, res) => {
    const docs = await Item.find({}).exec()
    res.render('item', { title: "Items Page", docs: docs })
    // console.log(docs)
})

// show one item
exports.item_detail = asyncHandler(async (req, res) => {
    const doc = await Item.findById(req.params.id).populate('category').exec()
    // console.log(doc)
    res.render('item_detail', { title: doc.name, doc: doc })
})


// add new item page
exports.item_form = asyncHandler(async (req, res) => {
    const docs = await Category.find({}).exec()
    res.render('item_form', { title: "Add new Item", docs: docs })
})

exports.add_item = asyncHandler(async (req, res) => {
    const { name, description, category, price, stock } = req.body
    const newItem = {
        name, description, category, price, stock
    }
    await Item.create(newItem)
    res.redirect('/items')
})