import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({
    currentPlayer: "X",
    nextPlayer: "O",
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ],
    winner: null
  })
  const { board, nextPlayer, currentPlayer } = state;
  const change = () => {setState({
    ...state,
    currentPlayer: nextPlayer, 
    nextPlayer: currentPlayer
  })}
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ul>
        <li>Turno del jugador {state.currentPlayer}</li>
        <li>Siguente jugador {state.nextPlayer}</li>
      </ul>
      { board.map((row, i) => 
      <div key={i} className='row'>
        { row.map((cell, i) => <button key={i} onClick={change}>{cell}</button> )}
      </div> )}
    </>
  )
}

export default App