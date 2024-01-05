## Caracteristicas Generales 

### Tabla de Contenidos

1. [Declarativo](#declarativo)
1. [Componentes](#componentes)
    * [clase](#components)
    * [funcion](#components)
    * [lambda](#components)
1. [multiplataforma](#multiplataforma)
1. [Virtual DOM](#virtual-dom)
1. [Propiedades](#propiedades)
1. [Estado](#estado)

### Declarativo

Permite crear interfaces de usuario interactivas de forma sencilla, ya que se encarga de actualizar y renderizar de manera eficiente los componentes cuando los datos cambian. Las vistas declarativas hacen que el código sea más predecible y por lo tanto, fácil de depurar.

### Componentes

La encapsulacion permite que los elementos manejen su propio estado, creando interfaces de usuario complejas. Como la logica esta escrita en JavaScript y no en plantillas, se pueden pasar datos a través de la aplicación manteniendo el estado fuera del DOM.

### Multiplataforma

Tiene en cuenta una gran cantidad de herramientas tecnológicas, permitiendo desarrollar nuevas características tener que escribir código existente. React permite renderizar desde el servidor con Node, así como potencializar aplicaciones móviles usando React Native.

### Virtual DOM

Para determinar cómo _actualizar eficientemente el DOM del navegador_ React mantiene __una copia en memoria__. De esta forma determina qué partes han cambiado _comparando la versión nueva y la almacenada en memoria_, utilizando el resultado actualizar el DOM.

### Propiedades

También conocidas como __props__ pueden definirse como los _atributos de configuración_ para los distintos componentes. Son __recibidas desde un nivel superior__, normalmente al realizar la instancia del componente y _por definición son inmutables_.

### Estado

Se define como una __representación en un momento concreto__, es decir, _una instantánea del propio componente_. Existen dos tipos de componentes __stateful (con Estado) y stateless (Sin Estado)__ y a diferencia de las props, este es mutable.

[volver a pagina principal](../readme.md)