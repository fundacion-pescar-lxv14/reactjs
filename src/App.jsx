import { useState, useEffect } from 'react'
import './App.css'

import { CreateBoard } from './components/CreateBoard'

import { Score } from './components/Score'
import { Board } from './components/Board'
import { Action } from './components/Action'

function App() {
  const [state, setState] = useState(),
  start = () => {
    setState({
      currentPlayer: "X",
      nextPlayer: "O",
      winner: null,
      board: CreateBoard()
    })
  },
  setWinner = () => {
    const { board:b, nextPlayer:nP } = state
    for (let n = 0; n < 3; n++)(
    (b[n][0] === b[n][1] && b[n][0] === b[n][2] && b[n][0] !== "") ||
    (b[0][n]) === b[1][n] && b[0][n] === b[2][n] && b[0][n] !== "") || 
    (n === 0 && b[n][n] === b[n+1][n+1] && b[n][n] === b[n+2][n+2] && b[n][n] !== "") || 
    (n === 2 && b[n][n] === b[n-1][n-1] && b[n][n] === b[n-2][n-2] && b[n][n] !== "") ? 
      setState({ ...state, winner: nP }) : 
      false
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
    setWinner();
  };
  const actions = [{text:"Empezar", callback: start}, {text:"Finalizar", callback: start}]

  // useEffect(() => { setWinner() }, [state])
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Score {...state}/>
      <Board {...state} callback={change}/>
      <Action action={actions}/>
    </>
  )
}

export default App