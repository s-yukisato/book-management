const Book = require('../models/Book')

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(404).json({messgae: err.message});
    }
}

const postBook = async (req, res) => {
    const body = req.body;

    const newBook = new Book(body);

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(404).json({messgae: err.message});
    }
}

module.exports = {
    getBooks,
    postBook,
};
