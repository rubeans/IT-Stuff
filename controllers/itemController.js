const Item = require('../models/item')
const Category = require('../models/category')
const asyncHandler = require("express-async-handler");

//show all Items
exports.show_items = asyncHandler(async (req, res) => {
    const docs = await Item.find({})
    res.render('item', { title: "Items Page", docs: docs })
    // console.log(docs)
})

// show one item
exports.item_detail = asyncHandler(async (req, res) => {
    const doc = await Item.findById(req.params.id).populate('category')
    // console.log(doc)
    res.render('item_detail', { title: doc.name, doc: doc })
})

//  load item form
exports.item_form = asyncHandler(async (req, res) => {
    const docs = await Category.find({})
    res.render('item_form', { title: "Add new Item", docs: docs })
})

// add new item
exports.add_item = asyncHandler(async (req, res) => {
    const { name, description, category, price, stock } = req.body
    const newItem = {
        name, description, category, price, stock
    }
    await Item.create(newItem)
    res.redirect('/items')
})

// update form
exports.update_form = asyncHandler(async (req, res) => {
    const docs = await Category.find({})
    res.render('itemUpdate_form.ejs', { title: 'Update Item', docs: docs })
})

// update item
exports.update_item = asyncHandler(async (req, res) => {
    // const itemId = req.params.id
    // const { name, description, category, price, stock } = req.body

    // await Item.findByIdAndUpdate(itemId, { name, description, category, price, stock })

    // res.send('item updated')
})