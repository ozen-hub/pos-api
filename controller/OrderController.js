const OrderSchema = require('../model/Order');
const saveOrder = (req, resp) => {
    let product = new OrderSchema({
        date: req.body.date,
        customer: req.body.customer,
        products: req.body.products,
        cost: req.body.cost
    });
    product.save().then(result => {
        resp.status(201).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    })
}
module.exports = {
    saveOrder
}