## Funciones Manipuladoras del Estado

Antiguamente solo era posible acceder a algunas funcionalidades como el ciclo de vida, a través de clases, pero a partir de la _versión 16.8_ de React se introdujeron low __hooks__ que permiten utilizar recursos de forma sencilla. Estos permiten reutilizar la lógica de estado sin cambiar la jerarquía de los componentes. Esto facilita el compartir Hooks entre muchos componentes o incluso la comunidad.


|Hook|Descripcion|
|--|--|
|__useState (initialState)__| Devuelve un valor con estado y una función para actualizarlo. Durante el renderizado inicial, el estado devuelto (state) es el mismo que el valor pasado como primer argumento (initialState) |
|__useEffect (setup, dependencies)__| Acepta una función que contiene código imperativo, posiblemente código efectivo. Por defecto, los efectos se ejecutan después de cada renderizado completado, pero puede elegir ejecutarlo solo cuando ciertos valores han cambiado |
|__useContext (context)__| Acepta un objeto de contexto (devuelto por _React.createContext_) y devuelve el contexto actual, determinado por la propiedad value del __<MyContext.Provider>__ ascendentemente más cercano en el árbol al componente que hace la llamada |
|__useReducer (reducer, initialArg, init?)__| Acepta un reducer de tipo __(state, action)=>newState__ y devuelve el estado actual emparejado con un _método dispatch_. Permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks. |
|__useCallback(fn, dependencies)__| Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarias |
|__useRef(initialValue)__| Devuelve un objeto mutable cuya propiedad _current_ se inicializa con el argumento pasado (initialValue), que se mantendrá persistente durante la vida completa del componente. |