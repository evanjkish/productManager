const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} characters long"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {VALUE} digit long"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} characters long"]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;