const Project = require('../models/project.model');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: projects.length, data: projects });
    } catch (error) {
        next(error);
    }
};

exports.getFeaturedProjects = async (req, res, next) => {
    try {
        const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: projects.length, data: projects });
    } catch (error) {
        next(error);
    }
};

exports.createProject = async (req, res, next) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        next(error);
    }
};

exports.updateProject = async (req, res, next) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
        res.status(200).json({ success: true, data: project });
    } catch (error) {
        next(error);
    }
};

exports.deleteProject = async (req, res, next) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(error);
    }
};

exports.seedProjects = async (req, res, next) => {
    try {
        const defaultProjects = [
            {
                title: "Intelliclaim",
                description: "Architected modular Node.js backend services supporting claim lifecycle workflows. Integrated AI document intelligence to extract structured data and implemented role-based workflows.",
                imageUrl: "/assets/images/projects/intelliclaim.png",
                technologies: ["Node.js", "Express", "MongoDB", "Angular"],
                featured: true,
                liveUrl: "https://www.autointelliclaim.com"
            },
            {
                title: "Sportsdoor",
                description: "Developed scalable backend APIs supporting court discovery, booking creation, and user management workflows. Implemented real-time chat module via WebSockets for player messaging.",
                imageUrl: "/assets/images/projects/sportsdoor.webp",
                technologies: ["Node.js", "MongoDB", "Flutter", "Socket.io"],
                featured: true
            }
        ];
        // clean existing
        await Project.deleteMany();

        await Project.insertMany(defaultProjects);
        res.status(201).json({ success: true, message: 'Seeded projects successfully' });
    } catch (error) {
        next(error);
    }
};
