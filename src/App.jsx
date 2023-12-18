import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState(),
  createBoard = (rows = 3, cols = 3) => {
    const board = []
    for(let f = 0; f < rows; f++) {
      const row = []
      for(let c = 0; c < cols; c++) row.push("")
      board.push(row)
    }
    return board
  },
  start = () => {
    setState({
      currentPlayer: "X",
      nextPlayer: "O",
      winner: null,
      board: createBoard()
    })
  },
  change = (e) => { 
    const [ {board:b,currentPlayer:cP,nextPlayer:nP}, [f,c] ] = 
    [state, e.target.id.split("-") ]
    
    e.target.innerHTML === "" ?
    setState({
      ...state,
      currentPlayer: nP, 
      nextPlayer: cP,
      board: b.map((row, bf) => row.map((cell, bc) =>  
        bf === Number(f) && bc === Number(c) ? cP : cell
      ))
    }) : 
    alert("Esa posicion esta ocupada. Elija otra casilla")
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ul>
        <li>Turno del jugador {state?.currentPlayer}</li>
        <li>Siguente jugador {state?.nextPlayer}</li>
      </ul>
      { state?.board?.map((row, f) => 
      <div key={f} className='row'>
        { row.map((cell, c) => 
          <button id={f+"-"+c} key={c} onClick={change}>{cell}</button> )}
      </div> )}
      <button onClick={start}>Empezar</button>
    </>
  )
}

export default App