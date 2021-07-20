# Buscador de personajes Rick & Morty

¡Hola! 👋, bienvenida a este repositorio.

🚩 El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

💡 Para iniciar el proyecto en local, recuerda introducir los siguientes comandos en la terminal:

```bash
npm install
```
```bash
npm start
```
Abre [http://localhost:3000](http://localhost:3000) para ver la página en el navegador.

### Partes del ejercicio: 

1. Listado de personajes.
En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
   - Foto
   - Nombre
   - Especie

2. Filtrado de personajes.
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

3. Componentes del listado de personajes.
El listado debe tener los siguientes componentes como mínimo:
   - Componente para el filtro de nombre.
   - Componente para el listado.
   - Componente para la tarjeta de cada personaje del listado.
   - Componente para el detalle de cada personaje.

![modulo_3_portada](https://user-images.githubusercontent.com/74368515/122389217-01008f00-cf71-11eb-8fae-3d311f4fb8cd.PNG)



4. Detalle de personajes.
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

![modulo_3_detail_card](https://user-images.githubusercontent.com/74368515/122389603-63f22600-cf71-11eb-85dc-dededfdde0fe.PNG)

5. Detallitos de calidad.
   - Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form />.
   - Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
   - Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
   - El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
   - Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

### Pasos seguidos para la elaboración del proyecto

1. Fetch / Api
   1. Limpiar datos
1. Pintar

   1. Maquetar HTML
   1. Programar en el App
   1. Dividir en componentes
1. Filtrar:
   1. Escuchar filtros
   1. Guardar filtro en el estado
   1. Pintar personajes filatrados
1. Pintar detalle de la usuaria
1. Local Storage:
   1. Guardar
   1. Leer

### Diagrama de flujo

- Al arrancar la página
  - ¿Hay datos de personajes en el LocalStorage?
    - Sí. Coger esos datos >> Guardo en estado
    - No. Pedir datos a API y limpiarlos
  - ¿Hay datos de filtros de personajes en el LocalStorage?
    - Sí. Coger esos datos >> Guardo en estado
    - No. No hago nada
  - Pintar personajes
  - Escuchar los filtros:
    - Guardar datos filtros en estado
    - Pintar los personajes filtrados
  - Al cambiar de ruta:
    - Pinto el detalle del personaje
