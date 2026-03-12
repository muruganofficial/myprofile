const express = require('express');
const { getProjects, getFeaturedProjects, seedProjects, createProject, updateProject, deleteProject } = require('../controllers/project.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/').get(getProjects).post(protect, createProject);
router.route('/featured').get(getFeaturedProjects);
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject);
router.route('/seed').post(seedProjects); // In production, secure this

module.exports = router;
