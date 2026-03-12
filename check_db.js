const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

async function check() {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
    console.log('Connecting to:', uri);
    try {
        await mongoose.connect(uri);
        console.log('Connected!');
        const Project = mongoose.model('Project', new mongoose.Schema({ title: String }));
        const count = await Project.countDocuments();
        console.log('Project Count:', count);
        const projects = await Project.find();
        console.log('Projects:', projects);
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

check();
