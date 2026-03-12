const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    homeDescription: { type: String, required: true },
    aboutDescriptions: { type: [String], required: true },
    skills: { type: [String], required: true },
    email: { type: String },
    phone: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
