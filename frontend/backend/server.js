require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;


// 1. Initiate Database connection immediately
// For Vercel, it's better to call this inside your app.js or here without the .then() block
connectDB();

// 2. Only start the listener if NOT on Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Local server running on port ${PORT}`);
    });
}

// 3. CRITICAL: Export the app for Vercel's serverless handler
module.exports = app;