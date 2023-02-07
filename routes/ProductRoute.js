const express = require('express');
const ProductController = require('../controller/ProductController');

const router = express.Router();
router.post('/save', ProductController.saveProduct);

module.exports = router;