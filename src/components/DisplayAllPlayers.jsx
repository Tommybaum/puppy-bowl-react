import React from 'react';


const DisplayPlayers = ({ playerList, onPlayerDetailsClick }) => {
    return (
      <div>
        {playerList.map((player) => (
          <div key={player.id}>
            <h1>{player.name}</h1>
            <button onClick={() => onPlayerDetailsClick(player.id)}>View Details</button>
          </div>
        ))}
      </div>
    );
  };
export default DisplayPlayers;