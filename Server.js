const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes

app.get('/getFootballData', async (req, res) => {
  try {
    const apiUrl = 'https://api.football-data.org/v4/matches'; // Replace with the actual API endpoint

    const response = await fetch(apiUrl, {
      headers: {
        'X-Auth-Token': '5157b19281c649c0b30aa052e8b96fe1', // Replace with your actual API key
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
