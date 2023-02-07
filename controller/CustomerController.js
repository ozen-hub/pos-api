const CustomerSchema = require('../model/Customer');
const saveCustomer = (req, resp) => {
    let customer = new CustomerSchema({
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });
    customer.save().then(result => {
        resp.status(201).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    })
}
const findCustomer = (req, resp) => {
    CustomerSchema.findOne({'_id': req.headers.id}).then(result => {
        if (result != null) {
            resp.status(200).json(result);
        } else {
            resp.status(404).json({'message': 'not found!'});
        }

    }).catch(error => {
        resp.status(500).json(error);
    })
}
const updateCustomer = (req, resp) => {
    /*CustomerSchema.findOneAndUpdate(
        {
            '_id': req.headers.id,
            $set: {
                name: req.body.name,
                address: req.body.address,
                salary: req.body.salary
            }
        },
    ).then(result => {
        console.log(result)
        if (result.nModified > 0) {
            resp.status(201).json(result);
        } else {
            resp.status(500).json({'message': 'Something went wrong!'});
        }

    }).catch(error => {
        resp.status(500).json(error);
    })*/
    CustomerSchema.updateOne(
        {
            '_id': req.headers.id,
            $set: {
                name: req.body.name,
                address: req.body.address,
                salary: req.body.salary
            }
        },
    ).then(result => {
        console.log(result)
        if (result.modifiedCount > 0) {
            resp.status(201).json(result);
        } else {
            resp.status(500).json({'message': 'Something went wrong!'});
        }

    }).catch(error => {
        resp.status(500).json(error);
    })
}
const deleteCustomer = (req, resp) => {
    CustomerSchema.findOneAndDelete(
        {
            '_id': req.headers.id
        },
    ).then(result => {
        console.log(result)
            resp.status(201).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    })
}
const findAllCustomers = (req, resp) => {
    CustomerSchema.find().then(result => {
            resp.status(200).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    })
}
module.exports = {
    saveCustomer, findCustomer, updateCustomer, deleteCustomer, findAllCustomers
}