const Message = require('../models/message.model');
const nodemailer = require('nodemailer');

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

        // Email sending logic
        try {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE || 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
                subject: `New Portfolio Message: ${subject}`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email Sending Error:', emailError.message);
            // We still return 201 because the message WAS saved to the DB
        }

        res.status(201).json({
            success: true,
            data: newMessage,
            message: 'Message sent successfully and email notification triggered'
        });
    } catch (error) {
        next(error);
    }
};
