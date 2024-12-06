const apiClient = require('../utils/apiConfig');

// Fonction pour rechercher des joueurs par nom
const searchPlayersByName = async (req, res) => {
  const playerName = req.query.name; // Récupère le paramètre "name"
  if (!playerName) {
    return res.status(400).json({ error: 'Le paramètre "name" est requis.' });
  }

  try {
    // Requête API pour rechercher le joueur
    const response = await apiClient.get('football-players-search', {
      params: { search: playerName },
    });

    // Si des joueurs sont trouvés, les renvoyer dans 'suggestions'
    const players = response.data.response.suggestions || [];
    if (players.length === 0) {
      return res.status(404).json({ error: 'Aucun joueur trouvé.' });
    }

    // Renvoyer les données des joueurs
    res.json(players); // Le frontend recevra directement les joueurs
  } catch (error) {
    console.error('Erreur lors de la recherche des joueurs :', error.message);
    res.status(500).json({ error: 'Impossible de récupérer les joueurs.' });
  }
};

// Fonction pour récupérer les détails d'un joueur par ID
const getPlayerDetailsById = async (req, res) => {
  const playerId = req.params.id; // Récupérer l'ID du joueur depuis les paramètres de l'URL

  if (!playerId) {
    return res.status(400).json({ error: 'L\'ID du joueur est requis.' });
  }

  try {
    // Requête API pour obtenir les détails du joueur
    const response = await apiClient.get('football-get-player-detail', {
      params: { playerid: playerId },
    });

    // Vérifier si la réponse contient les détails
    if (!response.data.response || !response.data.response.detail) {
      return res.status(404).json({ error: 'Détails du joueur non trouvés.' });
    }

    // Renvoyer les détails du joueur
    res.json(response.data.response.detail);
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du joueur :', error.message);
    res.status(500).json({ error: 'Impossible de récupérer les détails du joueur.' });
  }
};

// Exporter les deux fonctions ensemble
module.exports = { searchPlayersByName, getPlayerDetailsById };
