const express = require('express');
const fetch = require('node-fetch');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Serve your static files (if any) from the public directory
app.use(express.static('public'));

// Use the proxy middleware to forward requests to the Football Data API
app.use('/getFootballData', createProxyMiddleware({
    target: 'https://api.football-data.org',
    changeOrigin: true,
    headers: {
        'X-Auth-Token': 'your_api_key', // Replace with your actual API key
        'Content-Type': 'application/json',
    },
}));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
