const Item = require('../models/item')
const Category = require('../models/category')
const asyncHandler = require("express-async-handler");
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../public/images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

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
exports.add_item = upload.single("image"), asyncHandler(async (req, res) => {
    const { name, description, category, price, stock } = req.body
    const newItem = {
        name, description, category, price, stock
    }
    await Item.create(newItem)
    console.log("New Item Added")
    res.redirect('/items')
})

// update form
exports.update_form = asyncHandler(async (req, res) => {
    const itemId = req.params.id
    const item = await Item.findById(itemId)
    const categories = await Category.find({})
    res.render('itemUpdate_form.ejs', { title: 'Update Item', categories: categories, item: item })
})

// update item
exports.update_item = asyncHandler(async (req, res) => {
    const itemId = req.params.id
    const { name, description, category, price, stock } = req.body
    await Item.findByIdAndUpdate(itemId, { name, description, category, price, stock })
    console.log("Item Updated")
    res.redirect(`/items/${itemId}`)
})

// delete item
exports.delete_item = asyncHandler(async (req, res) => {
    const itemId = req.params.id
    await Item.findByIdAndDelete(itemId)
    console.log("Item Deleted")
    res.redirect('/items')
})