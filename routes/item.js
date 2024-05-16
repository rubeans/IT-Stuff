const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.show_items)

router.get('/add', itemController.item_form)

router.post('/add', itemController.add_item)

router.get('/:id', itemController.item_detail)

router.get('/:id/update', itemController.update_form)

router.post('/:id/update', itemController.update_item)

router.get('/:id/delete', itemController.delete_item)

module.exports = router;