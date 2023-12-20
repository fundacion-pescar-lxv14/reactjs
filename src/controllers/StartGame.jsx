import { CreateBoard } from './CreateBoard'

export const StartGame = (p1="X", p2="O") => ({
    currentPlayer: p1,
    nextPlayer: p2,
    paused: true,
    winner: null,
    board: CreateBoard()
})