const Profile = require('../models/profile.model');

// @desc    Get profile
// @route   GET /api/profile
// @access  Public
exports.getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            res.status(200).json({ success: true, data: profile });
        } else {
            res.status(404).json({ success: false, message: 'Profile not found' });
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Update or Create profile
// @route   POST /api/profile
// @access  Private
exports.updateProfile = async (req, res, next) => {
    try {
        let profile = await Profile.findOne();
        if (profile) {
            // Update
            profile = await Profile.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
            res.status(200).json({ success: true, data: profile });
        } else {
            // Create
            profile = await Profile.create(req.body);
            res.status(201).json({ success: true, data: profile });
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Seed default profile
// @route   POST /api/profile/seed
// @access  Public
exports.seedProfile = async (req, res, next) => {
    try {
        const defaultProfile = {
            name: "Murugan Amirthalingam",
            title: "Senior Backend Developer",
            homeDescription: "Senior Backend Developer with 9+ years of experience delivering scalable, secure, and high-performance web applications. Specialized in the PHP, Laravel, and Node.js ecosystems.",
            aboutDescriptions: [
                "Hello! My name is Murugan and I enjoy building scalable backend architecture and web applications. I am a Senior Backend Developer with over 9 years of experience delivering secure and high-performance solutions across product and service environments.",
                "I've had the privilege of working at companies like Siva Cerulean Technologies, Mirror Minds Technology Solutions, Mclansys Solutions, and HTC Global Services. My main focus these days is designing robust Node.js and PHP APIs, designing database architecture, and building automated workflow platforms."
            ],
            skills: [
                "Node.js & Express",
                "PHP & Laravel",
                "MongoDB",
                "MySQL",
                "Angular",
                "Socket.io"
            ],
            email: "murugan.itsofficial@gmail.com",
            phone: "+91 7871975184"
        };
        const count = await Profile.countDocuments();
        if (count > 0) {
            res.status(400).json({ success: false, message: 'Profile already exists' });
        } else {
            const profile = await Profile.create(defaultProfile);
            res.status(201).json({ success: true, data: profile });
        }
    } catch (error) {
        next(error);
    }
};
