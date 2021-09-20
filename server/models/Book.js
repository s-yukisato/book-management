const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: String,
    price: Number,
});

module.exports = model('Book', BookSchema);