const app = require('../backend/src/app');
const connectDB = require('../backend/src/config/db');

if (!process.env.MONGO_URI) {
    console.warn('WARNING: MONGO_URI environment variable is not defined!');
}

connectDB();

module.exports = app;
