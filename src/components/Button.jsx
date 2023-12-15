import { useState } from "react"
export const Button = ({text}) => {
    // Declaracion Estado y Metodo de Manipulacion
    const [click, setClick] = useState(),
    // Funcion asociada a un Evento del Componente
    handle = () => setClick(!click)
    // Componente a renderizar en el DOM
    return (
    <button onClick={handle}>
        {text} {click && "+1"}
    </button>
)}