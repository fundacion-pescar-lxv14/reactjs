import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"

export const PageButtons = () => {
    const {search: {limit,offset}, results, Set} = useContext(SearchContext)
    const {total_count} = results?.pagination || 0, Arr = []
    const last = (Math.ceil(total_count/limit)*limit)-limit
    // Primer Pagina
    Arr.push({ 
        text: "<<",
        onClick: () => Set("offset",0),    
        title: "Primera Pagina",
        disabled: offset === 0
    })
    Arr.push({
        text: "<",
        onClick: () => offset > 0 && Set("offset", offset-limit),
        title: "Pagina Anterior",
        disabled: offset === 0
    })
    // Butones intermedios (Iteracion)
    for(let i = 1; i <= Math.ceil(total_count/limit); i++){
        // Boton pagina Actual
        if (i === (offset/limit)+1) Arr.push({
            text: i,
            color: "primary",
            title: "Pagina " + i,
        })
        // Botones Paginas anteriores y siguientes
        else if(i >= ((offset/limit)-1) && i <= ((offset/limit)+3)) Arr.push({ 
            text: i, 
            onClick: () => Set("offset", (i-1)*limit) 
        })
    }
    Arr.push({
        text: ">",
        onClick: () => offset < total_count - limit && Set("offset", offset+limit),
        title: "Pagina Siguiente",
        disabled: offset === last
    })
    // Ultima Pagina
    Arr.push({
        text: ">>",
        onClick: () => Set("offset", last),
        title: "Ultima Pagina",
        disabled: offset === last
    })
    return Arr
}