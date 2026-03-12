const express = require('express');
const { getProfile, updateProfile, seedProfile } = require('../controllers/profile.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/').get(getProfile).post(protect, updateProfile);
router.route('/seed').post(seedProfile);

module.exports = router;
