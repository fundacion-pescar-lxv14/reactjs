import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Proveedor de Resultados y parametros de Busqueda
import { SearchProvider } from './contexts/SearchContext'
// Componentes principales
import { Search } from './components/Search'
import { Results } from './components/Results'
import { Pagination } from './components/Pagination'

function App() {
    return(
    <SearchProvider>
        <Search/>
        <Results/>
        <Pagination/>
    </SearchProvider>
)}

export default App