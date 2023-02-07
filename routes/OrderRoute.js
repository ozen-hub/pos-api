const express = require('express');
const OrderController = require('../controller/OrderController');

const router = express.Router();
router.post('/save', OrderController.saveOrder);

module.exports = router;