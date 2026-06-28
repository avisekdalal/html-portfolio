const express = require('express');
const axios = require('axios');
const router = express.Router();

const OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

router.get('/', async (req, res) => {
  const city = req.query.city;
  const apiKey = req.query.apikey || process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'Missing required query parameter: city' });
  }

  if (!apiKey) {
    // No API key configured — return sample/mock data so the API is still usable.
    return res.json({
      source: 'mock',
      city,
      temp_c: 21.3,
      description: 'Clear sky (mock data)'
    });
  }

  try {
    const resp = await axios.get(OPENWEATHER_URL, {
      params: { q: city, appid: apiKey, units: 'metric' }
    });

    const d = resp.data;
    const out = {
      source: 'openweathermap',
      city: d.name,
      country: d.sys && d.sys.country,
      temp_c: d.main && d.main.temp,
      temp_f: d.main && Math.round((d.main.temp * 9) / 5 + 32 * 100) / 100,
      description: d.weather && d.weather[0] && d.weather[0].description,
      raw: d
    };

    res.json(out);
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    const message = err.response && err.response.data ? err.response.data : err.message;
    res.status(status).json({ error: 'Failed to fetch weather', details: message });
  }
});

module.exports = router;
