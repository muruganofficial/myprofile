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
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://myprofile-six-ivory.vercel.app'
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.use(errorHandler);

module.exports = app;
