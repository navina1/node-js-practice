//602db3fee64a4b8199f161620242302
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiKey = '602db3fee64a4b8199f161620242302'; // Replace 'YOUR_API_KEY' with your actual API key

// Route handler to retrieve weather data for a specific city
app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
