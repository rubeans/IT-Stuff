const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.show_category)

router.get('/add', categoryController.addCategory)

router.post('/add', categoryController.addNewCategory)

router.get('/:id', categoryController.category_detail)


module.exports = router