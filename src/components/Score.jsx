export const Score = ({currentPlayer, nextPlayer, winner}) => 
<ul>
    <li>Turno del jugador {currentPlayer}</li>
    <li>Siguente jugador {nextPlayer}</li>
    <li>{ 
        winner ? 
        "El ganador es el jugador "+winner : 
        "No existen ganadores" }
    </li>
</ul>