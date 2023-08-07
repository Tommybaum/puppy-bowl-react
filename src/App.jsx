import { useState, useEffect } from 'react'
import DisplayPlayers from './components/DisplayAllPlayers'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import PlayerDetailsPage from './components/PlayerDetail.jsx';

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players`

function App() {
  const [playerList, setPlayerList] = useState([])
  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const allPlayerList = data.data.players
        console.log(allPlayerList)
        setPlayerList(allPlayerList)


      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPlayers();
  }, [])
  const handlePlayerDetailsClick = (playerId) => {
    // Replace the following line with your desired navigation logic.
    console.log(`Navigating to player details: ${playerId}`);
  };

  return (
    <>
      <Routes>
        {/* Route for displaying the list of players */}
        <Route path="/player" element={<DisplayPlayers playerList={playerList} onPlayerDetailsClick={handlePlayerDetailsClick} />} />

        {/* Route for displaying individual player details */}
        <Route path="/player/:id" element={<PlayerDetailsPage playerList={playerList} />} />

      </Routes>

    </>

  );
}
export default App
