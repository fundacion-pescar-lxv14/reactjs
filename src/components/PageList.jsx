import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"

export const PageList = () =>{
    const {results,search:{offset, limit}}=useContext(SearchContext),
    {count, total_count}=results?.pagination ?? {},
    [current,total_pages]=[(offset/limit)+1||1, Math.ceil(total_count/limit)||1]
    return(
    <ul className="list-group list-group-horizontal justify-content-center">
        <li className="list-group-item">Resultados: {total_count}</li>
        <li className="list-group-item">En Pantalla: {count}</li>
        <li className="list-group-item">Pagina: {current}/{total_pages}</li>
    </ul>)
}