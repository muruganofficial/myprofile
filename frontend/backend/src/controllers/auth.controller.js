const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d',
    });
};

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Find admin
        const admin = await Admin.findOne({ username });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                username: admin.username,
                token: generateToken(admin._id)
            });
        } else {
            res.status(401);
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Register new admin (utility for setup, maybe secure or remove later)
// @route   POST /api/auth/register
// @access  Public
exports.registerAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const adminExists = await Admin.findOne({ username });
        if (adminExists) {
            res.status(400);
            throw new Error('Admin already exists');
        }

        const admin = await Admin.create({ username, password });
        if (admin) {
            res.status(201).json({
                _id: admin._id,
                username: admin.username,
                token: generateToken(admin._id)
            });
        }
    } catch (error) {
        next(error);
    }
};
