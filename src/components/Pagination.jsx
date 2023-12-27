export const Pagination = ({limit, offset, setOffset, pagination}) => {
    const {total_count, count} = pagination ?? {},
    current = (offset/limit) + 1,
    total_pages = Math.ceil(total_count/limit) || 1
    return(
    <footer className="border-top p-3 sticky-bottom bg-body">
        <ul className="list-group list-group-horizontal justify-content-center">
            <li className="list-group-item">Resultados: {total_count}</li>
            <li className="list-group-item">En Pantalla: {count}</li>
            <li className="list-group-item">Pagina: {current}/{total_pages}</li>
        </ul>
        <button onClick={()=>offset > 0 && setOffset(offset - limit)} title="anterior">&lt;</button>
        <button>{current}</button>
        <button onClick={()=> current < total_pages && setOffset(offset + limit)} title="siguiente">&gt;</button>
    </footer>)}