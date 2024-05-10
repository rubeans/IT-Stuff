const Item = require('../models/item')
const asyncHandler = require("express-async-handler");

//show all Items
exports.show_items = asyncHandler(async (req, res) => {
    const docs = await Item.find({}).exec()
    res.render('item', { title: "Items Page", docs: docs })
    // console.log(docs)
})

exports.newItem = asyncHandler(async(req, res) => {
    res.redirect('add_items')
})

exports.addNewItem = asyncHandler( async (req, res) => {
    const {name, description, category, price, stock} = req.body

    console.log(name, description, category, price, stock);

    res.status(200).send()
})

// show one item
exports.item_detail = asyncHandler(async (req, res) => {
    const doc = await Item.findById(req.params.id).populate('category').exec()
    // console.log(doc)
    res.render('item_detail', { title: doc.name, doc: doc })
})
