const express = require('express')

const {searchResultsBookData, sendData} = require('../controllers/data')

const router = express.Router();

router.get('/', sendData);

router.post('/', searchResultsBookData)

module.exports = router;