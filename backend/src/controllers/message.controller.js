const Message = require('../models/message.model');

exports.sendMessage = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;

        // Simple validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'Please provide all fields' });
        }

        const newMessage = await Message.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            data: newMessage
        });
    } catch (error) {
        next(error);
    }
};
