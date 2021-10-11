const express = require('express');

const { getBooks, postBook } = require('../controllers/booksController');


const router = express.Router();

router.get('/', getBooks);
router.post('/', postBook);

module.exports = router;