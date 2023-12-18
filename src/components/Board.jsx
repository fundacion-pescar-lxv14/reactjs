export const Board = ({board, callback}) => 
board?.map((row, f) => 
    <div key={f} className='row'>{ 
    row.map((cell, c) => 
        <button id={f+"-"+c} key={c} onClick={callback}>
            {cell}
        </button> 
        )}
    </div> 
)