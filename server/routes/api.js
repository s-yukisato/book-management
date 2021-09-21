const express = require('express')

const sendBook = require('../controllers/api')

const router = express.Router();

router.get('/', sendBook);

module.exports = router;