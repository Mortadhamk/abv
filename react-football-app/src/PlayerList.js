import React from 'react';
import Player from './Player';
import Players from './players'; // Assurez-vous d'avoir le bon chemin vers votre fichier de données

const PlayerList = () => {
  const playerComponents = [];

  // Utilisation d'une boucle for pour créer les composants de joueur
  for (let i = 0; i < Players.length; i++) {
    const player = Players[i];
    playerComponents.push(<Player key={player.nom} players={player} />);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {playerComponents}
    </div>
  );
}

export default PlayerList;
