const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/', itemController.show_items)

module.exports = router;