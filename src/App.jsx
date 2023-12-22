import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ContextProvider } from './contexts/ThemeContext'

import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'

function App() {
    const [text, setText] = useState("");
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const {VITE_URL:url, VITE_API_KEY:key} = import.meta.env
    const fetchURL = ({limit, offset}) => 
        `${url}?api_key=${key}&q=${text}&limit=${limit}&offset=${offset}&rating=g`
    return(
    <ContextProvider>
        <Search onInput={(e) => setText(e.target.value)}/>
        <Results/>
        <Pagination/>
    </ContextProvider>
)}

export default App
