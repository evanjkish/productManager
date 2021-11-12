const Product = require("../controllers/product.controllers");

module.exports = (app) => {

    app.get('/api/products', Product.findAll);

    app.get('/api/products/:id', Product.findOne);

    app.put('/api/products/:id', Product.update);

    app.post('/api/products', Product.createNew);

    app.delete('/api/products/:id', Product.delete);
}