const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/error.middleware');

const projectRoutes = require('./routes/project.routes');
const messageRoutes = require('./routes/message.routes');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');

const app = express();

app.use(helmet());
const allowedOrigins = [
    'https://myprofile-six-ivory.vercel.app',
    'http://localhost:4200',
    process.env.CORS_ORIGIN
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/status', (req, res) => {
    const mongoose = require('mongoose');
    res.json({
        success: true,
        message: 'Backend is running',
        dbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
        dbName: mongoose.connection.name,
        timestamp: new Date()
    });
});

app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.use(errorHandler);

module.exports = app;
