const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('ProductSchema', productSchema);