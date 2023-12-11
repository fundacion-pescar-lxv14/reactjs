// Importaciones de librerias externas
import { Component } from 'react';
/** Componente de Clase */
class Header extends Component{
// Metodo Constructor
    constructor(props){ super(props) }
// Antes del Renderizado: Inicializacion
    componentWillMount(){ /*Ideal para inicializar variables*/ }
// Renderizado: Invocacion o Actualizacion
    render(){
    const {logo, title, subtitle} = this.props;
    return (
        <header className="App-header">
            <img className="App-logo" src={logo} alt="Logo ReactJS"/>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )}
// Despues del Renderizado: Actualizacion
    componentDidMount(){ /*Ideal para peticiones HTTP */ }
// Metodo Destructor
    componentWillUnmount(){ /* Ideal para limpiar variables */ }
}

// Exportacion del Componente
export default Header;