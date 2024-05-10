const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/', itemController.show_items)

router.get('/newItem', itemController.newItem)

router.post('/addNewItem', itemController.addNewItem) 

router.get('/:id', itemController.item_detail)


module.exports = router;