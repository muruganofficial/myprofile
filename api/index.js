const app = require('../backend/src/app');
const connectDB = require('../backend/src/config/db');

// Handle Vercel serverless environment
module.exports = async (req, res) => {
    await connectDB();
    return app(req, res);
};
