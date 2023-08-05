import { useState, useEffect } from 'react'

import './App.css'


const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players`

function App() {
  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const allPlayerList = data.data.players
        console.log(allPlayerList)
        return allPlayerList

      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPlayers();
  },[])

  return (
    <>

    </>
  )
}

export default App
