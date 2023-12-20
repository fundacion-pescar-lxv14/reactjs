const flexbox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}
const btn = {
    minHeight: "4rem",
    minWidth: "4rem",
    fontSize: "1rem",
    padding: ".5rem",
    margin: ".25rem"
}
export const Board = ({board, paused, callback}) => 
board?.map((row, f) => 
    <div key={f} style={flexbox}>{ 
    row.map((cell, c) => 
        <button style={btn} id={f+"-"+c} key={c} onClick={callback} disabled={paused}>
            {cell}
        </button> 
        )}
    </div> 
)