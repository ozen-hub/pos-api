const express = require('express');
const CustomerController = require('../controller/CustomerController');

const router = express.Router();
router.post('/save', CustomerController.saveCustomer);
router.get('/find', CustomerController.findCustomer);
router.delete('/delete', CustomerController.deleteCustomer);
router.put('/update', CustomerController.updateCustomer);
router.get('/find-all', CustomerController.findAllCustomers);

module.exports = router;