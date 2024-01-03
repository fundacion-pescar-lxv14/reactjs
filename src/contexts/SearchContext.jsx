import { createContext, useState, useEffect } from "react";
// Suscriptor del Contexto
export const SearchContext = createContext();
// Proveedor del Contexto
export const SearchProvider = ({children}) => {
    const [{VITE_URL:url, VITE_API_KEY:key},[results,setResults],[search,setSearch]] = [import.meta.env, useState(null), useState({
        text: "",
        limit: 10,
        offset: 0,
        rating: "g",
        lang: "es",
        bundle: "low_bandwidth"
    })],
    Set = (k,v) => setSearch({...search, [k]:v })
    useEffect(()=>{
        const {text, limit, offset, rating, lang, bundle} = search;
        text.length > 3 ? (
            fetch(`http://${url}?api_key=${key}&q=${text}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&bundle=${bundle}`)
            .then(response => response.json())
            .then(data => setResults(data))
        ) : setResults(null)
    },[search])
    return (
    <SearchContext.Provider value={{results, search, Set, setSearch}}>
        {children}
    </SearchContext.Provider>
)}