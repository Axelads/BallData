const express = require('express');
const { searchPlayersByName, getPlayerDetailsById } = require('../controllers/playerController');

const router = express.Router();

// Route : GET /api/players/search?name=messi
router.get('/search', searchPlayersByName);

// Route pour récupérer les détails d'un joueur par ID
router.get('/:id', getPlayerDetailsById); // L'ID est passé dans l'URL

module.exports = router;
