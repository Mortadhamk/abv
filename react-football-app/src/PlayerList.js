import React from 'react'
import Player from './Player'
import players from './players'
const PlayerList = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"space-around"}}>
      {players.map(player=><Player players={player}/>)}
    
    </div>
  )
}

export default PlayerList;
