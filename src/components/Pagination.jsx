export const Pagination = ({limit, offset, setOffset, pagination}) => {
    const {total_count, count} = pagination ?? {},
    current = (offset/limit) + 1,
    total_pages = Math.ceil(total_count/count) || 1
    return(
    <footer className="border-top p-3">
        <ul>
            <li>Resultados: {total_count}</li>
            <li>En Pantalla: {count}</li>
            <li>Pagina: {current}/{total_pages}</li>
        </ul>
        <button onClick={()=>offset > 0 && setOffset(offset - limit)}>Anterior</button>
        <button onClick={()=> offset < total_count && setOffset(offset + limit)}>Siguiente</button>
    </footer>)}