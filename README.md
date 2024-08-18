# Tarea: Crear una Aplicación de Recetas de Cocina con React

## Objetivo

Crear una aplicación en React que permita a los usuarios gestionar recetas de cocina. La aplicación debe utilizar los hooks `useState`, `useEffect`, y `useContext` para manejar el estado y efectos secundarios.

## Capturas
![imagen](https://github.com/user-attachments/assets/9655fa05-6954-47b7-a5b8-1b42f9346574)

---

![imagen](https://github.com/user-attachments/assets/505effb5-c01d-4686-bb83-5e98bf8e3074)

# Requisitos Funcionales

### Agregar Recetas

- Debe haber un formulario que permita a los usuarios agregar nuevas recetas.
- Cada receta debe tener al menos un nombre y una descripción.
- Al enviar el formulario, la nueva receta debe ser añadida a la lista de recetas.

### Mostrar Lista de Recetas

- La aplicación debe mostrar una lista de todas las recetas agregadas.
- Cada receta en la lista debe mostrar su nombre y descripción.
- La lista debe actualizarse automáticamente cuando se agrega o elimina una receta.

### Eliminar Recetas

- Cada receta en la lista debe tener una opción para ser eliminada.
- Al hacer clic en la opción de eliminar, la receta debe ser removida de la lista.

### Persistencia de Datos

- Las recetas deben ser guardadas en el almacenamiento local del navegador (`localStorage`).
- Al recargar la página, las recetas previamente guardadas deben ser cargadas y mostradas.

## Requisitos Técnicos

### Uso de Hooks

- Utilizar `useState` para manejar el estado local de los componentes.
- Utilizar `useEffect` para realizar efectos secundarios, como la carga inicial de recetas desde `localStorage` y la actualización del almacenamiento local cuando cambie la lista de recetas.
- Utilizar `useContext` para compartir el estado de las recetas entre componentes sin necesidad de pasar props manualmente.

### Componentes Reutilizables

- La aplicación debe estar dividida en componentes reutilizables y bien estructurados.
- Al menos debe haber componentes para el formulario de agregar recetas, la lista de recetas y cada elemento de receta.


## Entrega

- La aplicación debe ser funcional y cumplir con todos los requisitos mencionados.
- El código debe ser limpio, bien comentado y seguir buenas prácticas de desarrollo.

## Autor
Este proyecto fue desarrollado por:
- [Facundo Lemo](https://github.com/FacuLemo)
