const axios = require('axios');
require('dotenv').config();

// Configuration de l'instance Axios
const apiClient = axios.create({
  baseURL: 'https://free-api-live-football-data.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,   // Ta clé API
    'x-rapidapi-host': process.env.RAPIDAPI_HOST, // L'hôte de l'API
  },
});

module.exports = apiClient;
