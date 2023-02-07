const ProductSchema = require('../model/Product');
const saveProduct = (req, resp) => {
    let product = new ProductSchema({
        description: req.body.description,
        qtyOnHand: req.body.qtyOnHand,
        unitPrice: req.body.unitPrice
    });
    product.save().then(result => {
        resp.status(201).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    })
}
module.exports = {
    saveProduct
}