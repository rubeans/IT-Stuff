const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.show_category)

router.get('/add', categoryController.category_form)

router.post('/add', categoryController.add_category)

router.get('/:id', categoryController.category_detail)

module.exports = router