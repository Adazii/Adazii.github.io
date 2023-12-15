const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes

app.use('/getFootballData', createProxyMiddleware({
    target: 'https://api.football-data.org',
    changeOrigin: true,
    headers: {
        'X-Auth-Token': '5157b19281c649c0b30aa052e8b96fe1', // Updated with your actual API key
        'Content-Type': 'application/json',
    },
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
