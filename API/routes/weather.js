const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'Missing required query parameter: city' });
  }

  return res.json({
    source: 'mock',
    city,
    temp_c: 21.3,
    description: 'Clear sky (mock data)'
  });
});

module.exports = router;
