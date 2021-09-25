const express = require('express')

const sendData = require('../controllers/data')

const router = express.Router();

router.get('/', sendData);

module.exports = router;