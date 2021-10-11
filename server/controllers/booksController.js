const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(404).json({ messgae: err.message });
  }
};

const getBook = async (req, res) => {
  const id = req.body.id;
  const book = await Book.findById(id);
  res.json({ status: 200, book: book });
};

const postBook = async (req, res) => {
  const data = req.body;
  const book = new Book(data);

  try {
    const newBook = await book.save();
    res.status(201).json({ id: newBook._id });
  } catch (err) {
    res.status(404).json({ messgae: err.message });
  }
};

module.exports = {
  getBooks,
  getBook,
  postBook,
};
