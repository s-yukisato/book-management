const express = require('express');

const { getAllDocuments, getDocument, updateDocument } = require('../controllers/projectsController');


const router = express.Router();

router.get('/', getAllDocuments);
router.get('/:id', getDocument);
router.post('/:id', updateDocument);

module.exports = router;