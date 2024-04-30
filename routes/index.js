const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('index', {title: "IT Stuff"})
})

module.exports = router;