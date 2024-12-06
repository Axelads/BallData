const express = require('express');
const cors = require('cors');
const playerRoutes = require('./routes/players'); // Assure-toi que les routes sont importées

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/players', playerRoutes); // Les routes des joueurs

// Serveur
app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
