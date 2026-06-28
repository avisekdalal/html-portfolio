const express = require('express');
const dotenv = require('dotenv');
const weatherRouter = require('./routes/weather');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send({ ok: true, service: 'weather-api' }));
app.use('/weather', weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Weather API listening on port ${PORT}`);
});

module.exports = app;
