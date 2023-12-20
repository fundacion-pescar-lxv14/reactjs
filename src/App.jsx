import { useState, useEffect } from 'react'
import './App.css'

import { StartGame } from './controllers/StartGame'
import { GetWinner } from './controllers/GetWinner'
import { UpdateBoard } from './controllers/UpdateBoard'

import { Score } from './components/Score'
import { Board } from './components/Board'
import { Action } from './components/Action'

function App() {
  const [state, setState] = useState(StartGame()),
  start = () => setState({...StartGame(), paused: false}),
  end = () => setState({...state, paused: !state.paused}),
  setWinner = () => {
    const { board, winner, nextPlayer:nP } = state
    winner === null && GetWinner(board) ? setState({...state, winner: nP}) : null
  },
  change = (e) => { 
    const [{board,winner,currentPlayer:cP,nextPlayer:nP},[f,c]] = 
    [state, e.target.id.split("-") ]
    if(winner === null){
      e.target.innerHTML === "" ?
      setState({
        ...state,
        currentPlayer: nP, 
        nextPlayer: cP,
        board: UpdateBoard(board,f,c,cP)
      }) : 
      alert("Esa posicion esta ocupada. Elija otra casilla")}
    };
  const actions = [{text:"Nueva Partida", callback: start}, {text: state.paused ? "Iniciar": "Pausar", callback: end}]
  // Component Will Update
  useEffect(() => { setWinner() }, [state])
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