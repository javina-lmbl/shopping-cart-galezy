# CARRITO DE COMPRAS

Construye un carrito de compras utilizando REACT y el framework CSS que mejor conozcas (diseño libre) y que contenga las siguientes características:

## Funcionalidades Requeridas

- Sección para ver productos en forma de regilla (listado de productos)
    - Filtrar la lista por al menos una propiedad
    - Opción para agregar el producto desde la lista (debajo del producto, que aparezca un botón cuando el mouse este encima, etc..)
- Sección para ver la descripción del producto en particular, por ejemplo la foto en un mejor tamaño, la descripción, su precio.
    -   Deberá existir la opción de añadir el producto al carrito desde aquí
- Sección para Mostrar el resumen del carrito
    - Listado de items, con cantidad, precio, subtotal de la compra y total de la compra
    - Opción para modificar la cantidad de un producto añadido al carrito
    - Opción para remover un producto del carrito
    - **Restricción**: - El usuario debe pasar por una pantalla de registro / login para poder ver el resumen del carrito (e imprimir si se implementa la funcionalidad)
    

## Funcionalidades Opcionales

- Imprimir el resumen del carrito en un archivo con formato **PDF**
- Visualización de la cantidad de productos que hay en el carrito con un ícono y un badge en el header de la app
    - Ejemplos de uso
        - [Nike](https://www.nike.com/mx/)
        - [Amazon](https://www.amazon.com.mx/)
        - [Shein](https://www.shein.com.mx/)
- Filtros
    -  Categoría
    -  Rango de Precio 
- Usar Commits siguiendo la convención sugerida de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Información Técnica

- Utilizar el consumo de los datos de productos desde la api indicada a continuación:
    - [Fake Store Api](https://fakestoreapi.com/docs)
        - Utilizar los datos que devuelve el api como propiedades de la entidad producto
- Utilizar **Redux** para el manejo de estado en la aplicación

