import { useState, useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ContextProvider } from './contexts/ThemeContext'

import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'

function App() {
    const [results, setResults] = useState()
    const [text, setText] = useState("");
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const {VITE_URL:url, VITE_API_KEY:key} = import.meta.env

    const pages = {limit, offset, setOffset}
    useEffect(()=>{
        text.length > 3 &&
        fetch(`http://${url}?api_key=${key}&q=${text}&limit=${limit}&offset=${offset}&rating=g`)
        .then(response => response.json())
        .then(data => setResults(data))
    }, [text, limit, offset])

    return(
    <ContextProvider>
        <Search onInput={({target:{value}}) => setText(value)}/>
        <Results text={text} results={results?.data}/>
        <Pagination pagination={results?.pagination} {...pages}/>
    </ContextProvider>
)}

export default App
