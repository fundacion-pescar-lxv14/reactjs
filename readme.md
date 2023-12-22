# REACTJS

React surge como una biblioteca javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.

React es la __Vista__ en un contexto en el que se use el __patrón MVC (Modelo-Vista-Controlador)__ o __MVVM (Modelo-vista-modelo de vista)__. También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.

## Caracteristicas Generales 

* __Declarativo__: Permite la creacion de interfaces de usuario interactivas de forma sencilla. React se encarga de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambian. Las vistas declarativas hacen que el código sea más predecible y por lo tanto, fácil de depurar.
* __Basado en componentes__ La encapsulacion de elementos permite que estos manejen su propio estado, creando asi, interfaces de usuario complejas. Como la logica esta escrita en JavaScript y no en plantillas, se pueden pasar datos de forma sencilla a través de la aplicación manteniendo el estado fuera del DOM.
* __Multiplataforma__ Tiene en cuenta una gran cantidad de herramientas tecnológicas, permitiendo desarrollar nuevas características sin necesidad de volver a escribir código existente. React permite renderizar desde el servidor con Node, así como potencializar aplicaciones móviles usando React Native.

## Virtual DOM

Para determinar cómo _actualizar eficientemente el DOM del navegador_ React mantiene __una copia en memoria__. De esta forma determina qué partes han cambiado _comparando la versión nueva y la almacenada en memoria_, utilizando el resultado actualizar el DOM.

## Las propiedades

También conocidas como __props__ pueden definirse como los _atributos de configuración_ para los distintos componentes. Son __recibidas desde un nivel superior__, normalmente al realizar la instancia del componente y _por definición son inmutables_.

## El Estado

Se define como una __representación en un momento concreto__, es decir, _una instantánea del propio componente_. Existen dos tipos de componentes __stateful (con Estado) y stateless (Sin Estado)__ y a diferencia de las props, este es mutable

## Ciclo de vida de Componentes

Serie de estados por los cuales pasan los componentes statefull a lo largo de su existencia. Se pueden clasificar en tres etapas de montaje o inicialización, actualización y destrucción. Dichas etapas tienen correspondencia en diversos métodos.

### Montaje
Es la primera fase del ciclo de vida, en la que se crea el componente. Sabemos que un componente de React representa un elemento del DOM y lo que contiene. En el momento en que ese elemento se pinta en el DOM, aparece visualmente en la página web, decimos que ese componente está montado.

| Metodo | Descripcion |
|--|--|
| __constructor()__ | Se ejecuta cuando se crea el componente por código y se le pasan las props iniciales. Aquí inicializamos el estado enlazamos los event handlers a la instancia con _.bind(this)_|
| __render()__ | Es el encargado de montar el componente, devuelve lo que se pinta en función de props y state |
| __componentDidMount()__ | es llamado una vez que el componente es "montado" (el componente ha sido creado en la interfaz de usuario, usualmente asociándolo con el nodo del DOM). Esto es comúnmente usado para provocar la carga de datos desde una fuente remota a través de una API|

### Desmontaje

Si el montaje es la primera fase del ciclo de vida de un componente, el desmontaje es la última fase del ciclo de vida del componente. Es la parte en la que se va a destruir el componente y va a dejar de mostrarse en pantalla y de existir en memoria.
Esta fase solo tiene un método:

| Metodo | Descripcion |
|--|--|
| __componentWillUnmount__ | es llamado inmediatamente antes de que el componente es "desmontado". Es comúnmente usado para limpiar la demanda de dependencias del componente que no será simplemente removido con el desmontaje del componente. |

render es el método más importante de los ciclos de vida y el único requerido en cualquier componente. Es usualmente llamado cada vez que el estado del componente es actualizado, reflejando los cambios en la interfaz de usuario

### Actualización

Como ya sabemos, mientras un componente está montado, si cambian las props o el estado, el componente se vuelve a renderizar. Esto ocurre siempre por defecto. Sin embargo, con los métodos del ciclo de vida podemos adaptar esto a nuestras necesidades: podremos hacer operaciones en distintos puntos de la actualización o hasta impedir que el componente se re-renderice si se dan unas condiciones.
Estos métodos son paralelos a los métodos del montaje del componente. Como tienen algunas peculiaridades, los desglosaremos en las siguientes subsecciones, pero se ejecutan en este orden:

| Metodo | Descripcion |
|--|--|
| __shouldComponentUpdate()__ | permite al desarrollador prevenir el re-renderizado innecesario de un componente, devolviendo falso si no es necesario |
| __render()__ | Este metodo monta nuevamente el componente actualizado |
| __componentDidUpdate()__ | similar a _componentDidMount()_ |
| __componentDidUpdate(prevProps, prevState)__ | se llama justo después de re-renderizar un componente por actualización de sus props o estado. Si el componente hace peticiones que dependen de una prop, este es buen lugar para rehacerlas, después de comprobar que efectivamente esa prop en concreto ha cambiado |

