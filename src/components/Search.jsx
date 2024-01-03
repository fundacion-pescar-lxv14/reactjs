import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"
import { FormControl, Button } from "./FormControl"

export const Search = () => {
    const {search:{limit}, Set} = useContext(SearchContext),
    number = { type: "number", min: 5, max: 50, step: 5, value: limit },
    search=({target:{type,value}})=>{
        if (type === "number") Set("limit", value)
        if (type === "text") Set(type, value)
        if (type === "select-one") Set("rating", value)
    }
    return(
    <form className='input-group p-3' onSubmit={e => e.preventDefault() }>
        <FormControl onInput={search}/>
        <FormControl onInput={search} {...number}/>
        <FormControl type="select" onChange={search}>
            <option value="g">g</option>
            <option value="pg">pg</option>
            <option value="pg-13">pg-13</option>
            <option value="r">r</option>
        </FormControl>
        <Button text="buscar"/>
    </form>
)}