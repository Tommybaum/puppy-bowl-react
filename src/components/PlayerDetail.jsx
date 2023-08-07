import { useParams } from 'react-router-dom';

function PlayerDetailsPage({ playerList }) {
  const { id } = useParams();
  const player = playerList.find((p) => p.id === parseInt(id));

  if (!player) {
    return <div>Loading...</div>; // Or display a proper error message
  }

  // Handle the back button click to navigate back to the list of players
  const handleBackButtonClick = () => {
    window.history.back(); // Programmatic navigation using the browser's history
  };

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Position: {player.id}</p>
      {/* Add other player details */}
      {/* Add a button to navigate back to the list of players */}
      <button onClick={handleBackButtonClick}>Back to Players List</button>
    </div>
  );
}

export default PlayerDetailsPage;