const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    _id: String,
    title: {
        type: String,
        required: true,
    },
    author: String,
    publisher: String,
    price: Number,
    image: String
});

module.exports = model('Book', BookSchema);