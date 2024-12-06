import React, { useState } from 'react';
import axios from 'axios';

const PlayerSearch = ({ setSelectedPlayer }) => {
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/players/search', {
        params: { name: search },
      });
      setPlayers(response.data);
      setError(null);
    } catch (err) {
      setError('Aucun joueur trouvé.');
      setPlayers([]);
    }
  };

  const handlePlayerSelect = (playerId) => {
    // Recherche le joueur sélectionné parmi les résultats
    const selectedPlayer = players.find((player) => player.id === playerId);
    setSelectedPlayer(selectedPlayer); // Met à jour l'état du joueur sélectionné
    setPlayers([]); // Efface la liste des joueurs après la sélection
  };

  return (
    <div className="player-search">
      <input
        type="text"
        placeholder="Rechercher un joueur"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Met à jour la recherche
      />
      <button onClick={handleSearch}>Rechercher</button>

      {error && <p className="error">{error}</p>}

      {players.length > 0 && (
        <ul>
          {players.map((player) => (
            <li
              key={player.id}
              onClick={() => handlePlayerSelect(player.id)} // Sélectionner le joueur
              style={{ cursor: 'pointer' }} // Ajout d'un style de curseur pour indiquer que l'élément est cliquable
            >
              {player.name} - {player.teamName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerSearch;
