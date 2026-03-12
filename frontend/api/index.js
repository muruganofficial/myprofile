const app = require('../backend/src/app');
const connectDB = require('../backend/src/config/db');

// Handle Vercel serverless environment
module.exports = async (req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    await connectDB();
    return app(req, res);
};
