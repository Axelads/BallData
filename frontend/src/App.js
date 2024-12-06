import React, { useState } from 'react';
import PlayerSearch from './components/PlayerSearch';
import PlayerDetails from './components/PlayerDetails';
import './App.css';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Gérer le joueur sélectionné

  return (
    <div className="App">
      <h1>Recherche de joueurs</h1>
      <PlayerSearch setSelectedPlayer={setSelectedPlayer} />
      
      {/* Afficher les détails du joueur si un joueur est sélectionné */}
      {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
    </div>
  );
}

export default App;
