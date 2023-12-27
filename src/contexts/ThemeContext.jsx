// Dependencias de React
import { createContext, useState } from "react";
// Suscriptor del Contexto
export const ThemeContext = createContext();
// Proveedor del Contexto
export const ContextProvider = ({children}) => {
    const [[theme,setTheme],color]=[useState('dark'),['primary','secondary','light','dark']],
    choose = (n = 0) => setTheme(color[n]) 
    return (
    <ThemeContext.Provider value={{theme,color,choose}}>
        {children}
    </ThemeContext.Provider>
)}