import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PlayerDetails = ({ player }) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (player) {
      const fetchPlayerDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/players/${player.id}`);
          setDetails(response.data); // Met à jour les détails du joueur
          setLoading(false);
        } catch (err) {
          console.error('Erreur lors de la récupération des détails :', err);
          setLoading(false);
        }
      };

      fetchPlayerDetails();
    }
  }, [player]); // Requête à chaque fois qu'un joueur est sélectionné

  if (loading) return <p>Chargement des détails...</p>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      {details.length > 0 ? (
        details.map((detail, index) => (
          <div key={index}>
            <p><strong>{detail.title}:</strong> {detail.value.fallback}</p>
          </div>
        ))
      ) : (
        <p>Aucun détail trouvé pour ce joueur.</p>
      )}
    </div>
  );
};

export default PlayerDetails;
