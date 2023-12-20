const scoreBox = {
    position: "absolute",
    top: 0,
    right: 0,
    listStyle: "none",
    margin: ".5rem",
    padding: "1.5rem",
    textAlign: "left",
    border: "1px solid #ccc",
    borderRadius: ".5rem",
}
export const Score = ({currentPlayer, nextPlayer, winner}) => 
<ul style={scoreBox}>
    <li>Turno del jugador: {currentPlayer}</li>
    <li>Siguente jugador: {nextPlayer}</li>
    <li>{ 
        winner ? 
        "El ganador es el jugador "+winner : 
        "No existen ganadores" }
    </li>
</ul>