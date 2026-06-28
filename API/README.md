# Weather API

Small Express API to fetch current weather for a city. It supports fetching data from OpenWeatherMap when you provide an API key, or returns mock data if no key is configured.

Endpoints
- `GET /weather?city=London` — returns mock data when `OPENWEATHER_API_KEY` is not set.
- `GET /weather?city=London&apikey=YOUR_KEY` — uses provided key for that request.

Setup

1. Install dependencies:

```bash
npm install
```

2. (Optional) Create `.env` from `.env.example` and set `OPENWEATHER_API_KEY`.

3. Start server:

```bash
npm start
```

Example

```bash
curl "http://localhost:3000/weather?city=London"
curl "http://localhost:3000/weather?city=London&apikey=YOUR_KEY"
```
