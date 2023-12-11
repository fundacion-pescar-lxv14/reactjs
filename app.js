// Definicion del Elemento Raiz
const app = document.getElementById('root'); // Elemento HTML
const root = ReactDOM.createRoot(app); // Metodo de React

// Creacion de Componentes
const button = (text) => React.createElement(
    'button', // Etiqueta
    {
        id: 'button-'+text,
        className: 'btn btn-dark',
        title: text,
        onClick: () => console.log("presionaste el boton de "+text)
    }, // Atributos
    text // Contenido
)
const title = (title) => React.createElement('h2', { className: 'title' }, title);
// Contenedor de Componentes
const btnGroup = React.createElement('div', { className: 'btn-group' }, [ button('likes'), button('shares'), button('disklikes') ] );

// Renderizado del Componentes
root.render(btnGroup);