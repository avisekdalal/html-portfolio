# Weather API

Small Express API to fetch current weather for a city. It returns mock weather data for every request.

Endpoints
- `GET /weather?city=London` — returns dummy weather data for the requested city.

Setup

1. Install dependencies:

```bash
npm install
```

2. Start server:

```bash
npm start
```

Example

```bash
curl "http://localhost:3000/weather?city=London"
```
