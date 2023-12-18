import { useState } from 'react'
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
  };
  const actions = [{text:"Empezar", callback: start}, {text:"Finalizar", callback: start}]
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