export const Action = ({action}) =>
    <div className="container">{
    action?.map(({callback, text},i) => 
        <button key={i} onClick={callback}>{text}</button>
    )}
    </div>