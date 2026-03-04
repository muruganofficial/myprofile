const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./src/models/project.model');
const Profile = require('./src/models/profile.model');

dotenv.config();

const projects = [
    {
        title: 'Intelliclaim',
        description: 'A claims automation platform. Architected modular Node.js backend services, designed MongoDB aggregation logic for reporting dashboards, and integrated AI-based document intelligence to extract data from assessment images.',
        imageUrl: '/assets/images/projects/intelliclaim.png',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Angular', 'REST APIs'],
        featured: true
    },
    {
        title: 'Sportsdoor – Flutter Application',
        description: 'A court discovery and booking platform. Developed scalable backend APIs for slot availability and booking management. Implemented real-time chat module using WebSocket (Socket.io) for group messaging.',
        imageUrl: '/assets/images/projects/sportsdoor.webp',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Socket.io', 'REST APIs'],
        featured: true
    }
];

const profile = {
    name: 'Murugan Amirthalingam',
    title: 'Senior Developer',
    homeDescription: 'Senior Developer with 9+ years of experience delivering scalable, secure, and high-performance web applications. Specialized in Node.js, PHP, and database architecture.',
    aboutDescriptions: [
        'I am a Senior Developer with over 9 years of experience delivering secure and high-performance solutions across product and service environments. Specialized in PHP, Laravel, and Node.js ecosystem with strong expertise in REST API design, database architecture (MySQL & MongoDB), and workflow automation platforms.',
        'I\'ve had the privilege of working at companies like Siva Cerulean Technologies, Mirror Minds Technology Solutions, Mclansys Solutions, and HTC Global Services. My main focus these days is designing robust Node.js and PHP APIs, designing database architecture, and building automated workflow platforms.'
    ],
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MongoDB', 'MySQL', 'Angular', 'Socket.io', 'HTML', 'CSS', 'JavaScript', 'Git'],
    email: 'murugan.itsofficial@gmail.com',
    phone: '+91 7871975184'
};

const seedData = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
        console.log(`MongoDB Connected for seeding: ${conn.connection.host}`);

        // Clear existing data
        await Project.deleteMany();
        await Profile.deleteMany();

        // Insert new data
        await Project.insertMany(projects);
        await Profile.create(profile);

        console.log('Data Seeded Successfully! 🌱');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
