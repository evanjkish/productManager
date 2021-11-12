//CRUD HERE
const Product = require('../models/product.model')

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    findOne: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    createNew: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    update: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    delete: (req, res) => {
        Product.findByIdAndDelete({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}