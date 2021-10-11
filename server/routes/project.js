const express = require('express');

const { 
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    statusChangeProject,
    deleteProject
} = require('../controllers/projectsController');


const router = express.Router();

router.get('/', getAllProjects);

router.get('/:id', getProject);

router.post('/', createProject);

router.put('/:id', updateProject);

router.put('/status/:id', statusChangeProject);

router.delete('/:id', deleteProject);

module.exports = router;